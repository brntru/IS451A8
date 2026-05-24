import React from "react";
import { Link, useRoute } from "wouter";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isHome] = useRoute("/");
  const [isCourses] = useRoute("/courses");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80" data-testid="link-home-logo">
          <Compass className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary tracking-tight">StudyPoint</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${isHome ? "text-primary" : "text-muted-foreground"}`} data-testid="link-nav-home">
            Home
          </Link>
          <Link href="/courses" className={`text-sm font-medium transition-colors hover:text-primary ${isCourses ? "text-primary" : "text-muted-foreground"}`} data-testid="link-nav-courses">
            Courses
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" data-testid="link-nav-pricing">
            Pricing
          </Link>
          <Link href="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" data-testid="link-nav-resources">
            Resources
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" data-testid="link-nav-about">
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="default" className="rounded-full bg-primary hover:bg-primary/90 px-6 font-semibold" data-testid="button-login">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}
