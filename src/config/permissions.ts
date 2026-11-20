export type AppRole =
  | "student"
  | "parent"
  | "teacher"
  | "mentor"
  | "content_editor"
  | "sub_admin"
  | "admin"
  | "super_admin";

export const SUB_ADMIN_SCOPES = [
  "grade:1-5",
  "grade:6-8",
  "grade:9-10",
  "grade:11-12",
  "subject:mathematics",
  "subject:science",
  "subject:english",
  "teachers",
  "students",
  "content",
  "blogs",
  "resources",
  "admissions",
  "seo",
  "events",
] as const;

export type PermissionScope = (typeof SUB_ADMIN_SCOPES)[number];

export const ROLE_DEFAULT_DASHBOARD: Record<AppRole, string> = {
  student: "/student/dashboard",
  parent: "/parent/dashboard",
  teacher: "/teacher/dashboard",
  mentor: "/mentor/dashboard",
  content_editor: "/admin/dashboard/blogs",
  sub_admin: "/admin/dashboard",
  admin: "/admin/dashboard",
  super_admin: "/admin/dashboard",
};

export function isStaffRole(role: AppRole): boolean {
  return ["teacher", "mentor", "content_editor", "sub_admin", "admin", "super_admin"].includes(role);
}

export function isAdminRole(role: AppRole): boolean {
  return ["sub_admin", "admin", "super_admin"].includes(role);
}
