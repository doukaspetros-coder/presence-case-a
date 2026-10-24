const ALLOWED_ORIGIN = "https://doukaspetros-coder.github.io";
function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? ALLOWED_ORIGIN : "null",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Presence-Token",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
    "Cache-Control": "no-store"
  };
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const headers = cors(origin);
    if (request.method === "OPTIONS") return new Response(null, {status:204,headers});
    if (url.pathname !== "/state") return Response.json({service:"presence-case-a-telemetry",endpoint:"/state"},{headers});
    if (request.method === "GET") {
      const id = env.STATE.idFromName("particle-life-latest");
      const response = await env.STATE.get(id).fetch("https://state.internal/read");
      return new Response(await response.text(), {status:response.status,headers:{...headers,"Content-Type":"application/json"}});
    }
    if (request.method !== "POST") return new Response("Method not allowed",{status:405,headers});
    if (origin !== ALLOWED_ORIGIN) return new Response("Origin not allowed",{status:403,headers});
    if (!env.PUBLISH_TOKEN || request.headers.get("X-Presence-Token") !== env.PUBLISH_TOKEN) return new Response("Unauthorized",{status:401,headers});
    const size = Number(request.headers.get("Content-Length") || "0");
    if (size > 8192) return new Response("Payload too large",{status:413,headers});
    let state;
    try { state = await request.json(); } catch { return new Response("Invalid JSON",{status:400,headers}); }
    if (!state || state.page !== "particle-life" || !Number.isFinite(state.particle_count) || !Number.isFinite(state.species_count)) return new Response("Invalid snapshot",{status:400,headers});
    const id = env.STATE.idFromName("particle-life-latest");
    const response = await env.STATE.get(id).fetch("https://state.internal/write",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...state,received_at:new Date().toISOString()})});
    return new Response(await response.text(),{status:response.status,headers:{...headers,"Content-Type":"application/json"}});
  }
};
export class StateStore {
  constructor(ctx) { this.ctx = ctx; }
  async fetch(request) {
    if (request.method === "POST") {
      const state = await request.json();
      await this.ctx.storage.put("latest",state);
      return Response.json({ok:true,received_at:state.received_at});
    }
    const state = await this.ctx.storage.get("latest");
    if (!state) return Response.json({available:false,message:"No browser snapshot published yet."},{status:404});
    return Response.json(state,{headers:{"Cache-Control":"no-store"}});
  }
}
