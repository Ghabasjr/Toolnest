"use client"
import { CalculatorLayout } from "@/components/calculator-layout"
import { PageLayout } from "@/components/page-layout"
import { useState } from "react"
import { DollarSign } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoanCalculator() {
    const [amount, setAmount] = useState<number>(0)
    const [rate, setRate] = useState<number>(0)
    const [years, setYears] = useState<number>(0)
    const [emi, setEmi] = useState<number | null>(null)

    const calculateEMI = () => {
        const principal = amount
        const monthlyRate = rate / 100 / 12
        const months = years * 12
        if (principal <= 0 || rate <= 0 || years <= 0) {
            alert("Please enter valid loan details")
            return
        }
        const emiValue =
            (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1)
        setEmi(emiValue || 0)
    }

    return (
        <PageLayout
            title="Loan / EMI Calculator"
            description="Easily calculate your monthly loan payments and plan finances better"
        >
            {/* Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-8 space-y-4">
                <h2 className="font-sans text-2xl font-bold">Free EMI Calculator</h2>
                <p className="text-muted-foreground">
                    An EMI (Equated Monthly Installment) calculator helps you quickly estimate your monthly
                    repayment amount for loans. This includes home loans, car loans, personal loans, or
                    education loans. Knowing your EMI in advance allows you to plan your budget more
                    effectively.
                </p>
            </div>

            <CalculatorLayout
                title="Loan / EMI Calculator"
                description="Enter loan details below to calculate your monthly EMI"
                icon={DollarSign}
            >
                <Input
                    type="number"
                    placeholder="Loan Amount"
                    value={amount || ""}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="border p-2 w-full mb-2"
                />
                <Input
                    type="number"
                    placeholder="Interest Rate (%)"
                    value={rate || ""}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="border p-2 w-full mb-2"
                />
                <Input
                    type="number"
                    placeholder="Loan Tenure (years)"
                    value={years || ""}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="border p-2 w-full mb-2"
                />
                <Button onClick={calculateEMI} className="w-full mt-2">
                    Calculate
                </Button>

                {emi !== null && (
                    <Card className="bg-muted/30 mt-6">
                        <CardContent className="pt-6 text-center">
                            <h3 className="text-lg font-semibold">Monthly EMI</h3>
                            <p className="text-2xl font-bold text-primary">${emi.toFixed(2)}</p>
                        </CardContent>
                    </Card>
                )}
            </CalculatorLayout>

            {/* Educational Section */}
            <div className="max-w-3xl mx-auto mt-12 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>How to Use the Loan Calculator</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-2">
                        <p>1. Enter the total loan amount you want to borrow.</p>
                        <p>2. Input the annual interest rate offered by the bank or lender.</p>
                        <p>3. Provide the loan tenure (in years).</p>
                        <p>4. Click <b>Calculate</b> to see your monthly EMI instantly.</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>What is EMI?</CardTitle>
                    </CardHeader>
                    <CardContent className="text-muted-foreground space-y-2">
                        <p>
                            EMI stands for <b>Equated Monthly Installment</b>. It is the fixed payment you make
                            every month until your loan is fully repaid.
                        </p>
                        <ul className="list-disc list-inside">
                            <li><b>Principal</b> – The original loan amount borrowed.</li>
                            <li><b>Interest</b> – The cost of borrowing the money.</li>
                            <li><b>Tenure</b> – The loan duration over which you repay.</li>
                        </ul>
                        <p>
                            The EMI formula ensures you pay both interest and principal in every installment,
                            making repayment structured and predictable.
                        </p>
                    </CardContent>
                </Card>

                <p className="text-xs text-muted-foreground italic text-center">
                    Disclaimer: This EMI calculation is approximate and may vary depending on bank policies,
                    processing fees, and other conditions. Always confirm with your financial institution.
                </p>
            </div>
        </PageLayout>
    )
}
