import React from "react";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { XIcon } from "./XIcon";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rc.ucoe@universal.edu.in",
    description: "Reach out to us for inquiries",
    link: "mailto:rc.ucoe@universal.edu.in",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 85302 96611",
    description: "Contact us for more information",
    link: "tel:+918530296611",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Universal College of Engineering, Kaman Road, Vasai",
    description: "Visit our campus",
    link: "https://maps.google.com/?q=Universal%20College%20of%20Engineering,%20Kaman%20Road,%20Vasai",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@rcucoe",
    description: "Follow us for updates and events",
    colors: "from-pink-500 via-red-500 to-yellow-500",
    hoverColors: "from-pink-600 via-red-600 to-yellow-600",
    link: "https://instagram.com/rcucoe",
  },
  {
    icon: Linkedin,
    title: "LinkedIn", 
    value: "RCUCOE Official",
    description: "Connect with us professionally",
    colors: "from-blue-500 to-blue-600",
    hoverColors: "from-blue-600 to-blue-700",
    link: "https://www.linkedin.com/company/rotaract-club-of-universal-college-of-engineering-rid-3141/posts/?feedView=all",
  },
  {
    icon: XIcon,
    title: "X",
    value: "@rcucoe_official", 
    description: "Follow us for quick updates",
    colors: "from-black to-black",
    hoverColors: "from-gray-900 to-black",
    // Force solid black background and glow for reliability
    bgClass: "bg-black",
    glowClass: "bg-black",
    iconColor: "text-white",
    link: "https://x.com/rcucoe2526?t=se_GRj2a5AQFGoqhgeA-Zg&s=08",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to join our community or learn more about RCUCOE? 
            Here's how you can reach us and stay connected.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isX = info.title === 'X';
              const glowClass = info.glowClass
                ? info.glowClass
                : `bg-gradient-to-r ${info.colors || 'from-blue-400 to-purple-400'}`;
              const bgCircleClass = info.bgClass
                ? info.bgClass
                : `bg-gradient-to-r ${info.colors || 'from-blue-500 to-purple-600'}`;
              const iconColor = info.iconColor || 'text-white';
              // Inline fallback styles (avoid React type to prevent TS namespace errors)
              const circleStyle: any = info.bgClass === 'bg-black' ? { backgroundColor: '#000' } : undefined;
              const glowStyle: any = info.glowClass === 'bg-black' ? { backgroundColor: '#000' } : undefined;
              const iconStyle: any = info.iconColor === 'text-white' ? { color: '#fff' } : undefined;
              const CardInner = (
                <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                  {/* Card background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        {isX ? (
                          <>
                            <div className="absolute inset-0 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity z-0" style={{ backgroundColor: '#000' }}></div>
                            <div className="relative w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300 z-10" style={{ backgroundColor: '#000' }}>
                              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff"/>
                              </svg>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`absolute inset-0 ${glowClass} rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity`} style={glowStyle}></div>
                            <div className={`relative w-16 h-16 ${bgCircleClass} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`} style={circleStyle}>
                              <Icon className={`h-8 w-8 ${iconColor}`} style={iconStyle} />
                            </div>
                          </>
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{info.title}</h4>
                        <p className="text-gray-900 mb-2 break-all group-hover:text-gray-800 transition-colors">{info.value}</p>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
              return info.link ? (
                <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className="block">{CardInner}</a>
              ) : (
                <div key={index}>{CardInner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}