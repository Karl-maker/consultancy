import { Layout } from "@/components/layout/Layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Users, Zap, Target, CheckCircle2, BarChart3, Brain, Rocket, Shield } from "lucide-react"
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KJC - Karl-Johan Consultancy</title>
        <meta name='description' content='Transform your business with expert software solutions and strategic technical consulting' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='py-16 md:py-24 lg:py-32'>
        <div className='container max-w-6xl mx-auto text-center px-4 sm:px-6'>
          <div className='flex justify-center mb-6'>
            <Badge variant='secondary' className='text-sm font-medium px-4 py-1'>
              Trusted by Industry Leaders
            </Badge>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight'>
            Transform Your Business with{' '}
            <span className='text-primary'>Expert Software Solutions</span>
          </h1>
          <p className='text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
            We help ambitious businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead of the competition.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link href='/consultation'>
              <Button size='lg' className='gap-2 w-full sm:w-auto'>
                Schedule Consultation <ArrowRight className='h-4 w-4' />
              </Button>
            </Link>
            <Link href='/services'>
              <Button size='lg' variant='outline' className='w-full sm:w-auto'>
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className='py-16 bg-muted/50'>
        <div className='container max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Our Expertise</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Comprehensive software solutions tailored to your specific industry needs
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card>
              <CardHeader>
                <Code2 className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Custom Development</CardTitle>
                <CardDescription>
                  Tailored software solutions built for your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Scalable architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Modern tech stack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Agile development
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>
                  Strategic guidance for complex technical challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Technology roadmap
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Architecture review
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Security assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-4 text-primary" />
                <CardTitle>Digital Transformation</CardTitle>
                <CardDescription>
                  Modernize your business with digital solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Process automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Cloud migration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    Digital strategy
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Is KJC Right for You?</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              We work best with ambitious organizations that meet these criteria
            </p>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            <Card>
              <CardHeader>
                <Target className="h-6 w-6 text-primary mb-4" />
                <CardTitle>Growth-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You're looking to scale your business and need technology to support your growth objectives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-6 w-6 text-primary mb-4" />
                <CardTitle>Innovation-Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You understand the importance of staying ahead with modern technology and digital solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-6 w-6 text-primary mb-4" />
                <CardTitle>Results-Oriented</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You measure success through tangible outcomes and ROI-driven metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-muted/50'>
        <div className='container max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Why Choose KJC?</h2>
            <p className='text-muted-foreground max-w-2xl mx-auto'>
              Our commitment to excellence sets us apart
            </p>
          </div>

          <div className='grid sm:grid-cols-2 gap-6 md:gap-8'>
            <Card>
              <CardHeader>
                <Rocket className="h-6 w-6 text-primary mb-4" />
                <CardTitle>Proven Track Record</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ 95% client satisfaction rate</li>
                  <li>✓ 200+ successful projects</li>
                  <li>✓ Industry-leading expertise</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-6 w-6 text-primary mb-4" />
                <CardTitle>Enterprise-Grade Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ ISO 27001 certified</li>
                  <li>✓ Rigorous security standards</li>
                  <li>✓ Best practice methodologies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Ready to Transform Your Business?</h2>
          <p className='text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Let's discuss how we can help you achieve your technology goals and drive business growth.
          </p>
          <Link href='/consultation'>
            <Button size='lg' className='gap-2 w-full sm:w-auto'>
              Schedule Free Consultation <ArrowRight className='h-4 w-4' />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}