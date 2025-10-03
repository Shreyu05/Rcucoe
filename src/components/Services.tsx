import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Heart, Users, Lightbulb, Trophy, Globe, BookOpen } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Community Service",
    description: "Organizing impactful projects to serve our local community and those in need",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Users,
    title: "Leadership Development",
    description: "Building essential leadership skills through hands-on experience and mentorship",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Lightbulb,
    title: "Professional Growth",
    description: "Workshops, seminars, and networking opportunities for career advancement",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    icon: Globe,
    title: "International Understanding",
    description: "Promoting peace and understanding through cultural exchange and global awareness",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: BookOpen,
    title: "Educational Programs",
    description: "Skill-building workshops, educational seminars, and knowledge sharing sessions",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Trophy,
    title: "Fellowship Activities",
    description: "Fun social events, team building activities, and lifelong friendship building",
    color: "bg-orange-50 text-orange-600"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RCUCOE offers diverse opportunities for personal growth, community impact, 
            and meaningful connections through our various programs and initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-blue-300 bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:scale-105 relative overflow-hidden">
                {/* Card background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className={`relative w-12 h-12 rounded-lg flex items-center justify-center ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}