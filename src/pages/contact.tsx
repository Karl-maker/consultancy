
import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building, Mail, Phone, Clock, Globe, MapPin } from "lucide-react"
import Head from "next/head"

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact Us - KJC Consultancy</title>
        <meta name="description" content="Get in touch with our international software consultancy team" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're ready to start a project or just want to learn more, we're here to help
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground mb-1">General Inquiries:</p>
                      <p className="text-sm">contact@kjc-consultancy.com</p>
                      <p className="text-sm text-muted-foreground mb-1 mt-2">Support:</p>
                      <p className="text-sm">support@kjc-consultancy.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-sm text-muted-foreground mb-1">Main Office:</p>
                      <p className="text-sm">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mb-1 mt-2">Support Line:</p>
                      <p className="text-sm">+1 (555) 123-4568</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground mb-1">Monday - Friday:</p>
                      <p className="text-sm">9:00 AM - 6:00 PM EST</p>
                      <p className="text-sm text-muted-foreground mb-1 mt-2">Support Hours:</p>
                      <p className="text-sm">24/7 for Enterprise Clients</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" placeholder="Message subject" />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Our Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Building className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>North America</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm">123 Tech Avenue</p>
                      <p className="text-sm">San Francisco, CA 94105</p>
                      <p className="text-sm">United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Caribbean Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm">45 Innovation Drive</p>
                      <p className="text-sm">Port of Spain</p>
                      <p className="text-sm">Trinidad and Tobago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>East Coast Office</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm">789 Financial District</p>
                      <p className="text-sm">New York, NY 10004</p>
                      <p className="text-sm">United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Let's Build Something Great Together</h3>
                <p className="text-muted-foreground">
                  Whether you're a startup looking to innovate or an enterprise seeking digital transformation, we're here to help you succeed. Reach out to discuss how we can turn your vision into reality.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  )
}
