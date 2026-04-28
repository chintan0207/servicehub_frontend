import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"

const TermsOfService = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: April 26, 2026</p>
        </div>

        <Card className="space-y-8 p-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              1. Agreement to Terms
            </h2>
            <p className="mb-4 text-muted-foreground">
              By accessing or using OUJAT's platform ("Service"), you agree to
              be bound by these Terms of Service ("Terms"). If you disagree with
              any part of the terms, you may not access the Service.
            </p>
            <p className="text-muted-foreground">
              OUJAT provides a marketplace platform connecting businesses
              seeking logistics services with verified logistics providers
              worldwide. These Terms govern your use of our Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              2. User Accounts
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Registration
            </h3>
            <p className="mb-4 text-muted-foreground">
              To use certain features of the Service, you must register for an
              account. You agree to provide accurate, current, and complete
              information during the registration process and to update such
              information to keep it accurate, current, and complete.
            </p>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Account Security
            </h3>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account. You must immediately notify OUJAT of any unauthorized use
              of your account.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              3. Use of the Platform
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Permitted Use
            </h3>
            <p className="mb-4 text-muted-foreground">
              You may use the Service only for lawful purposes and in accordance
              with these Terms. You agree not to use the Service:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>In any way that violates any applicable law or regulation</li>
              <li>
                To transmit any advertising or promotional material without our
                prior written consent
              </li>
              <li>
                To impersonate or attempt to impersonate OUJAT or another user
              </li>
              <li>
                To engage in any conduct that restricts or inhibits anyone's use
                of the Service
              </li>
              <li>
                To interfere with or disrupt the Service or servers or networks
                connected to the Service
              </li>
            </ul>

            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Marketplace Rules
            </h3>
            <p className="text-muted-foreground">
              All transactions conducted through the platform must comply with
              our marketplace policies. Customers and providers must conduct
              business in good faith and fulfill their obligations as agreed.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              4. Service Providers and Customers
            </h2>
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Provider Obligations
            </h3>
            <p className="mb-4 text-muted-foreground">
              Logistics providers using our platform agree to:
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Provide accurate information about their services and
                capabilities
              </li>
              <li>Maintain all necessary licenses and insurance</li>
              <li>Deliver services as quoted and agreed</li>
              <li>Respond to customer inquiries in a timely manner</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Customer Obligations
            </h3>
            <p className="mb-4 text-muted-foreground">
              Customers using our platform agree to:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Provide accurate shipment information</li>
              <li>Make payments as agreed for services rendered</li>
              <li>Comply with customs and import/export regulations</li>
              <li>
                Provide complete and truthful information about goods being
                shipped
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              5. Payments and Fees
            </h2>
            <p className="mb-4 text-muted-foreground">
              OUJAT charges service fees for connecting customers with
              providers. All fees are clearly displayed before you complete a
              transaction.
            </p>
            <p className="mb-4 text-muted-foreground">
              Payment processing is handled through secure third-party payment
              processors. You agree to pay all applicable fees and authorize us
              to charge your payment method.
            </p>
            <p className="text-muted-foreground">
              Refunds are handled according to our refund policy and are subject
              to the specific terms agreed between customer and provider.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              6. Intellectual Property
            </h2>
            <p className="mb-4 text-muted-foreground">
              The Service and its original content, features, and functionality
              are owned by OUJAT and are protected by international copyright,
              trademark, patent, trade secret, and other intellectual property
              laws.
            </p>
            <p className="text-muted-foreground">
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, publicly perform, republish, download,
              store, or transmit any of the material on our Service without
              prior written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              7. Limitation of Liability
            </h2>
            <p className="mb-4 text-muted-foreground">
              OUJAT acts as a marketplace platform connecting customers with
              logistics providers. We are not a logistics provider and do not
              transport goods ourselves.
            </p>
            <p className="mb-4 text-muted-foreground">
              To the maximum extent permitted by law, OUJAT shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use of the Service.
            </p>
            <p className="text-muted-foreground">
              Our total liability for any claim arising out of or relating to
              these Terms or the Service shall not exceed the amount you paid to
              OUJAT in the twelve months prior to the claim.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              8. Dispute Resolution
            </h2>
            <p className="mb-4 text-muted-foreground">
              In the event of a dispute between users, OUJAT may assist in
              facilitating resolution but is not obligated to do so. Users are
              encouraged to resolve disputes directly.
            </p>
            <p className="text-muted-foreground">
              Any disputes with OUJAT shall be resolved through binding
              arbitration in accordance with the rules of the American
              Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              9. Termination
            </h2>
            <p className="mb-4 text-muted-foreground">
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason, including if you breach
              these Terms.
            </p>
            <p className="text-muted-foreground">
              Upon termination, your right to use the Service will immediately
              cease. All provisions of the Terms which by their nature should
              survive termination shall survive termination.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              10. Changes to Terms
            </h2>
            <p className="mb-4 text-muted-foreground">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect.
            </p>
            <p className="text-muted-foreground">
              By continuing to access or use our Service after revisions become
              effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              11. Contact Information
            </h2>
            <p className="mb-4 text-muted-foreground">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="rounded-xl bg-muted p-4">
              <p className="font-semibold text-foreground">
                OUJAT Legal Department
              </p>
              <p className="text-muted-foreground">Email: legal@oujat.com</p>
              <p className="text-muted-foreground">
                Address: 123 Logistics Avenue, New York, NY 10001
              </p>
            </div>
          </section>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              By using OUJAT, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </div>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/privacy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
          <Link to="/cookies">
            <Button variant="outline">Cookie Policy</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService