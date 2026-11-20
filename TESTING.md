# Testing & Verification Checklist — MY BEYOND CLASSES

1. **TypeScript & Build Check:** `npm run typecheck && npm run build`
2. **Route & Link Audit:** Verify all public routes, `/academics/grade-1` through `/academics/grade-12`, `/curriculum/[board]`, `/formula-sheets`, `/blog/[slug]`, and all legal pages return HTTP 200.
3. **Authentication & RBAC:**
   - Verify 6-digit Email OTP login and resend countdown on `/auth/login`.
   - Verify `/student/dashboard`, `/parent/dashboard`, `/teacher/dashboard`, `/mentor/dashboard`, and `/admin/dashboard` redirect unauthenticated users to login via `middleware.ts`.
   - Verify RLS policies prevent one student from querying another student's `students`, `enrollments`, or `results` rows.
4. **Official Social Media Links:** Confirm all 5 social links open in a new tab (`target="_blank" rel="noopener noreferrer"`) with exact official URLs.
5. **SEO & Accessibility:** Inspect `/sitemap.xml`, `/robots.txt`, canonical tags, JSON-LD, keyboard navigation, and `prefers-reduced-motion`.
