import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { OlympiadRegistrationPage } from "./OlympiadRegistrationPage";

export const metadata = buildMetadata({
  title: "International Olympiad & Academic Competition Registration",
  description: "Register for MY BEYOND CLASSES international Olympiad and academic competitions. Available for students in India, UAE, USA, UK, Canada, Singapore and worldwide. Certificates and learning outcomes included.",
  path: "/olympiads",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: "MY BEYOND CLASSES International Olympiad and Academic Competition",
          description: "Online academic competition for students to test knowledge, develop problem-solving skills and receive participation certificates.",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: { "@type": "VirtualLocation", url: "https://mybeyondclasses.com/olympiads" },
          organizer: { "@type": "Organization", name: "MY BEYOND CLASSES", url: "https://mybeyondclasses.com" },
        }}
      />
      <OlympiadRegistrationPage />
    </>
  );
}
