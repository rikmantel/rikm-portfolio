import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { message } = body;

    // Simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple mock response logic
    let responseText = "I'm a mock AI assistant. I can't really think yet, but I can echo what you said.";

    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        responseText = "Hello there! How can I help you explore this portfolio?";
    } else if (message.toLowerCase().includes("work") || message.toLowerCase().includes("project")) {
        responseText = "You can check out the 'Work' page to see a list of recent projects.";
    } else if (message.toLowerCase().includes("about")) {
        responseText = "This portfolio belongs to a product designer who loves calm, editorial design.";
    }

    return NextResponse.json({
        role: "assistant",
        content: responseText
    });
}
