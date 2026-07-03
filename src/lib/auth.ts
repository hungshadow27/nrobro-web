// Client-side authentication utilities (No longer needs jsonwebtoken as it's handled by nrobro-server)
import { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";

export function getTokenFromReq(req: NextApiRequest): string | null {
  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) return null;
  const cookies = parse(cookieHeader);
  return cookies["token"] || null;
}

export function setTokenCookie(res: NextApiResponse, token: string) {
  const isProd = process.env.NODE_ENV === "production";
  res.setHeader(
    "Set-Cookie",
    `token=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}; SameSite=Lax${
      isProd ? "; Secure" : ""
    }`
  );
}

export function clearTokenCookie(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    `token=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax${
      process.env.NODE_ENV === "production" ? "; Secure" : ""
    }`
  );
}