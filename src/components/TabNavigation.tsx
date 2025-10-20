import { useState } from "react";
import { cn } from "@/lib/utils";

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/src/assets/axam-logo.png" alt="Axam Advisory" className="h-10 w-auto" />
            <div>
              <div className="text-xl font-bold text-foreground">AXAM</div>
              <div className="text-xs text-muted-foreground hidden sm:block">Advisory</div>
            </div>
          </div>
          
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap",
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
    </nav>
  );
};
