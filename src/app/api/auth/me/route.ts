import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Chưa đăng nhập" }, { status: 401 });
  }

  try {
    const serverUrl = process.env.SERVER_API_URL || "http://localhost:8080";
    const serverRes = await fetch(`${serverUrl}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await serverRes.json();
    if (!serverRes.ok) {
      return NextResponse.json(
        { error: data.error || "Token không hợp lệ" },
        { status: serverRes.status }
      );
    }

    return NextResponse.json({ user: data.user });
  } catch (err) {
    console.error("Me proxy error:", err);
    return NextResponse.json(
      { error: "Không thể kết nối đến API server" },
      { status: 500 }
    );
  }
}