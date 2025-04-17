import { EmailTemplate } from "@/components/contact/email-template";
import { Resend } from "resend";

// Initialize Resend with your API key
// Note: It's better to use environment variables for API keys
const resend = new Resend(
  process.env.RESEND_API_KEY || "re_AyEGmQQ7_419N3SBmNgbK5kcaXEhoSbJb"
);

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, subject, message } = formData;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Name, email, subject, and message are required" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "contact@denshees.com",
      to: ["ssmith@americanglasscoatings.com"],
      subject: `New Contact Form: ${subject}`,
      react: EmailTemplate({ name, email, phone, subject, message }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return Response.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
