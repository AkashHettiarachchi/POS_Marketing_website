import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tight text-slate-900">
          POS<span className="text-green-600">ify</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
  {[
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ].map((item) => (
    <Link 
      key={item.name}
      to={item.path} 
      className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors"
    >
      {item.name}
    </Link>
  ))}
</div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 bg-slate-900 text-white text-sm rounded-lg font-bold hover:bg-slate-800 transition-all shadow-sm active:scale-95">
            Book a Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link to="/" className="font-bold text-slate-900" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/features" className="font-bold text-slate-900" onClick={() => setIsOpen(false)}>Features</Link>
          <button className="w-full py-3 bg-green-600 text-white rounded-xl font-bold">Book Demo</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;