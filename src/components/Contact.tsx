import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "rcucoe@universalcollege.edu.in",
    description: "Reach out to us for inquiries",
    link: "mailto:rcucoe@universalcollege.edu.in",
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
    link: "https://www.linkedin.com/company/rcucoe-official",
  },
  {
    icon: Twitter,
    title: "Twitter",
    value: "@rcucoe_official", 
    description: "Follow us for quick updates",
    colors: "from-sky-400 to-blue-500",
    hoverColors: "from-sky-500 to-blue-600",
    link: "https://twitter.com/rcucoe_official",
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
              const CardInner = (
                <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                  {/* Card background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${info.colors || 'from-blue-400 to-purple-400'} rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                        <div className={`relative w-16 h-16 bg-gradient-to-r ${info.colors || 'from-blue-500 to-purple-600'} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
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