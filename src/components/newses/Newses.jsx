



const newsItems = [
  {
    title: "AusculTech Dx receives STTR Phase I award",
    date: "June, 2020",
    description:
      "AusculTech Dx received its latest STTR Phase I award from the National Institutes of Health (NIH). This award supports research and development into extending the StethAid™ platform for improved home-based...",
    imageSrc: "/news/1.png",
  },
  {
    title: "ACME-POCT selects AusculTech Dx for a seed grant",
    date: "January, 2020",
    description:
      "A seed grant from Emory/Georgia Tech/Children's based Atlanta Center for Microsystems Engineered Point-of-Care Technologies (ACME POCT) is enabling AusculTech Dx to research and develop next-generation StethAid™ technology.",
    imageSrc: "/news/2.jpg",
    hasReadMore: true,
  },
  {
    title: "AusculTech Dx receives STTR Phase II award",
    date: "April, 2019",
    description:
      "AusculTech Dx received STTR Phase II award from the National Institutes of Health (NIH). This award will support further development of the StethAid™ hardware and software and a multi-center trial...",
    imageSrc: "/news/1.png",
    hasReadMore: true,
  },
];

export default function NewsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <article
            key={index}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image Container */}
              {item.imageSrc && (
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div className=" relative  rounded-lg overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.title || "News image"}
                      className="object-contain p-3"
                    />
                  </div>
                </div>
              )}

              {/* Content Container */}
              <div className="flex-grow space-y-3">
                {item.title && (
                  <h2 className="text-xl font-serif">{item.title}</h2>
                )}
                {item.date && (
                  <p className="text-gray-500 text-sm">{item.date}</p>
                )}
                {item.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.hasReadMore && (
                  <button
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-[25px] transition-colors mt-4 text-sm font-medium"
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
