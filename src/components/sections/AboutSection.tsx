import { Target, TrendingUp, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    icon: Target,
    title: "Market Intelligence",
    description: "Deep insights into African markets, consumer behavior, and emerging trends.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Planning",
    description: "Data-driven strategies tailored to your business objectives and local realities.",
  },
  {
    icon: Handshake,
    title: "Partnership Building",
    description: "Connect with key stakeholders and build lasting relationships across the continent.",
  },
];

export const AboutSection = () => {
  return (
    <section className="min-h-screen py-24 px-4" aria-labelledby="about-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Axam Advisory</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p className="text-xl font-medium text-foreground">
              Mission: Unlocking Africa's potential for global firms seeking sustainable growth.
            </p>
            <p>
              Approach: Data-driven strategies combined with deep local expertise to navigate 
              the complexities of African markets with confidence.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.title}
              className="bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10" aria-hidden="true">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
