import { Mail, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact Us & Book a Free Demo",
  description: "Reach MY BEYOND CLASSES for free academic demo bookings, tutor applications, school partnerships, and support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-5">
          <Badge variant="blue">Global Support</Badge>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900">Connect with MY BEYOND CLASSES</h1>
          <p className="text-sm leading-relaxed text-slate-600">
            Whether you are booking a free demo class, enquiring about CBSE, IB, IGCSE, or American curricula, or applying to teach with us, our academic coordinators respond via email.
          </p>
          <div className="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm">
            <div className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-blue-700" />
              <a href={`mailto:${siteConfig.companyEmail}`} className="font-semibold text-slate-900 hover:text-blue-700">{siteConfig.companyEmail}</a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-600">
              <Globe className="h-4 w-4 text-blue-700" />
              <span>Markets: {siteConfig.markets.join(", ")}</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7"><EnquiryForm /></div>
      </div>
    </div>
  );
}
