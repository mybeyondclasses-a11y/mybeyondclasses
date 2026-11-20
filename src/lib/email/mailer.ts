import { integrationsConfig } from "@/config/integrations";

export async function sendTransactionalEmail(payload: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!integrationsConfig.email.configured) {
    return {
      sent: false,
      reason: "Email provider API key (RESEND_API_KEY) is not configured yet.",
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: integrationsConfig.email.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Email delivery failed: ${errText}`);
  }

  const data = await res.json();
  return { sent: true, id: data.id as string };
}
