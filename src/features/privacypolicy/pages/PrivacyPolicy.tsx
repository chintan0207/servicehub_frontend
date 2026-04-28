import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: April 26, 2026</p>
        </div>

        <Card className="space-y-8 p-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              1. Introduction
            </h2>
            <p className="mb-4 text-muted-foreground">
              Welcome to OUJAT. We respect your privacy and are committed to
              protecting your personal data. This privacy policy will inform you
              about how we look after your personal data when you visit our
              platform and tell you about your privacy rights and how the law
              protects you.
            </p>
            <p className="text-muted-foreground">
              This privacy policy applies to information we collect when you use
              our logistics marketplace platform or otherwise interact with us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Information You Provide
            </h3>
            <p className="mb-4 text-muted-foreground">
              We collect information you provide directly to us, including:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Account information (name, email address, phone number, company
                details, password)
              </li>
              <li>
                Profile information (business type, shipping preferences,
                service offerings)
              </li>
              <li>
                Transaction information (shipment details, quotes, payment
                information)
              </li>
              <li>
                Communications with us (support requests, feedback, inquiries)
              </li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Automatically Collected Information
            </h3>
            <p className="mb-4 text-muted-foreground">
              When you access or use our platform, we automatically collect
              certain information:
            </p>

            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Device information (IP address, browser type, operating system,
                device identifiers)
              </li>
              <li>
                Usage information (pages viewed, features used, time spent,
                click patterns)
              </li>
              <li>
                Location information (approximate location based on IP address)
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* KEEPING EVERYTHING SAME — only color replacements */}

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              12. Contact Us
            </h2>
            <p className="mb-4 text-muted-foreground">
              If you have questions about this privacy policy or our privacy
              practices, please contact us at:
            </p>

            <div className="rounded-xl bg-muted p-4">
              <p className="font-semibold text-foreground">
                OUJAT Privacy Team
              </p>
              <p className="text-muted-foreground">Email: privacy@oujat.com</p>
              <p className="text-muted-foreground">
                Address: 123 Logistics Avenue, New York, NY 10001
              </p>
            </div>
          </section>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              By using OUJAT, you acknowledge that you have read and understood
              this Privacy Policy.
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/terms">
            <Button variant="outline">Terms of Service</Button>
          </Link>
          <Link to="/cookies">
            <Button variant="outline">Cookie Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy