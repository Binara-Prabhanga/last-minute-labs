export const WA_NUMBER = "94771909141";
export const PHONE_DISPLAY = "+94 77 190 9141";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61577740044753";
export const INSTAGRAM = "https://www.instagram.com/lastminute.labs/";

/** WhatsApp deep link. Pre-filling the message saves the student a step (frequency of use). */
export const wa = (text?: string) =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

/**
 * Hero deadline picker. Four options on purpose (Hick's law).
 * `angle` is where the stopwatch hand rests: the red wedge is the time you have left.
 */
export const DEADLINES = [
  {
    id: "tonight",
    label: "Tonight",
    hint: "Under 24 hours",
    angle: 335,
    title: "Tonight? Message us now.",
    body: "Send the brief and we'll tell you honestly whether it's doable. Report edits, bug fixes and small features have the best odds.",
  },
  {
    id: "days",
    label: "2–3 days",
    hint: "A tight week",
    angle: 255,
    title: "Mini projects fit here.",
    body: "ML models, CRUD apps and data analysis. Our Student Grade Predictor went out in 2 days.",
  },
  {
    id: "week",
    label: "1 week",
    hint: "Enough to build",
    angle: 165,
    title: "Full web apps fit here.",
    body: "MERN, Laravel or Java builds with a working demo. Our Hotel Management System shipped in 7 days.",
  },
  {
    id: "weeks",
    label: "2+ weeks",
    hint: "Plenty of runway",
    angle: 75,
    title: "Room for a final year project.",
    body: "Build, report and viva slides, with time left for revisions and rehearsal.",
  },
] as const;

export const SERVICES = [
  {
    key: "web",
    icon: "Code",
    title: "Web & mobile apps",
    description: "Built to your spec, in the stack your university expects.",
    tags: ["React", "MERN", "Java", "Laravel"],
    tone: "bg-lab text-white",
  },
  {
    key: "crud",
    icon: "Database",
    title: "CRUD applications",
    description: "Database-driven apps where every create, read, update and delete works.",
    tags: ["MySQL", "MongoDB", "Firebase"],
    tone: "bg-signal text-white",
  },
  {
    key: "fyp",
    icon: "GraduationCap",
    title: "Final year projects & reports",
    description: "From research to implementation to the written report.",
    tags: ["Research", "Implementation", "Documentation"],
    tone: "bg-ink text-white",
  },
  {
    key: "ml",
    icon: "Brain",
    title: "Machine learning mini projects",
    description: "Models, data analysis and prediction systems you can explain.",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    tone: "bg-wa text-ink",
  },
  {
    key: "ux",
    icon: "Palette",
    title: "UI/UX design",
    description: "Screens and clickable prototypes that look designed, not assembled.",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    tone: "bg-sky text-ink",
  },
  {
    key: "docs",
    icon: "FileText",
    title: "Documentation & viva slides",
    description: "Reports and slide decks, plus help rehearsing your answers.",
    tags: ["Reports", "Presentations", "Viva prep"],
    tone: "bg-lab-deep text-white",
  },
] as const;

export const PROJECTS = [
  {
    title: "OceanGlow hotel management system",
    meta: "MERN stack",
    stamp: "Delivered in 7 days",
    image: "/work/hotel.webp",
    w: 1200,
    h: 601,
    alt: "OceanGlow hotel booking website with a beach hero image",
  },
  {
    title: "TraceFly drone management system",
    meta: "Web control dashboard with a Unity flight simulator",
    stamp: null,
    image: "/work/tracefly.webp",
    w: 1200,
    h: 594,
    alt: "TraceFly UAV control panel beside a Unity scene of a drone over a forest",
  },
  {
    title: "Student grade predictor",
    meta: "Python and machine learning",
    stamp: "Delivered in 2 days",
    image: null,
    w: 0,
    h: 0,
    alt: "",
  },
] as const;

export const STEPS = [
  {
    title: "Send your brief",
    body: "Message us the topic, the requirements and your deadline. Photos, PDFs and rubrics all go straight into the chat.",
  },
  {
    title: "Watch it come together",
    body: "We build it and update you on WhatsApp as we go. Ask for changes at any point, not just at the end.",
  },
  {
    title: "Get everything, then rehearse",
    body: "You receive the working project, the report and the slides, then we walk you through it in Sinhala or English.",
  },
] as const;
