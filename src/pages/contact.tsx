import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Building, Mail, Phone, Clock, MapPin } from "lucide-react"
import Head from "next/head"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { ContactEmail } from "@/entities/contact.email"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// const contactFormSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Please enter a valid email"),
//   phone: z.string().min(10, "Please enter a valid phone number"),
//   message: z.string().min(20, "Please provide more details in your message"),
//   subject: z.string().min(5, "Please provide more details in your subject")
// })

export default function ContactPage() {
  // const form = useForm<z.infer<typeof contactFormSchema>>({
  //   resolver: zodResolver(contactFormSchema)
  // })

  // const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
  //   const email: ContactEmail = {
  //     template: "contact",
  //     context: {
  //       customer: {
  //         name: data.name,
  //         mobile: data.phone,
  //         email: data.email,
  //         message: data.message,
  //         subject: data.subject,
  //       }
  //     },
  //     to: 'support@karljohanbailey.com',
  //     from: 'contact@karljohanbailey.com',
  //     subject: 'Contact KJC',
  //   }

  //   try {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(email),
  //     })

  //     const responseData = await response.json()

  //     if (response.ok) {

  //     } else {

  //     }
  //   } catch (error) {
  //   }
  // }

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
                      <p className="text-sm">contact@karljohanbailey.com</p>
                      <p className="text-sm text-muted-foreground mb-1 mt-2">Support:</p>
                      <p className="text-sm">support@karljohanbailey.com</p>
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
                      <p className="text-sm">+1 (868) 742-2549</p>
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
                {/* <Form {...form}>
                  <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type='email' {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="subject" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea 
                              placeholder="Please describe your project requirements and what you'd like to discuss during the consultation"
                              className="min-h-[120px]"
                              {...field}
                            />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </Form> */}
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
                <CardTitle>Caribbean</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                    <div>
                      <p className="text-sm">Port of Spain</p>
                      <p className="text-sm">Trinidad and Tobago</p>
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
