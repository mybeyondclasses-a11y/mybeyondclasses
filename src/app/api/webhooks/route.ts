import { NextResponse } from "next/server";
import { getCurrentUserWithRole } from "@/lib/auth/rbac";

export async function GET() {
  const auth = await getCurrentUserWithRole();
  if (!auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return NextResponse.json({ service: 'webhooks', status: "ready", role: auth.profile.role });
}
