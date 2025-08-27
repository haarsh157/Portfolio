import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Sparkles, Circle } from "lucide-react";
import Hero from "@/components/Hero";
import React from "react";
import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";

const BLUR_FADE_DELAY = 0.04;

// Types for skill groups
type SkillGroup = (typeof DATA.skillGroups)[number];
type Skill = SkillGroup["skills"][number];

// Skill level dot color mapping
const levelDot = {
  Expert: "bg-green-500",
  Proficient: "bg-yellow-400",
  Familiar: "bg-gray-400",
};

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-lg text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="max-w-4xl mx-auto py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold mb-4">Skills</h2>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DATA.skillGroups.map((group: SkillGroup, idx: number) => {
              return (
                <React.Fragment key={group.group}>
                  <div className="mb-6">
                    <h3
                      className={`font-semibold text-lg mb-2 ${
                        group.color
                          ? `text-${group.color}-700 dark:text-${group.color}-400`
                          : ""
                      }`}
                    >
                      {group.group}
                    </h3>
                    <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground"></div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill: Skill, sid: number) => {
                        const iconKey = skill.icon as keyof typeof Icons;
                        const IconComponent =
                          skill.icon && Icons[iconKey] ? Icons[iconKey] : null;
                        return (
                          <Badge
                            key={skill.label}
                            className="flex items-center gap-1 px-3 py-1 text-sm font-medium border-0 bg-muted text-foreground"
                          >
                            {IconComponent ? (
                              <span className="inline-block w-4 h-4 mr-1 align-middle">
                                {IconComponent({ className: "w-4 h-4" })}
                              </span>
                            ) : skill.icon ? (
                              <span className="inline-block w-4 h-4 mr-1 align-middle text-muted-foreground">
                                <Circle className="w-4 h-4" />
                              </span>
                            ) : null}
                            {skill.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 text-background px-3 py-1 text-sm font-semibold shadow-md">
                  My Projects
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 via-yellow-400 to-green-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
                  <span className="text-3xl sm:text-4xl">
                    Check out my latest work
                  </span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-2">
                  From simple websites to complex web & mobile apps, here are a
                  few projects where I merged design, code, and real-world
                  impact.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  technologies={project.technologies}
                  image={project.image || undefined}
                  video={project.video || undefined}
                  links={project.links}
                  images={project.images}
                  themeColor={project.themeColor}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat directly? Reach out to me instantly on WhatsApp for
                anything professional, collaboration, or just to say hi!
              </p>
              <div className="flex justify-center mt-4">
                <a
                  href="https://wa.me/7420884367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white font-semibold px-4 py-1.5 shadow-sm transition-colors duration-200 text-base hover:bg-[#1DA851]"
                >
                  <Icons.whatsapp
                    className="w-4 h-4"
                    style={{ fill: "white", color: "white" }}
                  />
                  Message me on WhatsApp
                </a>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
