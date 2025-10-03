import { Button } from "./ui/button";
import { ArrowRight, Users, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                More Than A Club
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Thrive Beyond
                <span className="text-blue-600 block">Limits</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                RCUCOE (Rotaract Club of University College of Engineering) is a dynamic community 
                of young leaders dedicated to service above self. We empower youth through community 
                service, leadership development, professional growth, and lifelong friendships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Join Our Community
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Users className="mr-2 h-4 w-4" />
                Meet Our Team
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Community Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
                <div className="text-sm text-gray-600">Years of Service</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RhcnklMjBjbHViJTIwZ3JvdXAlMjBwaG90byUyMGNvbW11bml0eXxlbnwxfHx8fDE3NTg5NTkzNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="RCUCOE Team - Rotaract Club of University College of Engineering"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Service Above Self</div>
                  <div className="text-sm text-gray-600">Building communities together</div>
                </div>
              </div>
            </div>

            {/* Rotaract Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="font-bold text-lg">RCUCOE</div>
                <div className="text-xs opacity-90">Rotaract Club</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}