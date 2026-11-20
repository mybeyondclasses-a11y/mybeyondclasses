import { DashboardShell } from "@/components/dashboards/DashboardShell";
import { getCurrentUserWithRole } from "@/lib/auth/rbac";

const NAV_ITEMS = [{'label': 'Overview', 'href': '/parent/dashboard'}, {'label': 'Linked Students', 'href': '/parent/dashboard/children'}, {'label': 'Progress Reports', 'href': '/parent/dashboard/progress'}, {'label': 'Attendance', 'href': '/parent/dashboard/attendance'}, {'label': 'Class Schedule', 'href': '/parent/dashboard/schedule'}, {'label': 'Parent Profile', 'href': '/parent/dashboard/profile'}];

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const auth = await getCurrentUserWithRole();
  return (
    <DashboardShell portalTitle='Parent & Guardian Portal' roleLabel='Parent Portal' userEmail={auth?.profile.email} navItems={NAV_ITEMS}>
      {children}
    </DashboardShell>
  );
}
