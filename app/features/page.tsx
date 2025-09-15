'use client';
import { Sprout, TestTube, Camera, CloudSun, LeafyGreen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionH2 = dynamic(() => import('framer-motion').then(mod => mod.motion.h2), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then(mod => mod.motion.p), { ssr: false });

export default function FeaturesPage() {
  const features = [
    {
      icon: LeafyGreen,
      title: "Crop Recommendation",
      description: "AI-powered suggestions for the best crops based on your soil and climate conditions.",
      link: "/crop-recommendation",
      color: "bg-green-500/20",
    },
    {
      icon: TestTube,
      title: "Fertilizer Guidance",
      description: "Precise fertilizer recommendations to optimize your crop yield and soil health.",
      link: "/fertilizer-guidance",
      color: "bg-blue-500/20",
    },
    {
      icon: Camera,
      title: "Disease Detection",
      description: "Upload crop images to instantly detect diseases and get treatment recommendations.",
      link: "/disease-detection",
      color: "bg-purple-500/20",
    },
    {
      icon: CloudSun,
      title: "Weather & Market Forecast",
      description: "Stay ahead with accurate weather predictions and market price forecasts.",
      link: "/market-forecast",
      color: "bg-yellow-500/20",
    },
    {
      icon: Sprout,
      title: "Smart Irrigation",
      description: "Optimize water usage with AI-driven irrigation schedules for maximum efficiency.",
      link: "/smart-irrigation",
      color: "bg-cyan-500/20",
    },
    {
      icon: LeafyGreen, // Reusing LeafyGreen for another feature
      title: "Soil Analysis",
      description: "Detailed insights into your soil composition and nutrient levels for informed decisions.",
      link: "/soil-analysis",
      color: "bg-amber-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MotionH2
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Powerful Features
          </MotionH2>
          <MotionP
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the innovative tools Cropix offers to revolutionize your farming practices.
          </MotionP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-background/90 to-background p-8 rounded-3xl shadow-lg border border-border/50 overflow-hidden group hover:shadow-xl transition-all duration-300 ease-in-out"
              whileHover={{ translateY: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 ${feature.color} rounded-3xl blur-2xl`}></div>
              </div>
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                <Link href={feature.link} className="mt-4 block">
                  <Button variant="outline" className="w-full">Try it out</Button>
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </main>
    </div>
  );
}