import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Cloud, Code, Database, GitBranch, Layout as LayoutIcon, Smartphone, Server, Settings, Users, LineChart, Rocket, Target } from "lucide-react"
import Head from "next/head"

export default function ServicesPage() {
  return (
    <Layout>
      <Head>
        <title>Our Services - KJC Consultancy</title>
        <meta name="description" content="Comprehensive software development and consulting services" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Comprehensive Software Solutions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We deliver end-to-end software solutions tailored to your business needs, from custom development to enterprise-scale implementations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <Code className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Custom Development</CardTitle>
                <CardDescription>Tailored software solutions built specifically for your business needs</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <LayoutIcon className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Project Planning</CardTitle>
                <CardDescription>Strategic planning and roadmapping for successful project delivery</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Cloud className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Cloud Solutions</CardTitle>
                <CardDescription>Scalable and reliable cloud infrastructure implementation</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>CRM Systems</CardTitle>
                <CardDescription>Customer relationship management solutions for better business relationships</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>ERP Solutions</CardTitle>
                <CardDescription>Enterprise resource planning systems for streamlined operations</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Smartphone className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Native and cross-platform mobile applications</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frontend Technologies</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">React & Next.js</div>
                      <p className="text-sm text-muted-foreground">Modern web applications with superior performance and SEO capabilities</p>
                    </li>
                    <li>
                      <div className="font-medium">Mobile Development</div>
                      <p className="text-sm text-muted-foreground">Native iOS (Swift/Xcode) and Android (Kotlin) development for high-performance mobile apps</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Backend Technologies</h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">Java & Spring Boot</div>
                      <p className="text-sm text-muted-foreground">Enterprise-grade applications with robust security and scalability</p>
                    </li>
                    <li>
                      <div className="font-medium">Node.js</div>
                      <p className="text-sm text-muted-foreground">Fast, scalable network applications and APIs</p>
                    </li>
                    <li>
                      <div className="font-medium">ASP.NET</div>
                      <p className="text-sm text-muted-foreground">High-performance enterprise solutions with Microsoft technology stack</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Cloud & Infrastructure</h2>
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Cloud Platforms</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Amazon Web Services (AWS)</li>
                    <li>Microsoft Azure</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Infrastructure as Code</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Terraform for infrastructure provisioning</li>
                    <li>Ansible for configuration management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">CI/CD</h3>
                  <p className="text-sm text-muted-foreground">Automated deployment pipelines for consistent and reliable delivery</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Cloud className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Cloud-Native Solutions</CardTitle>
                <CardDescription>
                  Leverage the power of cloud computing with scalable, resilient, and cost-effective solutions that adapt to your business needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Microservices architecture</li>
                  <li>• Containerization with Docker & Kubernetes</li>
                  <li>• Serverless computing</li>
                  <li>• Auto-scaling and high availability</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>DevOps Excellence</CardTitle>
                <CardDescription>
                  Streamline your development and operations with modern DevOps practices and tools.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Automated CI/CD pipelines</li>
                  <li>• Infrastructure as Code (IaC)</li>
                  <li>• Monitoring and observability</li>
                  <li>• Security best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Development Methodology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <GitBranch className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Agile SCRUM Methodology</CardTitle>
                <CardDescription>
                  We follow Agile SCRUM practices for flexible and dynamic project management, ensuring regular delivery and adaptation to changing requirements.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sprint-based development</li>
                  <li>• Regular stakeholder feedback</li>
                  <li>• Continuous improvement</li>
                  <li>• Adaptive planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Predictive Project Management</CardTitle>
                <CardDescription>
                  For suitable projects, we utilize predictive project management techniques to ensure precise planning and execution.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Detailed project planning</li>
                  <li>• Risk management</li>
                  <li>• Resource optimization</li>
                  <li>• Quality assurance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Analytics & Iterative Development</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader>
                <LineChart className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Data-Driven Development</CardTitle>
                <CardDescription>
                  Analytics guide our development process, helping us understand user behavior and prioritize features that matter most.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User behavior analysis</li>
                  <li>• Feature usage tracking</li>
                  <li>• Performance metrics</li>
                  <li>• Conversion optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Rocket className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Rapid Market Entry</CardTitle>
                <CardDescription>
                  We believe in getting to market quickly with a viable product and iterating based on real user feedback.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• MVP development</li>
                  <li>• Quick iteration cycles</li>
                  <li>• Continuous deployment</li>
                  <li>• Regular user feedback</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Growth Partnership</CardTitle>
                <CardDescription>
                  We're committed to being your long-term partner, evolving your product based on market needs and opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strategic roadmapping</li>
                  <li>• Market analysis</li>
                  <li>• Growth optimization</li>
                  <li>• Continuous learning</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Your Journey Partner</h3>
                <p className="text-muted-foreground mb-4">
                  We don't just build software; we embark on a journey of continuous improvement with you. Our analytics-driven approach ensures that every development decision is backed by data, while our agile methodology allows us to adapt quickly to changing market needs.
                </p>
                <p className="text-muted-foreground">
                  From initial MVP to mature product, we'll help you navigate the path to success with rapid iterations and data-informed decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Enterprise Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Server className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Custom CRM Solutions</CardTitle>
                <CardDescription>
                  Tailored CRM systems that help manage customer relationships, automate processes, and drive business growth.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Customer data management</li>
                  <li>• Sales pipeline automation</li>
                  <li>• Marketing campaign integration</li>
                  <li>• Analytics and reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Database className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>ERP Implementation</CardTitle>
                <CardDescription>
                  Comprehensive ERP solutions that integrate and streamline business processes across your organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Resource planning and management</li>
                  <li>• Financial management</li>
                  <li>• Supply chain optimization</li>
                  <li>• Business intelligence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  )
}