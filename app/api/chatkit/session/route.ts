import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Creates a ChatKit session using env vars
// Required:
// OPENAI_API_KEY
// OPENAI_WORKFLOW_ID
export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;
  const workflowId = process.env.OPENAI_WORKFLOW_ID;

  if (!apiKey) {
    return NextResponse.json({ error: "Missing OPENAI_API_KEY" }, { status: 500 });
  }

  if (!workflowId) {
    return NextResponse.json({ error: "Missing OPENAI_WORKFLOW_ID" }, { status: 500 });
  }

  try {
    const session = await client.beta.chatkit.sessions.create({
      user: `user_${crypto.randomUUID()}`,
      workflow: { id: workflowId },
    });

    return NextResponse.json({
      client_secret: session.client_secret,
    });
  } catch (error) {
    console.error("Failed to create ChatKit session:", error);

    return NextResponse.json(
      { error: "Failed to create ChatKit session" },
      { status: 500 }
    );
  }
}