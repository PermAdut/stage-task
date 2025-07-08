export const projectArray = [
  {
    imageLink: './images/spring-boot.svg',
    altText: 'spring boot',
    title: 'spring boot',
    description:
      'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
    version: '3.5.3',
    moreVersion: '+ 9 versions',
  },
  {
    imageLink: './images/spring-framework.svg',
    altText: 'spring framework',
    title: 'spring framework',
    description:
      'Provides core support for dependency injection, transaction management, web apps, data access, messaging, and more.',
    version: '6.2.8',
    moreVersion: '+ 8 versions',
  },
  {
    imageLink: './images/spring-data.svg',
    altText: 'spring data',
    title: 'spring data',
    description:
      'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.',
    version: '2025.0.1',
    moreVersion: '+ 6 versions',
  },
  {
    imageLink: './images/spring-cloud.svg',
    altText: 'spring cloud',
    title: 'spring cloud',
    description:
      'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
    version: '2025.0.0',
    moreVersion: '+ 9 versions',
  },
  {
    imageLink: './images/spring-data-flow.svg',
    altText: 'spring cloud data flow',
    title: 'spring cloud data flow',
    description:
      'Provides an orchestration service for composable data microservice applications on modern runtimes.',
    version: '2.11.15',
    moreVersion: '+ 7 versions',
  },
  {
    imageLink: './images/spring-security.svg',
    altText: 'spring security',
    title: 'spring security',
    description:
      'Protects your application with comprehensive and extensible authentication and authorization support.',
    version: '6.5.1',
    moreVersion: '+ 10 versions',
  },
]

export const navbarObjects = [
  {
    title: 'why spring',
    isArrow: true,
    subMenuObjects: [
      { text: 'Overview', isLink: true, isMargin: false },
      { text: 'Generative AI', isLink: true, isMargin: false },
      { text: 'Microservices', isLink: true, isMargin: false },
      { text: 'Reactive', isLink: true, isMargin: false },
      { text: 'Event Driven', isLink: true, isMargin: false },
      { text: 'Cloud', isLink: true, isMargin: false },
    ],
  },
  {
    title: 'learn',
    isArrow: true,
    subMenuObjects: [
      { text: 'Overview', isLink: true, isMargin: false },
      { text: 'Quickstart', isLink: true, isMargin: false },
      { text: 'Guides', isLink: true, isMargin: false },
      { text: 'Blog', isLink: true, isMargin: false },
      { text: 'Security Advisores', isLink: true, isMargin: false },
    ],
  },
  {
    title: 'projects',
    isArrow: true,
    subMenuObjects: [
      { text: 'Overview', isLink: true, isMargin: false },
      { text: 'Spring Boot', isLink: true, isMargin: false },
      { text: 'Spring Framework', isLink: true, isMargin: false },
      { text: 'Spring Cloud', isLink: true, isMargin: false },
      { text: 'Spring Cloud Data Flow', isLink: true, isMargin: false },
      { text: 'Spring Data', isLink: true, isMargin: false },
      { text: 'Spring Integration', isLink: true, isMargin: false },
      { text: 'Spring Batch', isLink: true, isMargin: false },
      { text: 'Spring Security', isLink: true, isMargin: false },
      { text: 'Spring AI', isLink: true, isMargin: true },
      { text: 'Release Calendar', isLink: true, isMargin: false },
      { text: 'Security advisories', isLink: true, isMargin: true },
      { text: 'DEVELOPMENT TOOLS', isLink: false, isMargin: false },
      { text: 'Spring Tools', isLink: true, isMargin: false },
      {
        text: 'Spring Initializr',
        isLink: true,
        isMargin: false,
        extraContent: `<svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-up-right-from-square"
                        style="height: 1em; margin-left: 0.5rem; vertical-align: -0.125rem;"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                        ></path></svg>`,
      },
    ],
  },
  {
    title: 'academy',
    isArrow: true,
    subMenuObjects: [
      { text: 'Courses', isLink: true, isMargin: false },
      { text: 'Get Certified', isLink: true, isMargin: false },
    ],
  },
  {
    title: 'community',
    isArrow: true,
    subMenuObjects: [
      { text: 'Overview', isLink: true, isMargin: false },
      { text: 'Events', isLink: true, isMargin: false },
      { text: 'Authors', isLink: true, isMargin: false },
    ],
  },
  {
    title: 'tanzu spring',
    isArrow: false,
    subMenuObjects: undefined,
  },
]
