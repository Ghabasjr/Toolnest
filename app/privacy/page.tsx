import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Learn how ToolNest collects, uses, and protects your information."
    >
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6 prose prose-gray max-w-none">
            <div className="space-y-6">
              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ToolNest, your privacy is important to us. This Privacy Policy explains what information we
                  collect, how we use it, and the choices you have when using our website and tools.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ToolNest is designed with privacy in mind. We do not collect, store, or transmit any personal
                  calculation data. All calculator functions are processed locally in your browser and are never
                  sent to our servers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect non-identifiable information such as page views, traffic sources, and general usage
                  statistics through analytics tools. This information is aggregated and cannot be used to identify
                  individual users.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any data collected is used solely for improving our website, enhancing user experience, and
                  providing relevant content and advertisements. We never sell or share your personal information
                  with third parties.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our currency converter uses external APIs (such as exchange rate providers) to fetch real-time
                  financial data. These services do not receive any personal information about you.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We may use Google AdSense to display advertisements. AdSense may use cookies or device identifiers
                  to serve ads based on your browsing history or interests. You can opt out of personalized ads by
                  visiting{" "}
                  <a
                    href="https://www.google.com/settings/ads/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Ads Settings
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ToolNest may use cookies to store user preferences and enhance browsing experience. Cookies also
                  help us analyze traffic and deliver relevant advertisements. You can disable cookies in your browser
                  settings, but some features may not work as intended.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Your Rights & Choices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Opt out of personalized ads through Google Ads Settings.</li>
                  <li>Disable cookies through your browser preferences.</li>
                  <li>Contact us to request clarification about how your data is handled.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or how your information is handled,
                  please contact us at{" "}
                  <a href="mailto:toolnestapp@gmail.com" className="text-primary hover:underline">
                    toolnestapp@gmail.com
                  </a>
                  .
                </p>
              </div>

              <div className="text-sm text-muted-foreground pt-4 border-t">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
