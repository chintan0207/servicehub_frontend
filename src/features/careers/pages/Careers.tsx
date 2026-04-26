import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Award, Briefcase, Clock, Coffee, Globe, Heart, MapPin, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO",
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      description: "Annual learning budget and career development opportunities",
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Above-market salaries, equity options, and performance bonuses",
    },
    {
      icon: Users,
      title: "Amazing Team",
      description: "Work with talented people from diverse backgrounds",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Help businesses connect and trade across borders",
    },
  ];

  
  const openings = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "New York, NY / Remote",
      type: "Full-time",
      description:
        "Join our engineering team to build the next generation of logistics technology. You'll work on scalable systems that connect businesses worldwide.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Lead product strategy and development for our marketplace platform. Work closely with customers and engineering to deliver exceptional experiences.",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description:
        "Expand our network of logistics providers and customers. Build relationships and drive growth in new markets.",
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "London, UK / Remote",
      type: "Full-time",
      description:
        "Help our customers succeed by providing exceptional support and guidance. Be the voice of the customer within OUJAT.",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description:
        "Turn data into insights that drive business decisions. Work with large datasets to optimize our marketplace.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY / Remote",
      type: "Full-time",
      description:
        "Lead marketing initiatives to grow brand awareness and customer acquisition. Create compelling campaigns across channels.",
    },
  ];
const getDepartmentColor = (dept: string) => {
  const colors: { [key: string]: string } = {
    Engineering: "bg-primary/10 text-primary",
    Product: "bg-accent text-accent-foreground",
    Sales: "bg-success/10 text-success",
    "Customer Success": "bg-warning/10 text-warning",
    Analytics: "bg-info/10 text-info",
    Marketing: "bg-secondary/10 text-secondary",
  };
  return colors[dept] || "bg-muted text-muted-foreground";
};

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Help us build the future of global logistics. We're looking for talented,
              passionate people to join our growing team.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Work at OUJAT?</h2>
            <p className="text-lg text-muted-foreground">
              We offer more than just a job - we offer a career with purpose
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index}>
                <Card className="p-6 h-full hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Find your next opportunity at OUJAT
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div key={index}>
                <Card className="p-6 hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {job.title}
                          </h3>

                          <div className="flex flex-wrap gap-2 mb-3">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${getDepartmentColor(
                                job.department
                              )}`}
                            >
                              {job.department}
                            </span>

                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {job.location}
                            </span>

                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {job.type}
                            </span>
                          </div>

                          <p className="text-sm text-muted-foreground">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Link to="/contact">
                        <Button variant="default">
                          <Briefcase className="w-4 h-4" />
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-primary/10 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Don't see a perfect fit?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented people. Send us your resume and we'll keep you
                in mind for future opportunities.
              </p>
              <Link to="/contact">
                <Button variant="default">Send Us Your Resume</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};