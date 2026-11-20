# Deployment Guide — MY BEYOND CLASSES

## Vercel / Node.js Production Deployment
1. Push the repository to GitHub (ensure `.env.local` is gitignored).
2. Import into Vercel or your Node 20+ hosting provider.
3. Configure all environment variables from `.env.example` in your hosting dashboard:
   - `NEXT_PUBLIC_SITE_URL` (e.g., `https://mybeyondclasses.com`)
   - `NEXT_PUBLIC_SUPABASE_URL` (`https://jaggidlcnlbuwmetrtqb.supabase.co`)
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
   - `DATABASE_URL` (server-only)
   - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_CALENDAR_REDIRECT_URI`
   - `RESEND_API_KEY`, `EMAIL_FROM`
4. In Supabase Dashboard → Authentication → URL Configuration:
   - Set **Site URL** to your production domain.
   - Add `https://your-domain.com/auth/callback` to Redirect URLs.
5. In Google Cloud Console → OAuth 2.0 Credentials:
   - Add Supabase Auth callback URL for Google Sign-In.
   - Add `https://your-domain.com/api/calendar/callback` for Google Calendar OAuth.
6. Run `npm run typecheck && npm run lint && npm run build` to verify zero errors.
