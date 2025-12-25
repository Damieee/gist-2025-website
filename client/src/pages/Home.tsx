import { Button } from "@/components/ui/button";
import { Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

/**
 * GIST 2025 Abeokuta Hangout - Home Page
 * Design Philosophy: Warm Minimalism with Organic Flow
 * - Terracotta (#D97757) and Forest Green (#2D5016) primary colors
 * - Playfair Display for headings, Inter for body
 * - Organic, asymmetric layout with generous whitespace
 * - Smooth, natural animations and transitions
 */

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
            GIST
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="ghost" size="sm">
              What to Expect
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Register
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

        <div className="container">
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
                onClick={() => setIsRegistering(!isRegistering)}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/5"
              >
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form - Inline */}
      {isRegistering && (
        <section className="py-12 bg-card/50">
          <div className="container max-w-md">
            <h2 className="text-display-sm mb-6">Join Us</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Register
              </Button>
            </form>
            {submitted && (
              <p className="mt-4 text-center text-green-600">Thank you for registering!</p>
            )}
          </div>
        </section>
      )}

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

      {/* Event Highlights Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-display-md mb-12">Event Highlights</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-3xl shadow-lg h-96">
              <img
                src="/images/worship-moment.jpg"
                alt="Worship moment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Spiritual Connection</h3>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-lg h-96">
              <img
                src="/images/celebration-joy.jpg"
                alt="Celebration and joy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Community Joy</h3>
              </div>
            </div>
          </div>
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
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Become a Sponsor
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
