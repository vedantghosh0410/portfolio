import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "vedantghosh0410@gmail.com";

    // 2. If API Key is configured, send the real email via Resend HTTP API
    if (resendApiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `Portfolio Message from ${name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #18181b;">
              <h2 style="color: #9333ea; border-bottom: 2px solid #e4e4e7; padding-bottom: 8px;">
                New Portfolio Message
              </h2>
              <p><strong>Sender Name:</strong> ${name}</p>
              <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Received At:</strong> ${new Date().toLocaleString()}</p>
              <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; margin-top: 16px;">
                <p style="white-space: pre-wrap; margin: 0;">${message}</p>
              </div>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error("Resend API Error:", errorData);
        return NextResponse.json(
          { error: "Failed to dispatch email. Please check server logs or try again." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    // 3. Localhost Development Fallback (when RESEND_API_KEY is not yet set)
    console.log("\n=======================================================");
    console.log("📬 [PORTFOLIO CONTACT FORM - LOCALHOST RECEIVED MESSAGE]");
    console.log(`From:    ${name} (${email})`);
    console.log(`To:      ${recipientEmail}`);
    console.log(`Time:    ${new Date().toISOString()}`);
    console.log(`Message:\n${message}`);
    console.log("👉 Tip: Add RESEND_API_KEY to your .env.local to deliver live emails.");
    console.log("=======================================================\n");

    return NextResponse.json({
      success: true,
      message:
        "Message received! (Logged to local console. Add RESEND_API_KEY to .env.local for live email delivery).",
      devMode: true,
    });
  } catch (err: unknown) {
    console.error("Contact API Exception:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
