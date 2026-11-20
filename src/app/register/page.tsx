import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MessageCircle, Users } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Register | MY BEYOND CLASSES",
  description: "Register as a student, parent, or teacher with MY BEYOND CLASSES.",
  path: "/register",
});

const STUDENT_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSeOWuP5tbfs-4mWaORPhY3bcciB0TBf7ygKUASBfqJ5iT4fdA/viewform?usp=dialog";
const TEACHER_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSeQLmv4UY4MVOabg--Va_VHGUWVXYiiqInZOHqBTEm47iRvZQ/viewform";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/CHcJgW1C1IDBSIXGPZInIN";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-block">
            <Image src="/logo/logo.jpeg" alt="MY BEYOND CLASSES" width={64} height={64} className="h-16 w-16 object-contain" />
          </Link>
          <h1 className="mt-6 font-heading text-3xl font-extrabold text-slate-900 sm:text-4xl">Registration</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
            Choose the registration form that applies to you. You can also join our WhatsApp community for updates.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <a
            href={STUDENT_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-blue-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-heading text-xl font-extrabold text-slate-900">Student / Parent Registration</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Register for classes, tutoring, courses, or academic support.
            </p>
            <span className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-blue-700">
              Open Student Registration Form
            </span>
          </a>

          <a
            href={TEACHER_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl border border-violet-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:border-violet-400 hover:shadow-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-heading text-xl font-extrabold text-slate-900">Teacher Registration</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Apply to join MY BEYOND CLASSES as a teacher or academic mentor.
            </p>
            <span className="mt-5 inline-flex rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition group-hover:bg-violet-700">
              Open Teacher Registration Form
            </span>
          </a>
        </div>

        <a
          href={WHATSAPP_COMMUNITY}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100"
        >
          <MessageCircle className="h-5 w-5" />
          Join WhatsApp Community
        </a>
      </div>
    </main>
  );
}
