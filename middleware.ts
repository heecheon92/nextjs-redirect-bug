import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { X_CURRENT_PATH } from "./app/constant";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();
  response.headers.set(X_CURRENT_PATH, pathname);
}

// See "Matching Paths" below to learn more
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
