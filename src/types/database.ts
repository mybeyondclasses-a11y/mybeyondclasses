import type { AppRole } from "@/config/permissions";

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string | null;
  country: string | null;
  timezone: string | null;
  role: AppRole;
  is_active: boolean;
  is_suspended: boolean;
  created_at: string;
}

export interface FormulaRecord {
  id: string;
  slug: string;
  gradeSlug: string;
  board: string;
  subjectSlug: string;
  subjectName: string;
  chapterSlug: string;
  chapterTitle: string;
  title: string;
  latex: string;
  symbols: { symbol: string; meaning: string }[];
  siUnits?: string;
  explanation: string;
  workedExample: string;
  commonMistakes: string;
  revisionTips: string;
  difficulty: "foundation" | "intermediate" | "advanced";
  publishedDate: string;
  pdfAvailable: boolean;
}
