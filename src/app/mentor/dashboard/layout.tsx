import { DashboardShell } from "@/components/dashboards/DashboardShell";
import { getCurrentUserWithRole } from "@/lib/auth/rbac";

const NAV_ITEMS = [{'label': 'Cohort Overview', 'href': '/mentor/dashboard'}];

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const auth = await getCurrentUserWithRole();
  return (
    <DashboardShell portalTitle='Mentor & Bootcamp Portal' roleLabel='Mentor Portal' userEmail={auth?.profile.email} navItems={NAV_ITEMS}>
      {children}
    </DashboardShell>
  );
}
