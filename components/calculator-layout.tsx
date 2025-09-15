import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdSenseBanner } from "./adsense-banner"
import type { LucideIcon } from "lucide-react"

interface CalculatorLayoutProps {
  title: string
  description: string
  icon: LucideIcon
  children: React.ReactNode
}

export function CalculatorLayout({ title, description, icon: Icon, children }: CalculatorLayoutProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="font-sans text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">{children}</CardContent>
      </Card>

      {/* AdSense Ad Space */}
      <div className="mt-8 flex justify-center">
        <AdSenseBanner adSlot="3930917121" adFormat="auto" className="w-full max-w-2xl" style={{ minHeight: "90px" }} />
      </div>
    </div>
  )
}
