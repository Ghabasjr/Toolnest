"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AdSenseBannerProps {
  adSlot?: string
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal"
  fullWidthResponsive?: boolean
  style?: React.CSSProperties
  className?: string
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function AdSenseBanner({
  adSlot = "3930917121",
  adFormat = "auto",
  fullWidthResponsive = true,
  style,
  className = "",
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const adInitialized = useRef(false)

  useEffect(() => {
    // In development, don't initialize ads
    if (process.env.NODE_ENV === "development") {
      return
    }

    // Wait for AdSense script to load
    const initializeAd = () => {
      if (adInitialized.current || !adRef.current) {
        return
      }

      try {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          // Initialize the ad
          window.adsbygoogle.push({})
          adInitialized.current = true
        } else {
          // Retry after a short delay if script isn't loaded yet
          setTimeout(initializeAd, 100)
        }
      } catch (error) {
        console.error("AdSense error:", error)
      }
    }

    // Check if script is already loaded
    if (typeof window !== "undefined" && window.adsbygoogle) {
      initializeAd()
    } else {
      // Wait for script to load
      const checkInterval = setInterval(() => {
        if (typeof window !== "undefined" && window.adsbygoogle) {
          clearInterval(checkInterval)
          initializeAd()
        }
      }, 100)

      // Cleanup after 10 seconds
      setTimeout(() => {
        clearInterval(checkInterval)
      }, 10000)
    }
  }, [])

  // In development, show placeholder
  if (process.env.NODE_ENV === "development") {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/30 ${className}`}
        style={{ minHeight: "90px", ...style }}
      >
        <span className="text-sm text-muted-foreground">Google AdSense Ad Space (Dev Mode)</span>
      </div>
    )
  }

  return (
    <div ref={adRef} className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8493316210982445"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  )
}
