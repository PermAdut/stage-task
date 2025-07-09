import SpringBoot from "../assets/images/icons/spring-boot.svg?react"
import SpringFramework from "../assets/images/icons/spring-framework.svg?react";
import SpringData from "../assets/images/icons/spring-data.svg?react";
import SpringCloud from "../assets/images/icons/spring-cloud.svg?react";
import SpringDataFlow from "../assets/images/icons/spring-data-flow.svg?react";
import SpringSecurity from "../assets/images/icons/spring-security.svg?react";
import type { Project } from "../interfaces/Project.interface";

export const projects: Project[] = [
  {
    image: SpringBoot,
    altText: "spring boot",
    title: "spring boot",
    description:
      "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.",
    version: "3.5.3",
    moreVersion: "+ 9 versions",
  },
  {
    image: SpringFramework,
    altText: "spring framework",
    title: "spring framework",
    description:
      "Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.",
    version: "6.2.8",
    moreVersion: "+ 8 versions",
  },
  {
    image: SpringData,
    altText: "spring data",
    title: "spring data",
    description:
      "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
    version: "2025.0.1",
    moreVersion: "+ 6 versions",
  },
  {
    image: SpringCloud,
    altText: "spring cloud",
    title: "spring cloud",
    description:
      "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.",
    version: "2025.0.0",
    moreVersion: "+ 9 versions",
  },
  {
    image: SpringDataFlow,
    altText: "spring cloud data flow",
    title: "spring cloud data flow",
    description:
      "Provides an orchestration service for composable data microservice applications on modern runtimes.",
    version: "2.11.15",
    moreVersion: "+ 7 versions",
  },
  {
    image: SpringSecurity,
    altText: "spring security",
    title: "spring security",
    description:
      "Protects your application with comprehensive and extensible authentication and authorization support.",
    version: "6.5.1",
    moreVersion: "+ 10 versions",
  },
];
