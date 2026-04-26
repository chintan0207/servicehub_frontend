import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: April 26, 2026</p>
        </div>

        <Card className="p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your device when you visit a
              website. They are widely used to make websites work more efficiently and provide
              information to website owners.
            </p>
            <p className="text-muted-foreground">
              OUJAT uses cookies and similar technologies to enhance your experience on our
              platform, analyze usage patterns, and deliver personalized content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Strictly Necessary Cookies
                </h3>
                <p className="text-muted-foreground mb-2">
                  These cookies are essential for the platform to function properly.
                </p>
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Authentication cookies
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Duration:</strong> Session
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Performance Cookies
                </h3>
                <p className="text-muted-foreground mb-2">
                  These cookies collect usage data.
                </p>
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Google Analytics
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Functionality Cookies
                </h3>
                <p className="text-muted-foreground mb-2">
                  These cookies remember preferences.
                </p>
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Language settings
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Duration:</strong> Up to 1 year
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Targeting/Advertising Cookies
                </h3>
                <p className="text-muted-foreground mb-2">
                  These cookies show relevant ads.
                </p>
                <div className="bg-muted p-4 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Google Ads
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Third-Party Cookies
            </h2>
            <p className="text-muted-foreground mb-4">
              Third-party services may collect usage statistics.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Google Analytics</strong></li>
              <li><strong>Google Ads</strong></li>
              <li><strong>Stripe</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. How to Control Cookies
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                <p className="text-muted-foreground">You can control cookies.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Opt-Out Tools
                </h3>
                <p className="text-muted-foreground">
                  Visit{" "}
                  <a href="#" className="text-primary hover:underline">
                    opt-out tools
                  </a>
                </p>
              </div>

              <div className="bg-warning/10 border border-warning/20 p-4 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Disabling cookies may affect functionality.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <div className="bg-muted p-4 rounded-xl">
              <p className="text-foreground font-semibold">OUJAT Privacy Team</p>
              <p className="text-muted-foreground">privacy@oujat.com</p>
            </div>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              By continuing to use OUJAT, you consent to cookies.
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/terms-of-service">
            <Button variant="outline">Terms of Service</Button>
          </Link>
          <Link to="/privacy-policy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy