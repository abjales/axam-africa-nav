import { useState } from "react";
import { TabNavigation, TabType } from "@/components/TabNavigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { RisksSection } from "@/components/sections/RisksSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Smooth scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HeroSection onNavigate={handleTabChange} />;
      case "about":
        return <AboutSection />;
      case "services":
        return <ServicesSection />;
      case "insights":
        return <InsightsSection />;
      case "risks":
        return <RisksSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection onNavigate={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen">
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="pt-20" role="main">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm" role="contentinfo">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-gradient mb-2">AXAM Advisory</div>
              <p className="text-sm text-muted-foreground">
                Driving sustainable success across dynamic African markets.
              </p>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© 2025 Axam Advisory. All rights reserved.</p>
              <p className="mt-1">Nairobi, Kenya | East Africa's Gateway</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
