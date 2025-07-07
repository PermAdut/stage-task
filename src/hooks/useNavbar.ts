import { useState } from "react";

export interface NavBarItem {
  title: string;
  isArrow: boolean;
  subMenuObjects?: SubMenuObject[];
  isActive: boolean;
  handleMakeActive: (title: string) => void;
}

interface SubMenuObject {
  text: string;
  isLink: boolean;
  isMargin: boolean;
}

export default function useNavbar<
  T extends Pick<NavBarItem, "title" | "isArrow" | "subMenuObjects">[],
>() {
  const makeActive = (title: string) => {
    setNavbarItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isActive: item.title === title ? !item.isActive : false,
      })),
    );
  };
  const [navbarItems, setNavbarItems] = useState<NavBarItem[]>([
    {
      title: "why spring",
      isArrow: true,
      subMenuObjects: [
        { text: "Overview", isLink: true, isMargin: false },
        { text: "Generative AI", isLink: true, isMargin: false },
        { text: "Microservices", isLink: true, isMargin: false },
        { text: "Reactive", isLink: true, isMargin: false },
        { text: "Event Driven", isLink: true, isMargin: false },
        { text: "Cloud", isLink: true, isMargin: false },
      ],
      isActive: false,
      handleMakeActive: makeActive,
    },
    {
      title: "learn",
      isArrow: true,
      subMenuObjects: [
        { text: "Overview", isLink: true, isMargin: false },
        { text: "Quickstart", isLink: true, isMargin: false },
        { text: "Guides", isLink: true, isMargin: false },
        { text: "Blog", isLink: true, isMargin: false },
        { text: "Security Advisores", isLink: true, isMargin: false },
      ],
      isActive: false,
      handleMakeActive: makeActive,
    },
    {
      title: "projects",
      isArrow: true,
      subMenuObjects: [
        { text: "Overview", isLink: true, isMargin: false },
        { text: "Spring Boot", isLink: true, isMargin: false },
        { text: "Spring Framework", isLink: true, isMargin: false },
        { text: "Spring Cloud", isLink: true, isMargin: false },
        { text: "Spring Cloud Data Flow", isLink: true, isMargin: false },
        { text: "Spring Data", isLink: true, isMargin: false },
        { text: "Spring Integration", isLink: true, isMargin: false },
        { text: "Spring Batch", isLink: true, isMargin: false },
        { text: "Spring Security", isLink: true, isMargin: false },
        { text: "Spring AI", isLink: true, isMargin: true },
        { text: "Release Calendar", isLink: true, isMargin: false },
        { text: "Security advisories", isLink: true, isMargin: true },
        { text: "DEVELOPMENT TOOLS", isLink: false, isMargin: false },
        { text: "Spring Tools", isLink: true, isMargin: false },
        { text: "Spring Initializr", isLink: true, isMargin: false },
      ],
      isActive: false,
      handleMakeActive: makeActive,
    },
    {
      title: "academy",
      isArrow: true,
      subMenuObjects: [
        { text: "Courses", isLink: true, isMargin: false },
        { text: "Get Certified", isLink: true, isMargin: false },
      ],
      isActive: false,
      handleMakeActive: makeActive,
    },
    {
      title: "community",
      isArrow: true,
      subMenuObjects: [
        { text: "Overview", isLink: true, isMargin: false },
        { text: "Events", isLink: true, isMargin: false },
        { text: "Authors", isLink: true, isMargin: false },
      ],
      isActive: false,
      handleMakeActive: makeActive,
    },
    {
      title: "tanzu spring",
      isArrow: false,
      subMenuObjects: undefined,
      isActive: false,
      handleMakeActive: makeActive,
    },
  ]);
  return navbarItems as unknown as T;
}
