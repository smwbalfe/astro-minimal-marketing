"use client"

import { useEffect, useState } from "react"
import { Particles } from "@/components/ui/particles"

export default function ParticlesWrapper() {
  const [color, setColor] = useState("#ffffff")

  useEffect(() => {
    setColor("#ffffff")
  }, [])

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  )
}
