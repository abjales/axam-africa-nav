import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-skyline.jpg";
import africanBadge from "@/assets/african-badge.png";
import { TabType } from "../TabNavigation";
interface HeroSectionProps {
  onNavigate: (tab: TabType) => void;
}
export const HeroSection = ({
  onNavigate
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        {/* African Badge */}
        <div className="flex justify-center mb-6">
          
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Unlocking Africa's{" "}
          <span className="text-gradient">$3.4T Potential</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light">
          Partner with Axam Advisory to navigate Africa's transformative economic 
          landscape with confidence and local expertise.
        </p>

        <Button size="lg" onClick={() => onNavigate("about")} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow text-lg px-8 py-6 rounded-full group">
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Animated gradient line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 gradient-accent rounded-full animate-glow"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow"></div>
        </div>
      </div>
    </section>;
};