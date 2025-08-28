import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Users, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const features = [
    {
      icon: Calculator,
      title: "Accurate Calculations",
      description:
        "Every ToolNest calculator is built on proven formulas and algorithms. From health to finance, we carefully test our tools to ensure they produce results you can trust. Accuracy is our top priority, so whether you’re checking your BMI or converting currencies, you can rely on precise outputs every time.",
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description:
        "We designed ToolNest to be lightning-fast. No slow loading times, no clunky software. Just instant calculations that work seamlessly on mobile, tablet, and desktop. Whether you’re at home, in class, or on the go, ToolNest adapts to your device and delivers results within seconds.",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description:
        "Your privacy matters. ToolNest doesn’t ask for personal information or store your data. All calculations are performed in your browser, meaning your inputs stay on your device. We believe tools should be simple and safe — that’s why ToolNest is 100% privacy-friendly.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description:
        "Our mission is to make calculations simple for everyone. ToolNest’s clean and intuitive design ensures that even non-technical users can navigate easily. No confusing menus, no unnecessary steps — just straightforward tools that work as expected.",
    },
  ]

  return (
    <PageLayout title="About ToolNest" description="Learn more about our mission and calculator tools">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission Section */}
        <div className="text-center space-y-6">
          <h2 className="font-sans text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ToolNest was created with a simple idea: essential calculations should be accessible, accurate, and available
            to everyone — without the need for complicated software or expensive apps.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From students working on assignments to professionals handling day-to-day tasks, and even everyday users
            managing personal goals, ToolNest is designed to support real-life needs. Our focus is on creating tools
            that are reliable, easy to use, and available for free to anyone with an internet connection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="font-sans">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <Card className="bg-muted/30">
          <CardHeader className="text-center">
            <CardTitle className="font-sans text-2xl">Available Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              ToolNest offers a growing collection of practical calculators that can help with everyday tasks. Each tool
              is designed to be simple yet powerful, giving you instant answers backed by accurate formulas.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <h3 className="font-semibold mb-2">BMI Calculator</h3>
                <p className="text-sm text-muted-foreground">
                  Calculate your Body Mass Index using your height and weight. Learn where you fall on the WHO BMI scale
                  and gain insight into your health. Ideal for anyone monitoring fitness, diet, or wellness goals.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Age Calculator</h3>
                <p className="text-sm text-muted-foreground">
                  Quickly find your exact age in years, months, and days. You’ll also see how many days remain until your
                  next birthday or milestone. Perfect for planning events, anniversaries, and personal records.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Currency Converter</h3>
                <p className="text-sm text-muted-foreground">
                  Convert between major world currencies using up-to-date exchange rates. Ideal for travelers, businesses,
                  and anyone managing budgets in multiple currencies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h2 className="font-sans text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try any of our calculator tools today and experience the simplicity and accuracy that make ToolNest a trusted
            choice for quick online calculations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Explore Tools</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
