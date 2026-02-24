"use client"

import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "./reveal"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-16">
      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-glow-pink/10 blur-[120px] animate-float" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-glow-cyan/10 blur-[120px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow-violet/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Text side */}
        <div className="flex flex-col justify-center">
          <Reveal delay={0.1}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              พร้อมสอนพิเศษ Onsite/Online
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mb-6 font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.05] tracking-tight text-heading text-balance md:text-7xl lg:text-8xl">
              ครู
             
              <span className="bg-gradient-to-r from-glow-pink via-glow-cyan to-glow-amber bg-clip-text text-transparent animate-shimmer">
                 พี่เก้ทททท
              </span>
            </h1>
              <p>
                สวัสดีค่า แนะนำตัวนะคะชื่อ วิภัสศศิชา บำเพ็ญบุญ (เก้ท) ปัจจุบันเป็นนักศึกษาสถาบันเทคโนโลยีเจ้าคุณทหารลาดกระบัง คณะครุศาสตร์วิศวกรรมสาขาคอมพิวเตอร์ชั้นปีที่ 3🧚🏻‍♀️
📝รับสมัครนักเรียน(จำนวนมาก) ในการเรียนกับพี่นะคะ พี่ใจดีมากที่สุดในโลกก ไม่มีความกดดันใดๆ น้องไม่เครียด ฟิวจอยๆพี่สอนน้องค่ะ 

              </p>

          </Reveal>


          <Reveal delay={0.5}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {"มาพูดคุย"}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#projects"
                className="gradient-border inline-flex items-center gap-2 rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-heading transition-colors hover:bg-muted"
              >
                ดูผลงาน
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-10 flex items-center gap-5">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "Wipatsasicha0702@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Image side */}
        <div className="flex items-center justify-center lg:justify-end">
          <Reveal delay={0.3} direction="right">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-glow-pink/20 via-glow-cyan/20 to-glow-violet/20 blur-2xl" />

              <div className="gradient-border relative h-[380px] w-[300px] overflow-hidden rounded-3xl md:h-[480px] md:w-[380px]">
                <Image
                  src="/images/profile.png"
                  alt="Profile photo of Somchai Jaidee"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
