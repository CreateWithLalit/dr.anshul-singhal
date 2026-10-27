export type DemoImage = {
  src: string;
  alt: string;
  sourceUrl: string;
  photographer: string;
  licence: "Pexels License" | "Unsplash License";
  temporary: true;
};

/** Temporary visual placeholders. Never identify people in these images as Dr. Singhal. */
export const demoImages = {
  hero: { src: "/images/hero-doctor.jpg", alt: "Doctor in a white coat", sourceUrl: "https://www.pexels.com/photo/doctor-19438566/", photographer: "Oys Photography", licence: "Pexels License", temporary: true },
  consultation: { src: "/images/consultation.jpg", alt: "Doctor consulting a patient", sourceUrl: "https://www.pexels.com/photo/woman-consulting-a-doctor-5215008/", photographer: "Antoni Shkraba", licence: "Pexels License", temporary: true },
  family: { src: "/images/family-consultation.jpg", alt: "Family speaking with a doctor", sourceUrl: "https://www.pexels.com/photo/a-doctor-in-a-consultation-with-a-mother-and-her-daughter-7653094/", photographer: "Pavel Danilyuk", licence: "Pexels License", temporary: true },
  equipment: { src: "/images/clinic-equipment.jpg", alt: "Dental equipment in a clean clinic room", sourceUrl: "https://www.pexels.com/photo/a-dental-equipment-in-the-clinic-6812453/", photographer: "Pavel Danilyuk", licence: "Pexels License", temporary: true },
  clinic: { src: "/images/clinic-chair.jpg", alt: "Empty dental clinic with treatment chair", sourceUrl: "https://www.pexels.com/photo/a-clinic-with-dental-equipment-5355920/", photographer: "Tima Miroshnichenko", licence: "Pexels License", temporary: true },
  wisdomTeeth: { src: "/images/wisdom-teeth.jpg", alt: "Molar tooth specimens demonstrating anatomical structure", sourceUrl: "https://images.unsplash.com/photo-1712258084525-5beab086e5c6", photographer: "Unsplash Contributor", licence: "Unsplash License", temporary: true },
  facialInjury: { src: "/images/facial-injury.jpg", alt: "Anatomical craniofacial model showing structural facial skeleton lines", sourceUrl: "https://images.unsplash.com/photo-1657808741509-dced0cde853f", photographer: "Unsplash Contributor", licence: "Unsplash License", temporary: true },
  dentalImplants: { src: "/images/dental-implants.jpg", alt: "Cross-section dental implant model showing titanium post and crown", sourceUrl: "https://www.pexels.com/photo/dental-implant-model-6502305/", photographer: "Pexels Contributor", licence: "Pexels License", temporary: true },
  geriatricDentistry: { src: "/images/geriatric-dentistry.jpg", alt: "Prosthodontic dental prosthesis maintenance and gentle care", sourceUrl: "https://www.pexels.com/photo/a-dentist-showing-an-elderly-woman-her-denture-6627589/", photographer: "Pexels Contributor", licence: "Pexels License", temporary: true },
  fullMouthRehab: { src: "/images/full-mouth-rehab.jpg", alt: "Dental arch study casts and diagnostic models for comprehensive rehabilitation", sourceUrl: "https://www.pexels.com/photo/4687407/", photographer: "Pexels Contributor", licence: "Pexels License", temporary: true },
  clinicExterior: { src: "/images/clinic-exterior.jpg", alt: "Modern hospital and medical clinic exterior building", sourceUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3", photographer: "National Cancer Institute", licence: "Unsplash License", temporary: true },
} satisfies Record<string, DemoImage>;
