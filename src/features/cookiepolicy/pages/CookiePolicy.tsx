import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground">Last updated: April 26, 2026</p>
        </div>

        <Card className="space-y-8 p-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              1. What Are Cookies?
            </h2>
            <p className="mb-4 text-muted-foreground">
              Cookies are small text files that are placed on your device when
              you visit a website. They are widely used to make websites work
              more efficiently and provide information to website owners.
            </p>
            <p className="text-muted-foreground">
              OUJAT uses cookies and similar technologies to enhance your
              experience on our platform, analyze usage patterns, and deliver
              personalized content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              2. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Strictly Necessary Cookies
                </h3>
                <p className="mb-2 text-muted-foreground">
                  These cookies are essential for the platform to function
                  properly.
                </p>
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Authentication cookies
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Duration:</strong> Session
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Performance Cookies
                </h3>
                <p className="mb-2 text-muted-foreground">
                  These cookies collect usage data.
                </p>
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Google Analytics
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Functionality Cookies
                </h3>
                <p className="mb-2 text-muted-foreground">
                  These cookies remember preferences.
                </p>
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Language settings
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Duration:</strong> Up to 1 year
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Targeting/Advertising Cookies
                </h3>
                <p className="mb-2 text-muted-foreground">
                  These cookies show relevant ads.
                </p>
                <div className="rounded-xl bg-muted p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Examples:</strong> Google Ads
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Duration:</strong> Up to 2 years
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              3. Third-Party Cookies
            </h2>
            <p className="mb-4 text-muted-foreground">
              Third-party services may collect usage statistics.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                <strong>Google Analytics</strong>
              </li>
              <li>
                <strong>Google Ads</strong>
              </li>
              <li>
                <strong>Stripe</strong>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              4. How to Control Cookies
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Browser Settings
                </h3>
                <p className="text-muted-foreground">
                  You can control cookies.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Opt-Out Tools
                </h3>
                <p className="text-muted-foreground">
                  Visit{" "}
                  <a href="#" className="text-primary hover:underline">
                    opt-out tools
                  </a>
                </p>
              </div>

              <div className="rounded-xl border border-warning/20 bg-warning/10 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Disabling cookies may affect
                  functionality.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              8. Contact Us
            </h2>
            <div className="rounded-xl bg-muted p-4">
              <p className="font-semibold text-foreground">
                OUJAT Privacy Team
              </p>
              <p className="text-muted-foreground">privacy@oujat.com</p>
            </div>
          </section>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              By continuing to use OUJAT, you consent to cookies.
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/terms">
            <Button variant="outline">Terms of Service</Button>
          </Link>
          <Link to="/privacy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy