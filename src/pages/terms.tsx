import { Layout } from "@/components/layout/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ScrollText, Shield, Scale, AlertCircle, FileCheck, Clock, Ban, Wallet, Award, Contact } from "lucide-react"
import Head from "next/head"

export default function TermsOfService() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - KJC Consultancy</title>
        <meta name='description' content='Terms and conditions for using KJC Consultancy services' />
      </Head>

      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold mb-4'>Terms of Service</h1>
          <p className='text-muted-foreground'>Last updated: March 12, 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ScrollText className="h-6 w-6 text-primary" />
                <CardTitle>Agreement to Terms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                By accessing or using KJC Consultancy services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Intellectual Property Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>Our intellectual property includes, but is not limited to:</p>
                <ul className="list-disc list-inside">
                  <li>Software code and applications</li>
                  <li>Design elements and graphics</li>
                  <li>Documentation and training materials</li>
                  <li>Methodologies and processes</li>
                  <li>Trademarks and logos</li>
                </ul>
                <p className="mt-4">
                  All rights, title, and interest in and to the Services are and will remain the exclusive property of KJC Consultancy and its licensors.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-primary" />
                <CardTitle>User Responsibilities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Use services in compliance with applicable laws</li>
                  <li>Not engage in unauthorized access or use</li>
                  <li>Respect intellectual property rights</li>
                  <li>Report any security vulnerabilities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Wallet className="h-6 w-6 text-primary" />
                <CardTitle>Payment Terms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>Our payment terms include:</p>
                <ul className="list-disc list-inside">
                  <li>Payment is required before service delivery</li>
                  <li>All fees are non-refundable unless stated otherwise</li>
                  <li>Prices are subject to change with notice</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We accept major credit cards and bank transfers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <CardTitle>Service Level Agreement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>Our service commitments include:</p>
                <ul className="list-disc list-inside">
                  <li>99.9% service availability</li>
                  <li>24/7 technical support</li>
                  <li>Response time within 4 hours for critical issues</li>
                  <li>Regular maintenance and updates</li>
                  <li>Data backup and recovery procedures</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Ban className="h-6 w-6 text-primary" />
                <CardTitle>Prohibited Activities</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>The following activities are strictly prohibited:</p>
                <ul className="list-disc list-inside">
                  <li>Unauthorized access to our systems</li>
                  <li>Distribution of malware or harmful code</li>
                  <li>Violation of intellectual property rights</li>
                  <li>Harassment or abuse of other users</li>
                  <li>Interference with service operations</li>
                  <li>Fraudulent or deceptive practices</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-primary" />
                <CardTitle>Limitation of Liability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                KJC Consultancy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid for the services in question.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Term and Termination</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-muted-foreground">
                <p>This agreement:</p>
                <ul className="list-disc list-inside">
                  <li>Remains effective until terminated</li>
                  <li>Can be terminated by either party with 30 days notice</li>
                  <li>May be terminated immediately for violations</li>
                  <li>Requires settlement of outstanding payments</li>
                  <li>Surviving provisions continue after termination</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Contact className="h-6 w-6 text-primary" />
                <CardTitle>Contact Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-medium">KJC Consultancy</p>
                <p className="text-muted-foreground">Email: legal@karljohanbailey.com</p>
                <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}