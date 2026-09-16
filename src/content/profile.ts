/**
 * Single source of truth for everything about Acyuth on the site.
 * Edit here; no layout changes required.
 */

/**
 * Used for canonical URLs, the sitemap, and social share cards.
 * Vercel injects its production domain at build time, so this resolves itself
 * on deploy. Set NEXT_PUBLIC_SITE_URL to override with a custom domain.
 */
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelDomain ? `https://${vercelDomain}` : "http://localhost:3000");

export const profile = {
  name: "Acyuth Gopalakrishnan",
  firstName: "Acyuth",
  lastName: "Gopalakrishnan",
  eyebrow: "Business Analytics · Data Analytics",
  role: "Business & Data Analyst",
  credentials: [
    "MS in Business Analytics — Carnegie Mellon University, Tepper School of Business",
    "B.Tech in Computer Science & Engineering — VIT, specialisation in Data Science",
  ],
  statement:
    "I work where business problems meet data and machine learning — framing the question, building the analysis, and putting the answer in front of the people who decide.",
  location: "Pittsburgh, PA",
  resumePath: "/resume/acyuth-gopalakrishnan-resume.pdf",
  email: "acyuthg@andrew.cmu.edu",
  links: {
    linkedin: "https://www.linkedin.com/in/acyuth-gopalakrishnan/",
    github: "https://github.com/Acyuth",
  },
  about: [
    "I am a Master of Science in Business Analytics candidate at Carnegie Mellon University's Tepper School of Business, with a Bachelor of Technology in Computer Science and Engineering from Vellore Institute of Technology, specialised in Data Science.",
    "The combination is the point. Engineering is where I learned to build the pipelines, models, and validation that analysis depends on. Business school is where I learned to frame the decision the analysis is meant to serve. My work has sat between the two — credit risk analytics inside a bank, enterprise AI applied to a compliance workflow, and deep learning built for clinical decision support.",
    "I am looking for business analyst, data analyst, business intelligence, and analytics consulting roles where both halves are useful.",
  ],
  coursework:
    "Machine Learning · Deep Learning · Predictive Analytics · Database Management Systems · Statistics · Artificial Intelligence · Data Structures and Algorithms",
  interests: "Running · Football",
};

export const capabilities = [
  {
    title: "Business & Decision Analytics",
    items: [
      "Credit risk analytics",
      "Predictive analytics",
      "Statistical analysis & modelling",
      "Pattern and behaviour analysis",
      "Reporting & business intelligence",
      "Stakeholder communication",
    ],
  },
  {
    title: "Data & Machine Learning",
    items: [
      "Python · pandas · NumPy",
      "SQL · RDBMS · Unix",
      "R",
      "scikit-learn · TensorFlow · PyTorch",
      "Azure ML",
      "LLMs & retrieval-augmented generation",
    ],
  },
  {
    title: "Visualization & Tooling",
    items: [
      "Power BI",
      "Tableau",
      "Excel",
      "Matplotlib · Seaborn",
      "Git & GitHub",
      "LangChain · LlamaIndex",
    ],
  },
];

export const experience = [
  {
    org: "HDFC Bank",
    role: "Credit Risk Analytics and Innovation Intern",
    period: "May 2025 — Jul 2025",
    place: "Chennai, India",
    points: [
      "Built data wrangling pipelines in Python and Excel to analyse transaction behaviour for the credit risk team.",
      "Applied statistical modelling across 150,000+ records to identify money mule patterns.",
      "Designed three Power BI dashboards to present risk insights to CRAIN leadership.",
    ],
    caseStudy: "hdfc-credit-risk-analytics",
  },
  {
    org: "Indium Software",
    role: "Data & AI Intern",
    period: "Jun 2024 — Sep 2024",
    place: "Chennai, India",
    points: [
      "Engineered a retrieval-augmented generation prototype over 2,500+ unstructured compliance documents.",
      "Built an automated ingestion framework to clean, validate, and migrate 5 GB of legacy text into a vector database.",
      "Ran LLM validation and prompt optimisation to reduce hallucinations for three cross-functional teams.",
    ],
    caseStudy: "indium-compliance-intelligence",
  },
];

export const education = [
  {
    school: "Carnegie Mellon University",
    detail: "Tepper School of Business",
    degree: "Master of Science in Business Analytics (MSBA)",
    period: "Expected May 2027",
    place: "Pittsburgh, PA",
  },
  {
    school: "Vellore Institute of Technology",
    detail: "Specialisation in Data Science",
    degree: "Bachelor of Technology, Computer Science and Engineering",
    period: "May 2026",
    place: "Vellore, India",
  },
];

export const certifications = [
  "Google Data Analytics Professional Certificate",
  "Supervised Machine Learning — Stanford University",
  "Entrepreneurship — IIT Madras",
];

export const navigation = [
  { label: "Work", href: "/#work", id: "work" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Contact", href: "/#contact", id: "contact" },
];
