# MY BEYOND CLASSES — International EdTech Website, LMS & Global SEO Platform

**Tagline:** *Learn Beyond Limits. Achieve Beyond Expectations.*

A complete Next.js App Router + TypeScript + Tailwind CSS + Framer Motion + KaTeX + Supabase + Google Calendar international education ecosystem serving Grades 1–12 across India, UAE, USA, UK, China, and Singapore.

## 1. Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in SUPABASE_SERVICE_ROLE_KEY, DATABASE_URL, and optional Google/Resend credentials
npm run dev
```

## 2. Connecting to Your Existing Supabase Project (`jaggidlcnlbuwmetrtqb`)

```bash
npx supabase login
npx supabase link --project-ref jaggidlcnlbuwmetrtqb
# Inspect existing tables first before applying migrations!
npx supabase db push
npx supabase gen types typescript --linked > src/types/database.ts
```

## 3. Authentication Architecture
- **Email-only 6-digit OTP & Email Verification** via Supabase Auth (no SMS/phone OTP).
- **Google OAuth Sign-In** via Supabase Auth (`/auth/callback`).
- **Two Separate Entry Portals:**
  - Student / Parent Login: `/auth/login`
  - Staff / Admin Login: `/admin/login` (invitation-only for staff/admin roles; visitors cannot self-register as Admin or Super Admin).

## 4. Google Calendar Integration (Separate from Google Sign-In)
Configure `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, and `GOOGLE_CALENDAR_REDIRECT_URI` in `.env.local`. Users connect/disconnect calendars explicitly inside `/admin/dashboard/calendar` or `/teacher/dashboard/availability` with server-side token storage.

## 5. Official Social Media Links
All official links are centralized in `src/config/site.ts` and rendered in the homepage community section and multi-column footer:
- Instagram: `https://www.instagram.com/mybeyondclasses/`
- Facebook: `https://www.facebook.com/people/My-Beyond-Classes/61596552158175/`
- YouTube: `https://www.youtube.com/@MybeyondClasses`
- LinkedIn: `https://www.linkedin.com/company/my-beyond-classes/`
- WhatsApp Community: `https://chat.whatsapp.com/CHcJgW1C1IDBSIXGPZInIN`
