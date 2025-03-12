
import { Layout } from "@/components/layout/Layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Settings2, Moon, Sun, Eye, Bell, Info, Shield, HelpCircle, AlertTriangle } from "lucide-react"
import Head from "next/head"

const healthWarnings = [
  {
    title: "Screen Time Management",
    description: "Take regular breaks to prevent eye strain. Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds."
  },
  {
    title: "Ergonomic Posture",
    description: "Maintain proper posture while working. Keep your screen at eye level and ensure your chair supports your back."
  },
  {
    title: "Digital Wellbeing",
    description: "Enable dark mode during evening hours to reduce blue light exposure and improve sleep quality."
  }
]

const faqItems = [
  {
    question: "How do I customize my theme?",
    answer: "Use the theme toggle in the top navigation bar or visit the Appearance tab in settings to switch between light and dark modes."
  },
  {
    question: "Can I change notification settings?",
    answer: "Yes, you can customize your notification preferences in the System tab of the settings page."
  },
  {
    question: "How do I update my account information?",
    answer: "Visit your profile settings to update personal information and preferences."
  },
  {
    question: "Is my data secure?",
    answer: "We employ industry-standard encryption and security measures to protect your data. Review our security settings for more information."
  }
]

export default function SettingsPage() {
  return (
    <Layout>
      <Head>
        <title>Settings - KJC Consultancy</title>
        <meta name="description" content="Manage your account settings, preferences, and system configuration" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Settings2 className="h-6 w-6" />
          <h1 className="text-3xl font-bold">Settings</h1>
        </div>

        <Tabs defaultValue="appearance" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 lg:max-w-[800px]">
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="health">Health & Safety</TabsTrigger>
            <TabsTrigger value="help">Help & FAQ</TabsTrigger>
          </TabsList>

          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize how the application looks and feels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Theme Mode</Label>
                    <div className="text-sm text-muted-foreground">
                      Switch between light and dark modes
                    </div>
                  </div>
                  <ThemeToggle />
                </div>
                <Separator />
                <div className="flex items-center space-x-4">
                  <Switch id="reduce-animations" />
                  <Label htmlFor="reduce-animations">Reduce animations</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="high-contrast" />
                  <Label htmlFor="high-contrast">High contrast mode</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure system preferences and notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Enable notifications</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="sounds" />
                  <Label htmlFor="sounds">Enable sounds</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="updates" />
                  <Label htmlFor="updates">Automatic updates</Label>
                </div>
                <Separator />
                <div className="space-y-1">
                  <Label>System Information</Label>
                  <div className="text-sm text-muted-foreground">
                    <p>Version: 1.0.0</p>
                    <p>Last Updated: March 12, 2025</p>
                    <p>Build: 2025.03.12.1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health">
            <Card>
              <CardHeader>
                <CardTitle>Health & Safety</CardTitle>
                <CardDescription>Important health information and safety guidelines</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {healthWarnings.map((warning, index) => (
                  <Alert key={index}>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>{warning.title}</AlertTitle>
                    <AlertDescription>
                      {warning.description}
                    </AlertDescription>
                  </Alert>
                ))}
                <div className="flex items-center space-x-4">
                  <Switch id="break-reminders" />
                  <Label htmlFor="break-reminders">Enable break reminders</Label>
                </div>
                <div className="flex items-center space-x-4">
                  <Switch id="eye-protection" />
                  <Label htmlFor="eye-protection">Enable eye protection mode</Label>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="help">
            <Card>
              <CardHeader>
                <CardTitle>Help & FAQ</CardTitle>
                <CardDescription>Frequently asked questions and help resources</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  )
}
