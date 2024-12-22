
export default function ExecutiveProfiles() {
  // Array of executive profiles
  const executives = [
    {
      id: 1,
      name: "Mark Chandler, MBA",
      role: "Executive Chairman",
      image: "/Team/teamtop/4.jpg",
      description: `Mark Chandler is a seasoned business executive and a recognized expert in commercializing IP and 
                    technology. He is the founder of Upstream Partners, a specialty advisory firm that helps its clients 
                    with their IP needs in all aspects of early-stage technology product development and business creation. 
                    He is also an early-stage investor and has managed $15M capital with 10+ portfolio companies.`,
    },
    {
      id: 2,
      name: "Jane Doe, PhD",
      role: "Chief Technology Officer",
      image: "/Team/teamtop/5.jpg",
      description: `Jane Doe is an experienced technologist with a proven track record in developing innovative solutions 
                    for healthcare and technology sectors. She has authored over 20 research papers and holds multiple 
                    patents in AI and machine learning.`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {executives.map((executive) => (
        <div key={executive.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm mb-8">
          <div className="flex flex-col items-center p-6">
            {/* Profile Image Container */}
            <div className="w-full mb-6">
              <div className="w-full relative rounded-lg overflow-hidden shadow-lg">
                <img
                  src={executive.image}
                  alt={`Photo of ${executive.name}`}
                  fill
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>

            {/* Profile Content */}
            <div className="text-center md:text-left w-full">
              <h2 className="text-blue-600 text-xl font-semibold mb-1">
                {executive.name}
              </h2>
              <h3 className="text-gray-600 text-sm mb-4">{executive.role}</h3>
              <p className="text-gray-700 leading-relaxed">
                {executive.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
