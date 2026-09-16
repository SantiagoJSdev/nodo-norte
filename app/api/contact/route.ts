import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  business?: unknown;
  phone?: unknown;
  capabilities?: unknown;
  budget?: unknown;
  message?: unknown;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON payload" },
      { status: 400 },
    );
  }

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address" },
      { status: 400 },
    );
  }

  // TODO: Wire the real delivery method here. Options include an email
  // service (Resend/SendGrid), Netlify Forms, a CRM webhook, or your own
  // backend. Until then this endpoint is a safe placeholder that only
  // validates and acknowledges receipt — nothing is sent anywhere.
  //
  // Example (uncomment and configure once a delivery method is chosen):
  //
  //   const capabilities = Array.isArray(body.capabilities)
  //     ? body.capabilities.filter((c): c is string => typeof c === "string")
  //     : [];
  //   const budget = typeof body.budget === "string" ? body.budget : "";
  //
  //   await deliver({ name, email, message, capabilities, budget });

  return NextResponse.json({ ok: true });
}
