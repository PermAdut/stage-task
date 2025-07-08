export type NavBarItem = {
  title: string;
  isArrow: boolean;
  subMenuObjects?: SubMenuObject[];
};

export type SubMenuObject = {
  text: string;
  isLink: boolean;
  isMargin: boolean;
  extraContent?: string;
};

export const navbarItems:NavBarItem[] = [
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
        {
          text: "Spring Initializr",
          isLink: true,
          isMargin: false,
          extraContent: "../../../assets/images/ReactItems/ExtraSvg.tsx",
        },
      ],
    },
    {
      title: "academy",
      isArrow: true,
      subMenuObjects: [
        { text: "Courses", isLink: true, isMargin: false },
        { text: "Get Certified", isLink: true, isMargin: false },
      ],
    },
    {
      title: "community",
      isArrow: true,
      subMenuObjects: [
        { text: "Overview", isLink: true, isMargin: false },
        { text: "Events", isLink: true, isMargin: false },
        { text: "Authors", isLink: true, isMargin: false },
      ],
    },
    {
      title: "tanzu spring",
      isArrow: false,
      subMenuObjects: undefined,
    },
  ]