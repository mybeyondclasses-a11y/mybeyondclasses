import { google } from "googleapis";
import { createGoogleOAuthClient } from "./oauth";

export interface CalendarEventInput {
  summary: string;
  description?: string;
  startIso: string;
  endIso: string;
  timeZone: string;
  attendeeEmails?: string[];
  recurrenceRule?: string;
}

export async function createGoogleCalendarEvent(
  tokens: { access_token: string; refresh_token?: string },
  event: CalendarEventInput
) {
  const oauth2Client = createGoogleOAuthClient();
  if (!oauth2Client) {
    throw new Error("Google Calendar OAuth credentials are not configured on the server.");
  }

  oauth2Client.setCredentials(tokens);
  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const response = await calendar.events.insert({
    calendarId: "primary",
    conferenceDataVersion: 1,
    requestBody: {
      summary: event.summary,
      description: event.description,
      start: { dateTime: event.startIso, timeZone: event.timeZone },
      end: { dateTime: event.endIso, timeZone: event.timeZone },
      attendees: event.attendeeEmails?.map((email) => ({ email })),
      recurrence: event.recurrenceRule ? [event.recurrenceRule] : undefined,
      reminders: { useDefault: true },
    },
  });

  return response.data;
}
