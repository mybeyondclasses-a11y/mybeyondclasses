import { z } from "zod";

export const emailOtpRequestSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  fullName: z.string().min(2).max(120).optional(),
  role: z.enum(["student", "parent"]).optional(),
});

export const emailOtpVerifySchema = z.object({
  email: z.string().email(),
  token: z.string().regex(/^\d{6}$/, "Please enter the 6-digit verification code."),
});

export const enquirySchema = z.object({
  enquiryType: z.enum(["general", "demo", "tutor_application", "partnership", "newsletter"]),
  fullName: z.string().min(2, "Please enter your name.").max(120),
  email: z.string().email("Please enter a valid email address."),
  country: z.string().max(80).optional(),
  grade: z.string().max(40).optional(),
  curriculum: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
  consentGiven: z.boolean().refine((v) => v === true, "Consent is required."),
});
