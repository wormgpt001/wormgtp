import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted-foreground text-sm uppercase tracking-widest mb-6">
          Proud to introduce
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4">
          <span className="gradient-text">Worm</span>
        </h1>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8">
          <span className="gradient-text">GPT</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
          - Hacking AI Tool
        </p>

        <div className="mt-12">
          <Link to="/pricing">
            <Button
              size="lg"
              className="glow-button bg-white text-black hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full"
            >
              Buy Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2">
          <span className="text-2xl font-bold text-white">Worm</span>
          <span className="text-2xl font-bold text-white/80">GPT</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
