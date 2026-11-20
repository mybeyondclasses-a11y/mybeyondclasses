import { NextResponse } from "next/server";
import { createGoogleOAuthClient } from "@/lib/google/oauth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code || !state) return NextResponse.redirect(`${origin}/admin/dashboard/calendar?error=missing_code`);
  const oauth2Client = createGoogleOAuthClient();
  if (!oauth2Client) return NextResponse.redirect(`${origin}/admin/dashboard/calendar?error=oauth_not_configured`);

  try {
    const { tokens } = await oauth2Client.getToken(code);
    const supabase = await createServerSupabaseClient();
    await supabase.from("calendar_connections").upsert({
      profile_id: state,
      provider: "google",
      encrypted_access_token: tokens.access_token || null,
      encrypted_refresh_token: tokens.refresh_token || null,
      token_expires_at: tokens.expiry_date ? new Date(tokens.expiry_date).toISOString() : null,
      is_connected: true,
    });
    return NextResponse.redirect(`${origin}/admin/dashboard/calendar?connected=true`);
  } catch {
    return NextResponse.redirect(`${origin}/admin/dashboard/calendar?error=token_exchange_failed`);
  }
}
