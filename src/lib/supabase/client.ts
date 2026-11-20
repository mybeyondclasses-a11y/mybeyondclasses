"use client";

import { createBrowserClient } from "@supabase/ssr";
import { integrationsConfig } from "@/config/integrations";

export function createClient() {
  return createBrowserClient(
    integrationsConfig.supabase.url,
    integrationsConfig.supabase.publishableKey
  );
}
