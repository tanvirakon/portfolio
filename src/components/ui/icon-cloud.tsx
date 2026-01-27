"use client";

import { useEffect, useMemo, useState, MouseEvent, useCallback } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { useTheme } from "next-themes";
import { resumeData } from "@/data/resume"; // You might need to adjust or map your resume data to slugs

// Mapping of your skills to SimpleIcons slugs
// You can find slugs at https://simpleicons.org/
const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "cplusplus", // manual map if needed
  "python",
  "java",
];

export const IconCloud = () => {
  const [icons, setIcons] = useState<any>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons);
  }, []);

  const renderedIcons = useMemo(() => {
    if (!icons) return [];

    return Object.values(icons.simpleIcons).map((icon: any) =>
      renderSimpleIcon({
        icon,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: any) => e.preventDefault(),
        },
      }),
    );
  }, [icons, theme]);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
      <Cloud
        options={{
          clickToFront: 500,
          depth: 1,
          imageScale: 2,
          initial: [0.03, -0.03], // Slower speed
          outlineColour: "#0000",
          reverse: true,
          tooltip: "native",
          tooltipDelay: 0,
          wheelZoom: false,
          dragControl: true,
          dragThreshold: 0,
          decel: 0.1,
          maxSpeed: 0.03, // Reduced max speed
          minSpeed: 0.03, // Enforce minimum rotation so it resumes spinning
        }}
      >
        {renderedIcons}
      </Cloud>
    </div>
  );
};
