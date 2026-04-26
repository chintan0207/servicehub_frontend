import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';

export const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@oujat.com",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Logistics Avenue, New York, NY 10001",
      subtext: "By appointment only",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 6PM EST",
      subtext: "Weekend: Closed",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");

    const newSubmission = {
      ...formData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      status: "new",
    };

    existingSubmissions.push(newSubmission);
    localStorage.setItem("contactSubmissions", JSON.stringify(existingSubmissions));

    toast.success("Message sent successfully! We'll get back to you within 24 hours.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          {/* Contact Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <Card className="p-5 text-center hover:shadow-xl transition-all h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm text-foreground mb-1">{info.details}</p>
                  <p className="text-xs text-muted-foreground">{info.subtext}</p>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all bg-background"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all bg-background"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all bg-background"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border-2 border-border rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all resize-none bg-background"
                    />
                  </div>

                  <Button type="submit" variant="default" className="w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>

                </form>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-6">
                Find quick answers to common questions
              </p>

              <div className="space-y-4">
                <Card className="p-5">
                  <h3 className="font-bold text-foreground mb-2">
                    How long does it take to get a response?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-bold text-foreground mb-2">
                    Can I schedule a call?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, mention your preferred time.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-bold text-foreground mb-2">
                    Enterprise solutions?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, select partnership option.
                  </p>
                </Card>

                <Card className="p-5">
                  <h3 className="font-bold text-foreground mb-2">
                    Headquarters?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    New York, with global offices.
                  </p>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}