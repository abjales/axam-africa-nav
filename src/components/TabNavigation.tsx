import { useState } from "react";
import { cn } from "@/lib/utils";
import axamLogo from "@/assets/axam-logo.png";

export type TabType = "home" | "about" | "services" | "insights" | "risks" | "contact";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: "home" as TabType, label: "Home" },
  { id: "about" as TabType, label: "About" },
  { id: "services" as TabType, label: "Core Services" },
  { id: "insights" as TabType, label: "Market Insights" },
  { id: "risks" as TabType, label: "Risk & Opportunities" },
  { id: "contact" as TabType, label: "Contact" },
];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="w-full px-1 sm:px-4">
        <div className="py-1.5 sm:py-3">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {/* Logo - acts as Home button on mobile */}
            <button 
              onClick={() => onTabChange("home")}
              className="flex-shrink-0 md:pointer-events-none"
            >
              <img 
                src={axamLogo} 
                alt="Axam Advisory" 
                className="h-6 sm:h-10 w-auto" 
              />
            </button>
            
            {/* Navigation Tabs */}
            <div className="flex gap-0.5 sm:gap-1 overflow-x-auto scrollbar-hide flex-1 justify-end">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    "px-1 sm:px-3 py-1 sm:py-2 rounded text-[8px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0",
                    tab.id === "home" && "hidden md:inline-block",
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
