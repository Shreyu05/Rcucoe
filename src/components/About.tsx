import { Button } from "./ui/button";
import { CheckCircle, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Community service and social impact initiatives",
  "Leadership development and skill building programs",
  "Regular fellowship events and networking opportunities",
  "Professional development workshops and seminars",
  "Environmental and sustainability projects",
];



export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-200 rounded-full opacity-15 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                About RCUCOE
              </h2>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  The Rotaract Club of University College of Engineering (RCUCOE) is truly 
                  <span className="font-semibold text-blue-600"> "More Than A Club"</span> - we are a dynamic community of young leaders dedicated 
                  to service above self. Through community service, professional development, 
                  and international understanding, we create lasting impact while building 
                  lifelong friendships and leadership skills.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our club organizes diverse events ranging from community service projects 
                  and educational workshops to fellowship activities and professional 
                  development seminars. We believe in empowering youth to make a positive 
                  difference in their communities.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                What We Offer
              </h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 group-hover:text-green-600 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>




          </div>

          {/* Images */}
          <div className="relative">
            {/* Background decorative elements for image section */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-2xl blur opacity-10"></div>
            
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1709100450223-e8333fa09988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3RhcnklMjBjbHViJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NTg5NTc5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Community service activities"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjB2b2x1bnRlZXJpbmd8ZW58MXx8fHwxNzU4OTU3OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Students volunteering"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1652811435172-bf8bbe203469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzZXJ2aWNlJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTg5NTc5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Community volunteers"
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10"></div>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb25hbCUyMHdvcmtzaG9wJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU4OTU3OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Educational workshops"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}