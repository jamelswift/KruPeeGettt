"use client"

import Image from "next/image"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "./reveal"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 lg:py-36">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-glow-violet/5 blur-[120px]" />
        <div className="absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-glow-pink/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">
              ติดต่อ
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-heading md:text-6xl">
              {"สามารถติดต่องาน"}
              <br />
              <span className="bg-gradient-to-r from-glow-pink via-glow-cyan to-glow-amber bg-clip-text text-transparent">
                กับเก้ท
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-foreground">
              มีคำถามหรือต้องการเรียนพิเศษ สามารถติดต่องานได้ทุกเวลาค่ะ
              เก้ทเต็มใจที่จะช่วยเหลือและอธิบายรายละเอียดการสอนเพิ่มเติมค่ะ
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <motion.a
                href="tel:0986234925"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group gradient-border flex items-center gap-4 rounded-2xl bg-card p-6 text-left transition-all"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-glow-pink/10 transition-colors group-hover:bg-glow-pink/20">
                  <Mail className="h-6 w-6 text-glow-pink" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">โทรศัพท์</p>
                  <p className="truncate font-semibold text-heading">098-623-4925</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.a>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="gradient-border flex items-center gap-4 rounded-2xl bg-card p-6 text-left"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-glow-cyan/10">
                  <MapPin className="h-6 w-6 text-glow-cyan" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Line ID</p>
                  <p className="font-semibold text-heading">Wicha0702</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-6">
              <a
                href="https://line.me/ti/p/esYqWL8FXc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                ติดต่อทาง Line
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>

              {/* QR Code Section */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="gradient-border rounded-2xl bg-card p-6"
              >
                <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
                  สแกน QR Code เพื่อเพิ่มเพื่อน Line
                </p>
                <div className="relative h-60 w-60 overflow-hidden rounded-xl">
                  <Image
                    src="/images/Line.png"
                    alt="Line QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
