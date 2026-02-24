"use client"

import { useState, useEffect } from "react"
import { Star, Send } from "lucide-react"
import { motion } from "motion/react"
import { Reveal } from "./reveal"
import { supabase } from "@/lib/supabase"

interface Testimonial {
  id: string
  parent_name: string
  student_name: string
  grade: string
  rating: number
  comment: string
  created_at: string
}

export function TestimonialsSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    grade: "",
    rating: 0,
    comment: "",
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch testimonials from Supabase
  const fetchTestimonials = async () => {
    try {
      if (!supabase) {
        setTestimonials([])
        return
      }
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) {
        console.error('Error fetching testimonials:', error)
      } else {
        setTestimonials(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!supabase) {
      alert('ระบบไม่พร้อมทำการส่ง กรุณาลองใหม่ภายหลัง')
      return
    }
    
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert({
          parent_name: formData.parentName,
          student_name: formData.studentName,
          grade: formData.grade,
          rating: formData.rating,
          comment: formData.comment,
        })

      if (error) {
        console.error('Error submitting testimonial:', error)
        alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
      } else {
        alert('ขอบคุณสำหรับความคิดเห็นของท่าน!')
        setFormData({
          parentName: "",
          studentName: "",
          grade: "",
          rating: 0,
          comment: "",
        })
        // Refresh testimonials list
        fetchTestimonials()
      }
    } catch (error) {
      console.error('Error:', error)
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="testimonials" className="relative py-28 lg:py-36">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-glow-violet/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            ความคิดเห็น
          </p>
          <h2 className="mt-3 mb-16 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-heading md:text-5xl">
            การประเมินจากผู้ปกครอง
          </h2>
        </Reveal>

        {/* Testimonial Form - แสดงก่อน */}
        <div className="mx-auto max-w-4xl mb-20">
          <Reveal delay={0.2}>
            <h3 className="mb-8 text-center text-2xl font-bold text-heading">
              แบ่งปันประสบการณ์ของคุณ
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-lg"
            >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Name */}
              <div>
                <label htmlFor="parentName" className="mb-2 block text-sm font-medium text-heading">
                  ชื่อผู้ปกครอง <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="กรอกชื่อผู้ปกครอง"
                />
              </div>

              {/* Student Name & Grade */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="studentName" className="mb-2 block text-sm font-medium text-heading">
                    ชื่อนักเรียน <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="กรอกชื่อนักเรียน"
                  />
                </div>

                <div>
                  <label htmlFor="grade" className="mb-2 block text-sm font-medium text-heading">
                    ระดับชั้น <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">เลือกระดับชั้น</option>
                    <option value="ป.1">ป.1</option>
                    <option value="ป.2">ป.2</option>
                    <option value="ป.3">ป.3</option>
                    <option value="ป.4">ป.4</option>
                    <option value="ป.5">ป.5</option>
                    <option value="ป.6">ป.6</option>
                    <option value="ม.1">ม.1</option>
                    <option value="ม.2">ม.2</option>
                    <option value="ม.3">ม.3</option>
                    <option value="ม.4">ม.4</option>
                    <option value="ม.5">ม.5</option>
                    <option value="ม.6">ม.6</option>
                  </select>
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="mb-3 block text-sm font-medium text-heading">
                  ให้คะแนน <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 transition-colors ${
                          star <= (hoveredRating || formData.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({formData.rating} ดาว)
                    </span>
                  )}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label htmlFor="comment" className="mb-2 block text-sm font-medium text-heading">
                  ความคิดเห็น <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="แบ่งปันประสบการณ์และความคิดเห็นของท่าน..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || formData.rating === 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "กำลังส่ง..." : "ส่งความคิดเห็น"}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            </form>
          </motion.div>
        </Reveal>
        </div>

        {/* Display existing testimonials - แสดงหลัง */}
        {testimonials.length > 0 && (
          <>
            <Reveal delay={0.4}>
              <h3 className="mb-8 text-center text-2xl font-bold text-heading">
                รีวิวจากผู้ปกครอง
              </h3>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <Reveal key={testimonial.id} delay={0.5 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Rating Stars */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="mb-6 text-sm leading-relaxed text-foreground italic">
                      "{testimonial.comment}"
                    </p>

                    {/* Author Info */}
                    <div>
                      <p className="font-semibold text-heading">{testimonial.parent_name}</p>
                      <p className="text-sm text-muted-foreground">
                        ผู้ปกครอง {testimonial.student_name} {testimonial.grade}
                      </p>
                    </div>

                    {/* Gradient accent */}
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </>
        )}

        {isLoading && (
          <div className="mt-16 text-center text-muted-foreground">
            กำลังโหลดความคิดเห็น...
          </div>
        )}
      </div>
    </section>
  )
}
