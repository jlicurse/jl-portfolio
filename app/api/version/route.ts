export const dynamic = "force-static"; // cacheable; remove if you need dynamic data

export function GET() {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA || "local";
  const at = new Date().toISOString();
  return new Response(JSON.stringify({ sha, at }), {
    headers: { "content-type": "application/json" },
  });
}