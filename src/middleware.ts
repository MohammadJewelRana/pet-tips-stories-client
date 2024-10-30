import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login", "/register"];

// Define role-based routes
const roleBasedRoutes = {
  user: [/^\/profile/, /^\/room/],
  admin: [/^\/admin/, /^\/room/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Fetch the current user
  const user = await getCurrentUser();

  // Redirect to login if no user is found (either logged out or no session)
  if (!user) {
    // Allow access to login and registration pages
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    // Redirect to login for all protected routes, including home page
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
  }

  // Check if the user has a role and can access the route
  if (user.role && roleBasedRoutes[user.role]) {
    const routes = roleBasedRoutes[user.role];

    // Allow access if the user is authorized for the route
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  // If user is logged in but tries to access restricted areas, handle accordingly
  if (user.role === "admin" && pathname.match(/^\/profile/)) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect admin trying to access profile
  }

  if (user.role === "user" && pathname.match(/^\/admin/)) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect user trying to access admin
  }

  // Allow authenticated access to the home page
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Default redirection if no conditions are met
  return NextResponse.redirect(new URL("/", request.url));
}

// Configuration for middleware matcher
export const config = {
  matcher: ["/room/:page*", "/profile", "/", "/login", "/register"],
};
