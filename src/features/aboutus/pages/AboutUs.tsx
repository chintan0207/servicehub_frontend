import { Card } from '@/components/ui/card';
import { Award, Globe, Heart, Shield, Ship, Target, Users, Zap } from 'lucide-react';

export const AboutUs = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Active Users" },
    { icon: Globe, value: "150+", label: "Countries" },
    { icon: Ship, value: "50,000+", label: "Shipments Completed" },
    { icon: Award, value: "99.8%", label: "On-time Delivery" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Connecting businesses with trusted logistics providers worldwide",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Verified providers and secure payment protection for peace of mind",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging technology to make global logistics simple and efficient",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Dedicated support and transparent pricing for every shipment",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
    {
      name: "David Kumar",
      role: "Head of Business Development",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About OUJAT</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              We're building the world's most trusted logistics marketplace, connecting
              businesses with verified providers across 150+ countries.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
  Our Story
</h2>

<p className="text-muted-foreground mb-4">
  Founded in 2020, OUJAT was born from a simple observation: international
  logistics was too complex, too expensive, and lacked transparency. Our
  founders, having experienced these pain points firsthand, set out to create a
  platform that would democratize global shipping.
</p>

<p className="text-muted-foreground mb-4">
  Today, we've grown into a thriving marketplace with thousands of verified
  logistics providers serving businesses of all sizes. From small e-commerce
  startups to large enterprises, we're making global trade more accessible than
  ever before.
</p>

<p className="text-muted-foreground">
  Our mission is simple: to connect every business with the right logistics
  partner, anywhere in the world, with complete transparency and trust.
</p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800"
                alt="Global logistics"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">OUJAT by the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Our growth reflects the trust businesses place in our platform
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index}>
                <Card className="text-center p-6 hover:shadow-xl transition-all">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index}>
                <Card className="p-6 h-full hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The people behind OUJAT's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index}>
                <Card className="p-0 overflow-hidden hover:shadow-xl transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};