import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get("host") || "";
  const adminSubdomain = process.env.ADMIN_SUBDOMAIN || "admin";
  const siteDomain = process.env.SITE_DOMAIN || process.env.NEXT_PUBLIC_SITE_DOMAIN || "";

  // Strictly check whether current host is an authorized admin subdomain host
  // e.g., admin.localhost, admin.localhost:3000, or admin.<SITE_DOMAIN>
  const hostWithoutPort = host.split(":")[0];
  const isHostAdminSubdomain =
    hostWithoutPort === `${adminSubdomain}.localhost` ||
    hostWithoutPort === adminSubdomain ||
    (siteDomain && hostWithoutPort === `${adminSubdomain}.${siteDomain.split(":")[0]}`) ||
    (process.env.NODE_ENV !== "production" && request.headers.get("x-admin-host") === "true");

  // If visiting /admin on the primary domain, restrict access unless ADMIN_ALLOW_DIRECT_PATH is enabled
  if (pathname.startsWith("/admin")) {
    const allowDirectPath =
      process.env.ADMIN_ALLOW_DIRECT_PATH === "true" ||
      process.env.NODE_ENV !== "production";

    // If strictly isolated to subdomain in production and request is not on admin subdomain, return 404
    if (!isHostAdminSubdomain && !allowDirectPath) {
      return new NextResponse(null, { status: 404 });
    }
  }

  // If visiting root on admin subdomain, rewrite to /admin
  if (isHostAdminSubdomain && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images).*)"],
};
