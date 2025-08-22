import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface ToolCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  gradient?: string
}

export function ToolCard({
  title,
  description,
  href,
  icon: Icon,
  gradient = "from-primary/10 to-accent/10",
}: ToolCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
      <CardHeader className="relative">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="font-sans text-lg">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <CardDescription className="mb-4 text-sm leading-relaxed">{description}</CardDescription>
        <Button asChild className="w-full">
          <Link href={href}>Use Calculator</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
