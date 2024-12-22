export default function TeamTop() {
    // Array of team members
    const teamMembers = [
      {
        id: 1,
        name: "Raj Shekhar, PhD",
        role: "Founder and CTO",
        image: "/Team/teamtop/1.jpg",
        bio: `Raj Shekhar is an inventor of the StethAid™ technology, who has led its research and development 
              since inception together with CMO Robin Doroshow. Dr. Shekhar is also a principal investigator and a 
              professor of radiology and pediatrics at Children's National Hospital and George Washington University. 
              Dr. Shekhar holds 13 US patents and is also the founder of IGI Technologies with an FDA-cleared image 
              fusion product.`,
      },
      {
        id: 2,
        name: "Robin Doroshow, MD",
        role: "Founder and CMO",
        image: "/Team/teamtop/2.jpg",
        bio: `Robin Doroshow has been instrumental in the development and leadership of StethAid™. With extensive 
              experience in clinical pediatrics, she collaborates with Raj Shekhar to drive innovation. Her dedication 
              ensures the product meets clinical standards.`,
      },
      {
        id: 3,
        name: "Shilpa J Patel, MD",
        role: "Clinical advisor",
        image: "/Team/teamtop/3.jpg",
        bio: `Shilpa J. Patel, M.D., M.P.H., is the medical director for the Improving Pediatric Asthma Care (IMPACT) DC Asthma Clinic, an attending physician in the Children’s National Emergency Department and an assistant professor of pediatrics at The George Washington University School of Medicine & Health Sciences (GW). Dr. Patel received a medical degree from Penn State College of Medicine and a master’s degree in public health at GW. She completed a pediatric residency, chief residency and pediatric emergency medicine fellowship at Children’s National Health System before joining the faculty. Dr. Patel is board-certified in pediatrics and pediatric emergency medicine. Her academic and clinical interests include: geographic predictors of health outcomes, asthma, firearm violence prevention and suicide prevention`,
      },
    ];
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Text */}
        <p className="text-gray-700 text-lg mb-12 max-w-4xl">
          The founding team is made of entrepreneurs and inventors who have translated novel technologies from the
          research lab to FDA-cleared products.
        </p>
  
        {/* Team Members Grid */}
        <div className="space-y-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Team Member Image */}
                <div className="w-full md:w-1/4 flex-shrink-0">
                  <div className="aspect-square relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      width={400}
                      height={400}
                      className="object-contain object-center"
                    />
                  </div>
                </div>
                {/* Team Member Details */}
                <div className="flex-grow">
                  <h2 className="text-2xl font-semibold text-blue-600 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  