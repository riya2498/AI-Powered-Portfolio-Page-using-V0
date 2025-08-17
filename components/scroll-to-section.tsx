"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function ScrollToSection() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const section = searchParams.get("section")

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
          // Clear the query parameter after scrolling
          router.replace("/", { scroll: false })
        }, 100)
      }
    }
  }, [section, router])

  return null
}
