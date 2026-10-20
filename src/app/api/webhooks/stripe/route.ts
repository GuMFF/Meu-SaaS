import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Assinatura do webhook ausente." },
      { status: 400 },
    );
  }

  const payload = await request.text();

  try {
    stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch {
    return NextResponse.json(
      { error: "Webhook inválido." },
      { status: 400 },
    );
  }

  return NextResponse.json({ received: true });
}
