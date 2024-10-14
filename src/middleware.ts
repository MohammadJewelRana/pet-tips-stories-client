import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl; // Get the current route path

  // Fetch the current user (simulating authentication)
  const user = await getCurrentUser();
   

  // If no user is found and the route is not an AuthRoute, redirect to login
  if (!user) {
    if (!AuthRoutes.includes(pathname)) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
    return NextResponse.next(); // Allow access to login and register
  }

  // If the user is logged in, check role-based route access
  if (user?.role) {
    const userRole = user.role.toUpperCase() as Role; // Ensure role is uppercase

    // Check if role-based routes are defined and match the current path
    const allowedRoutes = roleBasedRoutes[userRole];

    if (allowedRoutes && allowedRoutes.some((route) => route.test(pathname))) {
      return NextResponse.next(); // Allow access if role-based route matches
    }
  }

  // If the user is authenticated but no role-based match, redirect to the home page
  return NextResponse.redirect(new URL("/", request.url));
}

export default middleware;

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/profile/:page*", "/admin", "/about"],
};
