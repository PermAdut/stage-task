import ExtraSvg from "../assets/images/icons/extra.svg?react";
import type { NavBarItem } from "../interfaces/Navbar.interface";

export const navbarItems: NavBarItem[] = [
  {
    title: "why spring",
    isArrow: true,
    subMenuObjects: [
      [
        { text: "Overview", href: "#" },
        { text: "Generative AI", href: "#" },
        { text: "Microservices", href: "#" },
        { text: "Reactive", href: "#" },
        { text: "Event Driven", href: "#" },
        { text: "Cloud", href: "#" },
      ],
    ],
  },
  {
    title: "learn",
    isArrow: true,
    subMenuObjects: [
      [
        { text: "Overview", href: "#" },
        { text: "Quickstart", href: "#" },
        { text: "Guides", href: "#" },
        { text: "Blog", href: "#" },
        { text: "Security Advisories", href: "#" },
      ],
    ],
  },
  {
    title: "projects",
    isArrow: true,
    subMenuObjects: [
      [
        { text: "Overview", href: "#" },
        { text: "Spring Boot", href: "#" },
        { text: "Spring Framework", href: "#" },
        { text: "Spring Cloud", href: "#" },
        { text: "Spring Cloud Data Flow", href: "#" },
        { text: "Spring Data", href: "#" },
        { text: "Spring Integration", href: "#" },
        { text: "Spring Batch", href: "#" },
        { text: "Spring Security", href: "#" },
        { text: "Spring AI", href: "#" }
      ],
      [
        { text: "Release Calendar", href: "#" },
        { text: "Security advisories", href: "#" },
      ],
      [
        { text: "DEVELOPMENT TOOLS" },
        { text: "Spring Tools", href: "#" },
        {
          text: "Spring Initializr",
          href: "#",
          extraContent: ExtraSvg,
        },
      ],
    ],
  },
  {
    title: "academy",
    isArrow: true,
    subMenuObjects: [
      [
        { text: "Courses", href: "#" },
        { text: "Get Certified", href: "#" },
      ],
    ],
  },
  {
    title: "community",
    isArrow: true,
    subMenuObjects: [
      [
        { text: "Overview", href: "#" },
        { text: "Events", href: "#" },
        { text: "Authors", href: "#" },
      ],
    ],
  },
  {
    title: "tanzu spring",
    isArrow: false,
    subMenuObjects: undefined,
  },
];
