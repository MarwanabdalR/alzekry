// src/lib/news.ts
// Central data store for all news articles and events – updated with real firm data

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
  excerptShort: string;
  heroImage: string;
  body: string[];
  learnings?: string[];
  agenda?: AgendaItem[];
  speakers?: Speaker[];
  eventDate?: string;
  eventTime?: string;
  eventLocation?: string;
  eventPrice?: string;
  contactEmail?: string;
  contactPhone?: string;
};

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "honors-for-excellence-family-law",
    tag: "ANNOUNCEMENT",
    date: "MAR 01, 2024",
    title: "Al Zekry Firm Receives Honor for Excellence in Family Law",
    excerptShort:
      "The Egyptian Lawyers Syndicate formally honored the firm for its outstanding efforts in complex family law cases.",
    heroImage: "/news/news-1.jpg",
    body: [
      "Al Zekry Law Firm is proud to announce that it has received an official honor from the Egyptian Lawyers Syndicate in recognition of its effective and outstanding efforts in handling complex family law cases, including custody, alimony, divorce, and personal status matters.",
      "The firm's dedicated family law practice, led by Consultant Dr. Ahmed Mohamed Zekry, has consistently achieved results that protect the rights and dignity of clients across all stages of litigation — from initial negotiations to final court rulings.",
    ],
    learnings: [
      "Al Zekry's family law team specializes in divorce, Khul', custody, and alimony proceedings.",
      "The firm represents clients in all Egyptian personal status courts and appeals courts.",
      "Our approach combines judicial experience with a deep sensitivity to the human dimensions of family disputes.",
    ],
  },
  {
    slug: "honors-real-estate-registry",
    tag: "ANNOUNCEMENT",
    date: "FEB 10, 2024",
    title: "Recognition from the Real Estate Registry Office for Property Cases",
    excerptShort:
      "The firm was honored by the Real Estate Registry Office for its role in resolving significant real estate and property disputes.",
    heroImage: "/news/news-2.jpg",
    body: [
      "Al Zekry Law Firm has been formally recognized by the Real Estate Registry Office for its pivotal role in resolving complex real estate registration disputes and property litigation cases across Egypt.",
      "The firm's expertise in navigating Egypt's property registration framework — including title disputes, inheritance-related property division, and contract enforcement — has made it a trusted partner for both individual property owners and corporate developers.",
    ],
    learnings: [
      "Al Zekry handles all aspects of real estate litigation, from registry disputes to construction contract enforcement.",
      "The firm advises on property acquisition, due diligence, and dispute resolution for developers and investors.",
      "Recognition from official government bodies reflects the firm's standing within Egypt's legal ecosystem.",
    ],
  },
  {
    slug: "international-contract-drafting-training",
    tag: "INSIGHT",
    date: "JAN 20, 2024",
    title: "Firm Consultants Complete Advanced Training in International Contract Drafting",
    excerptShort:
      "Al Zekry consultants completed a specialized training program in international contract drafting at the American University.",
    heroImage: "/news/news-3.jpg",
    body: [
      "In a continued commitment to professional excellence and international best practices, consultants from Al Zekry Law Firm successfully completed an advanced training program in International Contract Drafting at the American University.",
      "The training covered cross-border commercial agreements, arbitration clauses, force majeure provisions, and international enforcement of contracts under Egyptian and international law frameworks.",
      "This investment in professional development reinforces the firm's ability to serve clients with international business interests and cross-border commercial transactions.",
    ],
    learnings: [
      "International contract drafting — covering CISG, ICC rules, and Egyptian Commercial Code provisions.",
      "Arbitration clause design and enforcement strategies under New York Convention rules.",
      "Force majeure and hardship provisions in post-pandemic commercial contracts.",
      "Cross-border enforcement of judgments and arbitral awards in Egypt.",
    ],
  },
  {
    slug: "ip-diploma-completion",
    tag: "INSIGHT",
    date: "DEC 05, 2023",
    title: "Consultants Earn Diploma in Intellectual Property Law",
    excerptShort:
      "Members of the firm have earned a specialized Diploma in Intellectual Property, strengthening the firm's IP practice.",
    heroImage: "/news/news-1.jpg",
    body: [
      "Al Zekry Law Firm is pleased to announce that key consultants have successfully obtained a Diploma in Intellectual Property Law, further strengthening the firm's capacity to handle trademark registration, IP rights enforcement, and anti-counterfeiting cases.",
      "The diploma program, conducted through a recognized Egyptian legal education institution, covered trademark law, copyright protection, patent registration, and digital IP rights under both Egyptian and international frameworks.",
      "Consultant Hassan Mohamed Zekry, who leads the firm's IP practice, brings expertise that spans trademark registration enforcement, anti-fraud investigations, and commercial crime defense — all now further enriched by this formal qualification.",
    ],
    learnings: [
      "Trademark registration procedures in Egypt under Law No. 82 of 2002.",
      "Enforcement mechanisms for IP rights — from administrative complaints to criminal prosecution.",
      "Digital IP challenges: protecting rights in online environments and AI-generated content.",
      "Anti-counterfeiting investigations and coordination with Consumer Protection authorities.",
    ],
  },
  {
    slug: "annual-legal-symposium-2024",
    tag: "EVENTS",
    date: "NOV 10, 2023",
    title: "Al Zekry Firm Hosts Annual Legal Symposium — Giza 2024",
    excerptShort:
      "Join us for a legal symposium on arbitration, consumer protection, and company formation under Egyptian law.",
    heroImage: "/news/news-2.jpg",
    body: [
      "Al Zekry Law Firm for Law, Mediation, and Arbitration is proud to host its Annual Legal Symposium in Giza, bringing together legal professionals, business executives, and government officials for a focused discussion on Egypt's evolving legal landscape.",
      "This year's symposium will cover three core themes: the latest developments in Egyptian arbitration law, consumer protection enforcement, and the new company formation procedures under Egyptian law.",
    ],
    learnings: [
      "Recent reforms to Egypt's Arbitration Law No. 27 of 1994 and their practical implications.",
      "Consumer Protection Agency (CPA) enforcement priorities and how businesses can stay compliant.",
      "Step-by-step guide to forming companies under the Egyptian Investment Law and Companies Law.",
      "Practical strategies for resolving commercial disputes out of court through mediation.",
    ],
    agenda: [
      {
        time: "09:00 – 10:30 AM",
        session: "Session 1: Egyptian Arbitration Law Updates",
        description:
          "An in-depth review of recent reforms and landmark arbitral awards impacting commercial parties in Egypt.",
      },
      {
        time: "11:00 – 12:30 PM",
        session: "Session 2: Consumer Protection & Commercial Fraud",
        description:
          "How businesses can ensure compliance with Egypt's Consumer Protection Law and avoid regulatory penalties.",
      },
      {
        time: "02:00 – 03:30 PM",
        session: "Session 3: Company Formation & Corporate Governance",
        description:
          "Practical guidance on forming all company types under Egyptian law, including licensing, partnerships, and JSCs.",
      },
    ],
    speakers: [
      {
        name: "Consultant Mohamed Zekry",
        role: "Founder & Head of the Firm",
        image: "/people/founder.jpg",
      },
      {
        name: "Consultant Ali Mohamed Zekry",
        role: "Senior Consultant · Corporate & Consumer Law",
        image: "/people/ali-zekry.jpg",
      },
    ],
    eventDate: "MAR 15, 2024",
    eventTime: "09:00 AM – 04:00 PM",
    eventLocation: "Al Zekry Law Firm – Dokki, Giza, Egypt",
    eventPrice: "Free",
    contactEmail: "alzekrylawfirm@gmail.com",
    contactPhone: "+20 237 482 360",
  },
  {
    slug: "consumer-protection-law-changes",
    tag: "REGULATORY",
    date: "OCT 05, 2023",
    title: "Key Updates to Egypt's Consumer Protection Law",
    excerptShort:
      "A detailed breakdown of the recent enforcement changes and how they affect businesses operating in Egypt.",
    heroImage: "/news/news-3.jpg",
    body: [
      "Egypt's Consumer Protection Authority (CPA) has issued new enforcement guidelines affecting businesses across retail, automotive, and digital services sectors. The changes impose stricter documentation requirements and accelerated complaint-response timelines.",
      "Consultant Ali Mohamed Zekry, former Deputy Director of the Car Complaints Department at the CPA, breaks down what these changes mean for businesses and how to ensure full compliance.",
    ],
    learnings: [
      "Understanding the scope of the new consumer complaint response requirements.",
      "How the CPA's enforcement priorities have shifted toward e-commerce and digital services.",
      "Documentation companies must maintain to defend against consumer protection claims.",
      "How commercial fraud investigations are initiated and how businesses can respond.",
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}
