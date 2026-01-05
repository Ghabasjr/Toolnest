import Link from "next/link"
import { AdSenseBanner } from "./adsense-banner"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* AdSense Ad Space */}
          <div className="mb-8 flex justify-center">
            <AdSenseBanner
              adSlot="3930917121"
              adFormat="auto"
              className="w-full max-w-4xl"
              style={{ minHeight: "90px" }}
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="mb-2 font-sans text-lg font-bold text-foreground">
                ToolNest
              </Link>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Professional calculator tools for everyday use
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 border-t pt-6 text-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ToolNest. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
