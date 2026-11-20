import { DashboardShell } from "@/components/dashboards/DashboardShell";
import { getCurrentUserWithRole } from "@/lib/auth/rbac";

const NAV_ITEMS = [{'label': 'Overview', 'href': '/teacher/dashboard'}, {'label': 'Assigned Students', 'href': '/teacher/dashboard/students'}, {'label': 'Live Classes', 'href': '/teacher/dashboard/classes'}, {'label': 'Timetable', 'href': '/teacher/dashboard/timetable'}, {'label': 'Assignments & Grading', 'href': '/teacher/dashboard/assignments'}, {'label': 'Assessments & Quizzes', 'href': '/teacher/dashboard/assessments'}, {'label': 'Content & Formula Submissions', 'href': '/teacher/dashboard/resources'}, {'label': 'Availability & Google Calendar', 'href': '/teacher/dashboard/availability'}, {'label': 'Educator Profile', 'href': '/teacher/dashboard/profile'}];

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const auth = await getCurrentUserWithRole();
  return (
    <DashboardShell portalTitle='Teacher & Tutor Workspace' roleLabel='Teacher Portal' userEmail={auth?.profile.email} navItems={NAV_ITEMS}>
      {children}
    </DashboardShell>
  );
}
