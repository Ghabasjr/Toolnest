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
                  By accessing and using ToolNest, you accept and agree to be bound by the terms and provision of this
                  agreement.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily use ToolNest for personal, non-commercial transitory viewing
                  only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on ToolNest are provided on an 'as is' basis. ToolNest makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties including without limitation, implied
                  warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                  intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Accuracy of Calculations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide accurate calculations, ToolNest does not warrant that the results are
                  error-free or suitable for any particular purpose. Users should verify important calculations
                  independently.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall ToolNest or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or
                  inability to use ToolNest, even if ToolNest or a ToolNest authorized representative has been notified
                  orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="font-sans text-xl font-semibold mb-3">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at hello@toolnest.com.
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
