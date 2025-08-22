"use client"

import type React from "react"

import { useEffect } from "react"

interface AdSenseBannerProps {
  adSlot?: string
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal"
  fullWidthResponsive?: boolean
  style?: React.CSSProperties
  className?: string
}

export function AdSenseBanner({
  adSlot = "1234567890",
  adFormat = "auto",
  fullWidthResponsive = true,
  style,
  className = "",
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      if (typeof window !== "undefined" && window.adsbygoogle) {
        // @ts-ignore
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error("AdSense error:", error)
    }
  }, [])

  // In development, show placeholder
  if (process.env.NODE_ENV === "development") {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30 ${className}`}
        style={{ minHeight: "90px", ...style }}
      >
        <span className="text-sm text-muted-foreground">Google AdSense Ad Space</span>
      </div>
    )
  }

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={{ display: "block", ...style }}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  )
}
