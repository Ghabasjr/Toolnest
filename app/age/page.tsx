"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { CalculatorLayout } from "@/components/calculator-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface AgeResult {
  years: number
  months: number
  days: number
  totalDays: number
  nextBirthday: number
}

export default function AgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<AgeResult | null>(null)

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please enter your birth date")
      return
    }

    const birth = new Date(birthDate)
    const today = new Date()

    if (birth > today) {
      alert("Birth date cannot be in the future")
      return
    }

    // Calculate age
    let years = today.getFullYear() - birth.getFullYear()
    let months = today.getMonth() - birth.getMonth()
    let days = today.getDate() - birth.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    // Calculate total days
    const timeDiff = today.getTime() - birth.getTime()
    const totalDays = Math.floor(timeDiff / (1000 * 3600 * 24))

    // Calculate days until next birthday
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1)
    }
    const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 3600 * 24))

    setResult({
      years,
      months,
      days,
      totalDays,
      nextBirthday: daysToNextBirthday,
    })
  }

  const reset = () => {
    setBirthDate("")
    setResult(null)
  }

  return (
    <PageLayout title="Age Calculator" description="Calculate your exact age in years, months, and days">
      <CalculatorLayout
        title="Age Calculator"
        description="Enter your birth date to find out your exact age"
        icon={Calendar}
      >
        <div className="space-y-6">
          {/* Input Field */}
          <div className="space-y-2">
            <Label htmlFor="birthdate">Birth Date</Label>
            <Input
              id="birthdate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split("T")[0]}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button onClick={calculateAge} className="flex-1">
              Calculate Age
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {/* Results */}
          {result && (
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {/* Main Age Display */}
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {result.years} years, {result.months} months, {result.days} days
                    </div>
                    <div className="text-sm text-muted-foreground">Your exact age</div>
                  </div>

                  {/* Additional Information */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-semibold text-primary">{result.totalDays.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">Total days lived</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-semibold text-primary">{result.nextBirthday}</div>
                      <div className="text-sm text-muted-foreground">Days until next birthday</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </CalculatorLayout>
    </PageLayout>
  )
}
