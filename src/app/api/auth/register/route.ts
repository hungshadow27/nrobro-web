import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) {
      return NextResponse.json(
        { error: "username và mật khẩu là bắt buộc" },
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Mật khẩu phải có ít nhất 6 ký tự" },
        { status: 400 }
      );
    }

    const serverUrl = process.env.SERVER_API_URL || "http://localhost:8080";
    const serverRes = await fetch(`${serverUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await serverRes.json();

    if (!serverRes.ok) {
      return NextResponse.json(
        { error: data.error || "Đăng ký thất bại" },
        { status: serverRes.status }
      );
    }

    const { user, token } = data;
    const res = NextResponse.json({ user });

    const isProd = process.env.NODE_ENV === "production";
    res.headers.set(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}; SameSite=Lax${
        isProd ? "; Secure" : ""
      }`
    );

    return res;
  } catch (err) {
    console.error("Register proxy error:", err);
    return NextResponse.json(
      { error: "Không thể kết nối đến API server" },
      { status: 500 }
    );
  }
}