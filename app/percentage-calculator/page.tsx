"use client"
import { CalculatorLayout } from "@/components/calculator-layout"
import { PageLayout } from "@/components/page-layout"
import { Percent } from "lucide-react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PercentageCalculator() {
    const [value, setValue] = useState<number | null>(null)
    const [percent, setPercent] = useState<number | null>(null)
    const [result, setResult] = useState<number | null>(null)

    const calculate = () => {
        if (value === null || percent === null || value <= 0 || percent < 0) {
            alert("Please enter valid values")
            return
        }
        setResult((value * percent) / 100)
    }

    const reset = () => {
        setValue(null)
        setPercent(null)
        setResult(null)
    }

    return (
        <PageLayout
            title="Percentage Calculator"
            description="Easily calculate percentages with this free online tool"
        >
            {/* Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-4">
                <h2 className="font-sans text-2xl font-bold">Free Online Percentage Calculator</h2>
                <p className="text-muted-foreground">
                    This calculator helps you find percentages in seconds. Whether you are calculating
                    discounts while shopping, interest in finance, grades in school, or statistics in
                    business, this tool gives you quick and accurate results.
                </p>
            </div>

            <CalculatorLayout
                title="Percentage Calculator"
                description="Enter values below to calculate percentage"
                icon={Percent}
            >
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="value">Value</Label>
                        <Input
                            id="value"
                            type="number"
                            placeholder="Enter a number (e.g. 200)"
                            value={value ?? ""}
                            onChange={(e) => setValue(Number(e.target.value))}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="percent">Percentage (%)</Label>
                        <Input
                            id="percent"
                            type="number"
                            placeholder="Enter percentage (e.g. 15)"
                            value={percent ?? ""}
                            onChange={(e) => setPercent(Number(e.target.value))}
                        />
                    </div>

                    <div className="flex gap-4">
                        <Button className="flex-1" onClick={calculate}>Calculate</Button>
                        <Button variant="outline" onClick={reset}>Reset</Button>
                    </div>

                    {result !== null && (
                        <Card className="bg-muted/30">
                            <CardContent className="pt-6 text-center">
                                <h3 className="text-lg font-semibold">Result</h3>
                                <p className="text-xl font-bold text-primary">
                                    {percent}% of {value} = {result}
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </CalculatorLayout>

            {/* Educational Content */}
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>How to Calculate a Percentage</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-2">
                        <p>The formula to calculate a percentage is:</p>
                        <p className="font-mono font-semibold">Result = (Value × Percentage) ÷ 100</p>
                        <p>Example: What is 15% of 200?</p>
                        <p className="font-mono">= (200 × 15) ÷ 100 = 30</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Common Uses of Percentages</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                        <ul className="list-disc list-inside space-y-1">
                            <li><b>Shopping:</b> Calculate discounts like 20% off sales.</li>
                            <li><b>Finance:</b> Find interest, profit margins, or growth rates.</li>
                            <li><b>Education:</b> Convert test scores into percentages.</li>
                            <li><b>Health:</b> Track body fat, nutrition values, or statistics.</li>
                        </ul>
                    </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground italic text-center">
                    Disclaimer: This tool provides quick calculations for educational and everyday use.
                    Always double-check for critical financial or academic purposes.
                </p>
            </div>
        </PageLayout>
    )
}
