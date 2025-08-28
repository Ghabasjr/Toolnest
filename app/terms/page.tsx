import { PageLayout } from "@/components/page-layout"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <PageLayout title="Terms of Service" description="Terms and conditions for using ToolNest">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6 prose prose-gray max-w-none">
            <div className="space-y-6">
              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using ToolNest, you accept and agree to be bound by these Terms of Service.
                  If you do not agree, you must discontinue use of the site immediately.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily use ToolNest for personal, non-commercial use only.
                  This is the grant of a license, not a transfer of title. Under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or public display</li>
                  <li>Attempt to reverse engineer any software contained on ToolNest</li>
                  <li>Remove any copyright or proprietary notices from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ToolNest is provided on an "as is" basis. We make no warranties, expressed or implied,
                  including (but not limited to) warranties of merchantability, fitness for a particular purpose,
                  or non-infringement of intellectual property.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Accuracy of Calculations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive for accuracy, ToolNest does not guarantee that calculations are error-free
                  or suitable for any specific purpose. Users should verify results independently before relying on them.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall ToolNest or its suppliers be liable for any damages (including loss of data,
                  profit, or business interruption) arising from the use or inability to use ToolNest,
                  even if we have been advised of the possibility of such damages.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ToolNest reserves the right to update or modify these Terms at any time without prior notice.
                  Continued use of the site after changes are posted constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with applicable laws in your jurisdiction.
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in your location.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:hello@toolnest.com" className="text-primary hover:underline">
                    hello@toolnest.com
                  </a>.
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
