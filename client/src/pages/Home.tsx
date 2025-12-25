import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/**
 * GIST 2025 Abeokuta Hangout - Home Page
 * Design Philosophy: Warm Minimalism with Organic Flow
 * - Terracotta (#D97757) and Forest Green (#2D5016) primary colors
 * - Playfair Display for headings, Inter for body
 * - Organic, asymmetric layout with generous whitespace
 * - Smooth, natural animations and transitions
 */

export default function Home() {
  const registrationLink = "https://forms.gle/eymBQ4AGQYveqLh7A";
  const sponsorshipLink = "https://wa.me/2348139721779";

  const carouselImages = [
    { src: "/carousel-images/6B7A0575.jpg", alt: "GIST Event Moment 1" },
    { src: "/carousel-images/6B7A0582.jpg", alt: "GIST Event Moment 2" },
    { src: "/carousel-images/6B7A0792.jpg", alt: "GIST Event Moment 3" },
    { src: "/carousel-images/6B7A0869.jpg", alt: "GIST Event Moment 4" },
    { src: "/carousel-images/6B7A0929.jpg", alt: "GIST Event Moment 5" },
    { src: "/carousel-images/WhatsApp Image 2025-12-25 at 17.06.39.jpeg", alt: "GIST Community" },
    { src: "/carousel-images/WhatsApp Image 2025-12-25 at 17.10.192.jpeg", alt: "GIST Gathering" },
    { src: "/carousel-images/WhatsApp Image 2025-12-25 at 17.10.20.jpeg", alt: "GIST Fellowship" },
    { src: "/carousel-images/WhatsApp Image 2025-12-25 at 17.10.204.jpeg", alt: "GIST Memories" },
  ];

  // Video loading state and poster image cycling
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [posterIndex, setPosterIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cycle through poster images every 500ms while video loads
  useEffect(() => {
    if (videoLoaded) return;

    const interval = setInterval(() => {
      setPosterIndex((prev) => (prev + 1) % carouselImages.length);
    }, 500);

    return () => clearInterval(interval);
  }, [videoLoaded, carouselImages.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/images/YWB logo.png" alt="YWB Logo" className="h-10 w-auto" />
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="ghost" size="sm">
              What to Expect
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">Register</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/hero-community.jpg')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="container grid gap-12 lg:grid-cols-2 items-center">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <p className="text-sm font-medium text-primary">4th Edition</p>
            </div>

            <h1 className="text-display-lg mb-6 text-foreground">
              GIST (Gist, Informative, Strategic, Transformative) Abeokuta
            </h1>

            <p className="text-body-lg mb-8 text-foreground/80 max-w-2xl">
              The spirit and fun-filled community of young creative believers you've been looking for. A platform for high-level conversations with high-quality people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-medium">Tuesday, December 30</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">10 am - 6pm</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Abeokuta</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
                asChild
              >
                <a href={registrationLink} target="_blank" rel="noopener noreferrer">Register Now</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
                asChild
              >
                <a href={sponsorshipLink} target="_blank" rel="noopener noreferrer">Become a Sponsor</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] overflow-hidden shadow-2xl border border-white/40 bg-black/30 backdrop-blur relative">
              {/* Cycling poster images while video loads */}
              {!videoLoaded && (
                <img
                  src={carouselImages[posterIndex].src}
                  alt="Loading preview"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              <video
                ref={videoRef}
                src="/gist%20ywb.mp4"
                autoPlay
                muted
                loop
                playsInline
                onCanPlay={() => setVideoLoaded(true)}
                className={`w-full h-full object-cover ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            <div className="absolute -z-10 -right-10 bottom-6 w-32 h-32 rounded-full bg-primary/30 blur-3xl opacity-60" />
            <div className="absolute -z-10 -left-6 top-6 w-24 h-24 rounded-full bg-secondary/20 blur-2xl opacity-70" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-display-md mb-6">Why Conversations Matter</h2>
              <p className="text-body-lg text-foreground/80 mb-6">
                A conversation is not just a simple exchange of information between people. It is the primal human organizing tool. It is the way that humans have always thought together and discovered shared meaning.
              </p>
              <p className="text-body-lg text-foreground/80 mb-6">
                It presents an opportunity to be educated and can be a creative spark that changes your whole life. It's how money is made, lives started, freedom realized and how wars get started and how wars end.
              </p>
              <p className="text-body-lg text-foreground/80">
                If conversations are important, the people you have them with regularly are even more important. The people you spend time with affect your thinking, habits, the way you speak, and what you do. This is what has inspired GIST.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/hero-abeokuta.jpg"
                alt="GIST Event Space"
                className="w-full rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <h2 className="text-display-md mb-16 text-center">What to Expect</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Worship */}
            <div className="card-organic group">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🙏</span>
              </div>
              <h3 className="text-display-sm mb-3">Worship</h3>
              <p className="text-body-md text-foreground/70">
                Spirit-led moments of gratitude and reflection to center ourselves and connect with something greater.
              </p>
            </div>

            {/* Fun & Games */}
            <div className="card-organic group">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-display-sm mb-3">Fun & Games</h3>
              <p className="text-body-md text-foreground/70">
                Laughter, connection, and shared joy through games and activities that bring us together.
              </p>
            </div>

            {/* Deep Conversations */}
            <div className="card-organic group">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-display-sm mb-3">Deep Conversations</h3>
              <p className="text-body-md text-foreground/70">
                Honest, thought-provoking discussions that challenge our perspectives and expand our thinking.
              </p>
            </div>

            {/* Food */}
            <div className="card-organic group">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-display-sm mb-3">Food</h3>
              <p className="text-body-md text-foreground/70">
                Good meals and great company to nourish both body and soul.
              </p>
            </div>

            {/* Networking */}
            <div className="card-organic group">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-display-sm mb-3">Networking</h3>
              <p className="text-body-md text-foreground/70">
                Meaningful connections with high-quality people, not forced exchanges.
              </p>
            </div>

            {/* 2026 Projections */}
            <div className="card-organic group">
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-display-sm mb-3">2026 Projections</h3>
              <p className="text-body-md text-foreground/70">
                Visioning, clarity, and intentional planning for the year ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights Section - Continuous Sliding Carousel */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container">
          <h2 className="text-display-md mb-12 text-center">Event Highlights</h2>
        </div>

        {/* Infinite Sliding Carousel */}
        <div className="relative w-full">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Sliding track */}
          <div className="flex gap-6 animate-scroll">
            {/* First set of images */}
            {carouselImages.map((image, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {carouselImages.map((image, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[500px] h-[350px] rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Caption below carousel */}
        <div className="container mt-8 text-center">
          <p className="text-lg font-medium text-primary">Memories from GIST</p>
          <h3 className="text-2xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Building Community Together
          </h3>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-display-md mb-6">Ready to Join GIST?</h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto opacity-90">
            Be part of a community of young creative believers having meaningful conversations that transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-primary"
              asChild
            >
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">Register Now</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <a href={sponsorshipLink} target="_blank" rel="noopener noreferrer">Become a Sponsor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-display-sm mb-4">GIST</h3>
              <p className="text-body-md text-foreground/70">
                A platform for high-level conversations with high-quality people.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event Details</h4>
              <ul className="space-y-2 text-body-md text-foreground/70">
                <li>Tuesday, December 30</li>
                <li>10 am - 6pm</li>
                <li>Abeokuta</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="flex items-center gap-2 text-body-md text-foreground/70">
                <Mail className="w-4 h-4" />
                <span>info@gist.com</span>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-body-md text-foreground/60">
            <p>&copy; 2025 GIST Abeokuta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper component for Clock icon
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
