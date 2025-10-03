import { ImageWithFallback } from "./figma/ImageWithFallback";

export function President() {
  return (
    <section id="president" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* President Profile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section with simplified visual effects */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                  <ImageWithFallback
                    src="https://i.postimg.cc/mkys0xFp/Picsart-25-08-20-16-46-15-372.png"
                    alt="Rtr. Diksha Kotian"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Simplified decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute top-10 -left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-40"></div>
                <div className="absolute -top-2 left-1/2 w-20 h-20 bg-green-200 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  Rtr. Diksha Kotian
                </h1>
                <div className="h-1 w-20 bg-blue-600 mb-4"></div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I am Rtr. <strong className="text-blue-600">Diksha Kotian</strong>, honored to serve as the President of the 
                  Rotaract Club of Universal College of Engineering for the term 
                  <strong className="text-gray-900"> 2025-26</strong>.
                </p>

                <p className="text-lg leading-relaxed">
                  With a passionate commitment to our theme, <strong className="text-blue-600">"Thrive Beyond Limits"</strong>, I am dedicated to leading our 
                  fearless team in driving impactful transformations and creating a 
                  lasting legacy of positive change. Our mission this year is to inspire 
                  innovation, promote inclusivity, and empower every individual to 
                  reach their full potential.
                </p>

                <p className="text-lg leading-relaxed">
                  Together, we will soar to new heights, fostering a community where 
                  every action we take contributes to a brighter, more empowered 
                  future.
                </p>
              </div>

              {/* Position Title */}
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900">President 25-26</h3>
                <p className="text-blue-600 font-semibold">Rotaract Club of Universal College of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}