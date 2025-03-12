
import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Lock, Settings2, BarChart } from "lucide-react"
import Head from "next/head"

const cookieTypes = [
  {
    title: "Essential Cookies",
    icon: Shield,
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    examples: [
      "Session cookies for authentication",
      "Security cookies for fraud prevention",
      "Load balancing cookies for server management"
    ]
  },
  {
    title: "Functional Cookies",
    icon: Settings2,
    description: "These cookies enable the website to provide enhanced functionality and personalization.",
    examples: [
      "Language preference cookies",
      "Theme preference cookies",
      "User interface customization cookies"
    ]
  },
  {
    title: "Analytics Cookies",
    icon: BarChart,
    description: "These cookies help us understand how visitors interact with our website.",
    examples: [
      "Page view statistics",
      "Traffic source tracking",
      "User behavior analysis"
    ]
  },
  {
    title: "Marketing Cookies",
    icon: Lock,
    description: "These cookies are used to track visitors across websites to display relevant advertisements.",
    examples: [
      "Advertising performance tracking",
      "Campaign effectiveness measurement",
      "Targeted advertising cookies"
    ]
  }
]

export default function CookiesPage() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy - KJC Consultancy</title>
        <meta name="description" content="Learn about how we use cookies to improve your experience" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">
              Understanding how and why we use cookies to improve your experience
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What are Cookies?</CardTitle>
              <CardDescription>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to work.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use different types of cookies for various purposes. Some cookies are essential for the website to function properly, while others help us improve our services and your experience.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle>{type.title}</CardTitle>
                    </div>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="examples">
                        <AccordionTrigger>Examples of {type.title}</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-2">
                            {type.examples.map((example, i) => (
                              <li key={i} className="text-muted-foreground">{example}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                You can manage your cookie preferences at any time by adjusting your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
              </p>
              <p className="text-muted-foreground">
                For more information about cookies and how to manage them in your browser, visit{" "}
                <a href="https://www.aboutcookies.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  www.aboutcookies.org
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
