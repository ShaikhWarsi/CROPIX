import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Sprout, TestTube, Camera, CloudSun, Leaf, Sun, Droplets } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      <Navigation />
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Powerful Features
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Explore the innovative tools Cropix offers to revolutionize your farming practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Feature 1: Crop Recommendation */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Sprout className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Crop Recommendation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI-powered suggestions for the best crops based on your soil and climate conditions.
              Maximize your yield with data-driven decisions.
            </p>
            <Link href="/crop-recommendation">
              <Button variant="outline" className="w-full">Try it out</Button>
            </Link>
          </div>

          {/* Feature 2: Fertilizer Guidance */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <TestTube className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Fertilizer Guidance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Precise fertilizer recommendations to optimize your crop yield and soil health.
              Get the right nutrients at the right time.
            </p>
            <Link href="/fertilizer-guidance">
              <Button variant="outline" className="w-full">Try it out</Button>
            </Link>
          </div>

          {/* Feature 3: Disease Detection */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Camera className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Disease Detection</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upload crop images to instantly detect diseases and get treatment recommendations.
              Protect your crops from harmful pathogens.
            </p>
            <Link href="/disease-detection">
              <Button variant="outline" className="w-full">Try it out</Button>
            </Link>
          </div>

          {/* Feature 4: Weather & Market Forecast */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <CloudSun className="w-10 h-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Weather & Market Forecast</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Stay ahead with accurate weather predictions and market price forecasts.
              Plan your planting and harvesting with confidence.
            </p>
            <Link href="/weather-market-forecast">
              <Button variant="outline" className="w-full">Try it out</Button>
            </Link>
          </div>

          {/* Feature 5: Soil Analysis */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Sun className="w-10 h-10 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Soil Analysis</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understand your soil composition and nutrient levels with detailed analysis.
              Optimize soil health for long-term productivity.
            </p>
            <Link href="/soil-analysis">
              <Button variant="outline" className="w-full">Try it out</Button>
            </Link>
          </div>

          {/* Feature 6: Irrigation Management */}
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Droplets className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground mb-4">Irrigation Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Smart irrigation scheduling based on crop needs and weather conditions.
              Conserve water and ensure optimal hydration.
            </p>
            <Link href="/irrigation-management">
              <Button variant="outline" className="w-full">Try it out</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}