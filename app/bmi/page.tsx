"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { CalculatorLayout } from "@/components/calculator-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Calculator } from "lucide-react"
import Link from "next/link"

interface BMIResult {
  bmi: number
  category: string
  color: string
  description: string
}

export default function BMICalculatorPage() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [unit, setUnit] = useState<"metric" | "imperial">("metric")
  const [result, setResult] = useState<BMIResult | null>(null)

  const calculateBMI = () => {
    const h = Number.parseFloat(height)
    const w = Number.parseFloat(weight)

    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight values")
      return
    }

    let bmi: number
    if (unit === "metric") {
      const heightInMeters = h / 100
      bmi = w / (heightInMeters * heightInMeters)
    } else {
      bmi = (w / (h * h)) * 703
    }

    let category: string
    let color: string
    let description: string

    if (bmi < 18.5) {
      category = "Underweight"
      color = "text-blue-600"
      description = "You may need to gain weight. Consider consulting with a healthcare provider."
    } else if (bmi < 25) {
      category = "Normal weight"
      color = "text-green-600"
      description = "You have a healthy weight. Keep up the good work!"
    } else if (bmi < 30) {
      category = "Overweight"
      color = "text-yellow-600"
      description = "You may benefit from weight loss. Consider a balanced diet and exercise."
    } else {
      category = "Obese"
      color = "text-red-600"
      description = "Consider consulting with a healthcare provider for a weight management plan."
    }

    setResult({
      bmi: Math.round(bmi * 10) / 10,
      category,
      color,
      description,
    })
  }

  const reset = () => {
    setHeight("")
    setWeight("")
    setResult(null)
  }

  return (
    <PageLayout title="BMI Calculator" description="Calculate your Body Mass Index and health category">
      <CalculatorLayout
        title="BMI Calculator"
        description="Check your Body Mass Index (BMI) and see your health category based on WHO standards."
        icon={Calculator}
      >
        <div className="space-y-8">
          {/* Intro Content */}
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Body Mass Index (BMI) is a simple measurement that uses your height and weight to estimate whether you are
              underweight, at a healthy weight, overweight, or obese. It’s widely used by healthcare professionals as a
              quick screening tool for potential health risks.
            </p>
            <p className="text-muted-foreground">
              Use the calculator below to find out your BMI. Choose metric (cm, kg) or imperial (inches, lbs) units, and
              you’ll receive both your BMI score and your health category instantly.
            </p>
          </div>

          {/* Unit Selection */}
          <div className="flex gap-4 justify-center">
            <Button
              variant={unit === "metric" ? "default" : "outline"}
              onClick={() => setUnit("metric")}
              className="w-24"
            >
              Metric
            </Button>
            <Button
              variant={unit === "imperial" ? "default" : "outline"}
              onClick={() => setUnit("imperial")}
              className="w-24"
            >
              Imperial
            </Button>
          </div>

          {/* Input Fields */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="height">Height {unit === "metric" ? "(cm)" : "(inches)"}</Label>
              <Input
                id="height"
                type="number"
                placeholder={unit === "metric" ? "170" : "67"}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight {unit === "metric" ? "(kg)" : "(lbs)"}</Label>
              <Input
                id="weight"
                type="number"
                placeholder={unit === "metric" ? "70" : "154"}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button onClick={calculateBMI} className="flex-1">
              Calculate BMI
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {/* Results */}
          {result && (
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">{result.bmi}</div>
                    <div className="text-sm text-muted-foreground">BMI Score</div>
                  </div>
                  <div>
                    <div className={`text-xl font-semibold ${result.color}`}>{result.category}</div>
                    <p className="text-sm text-muted-foreground mt-2">{result.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Educational Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">How BMI is Calculated</h3>
            <p className="text-muted-foreground">
              The formula is simple: BMI = weight (kg) ÷ [height (m)]². For imperial units, it’s BMI = (weight (lbs) ÷
              [height (in)]²) × 703. The result places you into one of four categories:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Underweight: Below 18.5</li>
              <li>Normal weight: 18.5 – 24.9</li>
              <li>Overweight: 25 – 29.9</li>
              <li>Obese: 30 and above</li>
            </ul>
            <p className="text-muted-foreground">
              Remember, BMI is a general guideline. It doesn’t distinguish between muscle and fat or account for age,
              gender, or body type. Athletes, for example, may have a high BMI due to muscle mass but still be healthy.
            </p>
            <p className="text-muted-foreground">
              Want to try more? Check out our{" "}
              <Link href="/age" className="underline text-primary">
                Age Calculator
              </Link>{" "}
              or{" "}
              <Link href="/currency" className="underline text-primary">
                Currency Converter
              </Link>{" "}
              for other useful tools.
            </p>
          </div>
        </div>
      </CalculatorLayout>
    </PageLayout>
  )
}
