"use client"

import dynamic from "next/dynamic"

// Dynamically import the ScrollToSection component with SSR disabled
const ScrollToSection = dynamic(() => import("./scroll-to-section").then((mod) => mod.ScrollToSection), {
  ssr: false,
})

export function ClientScrollToSection() {
  return <ScrollToSection />
}
