
import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CircleDollarSign, Wrench, Clock, BarChart, Shield, Rocket, HeartPulse, Zap } from "lucide-react"
import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <Layout>
      <Head>
        <title>Pricing - KJC Consultancy</title>
        <meta name="description" content="Flexible pricing models for software development and consulting services" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Transparent & Flexible Pricing</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We offer adaptable pricing models to suit different project types, from fixed-price solutions to agile-based development
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Pricing Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CircleDollarSign className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Predictive Pricing</CardTitle>
                <CardDescription>
                  Fixed-price solutions for well-defined projects with clear requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm text-muted-foreground mb-6">
                  <li>• System migrations and installations</li>
                  <li>• Standard CRM implementations</li>
                  <li>• Infrastructure setup projects</li>
                  <li>• Pre-defined feature development</li>
                </ul>
                <div className="text-sm">
                  <p className="font-medium mb-2">Benefits:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Clear project scope and timeline</li>
                    <li>• Predictable budget</li>
                    <li>• Defined deliverables</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Agile-Based Pricing</CardTitle>
                <CardDescription>
                  Flexible pricing for custom software development with evolving requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm text-muted-foreground mb-6">
                  <li>• Custom software development</li>
                  <li>• Complex integrations</li>
                  <li>• Innovation projects</li>
                  <li>• Iterative development</li>
                </ul>
                <div className="text-sm">
                  <p className="font-medium mb-2">Benefits:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Flexibility to adapt</li>
                    <li>• Regular deliverables</li>
                    <li>• Continuous improvement</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Ongoing Support & Maintenance</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <HeartPulse className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Basic Support</CardTitle>
                <CardDescription>Essential maintenance and support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bug fixes</li>
                  <li>• Security updates</li>
                  <li>• Basic monitoring</li>
                  <li>• Email support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Professional</CardTitle>
                <CardDescription>Enhanced support with faster response</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Priority bug fixes</li>
                  <li>• Performance optimization</li>
                  <li>• Advanced monitoring</li>
                  <li>• Priority support</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Comprehensive support solution</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 24/7 support</li>
                  <li>• Custom SLAs</li>
                  <li>• Dedicated team</li>
                  <li>• Proactive maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <Zap className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Custom Solutions</CardTitle>
              <CardDescription>
                Need a tailored solution? Let's discuss your specific requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  Every project is unique. Contact us to discuss your needs and we'll create a custom package that perfectly fits your requirements and budget.
                </p>
                <Link href="/contact">
                  <Button size="lg">Get in Touch</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do you determine the pricing model?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We assess project requirements, complexity, and timeline to recommend the most suitable pricing model. Fixed-price works best for well-defined projects, while agile pricing suits projects requiring flexibility and iteration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in maintenance costs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintenance includes regular updates, bug fixes, security patches, and technical support. The scope varies by plan, with higher tiers offering more comprehensive coverage and faster response times.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  )
}
