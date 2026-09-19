export const SITE_URL = "https://www.alsheerazislamicschool.com";

export const SITE_CONTACT = {
  email: "alsheerazislamicschool@gmail.com",
  infoEmail: "info.alsheeraz@gmail.com",
  phoneDisplay: "+92 349 9624807",
  phoneE164: "+923499624807",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
