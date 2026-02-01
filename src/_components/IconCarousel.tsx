"use client";
import React, { useState } from "react";
import type { IconType } from "react-icons";
import { Box, Tooltip } from "@mui/material";
import { FaMasksTheater } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import {
  DiJavascript1
} from "react-icons/di";
import {
  SiLaravel, SiReact,
  SiSelenium,
  SiPostgresql,
  SiGit,
  SiPhp
} from "react-icons/si";

const technologies: { name: string; icon: IconType; color: string }[] = [
  {
    name: "Javascript",
    icon: DiJavascript1,
    color: "#f7df1e",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61dafb",
  },
  {
    name: "NextJS",
    icon: RiNextjsLine,
    color: "#000000",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#787cb5",
  },
  {
    name: "Laravel",
    icon: SiLaravel,
    color: "#ff2d20",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#f05032",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },
  {
    name: "Selenium",
    icon: SiSelenium,
    color: "#43b02a",
  },
  {
    name: "Playwright",
    icon: FaMasksTheater,
    color: "#36559bff",
  },
];

export default function IconCarousel() {
  const [hovered, setHovered] = useState<number | null>(null);

  const doubled = [...technologies, ...technologies];

  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        py: 2,
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "scroll 20s linear infinite",
          animationPlayState: hovered !== null ? "paused" : "running",
        }}
      >
        {doubled.map((item, index) => {
          const Icon = item.icon;
          return (
            <Tooltip key={index} title={item.name} arrow>
              <Box
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  mx: 3,
                  fontSize: 40,
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  transform: hovered === index ? "scale(1.12)" : "scale(1)",
                  boxShadow: hovered === index ? "0 6px 18px rgba(0,0,0,0.12)" : "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                aria-label={item.name}
              >
                <Icon color={item.color} size={40} />
              </Box>
            </Tooltip>
          );
        })}
      </Box>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
}