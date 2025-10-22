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
      <div className="w-full px-1 sm:px-2">
        <div className="py-2 sm:py-3">
          <div className="flex justify-between items-stretch gap-0.5 sm:gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex-1 px-1 sm:px-2 py-1.5 sm:py-2 rounded-md text-[10px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap",
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
