import { NextRequest, NextResponse } from "next/server";

function clearCookieResponse() {
  const res = NextResponse.json({ message: "Đã đăng xuất" });
  const isProd = process.env.NODE_ENV === "production";
  res.headers.set(
    "Set-Cookie",
    `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${isProd ? "; Secure" : ""}`
  );
  return res;
}

// Support both GET and POST for logout
export async function GET(req: NextRequest) {
  return clearCookieResponse();
}

export async function POST(req: NextRequest) {
  return clearCookieResponse();
}