
import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/router"
import Head from "next/head"

const consultationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  phone: z.string().min(10, "Please enter a valid phone number"),
  requirements: z.string().min(20, "Please provide more details about your requirements")
})

export default function ConsultationForm() {
  const router = useRouter()
  const { type } = router.query
  const isFreeMeeting = type === "free"

  const form = useForm<z.infer<typeof consultationFormSchema>>({
    resolver: zodResolver(consultationFormSchema)
  })

  const onSubmit = (data: z.infer<typeof consultationFormSchema>) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <Layout>
      <Head>
        <title>{isFreeMeeting ? "Free Consultation" : "Premium Consultation"} - KJC</title>
        <meta name="description" content="Book your consultation session" />
      </Head>

      <div className="py-12 max-w-3xl mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>{isFreeMeeting ? "Free 30-Minute Consultation" : "Premium 1-Hour Consultation"}</CardTitle>
            <CardDescription>
              {isFreeMeeting 
                ? "Schedule your free consultation session with our experts"
                : "Book your comprehensive consultation session"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <Input type="email" placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Requirements</FormLabel>
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

                {!isFreeMeeting && (
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <h3 className="font-medium">Payment Instructions</h3>
                    <p className="text-sm text-muted-foreground">
                      Please complete the bank transfer before the consultation:
                    </p>
                    <div className="text-sm">
                      <p>Amount: $200 USD / $1,400 TTD</p>
                      <p>Bank: First Caribbean International Bank</p>
                      <p>Account Number: XXXX-XXXX-XXXX-XXXX</p>
                      <p>Reference: Your Name - Consultation</p>
                    </div>
                  </div>
                )}

                <Button type="submit" className="w-full">
                  {isFreeMeeting ? "Schedule Free Consultation" : "Submit Booking Request"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
