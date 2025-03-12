
import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe2, Users, Building2, Lightbulb, Target, Award } from "lucide-react"
import Head from "next/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About Us - KJC Consultancy</title>
        <meta name="description" content="Leading international software consultancy delivering solutions across the Americas" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Global Expertise, Local Understanding</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We lead an international team of experts in developing innovative solutions for businesses across North America and the Caribbean
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Global Presence</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <Globe2 className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>North American Operations</CardTitle>
                <CardDescription>
                  Serving diverse markets across the United States
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• California - Tech innovation hub</li>
                  <li>• New York - Financial sector solutions</li>
                  <li>• Wyoming - Resource management systems</li>
                  <li>• Oklahoma - Energy sector technology</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Caribbean Excellence</CardTitle>
                <CardDescription>
                  Strategic presence in key Caribbean markets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Trinidad - Regional technology hub</li>
                  <li>• Jamaica - Digital transformation projects</li>
                  <li>• Regional business solutions</li>
                  <li>• Cross-market integration expertise</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">International Team, Global Vision</h3>
                <p className="text-muted-foreground">
                  Our diverse team brings together expertise from across the globe, allowing us to deliver innovative solutions that meet the unique needs of each market we serve. With a deep understanding of local business environments and global best practices, we help organizations thrive in the digital age.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Industry Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Lightbulb className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Innovation Focus</CardTitle>
                <CardDescription>
                  Leading-edge solutions across industries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Financial Technology</li>
                  <li>• Healthcare Systems</li>
                  <li>• Energy Sector</li>
                  <li>• Retail Solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Strategic Approach</CardTitle>
                <CardDescription>
                  Tailored solutions for specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Custom Development</li>
                  <li>• Digital Transformation</li>
                  <li>• System Integration</li>
                  <li>• Cloud Migration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Proven Success</CardTitle>
                <CardDescription>
                  Track record of excellence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Enterprise Solutions</li>
                  <li>• Startup Innovation</li>
                  <li>• Government Projects</li>
                  <li>• Cross-Border Solutions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader>
              <Users className="h-6 w-6 mb-2 text-primary" />
              <CardTitle>Our International Team</CardTitle>
              <CardDescription>
                Leading global talent in software development and consulting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-muted-foreground mb-4">
                  Our international team brings together top talent from across the globe, combining diverse perspectives with technical excellence. We leverage this diversity to deliver innovative solutions that address the unique challenges of each market we serve.
                </p>
                <p className="text-muted-foreground">
                  With expertise in multiple industries and technologies, our team is equipped to handle complex projects while maintaining the agility to adapt to changing market needs. We pride ourselves on our ability to understand local business contexts while implementing global best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Local Impact, Global Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We combine our international expertise with deep local market knowledge to deliver solutions that meet global standards while addressing specific regional needs. Our presence across multiple markets allows us to bring best practices and innovative approaches to every project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Partnership Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We view ourselves as long-term partners in our clients' success, working closely with organizations to understand their unique challenges and develop solutions that drive sustainable growth and innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  )
}
