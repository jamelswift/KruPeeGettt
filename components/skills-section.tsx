"use client"

import { Code, Database, Layout, Settings, Palette, Zap } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "./reveal"
import type { LucideIcon } from "lucide-react"

interface SkillCategory {
  title: string
  icon: LucideIcon
  color: string
  glowColor: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "วิชาการสอน",
    icon: Layout,
    color: "text-glow-pink",
    glowColor: "bg-glow-pink/10 group-hover:bg-glow-pink/20",
    skills: ["คณิตศาสตร์", "วิทยาศาสตร์", "ภาษาไทย", "ภาษาอังกฤษ"],
  },
  {
    title: "วิธีการสอน",
    icon: Code,
    color: "text-glow-cyan",
    glowColor: "bg-glow-cyan/10 group-hover:bg-glow-cyan/20",
    skills: ["แบบสอนโต้ตอบ", "ออนไลน์", "บุคคลทั่วไป", "Onsite"],
  },
  {
    title: "เตรียมสอบ",
    icon: Database,
    color: "text-glow-amber",
    glowColor: "bg-glow-amber/10 group-hover:bg-glow-amber/20",
    skills: ["O-Net", "A-Net", "PAT", "สอบแข่งขัน"],
  },
  {
    title: "ทักษะติดต่อ",
    icon: Settings,
    color: "text-glow-violet",
    glowColor: "bg-glow-violet/10 group-hover:bg-glow-violet/20",
    skills: ["การวางแผน", "การติดตามความก้าวหน้า", "การสื่อสาร"],
  },
  {
    title: "เครื่องมือสอน",
    icon: Palette,
    color: "text-glow-pink",
    glowColor: "bg-glow-pink/10 group-hover:bg-glow-pink/20",
    skills: ["Google Meet", "Zoom", "สไลด์แสดงอักษร", "ห้องจริง"],
  },
  {
    title: "ความสามารถ",
    icon: Zap,
    color: "text-glow-amber",
    glowColor: "bg-glow-amber/10 group-hover:bg-glow-amber/20",
    skills: ["การเอื้ออควม", "ความเมตตา", "ความอดทน", "ความแม่นยำ"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-glow-cyan/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            ทักษะ
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-heading md:text-5xl">
            วิชา เทคนิค และความสามารถ
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-border/80"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${cat.glowColor}`}>
                    <Icon className={`h-5 w-5 ${cat.color}`} />
                  </div>

                  <h3 className="mb-3 font-[family-name:var(--font-heading)] text-lg font-semibold text-heading">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground transition-colors group-hover:border-border/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
