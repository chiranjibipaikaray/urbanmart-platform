export default function Hero() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Smart Shopping for <br /> Modern India
          </h1>

          <p className="text-lg text-blue-100 mb-8">
            UrbanMart brings groceries, fashion, and essentials to your door —
            fast, secure, and affordable.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Start Shopping
          </button>
        </div>

        {/* RIGHT */}
        <div className="hidden md:block">
          <img
            src="/illustrations/shop.svg"
            alt="Shopping Illustration"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}
