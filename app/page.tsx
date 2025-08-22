import { PageLayout } from "@/components/page-layout"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import { AdSenseBanner } from "@/components/adsense-banner"
import { Calculator, Calendar, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const tools = [
    {
      title: "BMI Calculator",
      description:
        "Calculate your Body Mass Index and get health category recommendations based on your height and weight.",
      href: "/bmi",
      icon: Calculator,
      gradient: "from-green-100 to-emerald-100",
    },
    {
      title: "Age Calculator",
      description: "Find out your exact age in years, months, and days. Perfect for planning and milestone tracking.",
      href: "/age",
      icon: Calendar,
      gradient: "from-blue-100 to-cyan-100",
    },
    {
      title: "Currency Converter",
      description: "Convert between different currencies with real-time exchange rates from around the world.",
      href: "/currency",
      icon: DollarSign,
      gradient: "from-amber-100 to-yellow-100",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
          Welcome to <span className="text-primary">ToolNest</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Your comprehensive suite of professional calculator tools. Fast, accurate, and easy to use for all your
          calculation needs.
        </p>

        {/* AdSense Ad Space */}
        <div className="mb-8 flex justify-center">
          <AdSenseBanner
            adSlot="1111111111"
            adFormat="auto"
            className="w-full max-w-4xl"
            style={{ minHeight: "90px" }}
          />
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            icon={tool.icon}
            gradient={tool.gradient}
          />
        ))}
      </div>

      {/* Features Section */}
      <div className="bg-muted/30 rounded-lg p-8 mb-12">
        <h2 className="font-sans text-2xl font-bold text-center mb-8">Why Choose ToolNest?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-sans font-semibold mb-2">Accurate Results</h3>
            <p className="text-sm text-muted-foreground">
              All calculations are performed with precision and validated for accuracy.
            </p>
          </div>
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-sans font-semibold mb-2">Easy to Use</h3>
            <p className="text-sm text-muted-foreground">
              Simple, intuitive interfaces designed for quick and efficient calculations.
            </p>
          </div>
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-sans font-semibold mb-2">Always Free</h3>
            <p className="text-sm text-muted-foreground">
              All our calculator tools are completely free to use, no registration required.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="font-sans text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Choose any calculator above to begin, or learn more about ToolNest.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/bmi">Try BMI Calculator</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
