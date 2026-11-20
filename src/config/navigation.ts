export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const primaryNavigation = [
  {
    label: "Academics",
    href: "/classes",
    children: [
      { label: "Grades 1–12 Directory", href: "/classes", description: "Structured academic hubs for every grade." },
      { label: "Curricula & Boards", href: "/curricula", description: "CBSE, ICSE, ISC, IB, IGCSE, Cambridge, British & American." },
      { label: "Subjects Library", href: "/subjects", description: "Mathematics, Science, English, Humanities & CS." },
      { label: "Courses & Tuition", href: "/courses", description: "One-to-one tutoring, group classes & all-subject tuition." },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Formula Sheets Centre", href: "/formula-sheets", description: "KaTeX-rendered formulas with SI units & worked examples." },
      { label: "Revision Notes & Mind Maps", href: "/revision-notes", description: "Short notes, detailed chapters & cheat sheets." },
      { label: "Worksheets & Question Bank", href: "/worksheets", description: "Printable practice sheets & topic banks." },
      { label: "Sample Papers & Mock Tests", href: "/mock-tests", description: "Timed practice and board exam preparation." },
    ],
  },
  {
    label: "Beyond Academics",
    href: "/beyond-board-exams",
    children: [
      { label: "Beyond Board Exams", href: "/beyond-board-exams", description: "Future-ready skills beyond textbooks." },
      { label: "AI, Coding & Robotics Bootcamps", href: "/bootcamps", description: "Hands-on cohorts for Grades 4–12." },
      { label: "Olympiads & STEM", href: "/olympiads", description: "International competition readiness." },
      { label: "Webinars, Events & Calendar", href: "/events", description: "Live workshops and global academic schedule." },
    ],
  },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export const footerNavigation = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/mission" },
    { label: "Our Vision", href: "/vision" },
    { label: "Why Choose Us", href: "/why-us" },
    { label: "Teaching Methodology", href: "/methodology" },
    { label: "Our Teachers", href: "/teachers" },
    { label: "Careers", href: "/careers" },
    { label: "Partnerships", href: "/contact?topic=partnerships" },
    { label: "Contact Us", href: "/contact" },
  ],
  academicClasses: [
    ...Array.from({ length: 12 }, (_, i) => ({
      label: `Grade ${i + 1}`,
      href: `/academics/grade-${i + 1}`,
    })),
    { label: "CBSE", href: "/curriculum/cbse" },
    { label: "ICSE", href: "/curriculum/icse" },
    { label: "ISC", href: "/curriculum/isc" },
    { label: "IB", href: "/curriculum/ib" },
    { label: "IGCSE", href: "/curriculum/igcse" },
    { label: "Cambridge", href: "/curriculum/cambridge" },
    { label: "British Curriculum", href: "/curriculum/british" },
    { label: "American Curriculum", href: "/curriculum/american" },
  ],
  subjects: [
    { label: "Mathematics", href: "/subjects?filter=mathematics" },
    { label: "Science", href: "/subjects?filter=science" },
    { label: "Physics", href: "/subjects?filter=physics" },
    { label: "Chemistry", href: "/subjects?filter=chemistry" },
    { label: "Biology", href: "/subjects?filter=biology" },
    { label: "English & Grammar", href: "/subjects?filter=english" },
    { label: "Social Science", href: "/subjects?filter=social-science" },
    { label: "Economics & Accountancy", href: "/subjects?filter=commerce" },
    { label: "Computer Science & AI", href: "/subjects?filter=computer-science" },
  ],
  learningResources: [
    { label: "Study Materials", href: "/resources" },
    { label: "Formula Sheets", href: "/formula-sheets" },
    { label: "Revision Notes & Mind Maps", href: "/revision-notes" },
    { label: "Worksheets", href: "/worksheets" },
    { label: "Question Bank", href: "/question-bank" },
    { label: "Sample Papers", href: "/sample-papers" },
    { label: "Mock Tests", href: "/mock-tests" },
    { label: "Exam Preparation", href: "/exam-preparation" },
  ],
  beyondAcademics: [
    { label: "Beyond Board Exams", href: "/beyond-board-exams" },
    { label: "Olympiads & Competitions", href: "/olympiads" },
    { label: "STEM & Student Activities", href: "/activities" },
    { label: "AI & Tech Bootcamps", href: "/bootcamps" },
    { label: "Webinars & Workshops", href: "/webinars" },
    { label: "Events & Calendar", href: "/calendar" },
  ],
  support: [
    { label: "Student / Parent Registration", href: "https://docs.google.com/forms/d/e/1FAIpQLSeOWuP5tbfs-4mWaORPhY3bcciB0TBf7ygKUASBfqJ5iT4fdA/viewform?usp=dialog" },
    { label: "Teacher Registration", href: "https://docs.google.com/forms/d/e/1FAIpQLSeQLmv4UY4MVOabg--Va_VHGUWVXYiiqInZOHqBTEm47iRvZQ/viewform" },
    { label: "Join WhatsApp Community", href: "https://chat.whatsapp.com/CHcJgW1C1IDBSIXGPZInIN" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Refund & Cancellation Policy", href: "/legal/refund" },
    { label: "Cookie Policy", href: "/legal/cookies" },
    { label: "Child Safety & Safeguarding", href: "/legal/child-safety" },
    { label: "Disclaimer & Copyright", href: "/legal/disclaimer" },
  ],
};
