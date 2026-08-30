export type ServiceCategory =
  | "Digital & Website"
  | "Kreatif & Desain"
  | "Marketing & Sosial"
  | "Jasa Lainnya";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  category: ServiceCategory;
  icon: string; // lucide-react icon name
  tagline: string;
  description: string;
  priceFrom: number;
  priceLabel: string;
  benefits: string[];
  deliverables: string[];
  process: { title: string; desc: string }[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
}
