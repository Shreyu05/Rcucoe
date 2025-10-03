import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 98765 43210",
    subtitle: "Mon-Fri 9am-6pm"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "contact@rcucoe.org",
    subtitle: "We'll respond within 24hrs"
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RCUCOE</h3>
            <p className="text-gray-400 leading-relaxed">
              Rotaract Club of Universal College of Engineering - More Than A Club. 
              Empowering changes and creating lasting impact in our community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-xl mb-6">Contact Us</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{contact.title}</h5>
                      <p className="text-blue-400 font-medium">{contact.info}</p>
                      <p className="text-gray-400 text-sm">{contact.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 RCUCOE. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Made with ❤️ by the RCUCOE team
          </p>
        </div>
      </div>
    </footer>
  );
}