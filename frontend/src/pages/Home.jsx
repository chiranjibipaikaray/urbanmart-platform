import { Link } from "react-router-dom";
import ShopIllustration from "../components/ShopIllustration";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
              Smart Shopping for <br /> Modern India
            </h1>

            <p className="text-blue-100 mt-6 text-lg max-w-xl mx-auto md:mx-0">
              UrbanMart brings groceries, fashion, and essentials to your door —
              fast, secure, and affordable.
            </p>

            <Link
              to="/login"
              className="
                inline-block mt-10
                bg-white text-blue-600
                font-bold text-lg
                px-10 py-4
                rounded-xl
                shadow-lg
                hover:bg-blue-50
                hover:scale-105
                transition-transform duration-300
              "
            >
              Start Shopping
            </Link>
          </div>

          {/* RIGHT */}
          <div className="hidden md:flex justify-center">
            <ShopIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
