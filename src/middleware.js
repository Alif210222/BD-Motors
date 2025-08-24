
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET});

  console.log("Token from middleware:", token);

  if (token) {
    return NextResponse.next();
  }  
  
  const loginUrl = new URL("/login", req.url);
  loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
};

export const config = {
  matcher: ["/addProducts"],
};