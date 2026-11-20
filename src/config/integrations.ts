export const integrationsConfig = {
  supabase: {
    projectRef: "jaggidlcnlbuwmetrtqb",
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jaggidlcnlbuwmetrtqb.supabase.co",
    publishableKey:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
      "sb_publishable_gvzWMP8JA-z7MVdqJZMI2Q_ZnTaOgkZ",
  },
  googleCalendar: {
    configured: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
    scopes: [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar.readonly",
    ],
  },
  email: {
    configured: Boolean(process.env.RESEND_API_KEY),
    from: process.env.EMAIL_FROM || "MY BEYOND CLASSES <mybeyondclasses@gmail.com>",
  },
};
