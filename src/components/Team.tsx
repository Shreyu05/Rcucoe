import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teamMembers = [
  {
    name: "Rtr. Diksha Kotian",
    position: "President",
    image: "https://i.postimg.cc/mkys0xFp/Picsart-25-08-20-16-46-15-372.png",
    description: "Leading the club towards glory"
  },
  {
    name: "Rtr. Prathamesh Raut",
    position: "IPP & Chairman HRD",
    image: "https://i.postimg.cc/WzBkfkgK/Pratahamesh.jpg",
    description: "Overseeing strategic initiatives and governance"
  },
  {
    name: "Rtr. Manas Vedre",
    position: "Advisor & Chairman Publication",
    image: "https://i.postimg.cc/R0Yw2hrN/Manas.png",
    description: "Advising the members through all the predicaments"
  },
  {
    name: "Rtr. Shailendra Mishra",
    position: "Secretary",
    image: "https://i.postimg.cc/Wbfrdt3m/shaili2.png",
    description: "Managing administrative operations and documentation"
  },
  {
    name: "Rtr. Disha Singh",
    position: "Vice President",
    image: "https://i.postimg.cc/Ssvq60zf/Picsart-25-08-20-16-28-59-432.png",
    description: "Supporting leadership and coordinating activities"
  },
  {
    name: "Rtr. Harsh Vichare",
    position: "Vice President",
    image: "https://i.postimg.cc/Dz23Xfmc/IMG-20250620-WA0007.jpg",
    description: "Assisting in leadership and project management"
  },
  {
    name: "Rtr. Lavanya Poojari",
    position: "Joint Secretary",
    image: "https://i.postimg.cc/6Q1bpBZB/Picsart-25-09-18-22-10-11-20857645765.png",
    description: "Supporting secretarial duties and coordination"
  },
  {
    name: "Rtr. Aarya Sharma",
    position: "Joint Secretary",
    image: "https://i.postimg.cc/7PXGGb6n/IMG-20250620-WA0012.jpg",
    description: "Assisting with organizational tasks and events"
  },
  {
    name: "Rtr. Harsh Patel",
    position: "SAA and Chairman Finance",
    image: "https://i.postimg.cc/tRVRyT6x/harsh.jpg",
    description: "Managing finances and sergeant-at-arms duties"
  },
  {
    name: "Sakshi Rokade",
    position: "Faculty Co-Ordinator",
    image: "https://i.postimg.cc/y6h5FCCq/IMG-20250925-155334.png",
    description: "Faculty Coordinator"
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders of RCUCOE who drive our mission forward 
            and make our club "More Than A Club"
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}