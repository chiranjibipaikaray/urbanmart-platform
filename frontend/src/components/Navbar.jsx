import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  const linkClass =
    "text-gray-700 hover:text-blue-600 font-medium transition";

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LEFT LOGO */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          UrbanMart
        </Link>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>

          <NavLink to="/login" className={linkClass}>
            Login
          </NavLink>

          <NavLink to="/register" className={linkClass}>
            Register
          </NavLink>

          {/* CART */}
          <Link to="/cart" className="relative">
            <span className="text-2xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
