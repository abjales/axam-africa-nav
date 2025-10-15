import { Globe, Cpu, TrendingUp, Scale, Shield, Megaphone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Globe,
    title: "Strategic Market Entry",
    description: "Navigate complex regulatory environments and cultural nuances with our comprehensive market entry strategies tailored for African markets.",
    details: [
      "Market opportunity assessment and sizing",
      "Entry strategy development and execution planning",
      "Regulatory compliance and licensing support",
      "Local partnership identification and facilitation",
    ],
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description: "Leverage technology to drive growth and efficiency in Africa's rapidly evolving digital landscape.",
    details: [
      "Digital strategy development and roadmap creation",
      "Technology partner selection and vendor management",
      "Mobile-first solutions for African markets",
      "Digital payment and fintech integration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Optimization",
    description: "Maximize returns while managing risk through our deep understanding of African investment landscapes.",
    details: [
      "Investment opportunity identification and due diligence",
      "Portfolio optimization and risk assessment",
      "Financial modeling and valuation support",
      "Exit strategy planning and execution",
    ],
  },
  {
    icon: Scale,
    title: "Regulatory Navigation",
    description: "Expert guidance through Africa's diverse regulatory environments to ensure compliance and reduce friction.",
    details: [
      "Regulatory landscape analysis and monitoring",
      "Compliance framework development",
      "Government relations and stakeholder engagement",
      "Policy advocacy and representation",
    ],
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Comprehensive risk assessment and management strategies for operating in dynamic African markets.",
    details: [
      "Political and economic risk assessment",
      "Crisis management and contingency planning",
      "Security and operational risk mitigation",
      "Insurance and hedging strategy development",
    ],
  },
  {
    icon: Megaphone,
    title: "Media Amplification",
    description: "Build brand presence and credibility through strategic communications and media engagement across Africa.",
    details: [
      "Brand positioning and messaging strategy",
      "Media relations and press engagement",
      "Digital marketing and social media campaigns",
      "Thought leadership and content development",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to help you succeed in Africa's dynamic markets
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {services.map((service, index) => (
            <AccordionItem 
              key={service.title} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <ul className="space-y-2 ml-16">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
