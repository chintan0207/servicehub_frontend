import { FiFacebook } from "react-icons/fi"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { FiLinkedin } from "react-icons/fi"
import { Link } from "react-router-dom"
import { Ship } from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Browse Services", href: "/services" },
        { label: "Become a Provider", href: "/provider/dashboard" },
        { label: "How it Works", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ]

  const socialLinks = [
    { icon: FiFacebook, href: "#" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FiLinkedin, href: "#" },
  ]
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Ship className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">OUJAT</span>
            </div>

            <p className="text-sm text-muted-foreground">
              Connecting businesses with trusted logistics partners for seamless
              shipping worldwide.
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-semibold">{section.title}</h4>

              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 OUJAT. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon

              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
