
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <Card className="max-w-6xl mx-auto">
        <CardContent className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-primary" />
            <p className="text-sm">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={rejectCookies}>
              Reject All
            </Button>
            <Button onClick={acceptCookies}>
              Accept All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
