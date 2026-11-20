"use client";

import Link from "next/link";
import {
  Award,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Medal,
  Trophy,
  Users,
} from "lucide-react";

const INDIVIDUAL_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSe4jTdNbppFnzSlR1ylWum6kcI5UoRr0b3EthblicExETyJeg/viewform";
const GROUP_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSf8NWomayaaL1UYHNmeauVTTy_UcODtYoHoEwirG_4bUrCy-w/viewform";

export function OlympiadRegistrationPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-violet-50">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
              <Trophy className="h-4 w-4" /> International Student Competition
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Olympiad & Academic <span className="brand-gradient-text">Competition Registration</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Challenge your knowledge, test problem-solving skills, and build confidence through a supportive
              international learning competition open to students across multiple curricula and countries.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={INDIVIDUAL_FORM} target="_blank" rel="noopener noreferrer" className="brand-gradient-bg inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:opacity-95">
                <GraduationCap className="h-5 w-5" /> Register as a Student (Grades 1-8)
              </a>
              <a href={GROUP_FORM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-400">
                <Users className="h-5 w-5" /> Register a School / Group (Grades 9-12)
              </a>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-semibold text-slate-600">
              {["India", "UAE", "USA", "UK", "Canada", "Singapore", "Global Participants"].map((country) => (
                <span key={country} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5">{country}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Why Participate?</span>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-900">More Than an Examination</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            The competition helps students develop a growth mindset, strengthen conceptual understanding, and improve
            speed and accuracy. Every participant receives an opportunity to learn, measure progress, and celebrate achievement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BrainCircuit, title: "Strengthen Knowledge", text: "Build deeper understanding across Mathematics, Science, English, Logical Reasoning and general aptitude." },
            { icon: Medal, title: "Test Real Skills", text: "Practice applying concepts under timed conditions and improve analytical and decision-making ability." },
            { icon: Globe2, title: "Join Globally", text: "Compete with students from India, UAE, USA, UK, Canada, Singapore and other international locations." },
            { icon: Award, title: "Earn Recognition", text: "Receive certificates of participation and achievement-based recognition for outstanding performance." },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700"><item.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700">Competition Benefits</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-900">How Students Improve</h2>
              <div className="mt-6 space-y-3">
                {["Improves conceptual clarity and subject knowledge", "Develops logical reasoning and critical thinking", "Enhances exam confidence and time management", "Encourages independent learning and curiosity", "Provides an objective benchmark of student ability", "Creates an achievement record for academic portfolios"].map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /><span>{benefit}</span></div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-700">Learning Outcomes</span>
              <h2 className="mt-2 font-heading text-3xl font-extrabold text-slate-900">Skills Students Gain</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Problem solving", "Creative thinking", "Numeracy", "Scientific reasoning", "Reading comprehension", "Pattern recognition", "Accuracy", "Self-confidence"].map((outcome) => (
                  <div key={outcome} className="rounded-xl border border-violet-100 bg-violet-50/60 px-4 py-4 text-sm font-semibold text-violet-800">{outcome}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="rounded-3xl border border-blue-200 bg-blue-50/40 p-7">
            <Award className="h-7 w-7 text-blue-700" />
            <h3 className="mt-4 font-heading text-xl font-extrabold text-slate-900">Certificates & Recognition</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Participant certificates recognize every learner’s effort. Merit certificates and achievement awards are provided for distinguished performance where applicable.</p>
          </article>
          <article className="rounded-3xl border border-violet-200 bg-violet-50/40 p-7">
            <Users className="h-7 w-7 text-violet-700" />
            <h3 className="mt-4 font-heading text-xl font-extrabold text-slate-900">Open to Students</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Suitable for students following CBSE, ICSE, ISC, IB, IGCSE, Cambridge, British, American or other recognized curricula.</p>
          </article>
          <article className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-7">
            <Globe2 className="h-7 w-7 text-emerald-700" />
            <h3 className="mt-4 font-heading text-xl font-extrabold text-slate-900">Online Registration</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Parents, teachers and schools can register using the secure Google Forms below. Individual and group registration options are available.</p>
          </article>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-950 px-6 py-10 text-center text-white sm:px-10">
          <Trophy className="mx-auto h-8 w-8 text-amber-300" />
          <h2 className="mt-4 font-heading text-3xl font-extrabold">Ready to Challenge Yourself?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">Register now to develop knowledge, test your skills, and receive an achievement certificate.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={INDIVIDUAL_FORM} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-blue-50">Student Registration</a>
            <a href={GROUP_FORM} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800">School / Group Registration</a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          <Link href="/register" className="font-semibold text-blue-700 hover:underline">View all registration options</Link>
        </div>
      </section>
    </>
  );
}
