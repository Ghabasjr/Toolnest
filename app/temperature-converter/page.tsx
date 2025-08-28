"use client"
import { CalculatorLayout } from "@/components/calculator-layout"
import { PageLayout } from "@/components/page-layout"
import { useState } from "react"
import { Thermometer } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export default function TemperatureConverter() {
    const [celsius, setCelsius] = useState<string>("")
    const [fahrenheit, setFahrenheit] = useState<string>("")
    const [kelvin, setKelvin] = useState<string>("")

    const convertFromCelsius = (value: number) => {
        setCelsius(value.toString())
        setFahrenheit(((value * 9) / 5 + 32).toFixed(2))
        setKelvin((value + 273.15).toFixed(2))
    }

    const convertFromFahrenheit = (value: number) => {
        setFahrenheit(value.toString())
        const c = ((value - 32) * 5) / 9
        setCelsius(c.toFixed(2))
        setKelvin((c + 273.15).toFixed(2))
    }

    const convertFromKelvin = (value: number) => {
        setKelvin(value.toString())
        const c = value - 273.15
        setCelsius(c.toFixed(2))
        setFahrenheit(((c * 9) / 5 + 32).toFixed(2))
    }

    return (
        <PageLayout>
            <CalculatorLayout
                title="Temperature Converter"
                description="Convert temperatures between Celsius, Fahrenheit, and Kelvin"
                icon={Thermometer}
            >
                <div className="space-y-4">
                    {/* Celsius Input */}
                    <div className="space-y-2">
                        <Label htmlFor="celsius">Celsius (°C)</Label>
                        <Input
                            id="celsius"
                            type="number"
                            placeholder="Enter °C"
                            value={celsius}
                            onChange={(e) => convertFromCelsius(Number(e.target.value))}
                        />
                    </div>

                    {/* Fahrenheit Input */}
                    <div className="space-y-2">
                        <Label htmlFor="fahrenheit">Fahrenheit (°F)</Label>
                        <Input
                            id="fahrenheit"
                            type="number"
                            placeholder="Enter °F"
                            value={fahrenheit}
                            onChange={(e) => convertFromFahrenheit(Number(e.target.value))}
                        />
                    </div>

                    {/* Kelvin Input */}
                    <div className="space-y-2">
                        <Label htmlFor="kelvin">Kelvin (K)</Label>
                        <Input
                            id="kelvin"
                            type="number"
                            placeholder="Enter K"
                            value={kelvin}
                            onChange={(e) => convertFromKelvin(Number(e.target.value))}
                        />
                    </div>

                    {/* Preview Card */}
                    {(celsius || fahrenheit || kelvin) && (
                        <Card className="bg-muted/30 mt-4">
                            <CardContent className="pt-4 text-center">
                                <p className="text-sm text-muted-foreground mb-2">Converted Values:</p>
                                <p className="font-medium">🌡 {celsius || "--"} °C | {fahrenheit || "--"} °F | {kelvin || "--"} K</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </CalculatorLayout>
        </PageLayout>
    )
}
