export const config = {
  defaultRevalidateInSeconds: 3600,
  contact: {
    formUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL || "",
  },
};
