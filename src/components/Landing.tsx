import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Landing() {
  return (
    <section id="home" className="min-h-screen bg-white flex items-center justify-center py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Logo */}
        <div className="flex justify-center mb-8">
          <ImageWithFallback 
            src= "https://i.postimg.cc/CKK1TpkQ/RCUCo-E-Club-Logo.png"
            alt="RCUCOE - More Than A Club" 
            className="w-[600px] h-[600px] object-contain rounded-full"
          />
        </div>
        
        {/* Tagline with animation */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl lg:text-3xl font-black text-gray-900 tracking-wide animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            THRIVE BEYOND LIMITS
          </h2>
        </div>
        
        {/* Main Title with animation */}
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto leading-tight animate-scale-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            Rotaract Club of Universal College of Engineering
          </h1>
        </div>
      </div>
    </section>
  );
}