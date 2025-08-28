"use client"
import { CalculatorLayout } from "@/components/calculator-layout"
import { PageLayout } from "@/components/page-layout"
import { Calculator } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function TipCalculator() {
    const [bill, setBill] = useState<number>(0)
    const [tipPercent, setTipPercent] = useState<number>(10)
    const [people, setPeople] = useState<number>(1)

    const totalTip = (bill * tipPercent) / 100
    const totalBill = bill + totalTip
    const perPerson = people > 0 ? totalBill / people : 0

    return (
        <PageLayout title="Tip Calculator" description="Easily calculate tips and split bills">
            <CalculatorLayout
                title="Tip Calculator"
                description="Calculate your tip and split the bill among friends"
                icon={Calculator}
            >
                <Input
                    type="number"
                    placeholder="Bill Amount"
                    value={bill || ""}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="mb-2"
                />
                <Input
                    type="number"
                    placeholder="Tip %"
                    value={tipPercent || ""}
                    onChange={(e) => setTipPercent(Number(e.target.value))}
                    className="mb-2"
                />
                <Input
                    type="number"
                    placeholder="Number of People"
                    value={people || ""}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="mb-2"
                />

                <div className="mt-4 space-y-2 font-medium">
                    <p>Total Tip: ${totalTip.toFixed(2)}</p>
                    <p>Total Bill: ${totalBill.toFixed(2)}</p>
                    <p>Per Person: ${perPerson.toFixed(2)}</p>
                </div>
            </CalculatorLayout>
        </PageLayout>
    )
}
