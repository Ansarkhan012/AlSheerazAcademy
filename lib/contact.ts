export type ContactSubmission = {
  name: string;
  mobile: string;
  email: string;
  country: string;
  message: string;
  website?: string;
};

export type ContactField = keyof ContactSubmission;

export type ContactApiResponse = {
  success: boolean;
  message: string;
  errors?: Partial<Record<ContactField, string>>;
};

export async function submitContactForm(
  data: ContactSubmission,
): Promise<ContactApiResponse> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const payload = (await response.json().catch(() => null)) as ContactApiResponse | null;

    if (!response.ok || !payload?.success) {
      return {
        success: false,
        message: payload?.message ?? "Message could not be sent. Please try again or contact us on WhatsApp.",
        errors: payload?.errors,
      };
    }

    return payload;
  } catch {
    return {
      success: false,
      message: "Message could not be sent. Please check your connection or contact us on WhatsApp.",
    };
  }
}
