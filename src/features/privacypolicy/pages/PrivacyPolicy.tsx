import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 26, 2026</p>
        </div>

        <Card className="p-8 space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Welcome to OUJAT. We respect your privacy and are committed to protecting your
              personal data. This privacy policy will inform you about how we look after your
              personal data when you visit our platform and tell you about your privacy rights
              and how the law protects you.
            </p>
            <p className="text-muted-foreground">
              This privacy policy applies to information we collect when you use our logistics
              marketplace platform or otherwise interact with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Information You Provide
            </h3>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, including:
            </p>

            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Account information (name, email address, phone number, company details, password)</li>
              <li>Profile information (business type, shipping preferences, service offerings)</li>
              <li>Transaction information (shipment details, quotes, payment information)</li>
              <li>Communications with us (support requests, feedback, inquiries)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-2">
              Automatically Collected Information
            </h3>
            <p className="text-muted-foreground mb-4">
              When you access or use our platform, we automatically collect certain information:
            </p>

            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Device information (IP address, browser type, operating system, device identifiers)</li>
              <li>Usage information (pages viewed, features used, time spent, click patterns)</li>
              <li>Location information (approximate location based on IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          {/* KEEPING EVERYTHING SAME — only color replacements */}

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this privacy policy or our privacy practices, please
              contact us at:
            </p>

            <div className="bg-muted p-4 rounded-xl">
              <p className="text-foreground font-semibold">OUJAT Privacy Team</p>
              <p className="text-muted-foreground">Email: privacy@oujat.com</p>
              <p className="text-muted-foreground">Address: 123 Logistics Avenue, New York, NY 10001</p>
            </div>
          </section>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground text-center">
              By using OUJAT, you acknowledge that you have read and understood this Privacy
              Policy.
            </p>
          </div>

        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/terms-of-service">
            <Button variant="outline">Terms of Service</Button>
          </Link>
          <Link to="/cookie-policy">
            <Button variant="outline">Cookie Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy