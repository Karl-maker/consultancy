
import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Globe2, Users, Briefcase, Code2, Database, Cloud, Brain, Smartphone, Lock, LineChart, Server, Cpu } from "lucide-react"
import Head from "next/head"

const expertiseAreas = [
  { icon: Code2, title: "Frontend Development", description: "React, Next.js, Vue.js, Angular" },
  { icon: Database, title: "Backend Development", description: "Node.js, Python, Java, Go" },
  { icon: Cloud, title: "Cloud Architecture", description: "AWS, Azure, GCP, DevOps" },
  { icon: Brain, title: "AI & Machine Learning", description: "TensorFlow, PyTorch, NLP" },
  { icon: Smartphone, title: "Mobile Development", description: "React Native, Flutter, iOS, Android" },
  { icon: Lock, title: "Security", description: "Cybersecurity, Compliance, Auth" },
  { icon: LineChart, title: "Data Analytics", description: "Big Data, BI, Analytics" },
  { icon: Server, title: "Infrastructure", description: "Kubernetes, Docker, CI/CD" },
  { icon: Cpu, title: "System Architecture", description: "Microservices, Distributed Systems" },
  { icon: Briefcase, title: "Business Analysis", description: "Strategy & Digital Transformation" }
]

const globalPresence = [
  { region: "North America", expertise: "Cloud Infrastructure & Enterprise Solutions" },
  { region: "Europe", expertise: "Digital Transformation & FinTech" },
  { region: "Asia Pacific", expertise: "Mobile Development & AI Innovation" },
  { region: "Middle East", expertise: "Cybersecurity & Business Intelligence" }
]

export default function TeamsPage() {
  return (
    <Layout>
      <Head>
        <title>Our Teams - KJC Consultancy</title>
        <meta name="description" content="Meet our diverse team of global experts in software development and digital transformation" />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Global Expertise, Local Impact</h1>
          <p className="text-xl text-muted-foreground">
            Our diverse team brings together experts from around the world, combining deep technical knowledge with industry experience to deliver exceptional results.
          </p>
        </div>

        <div className="mb-20">
          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-background">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="h-32 w-32 ring-4 ring-primary/20">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Karl-Johan" />
                  <AvatarFallback>KJ</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Karl-Johan</h2>
                  <p className="text-lg font-semibold text-primary mb-2">CEO & Principal Consultant</p>
                  <p className="text-muted-foreground mb-4">
                    With over a decade of experience in software consultancy and team management, Karl-Johan has led numerous successful digital transformation projects and managed high-performing software teams across multiple industries. His expertise in strategic planning and technical leadership has helped companies scale their operations and innovate their digital presence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Strategic Planning", "Team Leadership", "Digital Transformation", "Technical Architecture"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Global Reach & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {globalPresence.map((region, index) => (
              <Card key={index} className="bg-primary/5 border-none">
                <CardHeader>
                  <Globe2 className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{region.region}</CardTitle>
                  <CardDescription className="text-base">
                    {region.expertise}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Technical Excellence</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our team comprises industry-leading experts across multiple technical domains, ensuring comprehensive solutions for any challenge.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Global Team</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals who share our passion for innovation and excellence in software development. Join a diverse team working on cutting-edge projects across the globe.
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span>20+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-primary" />
              <span>4 Continents</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <span>100+ Projects</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
