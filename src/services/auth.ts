// Placeholder client-side auth helpers.
// Replace with Clerk hooks (`useUser`, `useAuth`) or AuthJS `signIn`/`signOut`
// once authentication is wired up — see README "Autentikasi Admin".

export async function loginAdmin(email: string, password: string) {
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}
