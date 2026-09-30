const SESSION_MESSAGE = "dr-anshul-singhal-prelaunch-session-v1";

/**
 * Creates an opaque, deterministic session value that the Edge middleware can
 * verify without a database. The access-code secret is never sent to clients.
 */
export async function createDemoSessionToken(secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(SESSION_MESSAGE)
  );

  return btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
