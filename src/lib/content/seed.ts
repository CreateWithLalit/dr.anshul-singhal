import { ContentData } from "./types";

export const seedContent: ContentData = {
  doctor: {
    name: "Dr. Anshul Singhal",
    title: "Oral and Maxillofacial Surgeon",
    positioningLine:
      "Specialist surgical care for the face, mouth, and jaws — focused on calm clarity, careful diagnosis, and patient dignity.",
    bioPlaceholder:
      "[Doctor biographical statement to be confirmed with Dr. Singhal. This section will outline clinical philosophy, surgical training, and primary areas of surgical focus.]",
    portrait: {
      alt: "Monoline architectural and anatomical silhouette placeholder for Dr. Anshul Singhal",
      type: "illustration",
      status: "placeholder",
    },
    registrationNumber: {
      value: "[Registration no. to be confirmed]",
      status: "placeholder",
    },
    languages: ["English", "Hindi"],
  },

  credentials: [
    {
      id: "cred-1",
      type: "degree",
      title: "[Undergraduate Dental Degree]",
      institution: "[University / Dental College to be confirmed]",
      year: "[Year]",
      status: "placeholder",
      sourceNote: "Subject to verification before live publication",
    },
    {
      id: "cred-2",
      type: "specialization",
      title: "[Master of Dental Surgery (MDS) - Oral & Maxillofacial Surgery]",
      institution: "[University / Institute to be confirmed]",
      year: "[Year]",
      status: "placeholder",
      sourceNote: "Specialist qualification pending confirmation",
    },
    {
      id: "cred-3",
      type: "registration",
      title: "[State Dental Council Registration]",
      institution: "[State Dental Council to be confirmed]",
      year: "[Registration Active]",
      status: "placeholder",
      sourceNote: "Statutory council number pending verification",
    },
    {
      id: "cred-4",
      type: "membership",
      title: "[Professional Association Membership]",
      institution: "[Association to be confirmed]",
      year: "[Active]",
      status: "placeholder",
      sourceNote: "Professional body affiliation pending confirmation",
    },
  ],

  services: [
    {
      slug: "wisdom-teeth",
      pillar: "maxillofacial",
      pillarLabel: "Oral & Maxillofacial Surgery",
      title: "Wisdom Teeth & Impacted Tooth Removal",
      shortSummary:
        "Educational guide on surgical management of impacted third molars causing pain, crowding, or recurrent pericoronitis.",
      educationalOverview:
        "Wisdom teeth (third molars) frequently lack adequate space to erupt naturally into the dental arch. When an impacted wisdom tooth grows against adjacent molars or remains partially enclosed in bone and gum tissue, surgical removal by an oral and maxillofacial surgeon is commonly considered to alleviate nerve pressure, infection, and cyst development.",
      whatToExpect: [
        "Pre-operative radiographic assessment (OPG or CBCT) to evaluate nerve proximity",
        "Discussion of local anesthesia with anxiety-reduction options",
        "Precise surgical elevation and separation with gentle bone preservation",
        "Clear 7-day post-operative recovery protocol and dietary guidance",
      ],
      steps: [
        {
          number: 1,
          title: "Diagnostic Imaging",
          description:
            "High-resolution 3D scan or panoramic radiograph to visualize roots and inferior alveolar nerve pathway.",
        },
        {
          number: 2,
          title: "Surgical Planning",
          description:
            "Evaluation of impaction depth (soft tissue, partial bony, or complete bony) and customized removal strategy.",
        },
        {
          number: 3,
          title: "Gentle Extraction",
          description:
            "Controlled surgical access under local anesthesia, minimizing surrounding tissue disturbance.",
        },
        {
          number: 4,
          title: "Supervised Healing",
          description:
            "Direct post-operative monitoring, socket care instructions, and planned review for suture removal.",
        },
      ],
      faqs: [
        {
          question: "Does every impacted wisdom tooth require extraction?",
          answer:
            "Not necessarily. Teeth that are completely asymptomatic, fully encased in healthy bone, and not damaging neighboring structures are sometimes monitored with regular radiographs rather than removed immediately.",
        },
        {
          question: "How long is the typical recovery period?",
          answer:
            "Most patients resume desk work or routine activities within 48 to 72 hours, with initial soft tissue healing taking roughly one to two weeks.",
        },
        {
          question: "What anesthesia is typically used?",
          answer:
            "Surgical extractions are routinely performed under profound local anesthesia. Additional sedation options are considered based on surgical complexity and patient preference.",
        },
      ],
      costFactors: [
        "Impaction class (soft tissue, partial bony, or deep full bony)",
        "Proximity of tooth roots to the mandibular inferior alveolar nerve",
        "Requirement for surgical sectioning and platelet-rich fibrin (PRF)",
        "Single vs. multiple quadrant removals in one session",
      ],
      relatedSlugs: ["facial-injury", "dental-implants"],
      status: "to-confirm",
      sampleBeforeAfterNote:
        "Sample illustration showing pre-operative angled impaction vs. post-operative healed ridge.",
    },
    {
      slug: "facial-injury",
      pillar: "maxillofacial",
      pillarLabel: "Oral & Maxillofacial Surgery",
      title: "Facial Trauma & Jaw Fracture Care",
      shortSummary:
        "Clinical framework for surgical evaluation and anatomical restoration following facial bone trauma and soft tissue injury.",
      educationalOverview:
        "Maxillofacial trauma encompasses injuries to the mandible (lower jaw), maxilla (upper jaw), cheekbones (zygoma), and delicate facial soft tissues. Timely specialist intervention focuses on restoring proper dental occlusion (bite alignment), breathing function, and facial symmetry.",
      whatToExpect: [
        "Rapid emergency evaluation and airway stabilization",
        "Precision CT imaging to document fracture displacement",
        "Open reduction and internal fixation (mini-plate osteosynthesis) where indicated",
        "Long-term occlusal rehabilitation and functional monitoring",
      ],
      steps: [
        {
          number: 1,
          title: "Triage & Emergency Assessment",
          description:
            "Immediate verification of breathing, hemorrhage control, and ruling out head trauma.",
        },
        {
          number: 2,
          title: "Computed Tomography (CT)",
          description:
            "Multi-slice 3D CT reconstruction to map bony fractures and displacement vectors.",
        },
        {
          number: 3,
          title: "Anatomical Realignment",
          description:
            "Precision surgical repositioning of bone fragments and rigid fixation using biocompatible titanium mini-plates.",
        },
        {
          number: 4,
          title: "Occlusal Recovery",
          description:
            "Bite alignment verification and gradual reintroduction of masticatory function.",
        },
      ],
      faqs: [
        {
          question: "When is emergency surgery required for a jaw fracture?",
          answer:
            "Emergency intervention is indicated when there is airway compromise, uncontrolled bleeding, or severe open fractures. Stable closed fractures are typically scheduled within a few days once soft tissue swelling settles.",
        },
        {
          question: "Will jaw wiring (intermaxillary fixation) always be necessary?",
          answer:
            "Modern maxillofacial surgery primarily utilizes mini-plate internal fixation, allowing early jaw mobilization and oral nutrition without prolonged wiring in most non-complex cases.",
        },
      ],
      costFactors: [
        "Number of fracture lines (single mandible vs. panfacial trauma)",
        "Hospital theater admission and monitoring requirements",
        "Number of titanium mini-plates and fixation screws utilized",
        "Concurrent soft tissue laceration repair and dental splinting",
      ],
      relatedSlugs: ["wisdom-teeth", "dental-implants"],
      status: "to-confirm",
      sampleBeforeAfterNote:
        "Sample diagram showing mini-plate reduction across a mandibular fracture line.",
    },
    {
      slug: "dental-implants",
      pillar: "implantology",
      pillarLabel: "Implantology",
      title: "Dental Implants & Bone Grafting",
      shortSummary:
        "Educational guide on permanent tooth replacement through surgical osteointegration and site-preservation grafting.",
      educationalOverview:
        "A dental implant is a titanium or ceramic fixture surgically placed into the jawbone to serve as an artificial tooth root. Maxillofacial surgeons specialize in both standard implant placement and complex anatomical situations, including sinus lifts, ridge augmentation, and compromised alveolar bone.",
      whatToExpect: [
        "Comprehensive 3D CBCT bone density and nerve mapping",
        "Targeted bone regeneration or sinus elevation if volume is deficient",
        "Computer-guided micro-surgical fixture installation",
        "Integration period (osseointegration) prior to definitive prosthetic crown",
      ],
      steps: [
        {
          number: 1,
          title: "3D Digital Diagnostic Scan",
          description:
            "CBCT imaging to measure alveolar ridge width, height, and bone quality.",
        },
        {
          number: 2,
          title: "Foundation Preparation",
          description:
            "Bone grafting or membrane placement if natural bone volume has resorbed.",
        },
        {
          number: 3,
          title: "Implant Placement",
          description:
            "Gentle surgical installation of the medical-grade titanium fixture into the planned osteotomy.",
        },
        {
          number: 4,
          title: "Healing & Restoration",
          description:
            "Biocompatible osseointegration over 8-16 weeks followed by final custom crown placement.",
        },
      ],
      faqs: [
        {
          question: "What is osseointegration?",
          answer:
            "It is the biological process whereby living bone cells directly fuse to the surface of the titanium implant, providing permanent stability similar to a natural root.",
        },
        {
          question: "Can smokers or diabetic patients receive dental implants?",
          answer:
            "Yes, but careful medical evaluation and strict glycemic control are mandatory because uncontrolled diabetes and smoking can impair micro-vascular healing.",
        },
      ],
      costFactors: [
        "Implant manufacturer system and fixture grade",
        "Extent of supplemental bone grafting or sinus augmentation",
        "Type of prosthesis (single crown, bridge, or full arch hybrid)",
        "Need for computer-guided 3D surgical splints",
      ],
      relatedSlugs: ["wisdom-teeth", "facial-injury"],
      status: "to-confirm",
      sampleBeforeAfterNote:
        "Sample sequential illustration of tooth gap, osteotomy, implant placement, and crown restoration.",
    },
    {
      slug: "geriatric-dentistry",
      pillar: "geriatric",
      pillarLabel: "Geriatric Dentistry",
      title: "Geriatric Dentistry & Oral Health Planning",
      shortSummary:
        "Educational guidance on oral-health planning when age, medical history, comfort, and daily function need to be considered together.",
      educationalOverview:
        "Geriatric dental care generally considers the whole person as well as the mouth. A care plan may account for medical conditions, medicines, mobility, dry mouth, existing restorations, nutrition, and the practical support available during recovery. The appropriate treatment pathway depends on an individual clinical assessment.",
      whatToExpect: [
        "A discussion of medical history, medicines, priorities, and practical comfort needs",
        "An assessment of oral function, existing teeth or restorations, and relevant imaging",
        "A staged plan that explains possible options, recovery considerations, and review points",
      ],
      steps: [
        { number: 1, title: "Understand Priorities", description: "Clarify symptoms, daily-function concerns, medical context, and individual goals." },
        { number: 2, title: "Clinical Assessment", description: "Review oral tissues, teeth, restorations, and any appropriate diagnostic information." },
        { number: 3, title: "Discuss Options", description: "Explain possible conservative, restorative, or referral pathways in plain language." },
        { number: 4, title: "Plan Follow-up", description: "Agree on review points and practical support for ongoing oral care." },
      ],
      faqs: [
        { question: "Why is medical history important?", answer: "Medicines and general health can affect comfort, healing considerations, and the safest way to plan treatment." },
        { question: "Can treatment be planned in stages?", answer: "Often, care discussions consider sequencing and comfort. The suitable approach depends on the person and clinical findings." },
      ],
      costFactors: [
        "Diagnostic needs and the complexity of the oral-health assessment",
        "The number and type of options considered in a staged care plan",
        "Any laboratory, restorative, or specialist-care requirements",
      ],
      relatedSlugs: ["dental-implants", "full-mouth-rehabilitation"],
      status: "to-confirm",
      sampleBeforeAfterNote: "Sample layout only. Future approved media can be added after consent and verification.",
    },
    {
      slug: "full-mouth-rehabilitation",
      pillar: "rehabilitation",
      pillarLabel: "Full Mouth Rehabilitation",
      title: "Full Mouth Rehabilitation Planning",
      shortSummary:
        "Educational guidance on planning for extensive restorative needs, bite function, comfort, and long-term maintenance.",
      educationalOverview:
        "Full mouth rehabilitation is a term often used when several aspects of oral function and restoration need coordinated planning. Assessment can include teeth, gums, bite, jaw comfort, existing restorations, missing teeth, and the patient’s practical priorities. A suitable plan is individual and may involve more than one dental discipline.",
      whatToExpect: [
        "An assessment of current function, bite, teeth, restorations, and relevant diagnostic records",
        "A discussion of phased options, likely review points, and maintenance requirements",
        "Clear explanation that a final plan depends on an individual clinical evaluation",
      ],
      steps: [
        { number: 1, title: "Functional Assessment", description: "Review current concerns, oral function, existing work, and appropriate diagnostic information." },
        { number: 2, title: "Planning Discussion", description: "Consider possible treatment sequences and the disciplines that may be involved." },
        { number: 3, title: "Staged Care", description: "Discuss how approved treatment may be sequenced for comfort, function, and review." },
        { number: 4, title: "Maintenance", description: "Explain the ongoing care and review that restorations may require." },
      ],
      faqs: [
        { question: "Does rehabilitation always mean one treatment?", answer: "Not necessarily. It can describe coordinated planning across several oral-health needs, with the final approach depending on clinical assessment." },
        { question: "Why is planning important?", answer: "A clear plan helps explain priorities, sequencing, expected maintenance, and factors that may affect cost." },
      ],
      costFactors: [
        "The scope of diagnostic and planning work required",
        "The number and type of teeth or restorations being considered",
        "Any laboratory, specialist, or staged-treatment requirements",
      ],
      relatedSlugs: ["dental-implants", "geriatric-dentistry"],
      status: "to-confirm",
      sampleBeforeAfterNote: "Sample layout only. Future approved media can be added after consent and verification.",
    },
  ],

  locations: [
    {
      slug: "noida-central",
      name: "Specialist Surgical Consultation Suite",
      district: "[Consultation area to be confirmed]",
      address: "[Clinic Address to be confirmed • Sector / Landmark, Noida, UP]",
      hours: [
        "Monday – Friday: [Hours to be confirmed]",
        "Saturday: [Hours to be confirmed]",
        "Sunday: By prior specialist appointment only",
      ],
      phone: "+91 00000 00000",
      whatsappNumber: "910000000000",
      whatsappDisplay: "+91 00000 00000",
      mapReferenceNote: "Interactive map embed will appear here once verified clinic location is confirmed.",
      bookingEnabled: true,
      isPrimary: true,
    },
  ],

  articles: [
    {
      slug: "when-should-you-see-a-jaw-surgeon",
      title: "When Should You See an Oral & Maxillofacial Surgeon?",
      category: "Patient Education",
      publishedDate: "September 2026",
      readTimeMinutes: 4,
      bodyParagraphs: [
        "While general dentists manage dental hygiene, fillings, and routine crowns, certain complex conditions involving the jaw bones, deep facial nerves, and structural trauma warrant care from an Oral and Maxillofacial Surgeon.",
        "Common reasons for referral include impacted teeth lying in close proximity to the mandibular nerve canal, severe jaw joint disorders (TMJ pain, locking, or clicking), facial fractures resulting from sports or vehicular accidents, and jaw alignment discrepancies requiring corrective orthognathic surgery.",
        "Consulting a surgeon early provides objective imaging and diagnostic clarity, often preventing secondary complications such as root resorption, chronic sinus involvement, or progressive bone loss.",
      ],
      relatedServiceSlug: "wisdom-teeth",
    },
    {
      slug: "what-affects-the-cost-of-an-implant",
      title: "What Factors Determine the Investment in Dental Implants?",
      category: "Treatment Planning",
      publishedDate: "September 2026",
      readTimeMinutes: 5,
      bodyParagraphs: [
        "The overall investment for dental implant therapy varies significantly between individuals because each surgical site presents unique bone geometry, tissue biotype, and functional requirements.",
        "Key determinants include whether the extraction site requires ridge preservation bone grafting, whether maxillary sinus lifting is needed to create sufficient vertical bone height, and the specific surgical guide technology utilized for placement.",
        "A transparent pre-surgical consultation involving high-resolution 3D CBCT imaging enables an itemized treatment plan without hidden contingencies.",
      ],
      relatedServiceSlug: "dental-implants",
    },
  ],

  testimonials: [], // strictly empty in demo mode as required by section 2

  settings: {
    isDemoMode: true,
    demoNotice:
      "Demo prototype: content is placeholder. Not for public distribution.",
    defaultPhone: "+910000000000",
    defaultPhoneFormatted: "+91 00000 00000",
    defaultWhatsApp: "910000000000",
    defaultWhatsAppFormatted: "+91 00000 00000",
    emergencyCallNumber: "+910000000000",
    defaultLocationName: "[Consultation location to be confirmed]",
    disclaimerText:
      "Medical Disclaimer: Information on this website is for general educational purposes only and does not constitute formal medical diagnosis or treatment advice. Consult Dr. Singhal directly for individual clinical evaluation.",
    privacyNoticeText:
      "This prototype operates in demonstration mode. No medical records or personal health identifiers are recorded or transmitted.",
    statFiguresDisclaimer:
      "Sample figures: illustrative representation for prototype review.",
    servicesDisclaimer:
      "Services and clinical scope to be confirmed directly with Dr. Singhal.",
  },
};
