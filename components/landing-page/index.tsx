'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/providers/auth-provider';
import { ArrowRight, Building2, GraduationCap, LayoutGrid, Users } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/footer';

export function LandingPage() {
  const { user } = useAuth();

  const services = [
    {
      title: 'Hub',
      description: 'Collaborative workspace for teams',
      icon: Users,
      href: '/hub'
    },
    {
      title: 'Marketplace',
      description: 'Multi-vendor e-commerce platform',
      icon: LayoutGrid,
      href: '/marketplace'
    },
    {
      title: 'Virtual Internship',
      description: 'Remote learning environment',
      icon: GraduationCap,
      href: '/internship'
    },
    {
      title: 'Smart School',
      description: 'Gamified education platform',
      icon: Building2,
      href: '/smart-school'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-primary sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business</span>
              <span className="block text-primary">with LanetBase</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Your all-in-one platform for business growth, collaboration, and innovation.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link href={user ? '/dashboard' : '/auth/login'}>
                <Button size="lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.title} href={service.href}>
                <div className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground mx-auto">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium text-primary text-center">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}