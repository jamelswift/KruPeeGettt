"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { Reveal } from "./reveal"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  href: string
  accent: string
}

const projects: Project[] = [
  {
    title: "วิชาคณิตศาสตร์",
    description:
      "สอนคณิตศาสตร์ตั้งแต่ อนุบาล-มัธยมศึกษาตอนปลาย พร้อมสอบ O-Net A-Net และ PAT",
    image: "/images/project-1.jpg",
    tags: ["ฝึกเนื้อหาพื้นฐานตามระดับชั้น", "ตะลุยข้อสอบ", "ฝึกทักษะการคิดวิเคราะห์โจทย์", "ติวสอบเข้า"],
    href: "#",
    accent: "from-glow-pink/20 to-glow-violet/20",
  },
  {
    title: "วิชาวิทยาศาสตร์",
    description:
      "สอนวิทยาศาสตร์ทุกระดับ จากพื้นฐานถึงการเตรียมสอบ เคมี ฟิสิกส์ ชีววิทยา",
    image: "/images/project-2.jpg",
    tags: ["เคมี", "ฟิสิกส์", "ชีววิทยา"],
    href: "#",
    accent: "from-glow-cyan/20 to-glow-amber/20",
  },
  {
    title: "วิชาภาษาและสังคมศึกษา",
    description:
      "สอนภาษาไทย ภาษาอังกฤษ สังคมศึกษา ประวัติศาสตร์ เพื่อพัฒนาทักษะการอ่านและการเขียน",
    image: "/images/project-3.jpg",
    tags: ["ภาษาไทย", "ภาษาอังกฤษ", "สังคมศึกษา"],
    href: "#",
    accent: "from-glow-amber/20 to-glow-pink/20",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-glow-amber/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            วิชาที่สอน
          </p>
          <h2 className="mt-3 mb-16 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-heading md:text-5xl">
            สอนวิชาอะไรบ้าง???
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.12}>
              <motion.a
                href={project.href}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* Image with overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-heading" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-heading">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
