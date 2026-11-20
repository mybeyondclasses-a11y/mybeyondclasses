import { DashboardShell } from "@/components/dashboards/DashboardShell";
import { getCurrentUserWithRole } from "@/lib/auth/rbac";

const NAV_ITEMS = [{'label': 'Overview', 'href': '/student/dashboard'}, {'label': 'My Courses', 'href': '/student/dashboard/my-courses'}, {'label': 'My Classes', 'href': '/student/dashboard/my-classes'}, {'label': 'Study Materials', 'href': '/student/dashboard/study-materials'}, {'label': 'Formula Sheets', 'href': '/student/dashboard/formula-sheets'}, {'label': 'Revision Notes', 'href': '/student/dashboard/notes'}, {'label': 'Assignments', 'href': '/student/dashboard/assignments'}, {'label': 'Practice Quizzes', 'href': '/student/dashboard/quizzes'}, {'label': 'Mock Tests', 'href': '/student/dashboard/mock-tests'}, {'label': 'Results', 'href': '/student/dashboard/results'}, {'label': 'Learning Progress', 'href': '/student/dashboard/progress'}, {'label': 'Academic Calendar', 'href': '/student/dashboard/calendar'}, {'label': 'Bookmarks', 'href': '/student/dashboard/bookmarks'}, {'label': 'Notifications', 'href': '/student/dashboard/notifications'}, {'label': 'Certificates', 'href': '/student/dashboard/certificates'}, {'label': 'Profile & Settings', 'href': '/student/dashboard/profile'}];

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const auth = await getCurrentUserWithRole();
  return (
    <DashboardShell portalTitle='Student Learning Portal' roleLabel='Student Portal' userEmail={auth?.profile.email} navItems={NAV_ITEMS}>
      {children}
    </DashboardShell>
  );
}
