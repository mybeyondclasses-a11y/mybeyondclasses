import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation/schemas";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message || "Invalid input." }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const { error } = await supabase.from("enquiries").insert({
      enquiry_type: parsed.data.enquiryType,
      full_name: parsed.data.fullName,
      email: parsed.data.email,
      country: parsed.data.country || null,
      grade: parsed.data.grade || null,
      curriculum: parsed.data.curriculum || null,
      message: parsed.data.message || null,
      consent_given: parsed.data.consentGiven,
    });

    if (error) {
      return NextResponse.json({ error: "Database table not ready or rejected request. Ensure initial_schema migration is pushed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true, message: "Your request has been saved securely. Our team will respond via email." });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
