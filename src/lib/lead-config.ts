export const WHATSAPP_PHONE = "963951407689";

const defaultBookingMessage =
  "Hello Programmik, I would like to book a discovery call.";

export const WHATSAPP_DIRECT_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(defaultBookingMessage)}`;

export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || WHATSAPP_DIRECT_URL;

export const CONTACT_EMAIL = "hello@company.com";
