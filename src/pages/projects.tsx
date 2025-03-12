
import { Layout } from "@/components/layout/Layout"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, GitMerge, Target } from "lucide-react"
import Head from "next/head"
import Image from "next/image"

export type ProjectTechnology = {
  name: string
  category: "frontend" | "backend" | "cloud" | "tools"
}

const projects = [
  {
    id: "takingflight",
    title: "TakingFlight Streaming",
    description: "WCAG-compliant streaming platform with comprehensive accessibility features",
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=60",
    achievements: [
      "Achieved WCAG 2.1 Level AA compliance across all platform interfaces",
      "Reduced video loading time by 40% through CDN optimization",
      "Successfully deployed on FireStick, iOS, and Android platforms",
      "Implemented custom video player with accessibility features"
    ],
    goals: [
      "Create an inclusive streaming platform accessible to all users",
      "Optimize video delivery for multiple devices and platforms",
      "Ensure seamless cross-platform compatibility",
      "Maintain high performance while supporting accessibility features"
    ],
    journey: [
      "Initial accessibility audit and requirement gathering",
      "Development of custom accessible video player",
      "AWS infrastructure setup and CDN integration",
      "Cross-platform testing and optimization",
      "WCAG compliance verification and certification"
    ],
    technologies: [
      { name: "React Native", category: "frontend" },
      { name: "AWS MediaConvert", category: "cloud" },
      { name: "CloudFront", category: "cloud" },
      { name: "TypeScript", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Firebase", category: "backend" },
      { name: "AWS S3", category: "cloud" }
    ]
  },
  {
    id: "salesassist",
    title: "Sales Assist",
    description: "Low-bandwidth streaming solution for midwest markets",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    achievements: [
      "Reduced bandwidth consumption by 60% while maintaining video quality",
      "Successfully deployed to 50+ rural locations",
      "Achieved 99.9% stream reliability in low-connectivity areas",
      "Implemented adaptive bitrate streaming"
    ],
    goals: [
      "Enable video streaming in low-bandwidth areas",
      "Develop efficient video compression solutions",
      "Create seamless mobile experience for sales teams",
      "Implement offline capabilities for continuous operation"
    ],
    journey: [
      "Market research and bandwidth analysis in target regions",
      "Development of custom FFMPEG compression pipeline",
      "Cloudflare integration for edge computing",
      "Mobile app development and testing",
      "Gradual rollout across midwest regions"
    ],
    technologies: [
      { name: "FFMPEG", category: "tools" },
      { name: "Cloudflare Workers", category: "cloud" },
      { name: "React Native", category: "frontend" },
      { name: "Swift", category: "frontend" },
      { name: "Kotlin", category: "frontend" },
      { name: "Node.js", category: "backend" }
    ]
  },
  {
    id: "casetrack",
    title: "Casetrack Legal",
    description: "New York legal case tracking and management system",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60",
    achievements: [
      "Reduced case lookup time by 75%",
      "Automated daily case status updates",
      "Integrated with NY State Court electronic filing system",
      "Implemented real-time notification system"
    ],
    goals: [
      "Streamline case management for NY lawyers",
      "Automate routine case status checks",
      "Provide real-time updates on case developments",
      "Enable secure document management and sharing"
    ],
    journey: [
      "Legal workflow analysis and requirement gathering",
      "Database architecture design",
      "Integration with court systems",
      "Security implementation and compliance verification",
      "User testing with law firms"
    ],
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "PostgreSQL", category: "backend" },
      { name: "Redis", category: "backend" },
      { name: "Docker", category: "tools" },
      { name: "AWS Lambda", category: "cloud" },
      { name: "ElasticSearch", category: "backend" }
    ]
  },
  {
    id: "porttjones",
    title: "PortTJones CRM",
    description: "Custom inventory management and CRM solution",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60",
    achievements: [
      "Reduced inventory management time by 50%",
      "Implemented predictive analytics for stock management",
      "Automated gap analysis reporting",
      "Increased customer satisfaction by 35%"
    ],
    goals: [
      "Create customized CRM solution for inventory management",
      "Implement automated gap analysis",
      "Develop predictive analytics capabilities",
      "Enable seamless integration with existing systems"
    ],
    journey: [
      "Business process analysis and mapping",
      "Custom CRM development",
      "Integration with inventory systems",
      "Analytics implementation",
      "User training and system rollout"
    ],
    technologies: [
      { name: "Vue.js", category: "frontend" },
      { name: "Python", category: "backend" },
      { name: "TensorFlow", category: "tools" },
      { name: "MongoDB", category: "backend" },
      { name: "Docker", category: "tools" },
      { name: "Azure", category: "cloud" }
    ]
  }
]

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>Projects - KJC Consultancy</title>
        <meta name="description" content="Showcase of our successful projects and implementations" />
      </Head>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground">
            Transforming businesses through innovative solutions
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative h-[300px] md:h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <Tabs defaultValue="achievements" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="achievements">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Achievements
                      </TabsTrigger>
                      <TabsTrigger value="goals">
                        <Target className="w-4 h-4 mr-2" />
                        Goals
                      </TabsTrigger>
                      <TabsTrigger value="journey">
                        <GitMerge className="w-4 h-4 mr-2" />
                        Journey
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="achievements" className="mt-0">
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>

                    <TabsContent value="goals" className="mt-0">
                      <ul className="space-y-2">
                        {project.goals.map((goal, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Target className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>

                    <TabsContent value="journey" className="mt-0">
                      <ul className="space-y-2">
                        {project.journey.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <GitMerge className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="secondary"
                          className={`
                            ${tech.category === "frontend" && "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"}
                            ${tech.category === "backend" && "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"}
                            ${tech.category === "cloud" && "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"}
                            ${tech.category === "tools" && "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"}
                          `}
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}
