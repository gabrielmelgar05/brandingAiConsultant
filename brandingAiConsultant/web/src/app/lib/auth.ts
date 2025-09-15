import { cookies } from "next/headers";
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

export async function serverGetMe() {
  const cookieHeader = cookies().toString();
  const res = await fetch(`${BASE}/auth/me`, {
    headers: { cookie: cookieHeader },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}
