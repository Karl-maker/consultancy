
import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Cloud, Package, Phone, Building2, Users, Clock, FileCheck, Wallet, CheckCircle2, ArrowRight, Calendar, MessageSquare, FileText, Star } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

const consultationFeatures = [
  { icon: Cloud, title: "Cloud Solutions", description: "Expert guidance on cloud infrastructure and migration strategies" },
  { icon: Package, title: "MVP Development", description: "Strategic planning for your minimum viable product" },
  { icon: Phone, title: "Mobile Solutions", description: "Native and cross-platform mobile application consulting" },
  { icon: Building2, title: "Enterprise Systems", description: "Large-scale enterprise software architecture and solutions" },
  // { icon: Users, title: "Digital Transformation", description: "Modern digital solutions for business optimization" }
]

const processSteps = [
  { number: "01", title: "Discovery Call", description: "Initial discussion to understand your needs" },
  { number: "02", title: "Requirements Analysis", description: "Deep dive into technical requirements" },
  { number: "03", title: "Solution Planning", description: "Strategic planning and architecture" },
  { number: "04", title: "Proposal & Timeline", description: "Detailed project proposal and timeline" }
]

const faqs = [
  {
    question: "What happens during the consultation?",
    answer: "We'll discuss your business needs, technical requirements, and potential solutions. You'll receive expert advice and a clear path forward for your project."
  },
  {
    question: "How should I prepare for the consultation?",
    answer: "Prepare a brief overview of your project, key challenges, and goals. Any existing documentation or examples would be helpful."
  },
  {
    question: "What's included in the premium consultation?",
    answer: "Premium consultations include a full hour of dedicated time, detailed documentation, technical architecture planning, and follow-up support through our client portal."
  },
  {
    question: "Can I upgrade from free to premium later?",
    answer: "Yes, you can upgrade to a premium consultation at any time after your free session if you need more detailed guidance."
  }
]

export default function ConsultationPage() {
  return (
    <Layout>
      <Head>
        <title>Expert Software Consultation Services - KJC</title>
        <meta name="description" content="Get expert software consultation for your business needs. Free and premium consultation packages available." />
      </Head>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10 h-[500px]" />
        
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
                Expert Software Consultation
              </h1>
              <p className="text-xl text-muted-foreground max-w-[800px]">
                Get strategic guidance from industry experts to transform your business with modern software solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-9">
              {consultationFeatures.map((feature, index) => (
                <Card key={index} className="bg-background/60 backdrop-blur-sm">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Consultation Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Choose Your Consultation Package</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="relative border-2 flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Free Discovery Call</CardTitle>
                <CardDescription className="text-lg">30-minute strategic discussion</CardDescription>
                <div className="absolute top-6 right-6 text-2xl font-bold">$0</div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Initial project assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Basic technical recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>High-level solution discussion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>Next steps planning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href="/consultation/free" className="w-full">
                  <Button className="w-full" size="lg">
                    Schedule Free Call
                  </Button>
                </Link>
              </CardFooter>
            </Card>


            <Card className="relative border-2 border-primary flex flex-col h-full">
              <div className="absolute -top-4 right-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                RECOMMENDED
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium Consultation</CardTitle>
                <CardDescription className="text-lg">1-hour comprehensive consultation</CardDescription>
              </CardHeader>
              {/* Move price section below header but keep it aligned to the right */}
              <div className="absolute top-4 right-6 text-right">
                <div className="text-2xl font-bold">$200 USD</div>
                <div className="text-sm text-muted-foreground">$1,400 TTD</div>
              </div>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Extended Session</h4>
                      <p className="text-sm text-muted-foreground">Full hour of dedicated expert consultation</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Detailed Documentation</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive technical documentation and roadmap</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">2 Weeks Follow-up</h4>
                      <p className="text-sm text-muted-foreground">Priority email support for 2 weeks</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Client Portal Access</h4>
                      <p className="text-sm text-muted-foreground">Exclusive access to our client support portal</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href="/consultation/premium" className="w-full">
                  <Button className="w-full" size="lg" variant="default">
                    Book Premium Consultation
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book your consultation today and take the first step towards innovative software solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation/free">
                <Button size="lg" variant="outline">Schedule Free Call</Button>
              </Link>
              <Link href="/consultation/premium">
                <Button size="lg">Book Premium Consultation</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
