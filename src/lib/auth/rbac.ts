import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { AppRole, PermissionScope } from "@/config/permissions";

export async function getCurrentUserWithRole() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, role, country, timezone, is_active, is_suspended")
    .eq("id", user.id)
    .maybeSingle();

  return {
    user,
    profile: profile || {
      id: user.id,
      email: user.email || "",
      full_name: user.user_metadata?.full_name || "Learner",
      role: (user.user_metadata?.role as AppRole) || "student",
      country: "India",
      timezone: "Asia/Kolkata",
      is_active: true,
      is_suspended: false,
    },
  };
}

export async function hasScopePermission(userId: string, role: AppRole, scope: PermissionScope) {
  if (role === "super_admin" || role === "admin") return true;
  if (role !== "sub_admin") return false;

  const supabase = await createServerSupabaseClient();
  const { data } = await supabase
    .from("role_permissions")
    .select("can_view")
    .eq("user_id", userId)
    .eq("scope_key", scope)
    .maybeSingle();

  return Boolean(data?.can_view);
}
