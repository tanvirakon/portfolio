"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SkillHighlightContextType {
  highlightedSkill: string | null;
  setHighlightedSkill: (skill: string | null) => void;
}

const SkillHighlightContext = createContext<SkillHighlightContextType | undefined>(undefined);

export const SkillHighlightProvider = ({ children }: { children: ReactNode }) => {
  const [highlightedSkill, setHighlightedSkill] = useState<string | null>(null);

  return (
    <SkillHighlightContext.Provider value={{ highlightedSkill, setHighlightedSkill }}>
      {children}
    </SkillHighlightContext.Provider>
  );
};

export const useSkillHighlight = () => {
  const context = useContext(SkillHighlightContext);
  if (!context) {
    throw new Error("useSkillHighlight must be used within a SkillHighlightProvider");
  }
  return context;
};