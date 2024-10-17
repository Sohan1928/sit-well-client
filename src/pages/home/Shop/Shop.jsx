import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

const Shop = () => {
  const chairs = useLoaderData();
  const [activeCategory, setActiveCategory] = useState("Gaming");
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const [chairsPerPage] = useState(6); // Showing 6 items per page
  const [loading, setLoading] = useState(true); // Spinner state

  // Loading spinner until data is fetched
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulating delay for spinner (1 second)

    return () => clearTimeout(timer);
  }, []);

  // Filter data based on category
  const filteredChairs = chairs.filter(
    (chair) => chair.category === activeCategory
  );

  // Pagination logic
  const indexOfLastChair = currentPage * chairsPerPage;
  const indexOfFirstChair = indexOfLastChair - chairsPerPage;
  const currentChairs = filteredChairs.slice(
    indexOfFirstChair,
    indexOfLastChair
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="inline-block" role="status">
          <span className="text-orange-600 loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 mx-auto mb-6 max-w-7xl">
      <div className="flex justify-center my-4 tablist">
        {["Gaming", "Business", "Study", "Normal"].map((category) => (
          <button
            key={category}
            className={`tab-item px-2 md:px-4 py-2 ${
              activeCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1); // Reset to page 1 when category changes
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 chair-list md:grid-cols-3">
        {currentChairs.map((chair) => (
          <div key={chair.id} className="p-4 border chair-item">
            <img
              src={chair.image}
              alt={chair.title}
              className="object-cover w-full h-48"
            />
            <h3 className="mt-2 text-xl font-bold">{chair.title}</h3>
            <p>{chair.description}</p>
            <p className="font-semibold text-green-600">${chair.price}</p>
            <button className="px-4 py-2 mt-2 text-white bg-blue-500 rounded">
              {chair.viewDetails}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        {Array.from(
          { length: Math.ceil(filteredChairs.length / chairsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 mx-1 ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Shop;
