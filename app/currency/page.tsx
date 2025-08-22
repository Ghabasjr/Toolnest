"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { CalculatorLayout } from "@/components/calculator-layout"
import { AdSenseBanner } from "@/components/adsense-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DollarSign, ArrowUpDown } from "lucide-react"

interface ExchangeRates {
  [key: string]: number
}

const currencies = [
  // Major Currencies
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },

  // North America
  { code: "CAD", name: "Canadian Dollar" },
  { code: "MXN", name: "Mexican Peso" },

  // Europe
  { code: "CHF", name: "Swiss Franc" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "DKK", name: "Danish Krone" },
  { code: "PLN", name: "Polish Zloty" },
  { code: "CZK", name: "Czech Koruna" },
  { code: "HUF", name: "Hungarian Forint" },
  { code: "RON", name: "Romanian Leu" },
  { code: "BGN", name: "Bulgarian Lev" },
  { code: "HRK", name: "Croatian Kuna" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "UAH", name: "Ukrainian Hryvnia" },
  { code: "TRY", name: "Turkish Lira" },

  // Asia-Pacific
  { code: "AUD", name: "Australian Dollar" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "INR", name: "Indian Rupee" },
  { code: "KRW", name: "South Korean Won" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "TWD", name: "Taiwan Dollar" },
  { code: "THB", name: "Thai Baht" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "IDR", name: "Indonesian Rupiah" },
  { code: "PHP", name: "Philippine Peso" },
  { code: "VND", name: "Vietnamese Dong" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "LKR", name: "Sri Lankan Rupee" },
  { code: "NPR", name: "Nepalese Rupee" },
  { code: "MMK", name: "Myanmar Kyat" },
  { code: "KHR", name: "Cambodian Riel" },
  { code: "LAK", name: "Lao Kip" },

  // Middle East
  { code: "AED", name: "UAE Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "KWD", name: "Kuwaiti Dinar" },
  { code: "BHD", name: "Bahraini Dinar" },
  { code: "OMR", name: "Omani Rial" },
  { code: "JOD", name: "Jordanian Dinar" },
  { code: "LBP", name: "Lebanese Pound" },
  { code: "ILS", name: "Israeli Shekel" },
  { code: "IRR", name: "Iranian Rial" },
  { code: "IQD", name: "Iraqi Dinar" },

  // Africa - North Africa
  { code: "EGP", name: "Egyptian Pound" },
  { code: "LYD", name: "Libyan Dinar" },
  { code: "TND", name: "Tunisian Dinar" },
  { code: "DZD", name: "Algerian Dinar" },
  { code: "MAD", name: "Moroccan Dirham" },
  { code: "SDG", name: "Sudanese Pound" },
  { code: "SSP", name: "South Sudanese Pound" },

  // Africa - West Africa
  { code: "NGN", name: "Nigerian Naira" },
  { code: "GHS", name: "Ghanaian Cedi" },
  { code: "XOF", name: "West African CFA Franc" }, // Benin, Burkina Faso, Côte d'Ivoire, Guinea-Bissau, Mali, Niger, Senegal, Togo
  { code: "LRD", name: "Liberian Dollar" },
  { code: "SLL", name: "Sierra Leonean Leone" },
  { code: "GMD", name: "Gambian Dalasi" },
  { code: "GNF", name: "Guinean Franc" },
  { code: "CVE", name: "Cape Verdean Escudo" },

  // Africa - Central Africa
  { code: "XAF", name: "Central African CFA Franc" }, // Cameroon, Central African Republic, Chad, Republic of the Congo, Equatorial Guinea, Gabon
  { code: "CDF", name: "Congolese Franc" }, // Democratic Republic of the Congo
  { code: "STN", name: "São Tomé and Príncipe Dobra" },

  // Africa - East Africa
  { code: "KES", name: "Kenyan Shilling" },
  { code: "UGX", name: "Ugandan Shilling" },
  { code: "TZS", name: "Tanzanian Shilling" },
  { code: "ETB", name: "Ethiopian Birr" },
  { code: "RWF", name: "Rwandan Franc" },
  { code: "BIF", name: "Burundian Franc" },
  { code: "SOS", name: "Somali Shilling" },
  { code: "DJF", name: "Djiboutian Franc" },
  { code: "ERN", name: "Eritrean Nakfa" },

  // Africa - Southern Africa
  { code: "ZAR", name: "South African Rand" },
  { code: "BWP", name: "Botswana Pula" },
  { code: "NAD", name: "Namibian Dollar" },
  { code: "SZL", name: "Swazi Lilangeni" },
  { code: "LSL", name: "Lesotho Loti" },
  { code: "MWK", name: "Malawian Kwacha" },
  { code: "ZMW", name: "Zambian Kwacha" },
  { code: "ZWL", name: "Zimbabwean Dollar" },
  { code: "AOA", name: "Angolan Kwanza" },
  { code: "MZN", name: "Mozambican Metical" },

  // Africa - Island Nations
  { code: "MUR", name: "Mauritian Rupee" },
  { code: "SCR", name: "Seychellois Rupee" },
  { code: "KMF", name: "Comorian Franc" },
  { code: "MGA", name: "Malagasy Ariary" }, // Madagascar

  // Latin America
  { code: "BRL", name: "Brazilian Real" },
  { code: "ARS", name: "Argentine Peso" },
  { code: "CLP", name: "Chilean Peso" },
  { code: "COP", name: "Colombian Peso" },
  { code: "PEN", name: "Peruvian Sol" },
  { code: "UYU", name: "Uruguayan Peso" },
  { code: "PYG", name: "Paraguayan Guarani" },
  { code: "BOB", name: "Bolivian Boliviano" },
  { code: "VES", name: "Venezuelan Bolívar" },
  { code: "GYD", name: "Guyanese Dollar" },
  { code: "SRD", name: "Surinamese Dollar" },

  // Caribbean
  { code: "JMD", name: "Jamaican Dollar" },
  { code: "TTD", name: "Trinidad & Tobago Dollar" },
  { code: "BBD", name: "Barbadian Dollar" },
  { code: "BSD", name: "Bahamian Dollar" },
  { code: "BZD", name: "Belize Dollar" },
  { code: "XCD", name: "East Caribbean Dollar" },

  // Central America
  { code: "GTQ", name: "Guatemalan Quetzal" },
  { code: "HNL", name: "Honduran Lempira" },
  { code: "NIO", name: "Nicaraguan Córdoba" },
  { code: "CRC", name: "Costa Rican Colón" },
  { code: "PAB", name: "Panamanian Balboa" },

  // Other Notable Currencies
  { code: "ISK", name: "Icelandic Króna" },
  { code: "ALL", name: "Albanian Lek" },
  { code: "MKD", name: "Macedonian Denar" },
  { code: "RSD", name: "Serbian Dinar" },
  { code: "BAM", name: "Bosnia-Herzegovina Mark" },
  { code: "MDL", name: "Moldovan Leu" },
  { code: "GEL", name: "Georgian Lari" },
  { code: "AMD", name: "Armenian Dram" },
  { code: "AZN", name: "Azerbaijani Manat" },
  { code: "KZT", name: "Kazakhstani Tenge" },
  { code: "UZS", name: "Uzbekistani Som" },
  { code: "KGS", name: "Kyrgystani Som" },
  { code: "TJS", name: "Tajikistani Somoni" },
  { code: "TMT", name: "Turkmenistani Manat" },
  { code: "AFN", name: "Afghan Afghani" },
  { code: "MNT", name: "Mongolian Tugrik" },
  { code: "BND", name: "Brunei Dollar" },
  { code: "FJD", name: "Fijian Dollar" },
  { code: "PGK", name: "Papua New Guinea Kina" },
  { code: "SBD", name: "Solomon Islands Dollar" },
  { code: "VUV", name: "Vanuatu Vatu" },
  { code: "WST", name: "Samoan Tala" },
  { code: "TOP", name: "Tongan Paʻanga" },
]

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("EUR")
  const [result, setResult] = useState<number | null>(null)
  const [rates, setRates] = useState<ExchangeRates>({})
  const [loading, setLoading] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<string>("")

  useEffect(() => {
    fetchExchangeRates()
  }, [])

  const fetchExchangeRates = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD")
      const data = await response.json()
      setRates(data.rates)
      setLastUpdated(new Date(data.date).toLocaleDateString())
    } catch (error) {
      console.error("Failed to fetch exchange rates:", error)
      alert("Failed to fetch exchange rates. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const convertCurrency = () => {
    const amountNum = Number.parseFloat(amount)
    if (!amountNum || amountNum <= 0) {
      alert("Please enter a valid amount")
      return
    }

    if (!rates[fromCurrency] || !rates[toCurrency]) {
      alert("Exchange rates not available")
      return
    }

    // Convert to USD first, then to target currency
    const usdAmount = fromCurrency === "USD" ? amountNum : amountNum / rates[fromCurrency]
    const convertedAmount = toCurrency === "USD" ? usdAmount : usdAmount * rates[toCurrency]

    setResult(Math.round(convertedAmount * 100) / 100)
  }

  const swapCurrencies = () => {
    const temp = fromCurrency
    setFromCurrency(toCurrency)
    setToCurrency(temp)
    setResult(null)
  }

  const reset = () => {
    setAmount("")
    setResult(null)
  }

  return (
    <PageLayout title="Currency Converter" description="Convert between different currencies with real-time rates">
      <CalculatorLayout
        title="Currency Converter"
        description="Convert between different currencies with up-to-date exchange rates"
        icon={DollarSign}
      >
        <div className="space-y-6">
          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="100"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Currency Selection */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>From</Label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>To</Label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button onClick={swapCurrencies} variant="outline" size="sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Swap
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button onClick={convertCurrency} className="flex-1" disabled={loading}>
              {loading ? "Loading..." : "Convert"}
            </Button>
            <Button onClick={reset} variant="outline">
              Reset
            </Button>
          </div>

          {/* Results */}
          {result !== null && (
            <Card className="bg-muted/30">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {amount} {fromCurrency} equals
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {result.toLocaleString()} {toCurrency}
                    </div>
                  </div>
                  {lastUpdated && (
                    <div className="text-xs text-muted-foreground">Exchange rates last updated: {lastUpdated}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Refresh Rates Button */}
          <div className="text-center">
            <Button onClick={fetchExchangeRates} variant="outline" size="sm" disabled={loading}>
              {loading ? "Updating..." : "Refresh Rates"}
            </Button>
          </div>


        </div>
      </CalculatorLayout>
    </PageLayout>
  )
}
