import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Rocket, Palette, Code, Gauge } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Built with React + Vite for instant HMR and optimal performance.',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-600/10',
  },
  {
    title: 'Production Ready',
    description: 'Complete auth system, RBAC, and PWA support out of the box.',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-600/10',
  },
  {
    title: 'Highly Scalable',
    description: 'Modular architecture designed to grow with your application.',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-600/10',
  },
  {
    title: 'Theme Customization',
    description: 'Dynamic theming system with real-time color palette generation.',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-600/10',
  },
  {
    title: 'Type Safe',
    description: 'Fully typed with TypeScript for better DX and fewer bugs.',
    icon: Code,
    color: 'text-pink-600',
    bgColor: 'bg-pink-600/10',
  },
  {
    title: 'Optimized Performance',
    description: 'Code splitting, lazy loading, and Core Web Vitals optimization.',
    icon: Gauge,
    color: 'text-orange-600',
    bgColor: 'bg-orange-600/10',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Production-Ready SAAS Template
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Build Your Next
              <span className="gradient-text"> SAAS Product</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, scalable foundation built with React, TypeScript, Tailwind CSS, and Zustand. 
              Start shipping features instead of building infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/auth/register">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/auth/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Launch Fast
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pre-built components, authentication, state management, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="animate-fade-in hover:shadow-lg transition-all group hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.bgColor)}>
                      <Icon className={cn("h-6 w-6", feature.color)} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of developers building modern SAAS applications.
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link to="/auth/register">
                Start Building Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
