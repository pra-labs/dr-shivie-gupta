"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    topic?: string[];
    reflection?: string[];
  };
}

export async function submitContactInquiry(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const topic = formData.get("topic")?.toString().trim();
  const reflection = formData.get("reflection")?.toString().trim();

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Please provide your name or pseudonym."];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address so we can reply."];
  }

  if (!reflection || reflection.length < 10) {
    errors.reflection = ["Please share your reflection or question (at least 10 characters)."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please review the highlighted fields above.",
      errors,
    };
  }

  // Simulate network delivery
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("Reader reflection received for Dr. Shivie Gupta:", {
    name,
    email,
    topic: topic || "General Mindfulness Inquiry",
    reflection,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Thank you for sharing your thoughtful note. Dr. Shivie reads reader reflections periodically and will reply via email if requested.",
  };
}
