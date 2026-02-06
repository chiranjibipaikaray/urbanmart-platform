const products = [
  {
    id: 1,
    name: "Fresh Vegetables",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
  {
    id: 2,
    name: "Men's Fashion",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
  },
  {
    id: 3,
    name: "Home Essentials",
    price: "₹499",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e17b",
  },
  {
    id: 4,
    name: "Electronics",
    price: "₹1499",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">
        🛒 Shop at UrbanMart
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold mt-1">{product.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
