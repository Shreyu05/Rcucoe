import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TeamPhoto() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-indigo-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-40 h-40 bg-purple-200 rounded-full opacity-25 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 bg-blue-300 rounded-full opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Geometric patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-16 h-16 border-2 border-blue-300 rotate-45 opacity-30"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 border-2 border-indigo-400 rotate-12 opacity-40"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-purple-300 rotate-45 opacity-25"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 animate-scale-in">
              RCUCOE Team 25-26
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Team Photo Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 rounded-2xl blur-2xl opacity-20 scale-105"></div>
            
            {/* Main photo container with enhanced effects */}
            <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
              {/* Multiple shadow layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-sm"></div>
              
              <div className="relative rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://i.postimg.cc/ry7wdqwZ/Whats-App-Image-2025-09-27-at-2-36-16-PM.png"
                  alt="RCUCOE Team 2025-26"
                  className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient for modern look */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl"></div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-blue-500 rounded-tl-xl"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-indigo-500 rounded-tr-xl"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-purple-500 rounded-bl-xl"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-blue-500 rounded-br-xl"></div>
            </div>

            {/* Floating elements around the photo */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-500 rounded-full opacity-60 animate-bounce delay-300"></div>
            <div className="absolute -top-4 -right-8 w-8 h-8 bg-indigo-500 rounded-full opacity-70 animate-bounce delay-700"></div>
            <div className="absolute -bottom-6 -left-4 w-10 h-10 bg-purple-500 rounded-full opacity-50 animate-bounce delay-500"></div>
            <div className="absolute -bottom-8 -right-6 w-14 h-14 bg-blue-600 rounded-full opacity-40 animate-bounce delay-1000"></div>
          </div>

          {/* Subtitle */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-700">
              Together we <span className="font-bold text-blue-600">Thrive Beyond Limits</span>
            </p>
            <p className="text-lg text-gray-600">
              Our dedicated team working towards making RCUCOE "More Than A Club"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}