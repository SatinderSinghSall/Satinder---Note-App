import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/drizzle";
import { schema } from "@/db/schema";
import { nextCookies } from "better-auth/next-js";
import { Resend } from "resend";
// import VerificationEmail from "@/components/email/verification-email";

// const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  // emailVerification: {
  //   sendVerificationEmail: async ({ user, url, token }, request) => {
  //     const { data, error } = await resend.emails.send({
  //       from: "Satinder Note <satinder@onresend.com>",
  //       to: [user.email],
  //       subject: "Verify your email address",
  //       react: VerificationEmail({
  //         userName: user.name,
  //         userEmail: user.email,
  //         verificationCode: token,
  //         verificationLink: url,
  //       }),
  //     });
  //     console.log("📨 Resend response:", { data, error });
  //   },
  //   sendOnSignUp: true,
  // },
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    schema,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
});
