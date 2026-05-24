import React, { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import videoPath from "@assets/video_1779595548808.mp4";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const tryPlay = () => {
      vid.muted = true;
      vid.play().then(() => setIsPlaying(true)).catch(() => {});
    };

    tryPlay();

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) tryPlay(); },
      { threshold: 0.1 }
    );
    observer.observe(vid);

    document.addEventListener("click", tryPlay, { once: true });
    document.addEventListener("touchstart", tryPlay, { once: true });
    document.addEventListener("keydown", tryPlay, { once: true });
    vid.addEventListener("canplay", tryPlay);
    vid.addEventListener("play", () => setIsPlaying(true));
    vid.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      observer.disconnect();
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("keydown", tryPlay);
      vid.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-32 px-4 md:px-8">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Enhance Your Study Experience. Anytime, Anywhere.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Bring high-quality learning resources to assist with your study journey, break through tough concepts, and clear your doubts anywhere.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 py-6 text-lg font-semibold mt-4" data-testid="button-explore">
                <Link href="/courses">
                  Explore Dashboard Overview <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black/20 ring-1 ring-white/10 cursor-pointer"
              onClick={() => {
                const vid = videoRef.current;
                if (!vid) return;
                vid.muted = true;
                if (vid.paused) vid.play().then(() => setIsPlaying(true)).catch(() => {});
              }}
              data-testid="video-container"
            >
              <video 
                ref={videoRef}
                src={videoPath} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                data-testid="video-hero"
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity">
                  <div className="rounded-full bg-white/20 backdrop-blur-sm p-5 ring-2 ring-white/40">
                    <svg className="w-10 h-10 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Featured Courses */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Featured Courses</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/courses" data-testid="card-course-biology">
                  <Card className="h-full bg-[#e6f3ff] border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="text-4xl">🧬</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Biology 101</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">Explore cell biology, molecular structures, and metabolic processes.</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/courses" data-testid="card-course-calculus">
                  <Card className="h-full bg-primary border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="text-4xl text-white/90 font-serif">∫ f(x) dx</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Calculus</h3>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">Master limits, derivatives, integration, and mathematical tools.</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/courses" data-testid="card-course-history">
                  <Card className="h-full bg-[#fff4e6] border-none shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 flex flex-col items-start gap-4">
                      <div className="text-4xl">📖</div>
                      <div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2">History</h3>
                        <p className="text-amber-800/80 text-sm leading-relaxed">Analyze civilizations, historical shifts, and structural developments.</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            {/* Right Column: Success Stories */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-2xl p-8 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                  <h2 className="text-2xl font-bold text-secondary-foreground">Success Stories</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl space-y-4">
                    <p className="text-slate-700 italic">"Develops structural, high-quality focus patterns using StudyPoint tools."</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-primary text-white text-xs">JR</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-foreground">Jesica Reazier</p>
                        <p className="text-xs text-muted-foreground">Biology Major</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl space-y-4">
                    <p className="text-slate-700 italic">"Completely transformed the way I manage all study material before heavy exams."</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
                        <AvatarFallback className="bg-accent text-white text-xs">JB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm text-foreground">Jimmy Bonsin</p>
                        <p className="text-xs text-muted-foreground">Engineering Student</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
