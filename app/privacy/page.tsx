import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy" description="How we handle your data and protect your privacy">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6 prose prose-gray max-w-none">
            <div className="space-y-6">
              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ToolNest is designed with privacy in mind. We do not collect, store, or transmit any personal
                  calculation data. All calculations are performed locally in your browser and are not sent to our
                  servers.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Data Usage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The only data we may collect includes basic analytics information such as page views and general usage
                  patterns to help us improve our services. This information is anonymized and cannot be used to
                  identify individual users.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our currency converter uses external APIs to fetch exchange rates. No personal information is shared
                  with these services. We may also use Google AdSense to display advertisements, which may use cookies
                  for ad personalization.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use cookies to improve your browsing experience and for analytics purposes. You can disable
                  cookies in your browser settings if you prefer.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at hello@toolnest.com.
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
