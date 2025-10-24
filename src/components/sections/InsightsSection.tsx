import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, Globe2, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "$3.4T",
    label: "Market Potential",
    color: "text-primary",
  },
  {
    icon: Users,
    value: "2B",
    label: "Population by 2040",
    color: "text-secondary",
  },
  {
    icon: Globe2,
    value: "54",
    label: "Nations",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "5.9%",
    label: "East Africa GDP Growth",
    color: "text-secondary",
  },
];

const insights = [
  {
    title: "Economic Growth",
    metric: "5.9%",
    description: "East Africa GDP growth rate, outpacing global averages",
  },
  {
    title: "Consumer Market",
    metric: "$2.1T",
    description: "Projected consumer spending by 2025",
  },
  {
    title: "Mobile Penetration",
    metric: "80%+",
    description: "Mobile phone penetration driving digital transformation",
  },
  {
    title: "Youth Population",
    metric: "60%",
    description: "Population under 25, creating massive opportunities",
  },
];

export const InsightsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-24 px-4" aria-labelledby="insights-heading">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 id="insights-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Market <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding Africa's transformative economic landscape
          </p>
        </div>

        {/* Animated Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`bg-card border-border hover:shadow-glow transition-all duration-500 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} aria-hidden="true" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <Card
              key={insight.title}
              className={`bg-card border-border hover:border-primary transition-all duration-500 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="text-xl font-semibold">{insight.title}</h3>
                  <span className="text-2xl font-bold text-gradient">{insight.metric}</span>
                </div>
                <p className="text-muted-foreground">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 p-8 bg-card border border-border rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Africa's Digital Revolution</h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            Africa's digital economy is experiencing unprecedented growth, with mobile-first solutions 
            driving innovation across fintech, e-commerce, and digital services. The continent's young, 
            tech-savvy population is creating new opportunities for businesses ready to adapt to local needs.
          </p>
        </div>
      </div>
    </section>
  );
};
