// src/lib/people.ts
// Central data store for all people profiles – updated with real firm data

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
  linkedinUrl: string;
};

export const PEOPLE: Person[] = [
  {
    slug: "founder-al-zekry",
    badge: "Founding Partner",
    name: "Consultant Mohamed Zekry",
    title: "Founder & Head of the Firm",
    quote: '"Justice is the foundation of a stable society."',
    bio: [
      "Consultant Mohamed Zekry is the founder and head of Al Zekry Law Firm for Law, Mediation, and Arbitration (House of Expertise – Egypt). He is a former President of the Cairo Economic Court, bringing decades of distinguished judicial service across Egypt and Kuwait to the firm.",
      "His unparalleled judicial background provides the firm with deep institutional knowledge of court procedures and rulings, enabling precise, expedient legal strategy for clients across civil, commercial, criminal, and investment matters.",
    ],
    directEmail: "alzekrylawfirm@gmail.com",
    barAdmissions: "Cairo Court of Appeal, Court of Cassation, Kuwait Cassation Prosecution",
    image: "/people/MohammedAlzekry-removebg-preview.png",
    yearsExp: "25",
    casesWon: "500",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-zekry-b371153b8?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    journey: [
      {
        period: "PRESENT",
        title: "Founder & Managing Partner",
        org: "Al Zekry Law Firm for Law, Mediation & Arbitration",
        description:
          "Founded and leads the firm in Dokki, Giza, providing integrated legal, Sharia, arbitration, and mediation services for individuals and corporations.",
      },
      {
        period: "FORMER",
        title: "Head of Cassation Prosecution",
        org: "State of Kuwait",
        description:
          "Served as Head of the Cassation Prosecution in the State of Kuwait, handling high-level judicial matters under Kuwaiti law.",
      },
      {
        period: "FORMER",
        title: "President – Cairo Economic Court",
        org: "Egyptian Judiciary",
        description:
          "Presided over the Cairo Economic Court, adjudicating complex commercial and economic disputes of national significance.",
      },
      {
        period: "FORMER",
        title: "Head of Improvement & Follow-up Committee",
        org: "Cairo Court of Appeal",
        description:
          "Led the Improvement and Follow-up Committee at the Cairo Court of Appeal, overseeing judicial quality and procedural compliance.",
      },
      {
        period: "FORMER",
        title: "Head – Commercial & Economic Group",
        org: "Prosecution of Cassation",
        description:
          "Led the Commercial and Economic Group at the Cassation Prosecution, handling landmark economic cases.",
      },
      {
        period: "FORMER",
        title: "Head – Criminal, Cases & Investment Circuit",
        org: "Mansoura Court of Appeal",
        description:
          "Presided over the Criminal, Cases, and Investment circuit at the Mansoura Court of Appeal.",
      },
      {
        period: "FORMER",
        title: "President – Commercial Circuit (Arbitration Nullifications)",
        org: "Cairo Court of Appeal",
        description:
          "Presided over the Commercial Circuit at the Cairo Court of Appeal (North Branch), exclusively handling lawsuits for the nullification of arbitration awards.",
      },
      {
        period: "FORMER",
        title: "President – Commercial & Civil Contracts Circuit",
        org: "Cairo Court",
        description:
          "Presided over the Commercial and Civil Contracts Circuit at the Cairo Court.",
      },
      {
        period: "FORMER",
        title: "Member – Commercial & Civil Circuit",
        org: "Cassation Prosecution",
        description:
          "Delegated to the Commercial and Civil Cassation Prosecution for seven consecutive years.",
      },
      {
        period: "FORMER",
        title: "President – Bulaq al-Dakrour Misdemeanors Court",
        org: "Egyptian Judiciary",
        description:
          "Presided over the Bulaq al-Dakrour Partial Misdemeanors Court for two consecutive years.",
      },
      {
        period: "FORMER",
        title: "Director & Judge – Saff Prosecution & Giza Full Court",
        org: "Egyptian Judiciary",
        description:
          "Served as Director of the Saff Prosecution and subsequently as a Judge at the Giza Full Court.",
      },

      {
        period: "FORMER",
        title: "Public Prosecutor – Giza Full Prosecutions",
        org: "Public Prosecution",
        description:
          "Appointed as Public Prosecutor for the Giza Full Prosecutions in March 1976.",
      },
    ],
    specialties: [
      {
        title: "Criminal Defense",
        description:
          "Extensive experience in high-profile criminal defense, leveraging decades of prosecutorial insight.",
        icon: "FaGavel",
      },
      {
        title: "Commercial & Economic Litigation",
        description:
          "Former President of the Cairo Economic Court; deep expertise in resolving complex commercial disputes.",
        icon: "FaBuilding",
      },
      {
        title: "Arbitration & Mediation",
        description:
          "Head of the Disciplinary Committee at the Media Free Zone for dispute resolution; extensive arbitration experience.",
        icon: "FaHandshake",
      },
      {
        title: "Investment Law",
        description:
          "Member of the Technical Secretariat for the Investment Contract Dispute Settlement Committee (Council of Ministers).",
        icon: "FaChartLine",
      },
    ],
    education: [
      {
        degree: "Bachelor of Laws (1975)",
        institution: "Ain Shams University – Faculty of Law",
        type: "degree",
      },
      {
        degree: "Lecturer – National Center for Social & Criminological Research",
        institution: "National Center for Social & Criminological Research",
        type: "fellowship",
      },
      {
        degree: "Lecturer – Center for Judicial Studies",
        institution: "State of Kuwait",
        type: "fellowship",
      },
      {
        degree: "Lecturer in Pleadings Law",
        institution: "Ain Shams University – Faculty of Law",
        type: "fellowship",
      },
      {
        degree: "Lecturer – Center for Legal Research & Consultations",
        institution: "Cairo University – Faculty of Law",
        type: "fellowship",
      },
      {
        degree: "Lecturer – Center for Legal Transactions for Domestic & International Trade",
        institution: "Cairo University – Faculty of Law",
        type: "fellowship",
      },
      {
        degree: "Member – Egyptian Society of International Law",
        institution: "Egyptian Society of International Law",
        type: "fellowship",
      },
      {
        degree: "Member – Egyptian Society for Political Economy, Statistics & Legislation",
        institution: "Egyptian Society for Political Economy",
        type: "fellowship",
      },
      {
        degree: "Member – Technical Secretariat, Investment Dispute Settlement Committee",
        institution: "Council of Ministers, Egypt",
        type: "award",
      },
    ],
  },
  {
    slug: "ali-zekry",
    badge: "Senior ",
    name: " Ali Mohamed Zekry",
    title: "Senior  · Corporate & Consumer Law",
    quote: '"Strong legal foundations protect every enterprise."',
    bio: [
      " Ali Mohamed Zekry brings over 18 years of specialized experience in corporate law, company formation, consumer protection, and commercial fraud. He combines deep regulatory knowledge with practical advisory services for businesses of all sizes.",
      "He previously served as Deputy Director of the Car Complaints Department at the Consumer Protection Agency (CPA), giving him unmatched insight into consumer law and enforcement mechanisms.",
    ],
    directEmail: "alzekrylawfirm@gmail.com",
    barAdmissions: "Egyptian Bar Association",
    image: "/people/AliAlzekry-removebg-preview.png",
    yearsExp: "18",
    casesWon: "200",
    linkedinUrl: "https://www.linkedin.com/in/ali-zekry-14ba633a1?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    journey: [
      {
        period: "PRESENT",
        title: "Senior  – Corporate & Consumer Law",
        org: "Al Zekry Law Firm",
        description:
          "Advising clients on company formation, commercial compliance, and consumer protection matters.",
      },
      {
        period: "FORMER",
        title: "Deputy Director – Car Complaints Department",
        org: "Consumer Protection Agency (CPA)",
        description:
          "Managed consumer complaints related to automobiles, overseeing dispute resolution and regulatory enforcement in coordination with manufacturers and dealers.",
      },
    ],
    specialties: [
      {
        title: "Company Formation",
        description:
          "Expert in forming all types of companies under Egyptian law, from LLCs to joint-stock companies.",
        icon: "FaIndustry",
      },
      {
        title: "Consumer Protection",
        description:
          "Deep expertise in Egyptian consumer protection regulations, enforcement, and dispute resolution.",
        icon: "FaShieldAlt",
      },
      {
        title: "Commercial Fraud",
        description:
          "Experienced in identifying, investigating, and litigating cases of commercial fraud.",
        icon: "FaSearch",
      },
      {
        title: "Corporate Compliance",
        description:
          "Advising companies on regulatory compliance, corporate governance, and statutory obligations.",
        icon: "FaClipboardList",
      },
    ],
    education: [
      {
        degree: "Training – Diplomatic Corps & International Relations",
        institution: "Specialized Diplomatic Training Program",
        type: "degree",
      },
      {
        degree: "Training – International Economics",
        institution: "International Economics Program",
        type: "degree",
      },
      {
        degree: "Training – Corporate Law",
        institution: "Corporate Law Development Program",
        type: "degree",
      },
    ],
  },
  {
    slug: "hassan-zekry",
    badge: "",
    name: " Hassan Mohamed Zekry",
    title: " · Consumer Protection & Trademark Law",
    quote: '"Protecting rights is the cornerstone of every just society."',
    bio: [
      " Hassan Mohamed Zekry specializes in consumer protection, anti-fraud measures, and trademark law. He previously served as a member of the Technical Office of the Minister of Trade and Industry, giving him insider knowledge of Egypt's regulatory and commercial enforcement landscape.",
      "His unique academic background, including a Master's in Law and an international diploma from China, reflects his commitment to a globally informed approach to legal practice.",
    ],
    directEmail: "alzekrylawfirm@gmail.com",
    barAdmissions: "Egyptian Bar Association",
    image: "/people/HassanAlzekry.png",
    yearsExp: "10",
    casesWon: "120",
    linkedinUrl: "https://www.linkedin.com/in/hassan-zekry-270033186?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    journey: [
      {
        period: "PRESENT",
        title: " – Consumer Protection & Trademark",
        org: "Al Zekry Law Firm",
        description:
          "Representing clients in consumer protection disputes, anti-fraud cases, and trademark registration and enforcement matters.",
      },
      {
        period: "FORMER",
        title: "Member – Technical Office of the Minister",
        org: "Ministry of Trade and Industry, Egypt",
        description:
          "Served in the Technical Office of the Minister of Trade and Industry, advising on regulatory, commercial, and trade enforcement matters.",
      },
    ],
    specialties: [
      {
        title: "Consumer Protection",
        description:
          "Experienced in Egyptian consumer protection law, enforcement procedures, and dispute resolution.",
        icon: "FaShieldAlt",
      },
      {
        title: "Anti-Fraud & Commercial Crime",
        description:
          "Specializes in detecting and litigating commercial fraud, counterfeiting, and anti-competitive practices.",
        icon: "FaSearch",
      },
      {
        title: "Trademark & IP Law",
        description:
          "Expertise in trademark registration, enforcement, and intellectual property protection under Egyptian and international law.",
        icon: "FaTrademark",
      },
      {
        title: "Trade & Commercial Regulation",
        description:
          "Deep knowledge of Egypt's trade regulations, gained from direct advisory experience at the Ministry of Trade and Industry.",
        icon: "FaBox",
      },
    ],
    education: [
      {
        degree: "Master's Degree in Law",
        institution: "Egyptian University – Faculty of Law",
        type: "degree",
      },
      {
        degree: "Diploma in Economic Development",
        institution: "Peking University, China",
        type: "degree",
      },
    ],
  },
  {
    slug: "dr-ahmed-zekry",
    badge: "",
    name: " Dr. Ahmed Mohamed Zekry",
    title: " · Civil, Commercial & Family Law",
    quote: '"Every dispute carries a human story that deserves to be heard."',
    bio: [
      " Dr. Ahmed Mohamed Zekry is a highly experienced litigator specializing in civil, commercial, and criminal litigation. He has particular expertise in family law, inheritance, and personal status cases, areas that require both legal precision and deep human sensitivity.",
      "His comprehensive litigation background across multiple branches of Egyptian law makes him a versatile and trusted advocate for clients facing complex legal challenges.",
    ],
    directEmail: "alzekrylawfirm@gmail.com",
    barAdmissions: "Egyptian Bar Association",
    image: "/people/ahmedAlzekry-removebg-preview.png",
    yearsExp: "12",
    casesWon: "180",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-zekry-219875400?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    journey: [
      {
        period: "PRESENT",
        title: " – Civil, Commercial & Family Law",
        org: "Al Zekry Law Firm",
        description:
          "Handling civil, commercial, and criminal litigation as well as family law and inheritance disputes for individual and corporate clients.",
      },
    ],
    specialties: [
      {
        title: "Civil Litigation",
        description:
          "Expert in civil disputes, contracts, and civil liability claims across all Egyptian courts.",
        icon: "FaFileContract",
      },
      {
        title: "Commercial Litigation",
        description:
          "Represents businesses in commercial disputes, contract enforcement, and debt recovery.",
        icon: "FaBuilding",
      },
      {
        title: "Family Law & Personal Status",
        description:
          "Specialist in family law, divorce, custody, inheritance, and personal status cases under Egyptian law.",
        icon: "FaUsers",
      },
      {
        title: "Criminal Litigation",
        description:
          "Experienced in criminal defense and prosecution across a wide range of criminal matters.",
        icon: "FaGavel",
      },
    ],
    education: [
      {
        degree: "Doctorate (Ph.D.) in Law",
        institution: "Egyptian University – Faculty of Law",
        type: "degree",
      },
    ],
  },
  {
    slug: "omar-zekry",
    badge: "Legal ",
    name: " Omar Alzekry",
    title: "Legal  · Criminal Law",
    quote: '"The law must protect the innocent and hold the guilty accountable."',
    bio: [
      " Omar Alzekry is a distinguished legal  with advanced academic credentials in criminal law. He serves as a lawyer at the Central Administration for Legal Affairs, bringing both scholarly rigor and practical litigation experience to the firm.",
      "His doctoral-level expertise in criminal law makes him the firm's leading authority on criminal defense, prosecution analysis, and forensic legal strategy.",
    ],
    directEmail: "alzekrylawfirm@gmail.com",
    barAdmissions: "Egyptian Bar Association, Central Administration for Legal Affairs",
    image: "/people/OmarAlzekry.png",
    yearsExp: "10",
    casesWon: "150",
    linkedinUrl: "https://www.linkedin.com/in/omar-zekry-ba20922ab?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    journey: [
      {
        period: "PRESENT",
        title: "Legal  – Criminal Law",
        org: "Al Zekry Law Firm",
        description:
          "Providing specialized criminal law advisory and litigation services to the firm's clients.",
      },
      {
        period: "PRESENT",
        title: "Lawyer – Central Administration for Legal Affairs",
        org: "Central Administration for Legal Affairs, Egypt",
        description:
          "Handling legal affairs and litigation for the central administration, covering a wide range of criminal and civil matters.",
      },
    ],
    specialties: [
      {
        title: "Criminal Defense",
        description:
          "Advanced expertise in criminal defense strategy, leveraging doctoral research in criminal law.",
        icon: "FaBalanceScale",
      },
      {
        title: "Criminal Prosecution Analysis",
        description:
          "Deep understanding of prosecution tactics, enabling highly effective defense strategies.",
        icon: "FaLock",
      },
      {
        title: "Administrative Law",
        description:
          "Experienced in legal affairs at the Central Administration, covering regulatory and administrative disputes.",
        icon: "FaLandmark",
      },
      {
        title: "Legal Research & Academic Advisory",
        description:
          "Provides evidence-based, academically grounded legal opinions drawing from doctoral-level criminal law research.",
        icon: "FaBookOpen",
      },
    ],
    education: [
      {
        degree: "Doctorate (Ph.D.) in Criminal Law",
        institution: "Egyptian University – Faculty of Law",
        type: "degree",
      },
      {
        degree: "Master's Degree in Criminal Law",
        institution: "Egyptian University – Faculty of Law",
        type: "degree",
      },
    ],
  },
  
];

export function getPersonBySlug(slug: string): Person | undefined {
  return PEOPLE.find((p) => p.slug === slug);
}
