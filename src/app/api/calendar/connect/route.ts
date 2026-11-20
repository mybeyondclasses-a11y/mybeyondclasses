import { NextResponse } from "next/server";
import { getGoogleCalendarAuthUrl } from "@/lib/google/oauth";
import { getCurrentUserWithRole } from "@/lib/auth/rbac";

export async function GET() {
  const auth = await getCurrentUserWithRole();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const url = getGoogleCalendarAuthUrl(auth.user.id);
  if (!url) {
    return NextResponse.json({ error: "Google Calendar OAuth credentials (GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET) are not configured." }, { status: 503 });
  }
  return NextResponse.redirect(url);
}
