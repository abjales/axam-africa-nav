import { AlertTriangle, TrendingUp, Building2, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const risks = [
  {
    title: "Economic Volatility",
    description: "Currency fluctuations and inflation management strategies for stable operations.",
  },
  {
    title: "Political Landscape",
    description: "Navigating diverse political environments and regulatory changes across the continent.",
  },
  {
    title: "Debt Sustainability",
    description: "Understanding sovereign debt levels and their impact on business opportunities.",
  },
  {
    title: "Infrastructure Gaps",
    description: "Working around infrastructure challenges while capitalizing on development opportunities.",
  },
];

const opportunities = [
  {
    icon: TrendingUp,
    title: "Fintech Innovation",
    description: "Mobile money and digital financial services leading global innovation in financial inclusion.",
  },
  {
    icon: Building2,
    title: "Renewable Energy",
    description: "Massive potential in solar, wind, and geothermal energy projects across the continent.",
  },
  {
    icon: TrendingUp,
    title: "AgriTech Solutions",
    description: "Technology-driven agriculture revolutionizing food security and rural development.",
  },
  {
    icon: Building2,
    title: "Strategic Minerals",
    description: "Critical minerals for renewable energy and technology sectors, from lithium to cobalt.",
  },
];

export const RisksSection = () => {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Risk & <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic risk management meets transformative growth potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Risk Management */}
          <Card className="bg-card border-border animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                Strategic Risk Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {risks.map((risk, index) => (
                  <AccordionItem key={risk.title} value={`risk-${index}`} className="border-border">
                    <AccordionTrigger className="text-sm font-medium hover:text-primary">
                      {risk.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {risk.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Opportunities */}
          <Card className="bg-card border-border animate-slide-up" style={{ animationDelay: "150ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-secondary" />
                High-Growth Sectors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {opportunities.map((opp, index) => (
                <div key={opp.title} className="flex gap-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-secondary/10">
                    <opp.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{opp.title}</h4>
                    <p className="text-sm text-muted-foreground">{opp.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Nairobi Gateway Section */}
        <Card className="bg-card border-border animate-fade-in overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Nairobi: Gateway to Africa</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>East Africa's leading financial and business hub</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Strategic location for regional expansion across the EAC</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Thriving tech ecosystem and startup culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>World-class infrastructure and connectivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Stable business environment with pro-investment policies</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/20 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">15M+</div>
                <div className="text-muted-foreground">Metro Population</div>
                <div className="mt-6 text-4xl font-bold text-gradient">$95B</div>
                <div className="text-muted-foreground">Regional GDP Impact</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
