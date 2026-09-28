import {
  Microscope,
  ScanLine,
  HeartPulse,
  Stethoscope,
  Droplet,
  Home,
} from "lucide-react";

export const services = [
  {
    icon: Microscope,
    title: "Pathology",
    text: "Comprehensive blood, urine and tissue analysis on fully automated analysers.",
    tests: [
      "Complete Blood Count",
      "Liver Function Test",
      "Thyroid Profile",
      "HbA1c",
    ],
  },
  {
    icon: ScanLine,
    title: "Radiology",
    text: "High-resolution imaging with low-dose, patient-friendly equipment.",
    tests: ["Digital X-Ray", "Ultrasound", "CT Scan", "3T MRI"],
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    text: "Non-invasive cardiac diagnostics interpreted by senior cardiologists.",
    tests: ["ECG", "2D Echo", "TMT / Stress Test", "Holter Monitoring"],
  },
  {
    icon: Stethoscope,
    title: "Preventive Checkups",
    text: "Age and lifestyle-based screening to catch concerns early.",
    tests: [
      "Full Body Checkup",
      "Women's Wellness",
      "Senior Citizen Panel",
      "Executive Health",
    ],
  },
  {
    icon: Droplet,
    title: "Diabetes & Metabolic",
    text: "Continuous monitoring panels for diabetes, lipids and hormones.",
    tests: [
      "Fasting Glucose",
      "Lipid Profile",
      "Insulin Levels",
      "Vitamin D & B12",
    ],
  },
  {
    icon: Home,
    title: "Home Collection",
    text: "Certified phlebotomists collect samples at your doorstep, 7 days a week.",
    tests: [
      "Slots from 6 AM",
      "Sterile, sealed kits",
      "Live technician tracking",
      "Digital reports",
    ],
  },
];

export const packages = [
  {
    name: "Essential Health",
    price: "1,499",
    tests: 42,
    tagline: "A reliable annual baseline.",
    coverage: ["Blood", "Liver", "Kidney", "Sugar"],
    features: [
      "Complete Blood Count",
      "Liver & Kidney Function",
      "Fasting Blood Sugar",
      "Urine Routine",
    ],
  },
  {
    name: "Comprehensive Care",
    price: "3,299",
    tests: 78,
    tagline: "Our most chosen full-body panel.",
    popular: true,
    coverage: ["Blood", "Liver", "Kidney", "Sugar", "Heart", "Thyroid"],
    features: [
      "Everything in Essential",
      "Lipid Profile & ECG",
      "Thyroid Profile (T3, T4, TSH)",
      "Vitamin D & B12",
    ],
  },
  {
    name: "Advanced Wellness",
    price: "5,999",
    tests: 96,
    tagline: "In-depth screening with imaging.",
    coverage: [
      "Blood",
      "Liver",
      "Kidney",
      "Sugar",
      "Heart",
      "Thyroid",
      "Bone",
      "Lungs",
    ],
    features: [
      "Everything in Comprehensive",
      "2D Echo & Chest X-Ray",
      "Abdomen Ultrasound",
      "Doctor Consultation",
    ],
  },
];

export const ALL_ORGANS = [
  "Blood",
  "Liver",
  "Kidney",
  "Sugar",
  "Heart",
  "Thyroid",
  "Bone",
  "Lungs",
];
