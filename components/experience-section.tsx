"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"
import { Reveal } from "./reveal"

interface ExperienceItem {
  period: string
  title: string
  company: string
  companyUrl?: string
  description: string
  skills: string[]
  color: string
}

const experiences: ExperienceItem[] = [
  {
    period: "2023 -- ปัจจุบัน",
    title: "ครูสอนพิเศษอิสระ",
    company: "Tutoring",
    companyUrl: "#",
    description:
      "สอนพิเศษ Onsite และ Online สำหรับนักเรียนมัธยมศึกษา ชั้น อ.1 - ม.6 เตรียมสอบ O-Net และ A-Net",
    skills: ["ทำสื่อการสอนให้เข้ากับผู้เรียน", "ติวเข้าสอบเข้า", "เน้นทักษะการคิดวิเคราะห์", "สอนการบ้าน", "สอนเทคนิคการทำข้อสอบ", "สอนเนื้อหาส่วนที่เรียน", "รับดูเเลวิจัย/โปรเจคจบ", "การวางแผน", "การติดตามความก้าวหน้า", "การประเมินผล"],
    color: "bg-glow-pink",
  },
  {
    period: "2025 -- ปัจจุบัน",
    title: "ครูสอนพิเศษตามสถาบัน",
    company: "Connect Language ซีคอน ศรีนนครินทร์ , สถาบันกวดวิชา",
    companyUrl: "#",
    description:
      "สอนการบ้านและเตรียมสอบให้กับนักเรียน ระดับที่ต่างชั้นหลายระดับ โดยใช้วิธีสอนแบบ Interactive",
    skills: ["การวางแผนการสอนทำสื่อเอง", "สอนเนื้อหาที่ผู้เรียนต้องการความเข้าใจ", "สร้างข้อสอบเพื่อเตรียมสอบจริง", "สอนการบ้าน", "สอนเทคนิคการทำข้อสอบ", "สอนเนื้อหาส่วนที่เรียน","ติวสอบเข้า"],
    color: "bg-glow-cyan",
  },
  {
    period: "2023 -- ปัจจุบัน",
    title: "ครูสอนการบ้าน",
    company: "สอนได้ทั้งออนไลน์และออนไซต์",
    companyUrl: "#",
    description:
      "สอนการบ้านให้กับเด็กประถมศึกษา และมัธยมศึกษา ปลายทาง ให้ความช่วยเหลือในการทำการบ้าน",
    skills: ["การสอนเบเสิก", "วิทยาศาสตร์", "คณิตศาสตร์", "ภาษาอังกฤษ"],
    color: "bg-glow-amber",
  },
  {
    period: "2025",
    title: "นักศึกษาสังเกตการณ์สอน",
    company: "โรงเรียนกาญจนาภิเษกหนองจอก",
    companyUrl: "#",
    description:
      "ช่วยงานสอนและเตรียมเนื้อหาบทเรียน ทำงานร่วมกับครูพี่ปรึกษาเพื่อวางแผนการสอนและประเมินผลการเรียนรู้ของนักเรียน",
    skills: ["การเตรียมบทเรียน", "การจัดระเบียบ", "ทดลองสอนจริง"],
    color: "bg-glow-violet",
  },
]

export function ExperienceSection() {
  return (
    <section id="work" className="relative py-28 lg:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-glow-pink/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            ประสบการณ์การสอน
          </p>
          <h2 className="mt-3 mb-16 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-heading md:text-5xl">
            ประวัติการสอน
          </h2>
        </Reveal>

        <div className="relative space-y-6">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-gradient-to-b from-primary/50 via-accent/50 to-glow-violet/50 md:block" />

          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group relative grid gap-4 md:grid-cols-[40px_1fr]"
              >
                {/* Timeline dot */}
                <div className="hidden items-start pt-6 md:flex">
                  <div className={`h-3 w-3 rounded-full ${exp.color} ring-4 ring-background`} />
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5">
                  <div className="mb-1 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      {exp.period}
                    </span>
                    <span className={`hidden h-1.5 w-1.5 rounded-full md:block ${exp.color}`} />
                  </div>

                  <h3 className="text-lg font-semibold text-heading">
                    {exp.title}
                    <span className="text-muted-foreground">{" / "}</span>
                    <a
                      href={exp.companyUrl}
                      className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {exp.company}
                    </a>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
