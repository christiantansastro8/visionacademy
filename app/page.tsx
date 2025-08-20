"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import Image from "next/image"

export default function ComingSoonPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3000ms] ease-out"
          style={{
            backgroundImage: `url('/ai-education-bg.png')`,
            transform: isVisible ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />

        {/* Logo/Brand */}
        <div className="absolute top-8 left-8 z-10">
          <div className="flex items-center gap-3">
            <Image src="/vision-academy-logo.png" alt="VisionAcademy Logo" width={32} height={32} className="w-8 h-8" />
            <h1 className="text-white font-serif font-bold text-xl tracking-wide">VisionAcademy</h1>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 bg-primary flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/vision-academy-logo.png"
                alt="VisionAcademy Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h1 className="text-white font-serif font-bold text-xl tracking-wide">VisionAcademy</h1>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
                GREAT THINGS ARE COMING
              </h2>
            </div>

            {/* Contact Block */}
            <div
              className={`space-y-4 pt-8 transition-all duration-1000 delay-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="space-y-3">
                <a
                  href="mailto:hello@visionacademy.com"
                  className="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-sans">hello@visionacademy.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <p className="text-gray-400 text-sm font-sans">© 2025 VisionAcademy. All Rights Reserved.</p>
      </div>
    </div>
  )
}
