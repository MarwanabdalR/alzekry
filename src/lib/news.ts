// src/lib/news.ts
// Central data store for all news articles and events

export type NewsTag = "REGULATORY" | "EVENTS" | "INSIGHT" | "ANNOUNCEMENT";

export type AgendaItem = {
  time: string;
  session: string;
  description: string;
};

export type Speaker = {
  name: string;
  role: string;
  image: string;
};

export type NewsArticle = {
  slug: string;
  tag: NewsTag;
  date: string;
  title: string;
  excerptShort: string; // used in cards
  heroImage: string;
  body: string[]; // lead paragraphs
  learnings?: string[]; // bullet list "What will you learn?"
  agenda?: AgendaItem[];
  speakers?: Speaker[];
  // Event-specific sidebar fields
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  eventPrice?: string;
  contactEmail?: string;
  contactPhone?: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "corporate-tax-regulations",
    tag: "REGULATORY",
    date: "OCT 24, 2023",
    title: "New Corporate Tax Regulations in the Region",
    excerptShort:
      "A detailed breakdown of the recent changes to corporate tax laws and how it affects local businesses.",
    heroImage: "/news/news-1.jpg",
    body: [
      "The GCC region has seen a sweeping shift in corporate taxation policy in 2023, with Saudi Arabia leading the charge through its updated zakat and tax framework. The changes affect both domestic and foreign-owned businesses operating within the Kingdom.",
      "Key amendments include revisions to transfer pricing documentation requirements, new thin capitalization rules, and updated withholding tax obligations for cross-border service payments. Businesses have until Q1 2024 to align their internal structures accordingly.",
    ],
    learnings: [
      "Understand the scope of the new thin capitalization rules and their impact on financing structures.",
      "Prepare compliant transfer pricing documentation for intercompany transactions.",
      "Identify new withholding tax triggers at borders and how to minimize exposure.",
      "Learn how VAT integration with zakat filings affects your reporting calendar.",
    ],
  },
  {
    slug: "annual-symposium",
    tag: "EVENTS",
    date: "OCT 15, 2023",
    title: "Al Zekry Firm Hosts Annual Legal Symposium",
    excerptShort:
      "Join us for a discussion on the future of international arbitration and digital asset legislation.",
    heroImage: "/news/news-2.jpg",
    body: [
      "Al Zekry Law Firm is proud to host its Annual Legal Symposium, gathering leading minds in international arbitration, corporate governance, and digital law. The event is exclusively open to senior legal counsels, board members, and C-suite executives of regional enterprises.",
      "This year's theme — 'Governance in the Age of Innovation' — reflects the growing need for companies to align their legal frameworks with rapidly evolving digital regulations in the GCC.",
    ],
    learnings: [
      "Gain exclusive insight into new arbitration procedures under recent GCC legislative updates.",
      "Access compliant frameworks for ESG reporting for listed companies.",
      "Understand the legal landscape around digital assets and crypto regulation.",
      "Network with senior legal experts across the Middle East and North Africa.",
    ],
    agenda: [
      {
        time: "09:00 – 10:30 AM",
        session: "Session 1: Recent Legislative Updates",
        description:
          "An in-depth review of the most significant legal changes affecting regional businesses in 2023.",
      },
      {
        time: "11:00 – 12:30 PM",
        session: "Session 2: Risk Management & Compliance",
        description:
          "Tools and strategies for navigating regulatory risk and ensuring operational legal compliance.",
      },
      {
        time: "02:00 – 03:30 PM",
        session: "Session 3: Digital Assets & IP in the Digital Age",
        description:
          "How to protect your firm's intellectual property in an increasingly AI-driven global market.",
      },
    ],
    speakers: [
      {
        name: "Counselor Al Zekry",
        role: "Founding Partner",
        image: "/people/founder.jpg",
      },
      {
        name: "Dr. Khalid Mansour",
        role: "Arbitration Specialist",
        image: "/people/khalid-mansour.jpg",
      },
    ],
    eventDate: "OCT 15, 2024",
    eventTime: "09:00 AM – 04:00 PM",
    eventLocation: "The Address Hotel, Dubai DIFC",
    eventPrice: "500 AED",
    contactEmail: "events@alzekry.com",
    contactPhone: "+000 000 000 4 971",
  },
  {
    slug: "ip-in-ai-era",
    tag: "INSIGHT",
    date: "OCT 02, 2023",
    title: "Protecting Intellectual Property in the AI Era",
    excerptShort:
      "How current laws are evolving to protect creators against generative AI content usage.",
    heroImage: "/news/news-3.jpg",
    body: [
      "Artificial intelligence has fundamentally disrupted the intellectual property landscape. From AI-generated artwork to code written by large language models, the question of ownership and authorship is no longer theoretical — it is being litigated in courts worldwide.",
      "Saudi Arabia and the UAE are actively reviewing their IP statutes to address AI-generated works, with draft regulations expected by mid-2024. Leila Hassan, Al Zekry's IP specialist, outlines the key risks and strategic protections businesses should implement today.",
    ],
    learnings: [
      "Understand the current legal status of AI-generated content under GCC and international copyright law.",
      "Identify ownership risks when using AI tools for creative or technical outputs.",
      "Learn how to structure IP agreements with AI vendors to preserve your rights.",
      "Discover proactive registration strategies to protect human-authored works from AI misappropriation.",
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}
