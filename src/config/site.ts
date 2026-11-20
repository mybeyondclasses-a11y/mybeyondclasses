export const siteConfig = {
  name: "MY BEYOND CLASSES",
  tagline: "Learn Beyond Limits. Achieve Beyond Expectations.",
  heroHeadline: "Education Beyond Classrooms. Opportunities Beyond Limits.",
  description:
    "International Grade 1–12 EdTech and online tuition platform offering CBSE, ICSE, ISC, IB, IGCSE, Cambridge, British and American curriculum support across India, UAE, USA, UK, Canada, China and Singapore.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mybeyondclasses.com",
  companyEmail: process.env.NEXT_PUBLIC_COMPANY_EMAIL || "mybeyondclasses@gmail.com",
  markets: ["India", "UAE", "USA", "UK", "Canada", "China", "Singapore"] as const,
  social: [
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/mybeyondclasses/",
      description: "Educational updates, learning highlights, and announcements.",
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/people/My-Beyond-Classes/61596552158175/",
      description: "Company updates and parent/student community information.",
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://www.youtube.com/@MybeyondClasses",
      description: "Educational videos, lessons, webinars, and learning content.",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/my-beyond-classes/",
      description: "Company news, professional opportunities, teacher recruitment, and partnerships.",
    },
    {
      id: "whatsapp",
      name: "WhatsApp Community",
      url: "https://chat.whatsapp.com/CHcJgW1C1IDBSIXGPZInIN",
      description: "Community announcements, event information, and learning updates.",
    },
  ] as const,
};
