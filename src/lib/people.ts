// src/lib/people.ts
// Central data store for all people profiles

export type JourneyItem = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export type SpecialtyCard = {
  title: string;
  description: string;
  icon: string; // emoji or icon name
};

export type EducationItem = {
  degree: string;
  institution: string;
  type: "degree" | "fellowship" | "award";
};

export type Person = {
  slug: string;
  badge: string;
  name: string;
  title: string;
  quote: string;
  bio: string[];
  directEmail: string;
  barAdmissions: string;
  image: string;
  yearsExp: string;
  casesWon: string;
  journey: JourneyItem[];
  specialties: SpecialtyCard[];
  education: EducationItem[];
};

export const PEOPLE: Person[] = [
  {
    slug: "founder-al-zekry",
    badge: "Founding Partner",
    name: "Counselor Al Zekry",
    title: "Founding Partner & Senior Counsel",
    quote: '"Justice is the foundation of a stable society."',
    bio: [
      "With over two and a half decades of legal excellence, Counselor Al Zekry has established a reputation for uncompromising integrity and sophisticated legal strategy. He leads the firm's major litigation and international arbitration teams, representing both high-net-worth individuals and multinational corporations in the Middle East.",
      "His approach combines deep-rooted local knowledge with international legal standards, ensuring that clients receive world-class representation across multiple jurisdictions.",
    ],
    directEmail: "counselor@alzekry.law",
    barAdmissions: "Supreme Court, International Arbitration Board",
    image: "/people/founder.jpg",
    yearsExp: "25+",
    casesWon: "500+",
    journey: [
      {
        period: "2010 – PRESENT",
        title: "Founder & Managing Partner",
        org: "Al Zekry Law Firm",
        description:
          "Leading Al Zekry Law Firm to become a top-tier regional powerhouse in corporate and civil law.",
      },
      {
        period: "2000 – 2009",
        title: "Senior Legal Consultant",
        org: "Ministry of Justice",
        description:
          "Advisor to the Ministry of Justice on legislative reforms and public policy implementation.",
      },
      {
        period: "1998 – 2000",
        title: "Appellate Attorney",
        org: "Regional Courts",
        description:
          "Specialized in high-stakes appeals cases within the regional courts of appeal.",
      },
    ],
    specialties: [
      {
        title: "Corporate & Mergers",
        description:
          "Handled a $45M acquisition of a regional energy firm, navigating complex cross-border regulatory frameworks.",
        icon: "🏢",
      },
      {
        title: "International Arbitration",
        description:
          "Successfully represented a sovereign entity in a multi-billion dollar treaty dispute at the ICC.",
        icon: "⚖️",
      },
      {
        title: "Commercial Real Estate",
        description:
          "Legal lead for the development of a major residential and commercial hub spanning over 2 million sqm.",
        icon: "🏗️",
      },
      {
        title: "Private Wealth Defense",
        description:
          "Structural legal planning for family offices, ensuring multi-generational asset protection and compliance.",
        icon: "🛡️",
      },
    ],
    education: [
      {
        degree: "LL.M. in International Law",
        institution: "University of London, UK",
        type: "degree",
      },
      {
        degree: "Bachelor of Laws (Honors)",
        institution: "Cairo University, Faculty of Law",
        type: "degree",
      },
      {
        degree: "CIArb Fellow",
        institution: "Chartered Institute of Arbitrators",
        type: "fellowship",
      },
      {
        degree: "Legal Excellence Award",
        institution: "Middle East Legal Awards 2022",
        type: "award",
      },
    ],
  },
  {
    slug: "sarah-ahmed",
    badge: "Senior Partner",
    name: "Sarah Ahmed",
    title: "Senior Partner · Corporate",
    quote: '"Strong contracts are the pillars of lasting business."',
    bio: [
      "Sarah Ahmed brings over 15 years of experience in corporate law, specializing in mergers, acquisitions, and regulatory compliance for leading regional enterprises.",
      "She is recognized for her meticulous approach to drafting complex commercial agreements and her strategic counsel to C-suite executives across the GCC.",
    ],
    directEmail: "sarah.ahmed@alzekry.law",
    barAdmissions: "Saudi Bar Association, Dubai International Arbitration Centre",
    image: "/people/sarah-ahmed.jpg",
    yearsExp: "15+",
    casesWon: "200+",
    journey: [
      {
        period: "2018 – PRESENT",
        title: "Senior Partner – Corporate",
        org: "Al Zekry Law Firm",
        description: "Leading the corporate practice group with a focus on M&A and regulatory matters.",
      },
      {
        period: "2012 – 2018",
        title: "Associate – Corporate Law",
        org: "Al Zekry Law Firm",
        description: "Advising on complex commercial transactions and cross-border joint ventures.",
      },
      {
        period: "2009 – 2012",
        title: "Legal Counsel",
        org: "National Commercial Bank",
        description: "In-house counsel responsible for banking contracts and regulatory compliance.",
      },
    ],
    specialties: [
      {
        title: "Mergers & Acquisitions",
        description: "Structured and closed over 30 M&A transactions valued at more than $2 billion in aggregate.",
        icon: "🤝",
      },
      {
        title: "Regulatory Compliance",
        description: "Advising multinational clients on GCC regulatory requirements and licensing frameworks.",
        icon: "📋",
      },
      {
        title: "Joint Ventures",
        description: "Drafted and negotiated JV agreements for cross-border collaborations in logistics and energy.",
        icon: "🌐",
      },
      {
        title: "Board Advisory",
        description: "Serving as external legal advisor to board committees on governance and fiduciary duties.",
        icon: "🏛️",
      },
    ],
    education: [
      {
        degree: "LL.M. in Corporate Law",
        institution: "King's College London, UK",
        type: "degree",
      },
      {
        degree: "Bachelor of Laws",
        institution: "King Abdulaziz University",
        type: "degree",
      },
      {
        degree: "Rising Star Award",
        institution: "Arab Legal Excellence Awards 2020",
        type: "award",
      },
    ],
  },
  {
    slug: "omar-al-farsi",
    badge: "Head of Litigation",
    name: "Omar Al Farsi",
    title: "Head of Litigation",
    quote: '"In the courtroom, preparation is everything."',
    bio: [
      "Omar Al Farsi leads the firm's litigation practice with unmatched courtroom presence and strategic case management across civil, commercial, and criminal jurisdictions.",
      "He has represented clients in landmark cases before the Supreme Court and has a track record of successful verdicts in high-stakes commercial disputes.",
    ],
    directEmail: "omar.alfarsi@alzekry.law",
    barAdmissions: "Supreme Court, Courts of Appeal",
    image: "/people/omar-alfarsi.jpg",
    yearsExp: "18+",
    casesWon: "350+",
    journey: [
      {
        period: "2015 – PRESENT",
        title: "Head of Litigation",
        org: "Al Zekry Law Firm",
        description: "Overseeing all contentious matters and managing a team of 12 litigation attorneys.",
      },
      {
        period: "2008 – 2015",
        title: "Senior Litigator",
        org: "Al Zekry Law Firm",
        description: "Handling major commercial disputes, labor cases, and real estate litigation.",
      },
      {
        period: "2005 – 2008",
        title: "Public Prosecutor",
        org: "Public Prosecution Office",
        description: "Prosecuted complex criminal cases with a high conviction rate in first-degree courts.",
      },
    ],
    specialties: [
      {
        title: "Commercial Litigation",
        description: "Secured favorable judgments in disputes worth over SAR 500 million for corporate clients.",
        icon: "⚖️",
      },
      {
        title: "Labor Disputes",
        description: "Successfully defended and represented clients in hundreds of labor tribunal hearings.",
        icon: "👥",
      },
      {
        title: "Criminal Defense",
        description: "High-profile acquittals in white-collar crime and financial fraud cases.",
        icon: "🔒",
      },
      {
        title: "Enforcement of Judgments",
        description: "Expert in enforcing foreign judgments and arbitral awards within Saudi Arabia.",
        icon: "📜",
      },
    ],
    education: [
      { degree: "Bachelor of Laws", institution: "King Saud University", type: "degree" },
      { degree: "Diploma in Criminal Law", institution: "Institute of Public Administration", type: "degree" },
      { degree: "Best Litigator Award", institution: "Saudi Legal Forum 2021", type: "award" },
    ],
  },
  {
    slug: "dr-khalid-mansour",
    badge: "Arbitration Specialist",
    name: "Dr. Khalid Mansour",
    title: "Arbitration Specialist",
    quote: '"Disputes resolved today preserve partnerships tomorrow."',
    bio: [
      "Dr. Khalid Mansour is the firm's leading authority on international commercial arbitration and alternative dispute resolution, with over two decades of experience handling complex cross-border disputes.",
      "He has acted as arbitrator, counsel, and expert witness in proceedings before major arbitral institutions including the ICC, LCIA, and DIAC.",
    ],
    directEmail: "khalid.mansour@alzekry.law",
    barAdmissions: "ICC Court of Arbitration, LCIA, DIAC",
    image: "/people/khalid-mansour.jpg",
    yearsExp: "20+",
    casesWon: "280+",
    journey: [
      {
        period: "2013 – PRESENT",
        title: "Arbitration Specialist",
        org: "Al Zekry Law Firm",
        description: "Leading the firm's ADR practice and representing clients in international arbitrations worldwide.",
      },
      {
        period: "2006 – 2013",
        title: "International Arbitration Counsel",
        org: "Global Law Partners, London",
        description: "Advised on treaty arbitration and investment disputes under ICSID and UNCITRAL rules.",
      },
      {
        period: "2002 – 2006",
        title: "Academic Researcher",
        org: "Cairo University – Faculty of Law",
        description: "Researched international arbitration frameworks and authored two published books on ADR.",
      },
    ],
    specialties: [
      {
        title: "ICC Arbitration",
        description: "Managed over 40 ICC proceedings as counsel and sole arbitrator with combined values exceeding $1B.",
        icon: "🌍",
      },
      {
        title: "Investment Treaty Disputes",
        description: "Defended sovereign states and investors in BIT arbitrations under ICSID and UNCITRAL.",
        icon: "📈",
      },
      {
        title: "Construction Disputes",
        description: "Resolved multi-jurisdictional disputes for major infrastructure and construction projects.",
        icon: "🏗️",
      },
      {
        title: "Expert Witness",
        description: "Recognized expert witness on Saudi and Middle Eastern law in international proceedings.",
        icon: "🧑‍⚖️",
      },
    ],
    education: [
      { degree: "Ph.D. in International Arbitration", institution: "University of Paris II", type: "degree" },
      { degree: "LL.M. in Dispute Resolution", institution: "American University, Washington DC", type: "degree" },
      { degree: "FCIArb", institution: "Chartered Institute of Arbitrators", type: "fellowship" },
      { degree: "Arbitrator of the Year", institution: "Middle East Legal Awards 2023", type: "award" },
    ],
  },
  {
    slug: "leila-hassan",
    badge: "Associate",
    name: "Leila Hassan",
    title: "Associate · Intellectual Property",
    quote: '"Innovation deserves the strongest protection."',
    bio: [
      "Leila Hassan is a rising star in intellectual property law, advising technology companies, creative agencies, and inventors on the protection and commercialization of their intellectual assets.",
      "She has successfully registered trademarks and patents across 15 countries and specializes in IP litigation and licensing negotiations.",
    ],
    directEmail: "leila.hassan@alzekry.law",
    barAdmissions: "Saudi IP Authority, WIPO",
    image: "/people/leila-hassan.jpg",
    yearsExp: "8+",
    casesWon: "90+",
    journey: [
      {
        period: "2020 – PRESENT",
        title: "Associate – Intellectual Property",
        org: "Al Zekry Law Firm",
        description: "Advising on trademark, copyright, patent, and trade secret matters for regional and international clients.",
      },
      {
        period: "2016 – 2020",
        title: "IP Legal Advisor",
        org: "Saudi IP Authority",
        description: "Managed trademark and patent filing procedures and represented the authority in dispute cases.",
      },
    ],
    specialties: [
      {
        title: "Trademark Registration",
        description: "Registered over 200 trademarks across 15 countries through WIPO and direct national filings.",
        icon: "™️",
      },
      {
        title: "IP Litigation",
        description: "Represented clients in IP infringement actions, achieving injunctions and damages awards.",
        icon: "⚖️",
      },
      {
        title: "Licensing & Commercialization",
        description: "Structured complex IP licensing agreements for SaaS platforms, media, and pharma industries.",
        icon: "📄",
      },
      {
        title: "Copyright & Digital Media",
        description: "Advising content creators and media companies on copyright in the digital and AI content space.",
        icon: "🎨",
      },
    ],
    education: [
      { degree: "LL.M. in Intellectual Property Law", institution: "University of Edinburgh, UK", type: "degree" },
      { degree: "Bachelor of Laws", institution: "Princess Nourah University", type: "degree" },
      { degree: "Emerging Talent Award", institution: "Arab Legal Excellence Awards 2022", type: "award" },
    ],
  },
];

export function getPersonBySlug(slug: string): Person | undefined {
  return PEOPLE.find((p) => p.slug === slug);
}
