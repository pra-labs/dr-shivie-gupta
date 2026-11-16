"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    service?: string[];
    notes?: string[];
  };
}

export async function submitContactInquiry(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const service = formData.get("service")?.toString().trim();
  const notes = formData.get("notes")?.toString().trim();

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Please provide your full name."];
  }

  if (!phone || phone.length < 8) {
    errors.phone = ["Please enter a valid contact phone number."];
  }

  if (!service) {
    errors.service = ["Please choose a session modality."];
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address."];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields before proceeding.",
      errors,
    };
  }

  // Simulate network latency / webhook delivery
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Log for audit / integration with Web3Forms or Resend
  console.log("Inquiry received for Dr. Shivie Gupta:", {
    name,
    phone,
    email,
    service,
    notes,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Thank you for reaching out. Dr. Shivie or our clinic coordinator will contact you via WhatsApp / Phone within 24 hours.",
  };
}
