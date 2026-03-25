import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, MapPin, Clock, Users, Image as ImageIcon, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const upcomingEvents = [
  {
    title: "Community Clean-Up Drive",
    date: "March , 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Local Community Park",
    participants: "50+ volunteers",
    description: "Join us for a community service project to clean and beautify our local park area.",
    image: "https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBjbGVhbnVwJTIwdm9sdW50ZWVyc3xlbnwxfHx8fDE3NTg5NjUwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Leadership Workshop",
    date: "March , 2025", 
    time: "2:00 PM - 6:00 PM",
    location: "University College Auditorium",
    participants: "30+ members",
    description: "Interactive workshop on developing leadership skills and effective communication.",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwd29ya3Nob3AlMjBzZW1pbmFyfGVufDF8fHx8MTc1ODk2NTAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Blood Donation Camp",
    date: "April, 2025",
    time: "10:00 AM - 4:00 PM", 
    location: "College Campus",
    participants: "100+ donors",
    description: "Annual blood donation drive in partnership with local hospitals to save lives.",
    image: "https://images.unsplash.com/photo-1643660527081-d1b887c8bbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9vZCUyMGRvbmF0aW9uJTIwY2FtcCUyMG1lZGljYWx8ZW58MXx8fHwxNzU4OTY1MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const pastEvents = [
  {
    title: "Baithak",
    date: "January 31, 2026",
    time: "11 am Onwards",
    location: "Evershine's Dream Park,Thakur Village,Kandivali (E)",
    participants: "25 Members",
    description: "Relive your childhood memories and sing out your heart.",
    image: "https://i.postimg.cc/T2kqq6BS/Whats-App-Image-2026-03-25-at-11-38-06-PM.jpg",
    gallery: [
      "https://i.postimg.cc/Tw0SJsXH/Screenshot-2026-03-25-222258.png",
      "https://i.postimg.cc/qMPmyr3r/Whats-App-Image-2026-03-25-at-11-33-20-PM.jpg",
      "https://i.postimg.cc/C5W4GCdW/Whats-App-Image-2026-03-25-at-11-33-20-PM-(1).jpg"
    ]
  },
  {
    title: "The Humble Heart",
    date: "January 25, 2026",
    time: "8:30 PM - 12:30 PM",
    location: "Gurudwara, Vasai West",
    participants: "20 attendees",
    description: "Assisting in food preparation, vegetable cutting, and serving Langar.",
    image: "https://i.postimg.cc/3x6Ddr4s/Whats-App-Image-2026-03-25-at-11-38-21-PM-(1).jpg",
    gallery: [
      "https://i.postimg.cc/fR6JMHpK/Whats-App-Image-2026-03-25-at-11-44-11-PM.jpg",
      "https://i.postimg.cc/9QqQgd0b/Whats-App-Image-2026-03-25-at-11-44-23-PM.jpg",
      "https://i.postimg.cc/rsm81W79/Whats-App-Image-2026-03-25-at-11-43-50-PM.jpg"
    ]
  },  
  {
    title: "Snap & Seek",
    date: "January 10, 2026",
    time: "12:00 PM - 02:00 PM",
    location: "Sky City Mall, Borivali",
    participants: "30 Members",
    description: "Solve Clues. Move Floors. Capture Proof",
    image: "https://i.postimg.cc/mDFxBjxX/Whats-App-Image-2026-03-25-at-11-38-35-PM.jpg",
    gallery: [
      "https://i.postimg.cc/fRW6JDnd/Whats-App-Image-2026-03-25-at-11-41-58-PM.jpg",
      "https://i.postimg.cc/c1QjhrdB/Whats-App-Image-2026-03-25-at-11-42-05-PM.jpg",
      "https://i.postimg.cc/rwzQBm27/Whats-App-Image-2026-03-25-at-11-42-29-PM.jpg"
    ]
  }
];

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<typeof pastEvents[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const EventCard = ({ event, isPast = false }: { event: any, isPast?: boolean }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
        </div>
        {isPast && event.gallery && (
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setSelectedEvent(event)}
              className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
              title="View Images"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
          {event.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {event.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-2 text-blue-600" />
          {event.time}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
          {event.location}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="h-4 w-4 mr-2 text-blue-600" />
          {event.participants} {isPast ? "participated" : "expected"}
        </div>
        {isPast && event.gallery && (
          <div className="flex items-center text-sm text-blue-600 font-medium pt-2">
            <ImageIcon className="h-4 w-4 mr-2" />
            {event.gallery.length} photos available
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Our Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in our activities and see the impact we've made in our community. 
            Together we create positive change and build lasting connections.
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={index} event={event} isPast={true} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Image Gallery Modal */}
        <Dialog open={selectedEvent !== null} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedEvent?.title} - Event Gallery
              </DialogTitle>
            </DialogHeader>
            
            {selectedEvent && selectedEvent.gallery && (
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={selectedEvent.gallery[selectedImageIndex]}
                    alt={`${selectedEvent.title} - Image ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Thumbnail Gallery */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedEvent.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative h-24 overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImageIndex === index 
                          ? 'border-blue-600 ring-2 ring-blue-200' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <ImageWithFallback
                        src={image}
                        alt={`${selectedEvent.title} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Event Details */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      {selectedEvent.date}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      {selectedEvent.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      {selectedEvent.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      {selectedEvent.participants} participated
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">{selectedEvent.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>


      </div>
    </section>
  );
}