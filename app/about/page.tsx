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
      description: "All our calculators use precise algorithms and are thoroughly tested for accuracy.",
    },
    {
      icon: Zap,
      title: "Fast & Responsive",
      description: "Lightning-fast calculations with a responsive design that works on all devices.",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "We don't store your personal data. All calculations are performed locally in your browser.",
    },
    {
      icon: Users,
      title: "User Friendly",
      description: "Simple, intuitive interfaces designed for users of all technical backgrounds.",
    },
  ]

  return (
    <PageLayout title="About ToolNest" description="Learn more about our mission and calculator tools">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission Section */}
        <div className="text-center space-y-6">
          <h2 className="font-sans text-3xl font-bold">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            ToolNest was created to provide professionals, students, and everyday users with reliable, easy-to-use
            calculator tools. We believe that essential calculations should be accessible to everyone, without the need
            for complex software or expensive applications.
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
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <h3 className="font-semibold mb-2">BMI Calculator</h3>
                <p className="text-sm text-muted-foreground">
                  Calculate your Body Mass Index and get health recommendations based on WHO standards.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Age Calculator</h3>
                <p className="text-sm text-muted-foreground">
                  Find your exact age in years, months, and days, plus days until your next birthday.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Currency Converter</h3>
                <p className="text-sm text-muted-foreground">
                  Convert between major world currencies with real-time exchange rates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h2 className="font-sans text-2xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground">
            Try any of our calculator tools and experience the simplicity and accuracy of ToolNest.
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
