export type DemoImage = {
  src: string;
  alt: string;
  sourceUrl: string;
  photographer: string;
  licence: "Pexels License";
  temporary: true;
};

/** Temporary visual placeholders. Never identify people in these images as Dr. Singhal. */
export const demoImages = {
  hero: { src: "/images/hero-doctor.jpg", alt: "Doctor in a white coat", sourceUrl: "https://www.pexels.com/photo/doctor-19438566/", photographer: "Oys Photography", licence: "Pexels License", temporary: true },
  consultation: { src: "/images/consultation.jpg", alt: "Doctor consulting a patient", sourceUrl: "https://www.pexels.com/photo/woman-consulting-a-doctor-5215008/", photographer: "Antoni Shkraba", licence: "Pexels License", temporary: true },
  family: { src: "/images/family-consultation.jpg", alt: "Family speaking with a doctor", sourceUrl: "https://www.pexels.com/photo/a-doctor-in-a-consultation-with-a-mother-and-her-daughter-7653094/", photographer: "Pavel Danilyuk", licence: "Pexels License", temporary: true },
  equipment: { src: "/images/clinic-equipment.jpg", alt: "Dental equipment in a clean clinic room", sourceUrl: "https://www.pexels.com/photo/a-dental-equipment-in-the-clinic-6812453/", photographer: "Pavel Danilyuk", licence: "Pexels License", temporary: true },
  clinic: { src: "/images/clinic-chair.jpg", alt: "Empty dental clinic with treatment chair", sourceUrl: "https://www.pexels.com/photo/a-clinic-with-dental-equipment-5355920/", photographer: "Tima Miroshnichenko", licence: "Pexels License", temporary: true },
} satisfies Record<string, DemoImage>;
