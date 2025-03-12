
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[2000px] mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center">
                  <span className="text-xl font-bold">KJC</span>
                </Link>
                <nav className="flex flex-col gap-5">
                  <Link 
                    href="/" 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive("/") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/pricing" 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive("/pricing") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Pricing
                  </Link>
                  <Link 
                    href="/services" 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive("/services") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Services
                  </Link>
                  <Link 
                    href="/about" 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive("/about") ? "text-primary" : "text-foreground"
                    )}
                  >
                    About
                  </Link>
                  <Link 
                    href="/contact" 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive("/contact") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/teams" 
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive("/teams") ? "text-primary" : "text-foreground"
                    )}
                  >
                    Teams
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">KJC</span>
          </Link>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive("/pricing") ? "bg-accent text-accent-foreground" : "bg-transparent"
                )}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive("/services") ? "bg-accent text-accent-foreground" : "bg-transparent"
                )}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive("/about") ? "bg-accent text-accent-foreground" : "bg-transparent"
                )}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive("/contact") ? "bg-accent text-accent-foreground" : "bg-transparent"
                )}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/teams" legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                  isActive("/teams") ? "bg-accent text-accent-foreground" : "bg-transparent"
                )}>
                  Teams
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="hidden sm:inline-flex" variant="default">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
