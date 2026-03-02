const experiences = [
  {
    period: "March 2025 — Present",
    role: "Full Stack Developer",
    company: "Charles Schwab",
    description:
      "Built scalable enterprise trading platforms using Java 17, Spring Boot, React, Angular, and microservices. Developed real-time dashboards, optimized APIs, and implemented event-driven services with Kafka. Deployed cloud-native applications on AWS with CI/CD pipelines and monitoring. Mentored junior developers and ensured secure coding standards.",
    technologies: ["Java 17", "Spring Boot", "React", "Angular", "Kafka", "AWS"],
    current: true,
  },
  {
    period: "Sept 2023 — Feb 2025",
    role: "Full Stack Java Developer",
    company: "Nike",
    description:
      "Developed full-stack features for Nike’s e-commerce platform using React, Angular, and Spring Boot. Built modular components, GraphQL APIs, and asynchronous pipelines with Kafka. Managed cloud deployments on AWS and maintained CI/CD pipelines for high-performance product services.",
    technologies: ["Java", "Spring Boot", "React", "Angular", "GraphQL", "AWS"],
    current: false,
  },
  {
    period: "Oct 2021 — Jul 2023",
    role: "Full Stack Java Developer",
    company: "UnitedHealth",
    description:
      "Implemented automotive enterprise applications using Java, Spring Boot, React, and Angular. Developed RESTful APIs, reusable React components, and Kafka-based event-driven systems. Deployed and monitored services on AWS with Docker/Kubernetes, focusing on scalability and performance.",
    technologies: ["Java", "Spring Boot", "React", "Angular", "Kafka", "AWS"],
    current: false,
  },
  {
    period: "Dec 2019 — Sept 2021",
    role: "Software Developer",
    company: "Tata Consultancy Services",
    description:
      "Built the insurance Product Editor tool using Java, Spring MVC/Boot, JSP, and jQuery. Developed dynamic UI, backend services, and integrated with Guidewire for claim processing. Secured APIs with OAuth2/JWT and implemented asynchronous workflows with JMS.",
    technologies: ["Java", "Spring Boot", "JSP", "jQuery", "OAuth2", "JMS"],
    current: false,
  },
  {
    period: "Jan 2018 — Nov 2019",
    role: "Software Developer",
    company: "AccelQ",
    description:
      "Contributed to a cloud-based codeless test automation platform using Java, Spring Boot, and Selenium. Developed DOM inspection, data-driven testing, and backend APIs for automated test orchestration. Supported CI/CD pipelines and maintained database schemas with MySQL/PostgreSQL.",
    technologies: ["Java", "Spring Boot", "Selenium", "MySQL", "PostgreSQL", "CI/CD"],
    current: false,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
