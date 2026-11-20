import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { integrationsConfig } from "@/config/integrations";

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient(
    integrationsConfig.supabase.url,
    integrationsConfig.supabase.publishableKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: Array<{ name: string; value: string; options?: Record<string, unknown> }>) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options as Parameters<typeof cookieStore.set>[2])
            );
          } catch {
            // Handled in middleware when called from a Server Component
          }
        },
      },
    }
  );
}
