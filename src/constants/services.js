import React from "react"
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBriefcase,
} from "react-icons/gi"

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
  {
    id: 1,
    icon: <GiCompass className="icon" />,
    label: "mission",
    text: "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.",
  },
  {
    id: 2,
    icon: <GiDiamondHard className="icon" />,
    label: "vision",
    text: "For science, music, sport, etc, Europe uses the same vocabulary.",
  },
  {
    id: 3,
    icon: <GiStabbedNote className="icon" />,
    label: "history",
    text: "The European languages are members of the same family. Their separate existence is a myth.",
  },
  {
    id: 4,
    icon: <GiBriefcase className="icon" />,
    label: "work",
    text: "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is.",
  },
]
