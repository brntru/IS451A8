import React from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import heroImagePath from "@assets/Gemini_Generated_Image_m2qu69m2qu69m2qu_1779589373812_1779595833532.png";

export default function Courses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 md:px-8 py-8 lg:py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          data-testid="link-back-home"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Landing Page
        </Link>

        <Card className="overflow-hidden border-none shadow-xl bg-card">
          <div className="w-full aspect-[21/9] md:aspect-[24/9] relative bg-muted overflow-hidden">
            <img 
              src={heroImagePath} 
              alt="Student studying in a library" 
              className="w-full h-full object-cover object-center"
              data-testid="img-course-hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <CardContent className="p-8 md:p-12 relative z-10 bg-card -mt-4 rounded-t-3xl">
            <div className="max-w-4xl mx-auto">
              <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6 font-medium px-3 py-1 text-sm border-none shadow-sm" data-testid="badge-architecture">
                Dashboard Interface Architecture
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 tracking-tight">
                The StudyPoint Interactive Learning Platform
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Experience a focused, distraction-free environment designed specifically for academic excellence. The StudyPoint platform architecture brings all your necessary resources into a single, cohesive dashboard that adapts to your learning style.
                  </p>
                  <p>
                    Navigate seamlessly between course materials, recorded lectures, and interactive problem sets. Our interface prioritizes clarity and rapid access, ensuring that your cognitive energy is spent on mastering concepts, not finding files.
                  </p>
                  <p>
                    Built with performance and accessibility in mind, the platform delivers high-quality video content and structured notes instantly, whether you're at the library late at night or reviewing on the go.
                  </p>
                </div>

                <div className="md:col-span-1">
                  <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-accent shadow-sm">
                    <h3 className="font-bold text-foreground text-lg mb-6">Key Platform Features</h3>
                    <ul className="space-y-4">
                      {[
                        "Clean minimal responsive workspace",
                        "Zoned card grids for active subjects",
                        "Peer community metrics column",
                        "Instant access account login nodes"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
