export const siteConfig = {
  name: "Dr. Shivie Gupta",
  credentials: "PhD, Certified Usui & Karuna Reiki Master, Emotional Wellness Counselor",
  title: "Dr. Shivie Gupta | Holistic Reiki Healing & Emotional Counseling Agra",
  description: "Experience transformative Reiki healing, chakra alignment, and integrative emotional counseling with Dr. Shivie Gupta in Agra, Uttar Pradesh and online worldwide.",
  url: "https://dr-shivie-gupta.vercel.app",
  ogImage: "/images/og-image.png",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappDefaultMessage: "Hello Dr. Shivie, I would like to inquire about booking a Reiki & Counseling session in Agra.",
  email: "contact@drshiviegupta.com",
  address: {
    street: "14-B, Dayalbagh Road, Near Kamla Nagar",
    city: "Agra",
    state: "Uttar Pradesh",
    postalCode: "282005",
    country: "IN",
    countryName: "India"
  },
  geo: {
    latitude: 27.2185,
    longitude: 78.0125
  },
  openingHours: "Mo-Sa 10:00-19:00",
  social: {
    instagram: "https://instagram.com/drshiviegupta",
    facebook: "https://facebook.com/drshivieguptareiki"
  }
};

export function getWhatsAppBookingUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.whatsappDefaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
