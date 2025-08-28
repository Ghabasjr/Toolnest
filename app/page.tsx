import { PageLayout } from "@/components/page-layout"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import { AdSenseBanner } from "@/components/adsense-banner"
import { Calculator, Calendar, DollarSign, ArrowRight, Percent, Thermometer } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const tools = [
    {
      title: "BMI Calculator",
      description:
        "Instantly calculate your Body Mass Index using height and weight. Get categorized health results such as underweight, healthy, overweight, or obese based on global standards.",
      href: "/bmi",
      icon: Calculator,
      gradient: "from-green-100 to-emerald-100",
    },
    {
      title: "Age Calculator",
      description:
        "Easily calculate your exact age in years, months, and days. Perfect for birthdays, milestone planning, or personal records.",
      href: "/age",
      icon: Calendar,
      gradient: "from-blue-100 to-cyan-100",
    },
    {
      title: "Currency Converter",
      description:
        "Convert between 150+ world currencies with real-time exchange rates. Simple, fast, and accurate for travelers, businesses, and students.",
      href: "/currency",
      icon: DollarSign,
      gradient: "from-amber-100 to-yellow-100",
    },
    {
      title: "Loan / EMI Calculator",
      description:
        "Quickly calculate your monthly EMI payments based on loan amount, interest rate, and tenure. Great for planning home, car, or personal loans.",
      href: "/loan-calculator",
      icon: DollarSign,
      gradient: "from-purple-100 to-indigo-100",
    },
    {
      title: "Tip Calculator",
      description:
        "Easily split your bill and calculate tips at restaurants, cafes, or group outings. Get per-person amounts instantly.",
      href: "/tip-calculator",
      icon: Calculator,
      gradient: "from-pink-100 to-rose-100",
    },
    {
      title: "Temperature Converter",
      description:
        "Convert between Celsius, Fahrenheit, and Kelvin with accurate results. Ideal for science projects, cooking, or travel needs.",
      href: "/temperature-converter",
      icon: Thermometer,
      gradient: "from-red-100 to-orange-100",
    },
    {
      title: "Percentage Calculator",
      description:
        "Easily calculate percentages, percentage increase/decrease, and comparisons. Great for math, finance, and everyday use.",
      href: "/percentage-calculator",
      icon: Percent,
      gradient: "from-teal-100 to-emerald-100",
    },
  ]

  return (
    <PageLayout
      title="ToolNest - Free Online Calculators (BMI, Currency, Loan, Tip, Percentage)"
      description="ToolNest offers a suite of free calculators including BMI, Age, Loan/EMI, Currency Converter, Tip, Temperature, and Percentage calculators. Fast, accurate, and easy to use."
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-4">
          Welcome to <span className="text-primary">ToolNest</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          ToolNest is your all-in-one platform for free online calculators. From financial tools like loan and currency
          converters to daily utilities like BMI and tip calculators — everything is designed to be fast, accurate, and
          easy to use.
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
              All calculations are based on verified formulas used worldwide in finance, health, and mathematics. You
              can trust ToolNest for precision.
            </p>
          </div>
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
              <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-sans font-semibold mb-2">Easy to Use</h3>
            <p className="text-sm text-muted-foreground">
              Our calculators are designed with simplicity in mind — clean layouts, fast results, and fully
              mobile-friendly for use on the go.
            </p>
          </div>
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-sans font-semibold mb-2">Always Free</h3>
            <p className="text-sm text-muted-foreground">
              ToolNest is completely free to use — no account required, no hidden charges, and no personal data
              collected. Just open and calculate.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="font-sans text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Try one of our most popular tools, or explore the full suite of calculators available on ToolNest.
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
