import React from "react";
import { 
  Zap, Package, BarChart3, 
  CreditCard, Store, Cloud, 
  ArrowRight, CheckCircle2 
} from "lucide-react";

const benefits = [
  {
    title: "Fast & Easy Billing",
    description: "Create bills in seconds with a simple and intuitive interface designed for speed.",
    icon: <Zap className="text-amber-500" />,
    bg: "bg-amber-50"
  },
  {
    title: "Inventory Tracking",
    description: "Real-time stock alerts and automated inventory management across all branches.",
    icon: <Package className="text-blue-500" />,
    bg: "bg-blue-50"
  },
  {
    title: "Reports & Analytics",
    description: "Deep dive into daily sales, top products, and staff performance with one click.",
    icon: <BarChart3 className="text-green-500" />,
    bg: "bg-green-50"
  },
  {
    title: "Omni-Channel Payments",
    description: "Support for LankaQR, credit cards, and cash. Integrated with major SL banks.",
    icon: <CreditCard className="text-purple-500" />,
    bg: "bg-purple-50"
  },
  {
    title: "Restaurant Ready",
    description: "Table management, Kitchen Order Tickets (KOT), and split billing built-in.",
    icon: <Store className="text-rose-500" />,
    bg: "bg-rose-50"
  },
  {
    title: "Secure Cloud Sync",
    description: "Your data is encrypted and backed up automatically. Access it from anywhere.",
    icon: <Cloud className="text-sky-500" />,
    bg: "bg-sky-50"
  },
];

const Home: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-8">
                <span className="text-xs font-bold text-green-700 uppercase tracking-widest">Built for Sri Lankan Businesses</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                The POS that helps you <span className="text-green-600 italic">grow.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Stop struggling with complex software. POSify offers a simple, powerful way to manage your retail shop or restaurant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold text-lg hover:bg-green-700 hover:shadow-xl hover:shadow-green-100 transition-all flex items-center justify-center gap-2">
                  Start Free Trial <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  Contact Sales
                </button>
              </div>

              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                {['No Credit Card Required', '14-Day Free Trial'].map((text) => (
                  <div key={text} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <CheckCircle2 size={16} className="text-green-500" /> {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual Mockup */}
            <div className="flex-1 w-full relative">
              <div className="relative z-10 rounded-2xl bg-slate-900 p-2 shadow-2xl border border-slate-800 transform lg:rotate-3">
                <div className="bg-slate-800 rounded-xl aspect-[16/10] flex items-center justify-center overflow-hidden">
                  <div className="text-slate-500 font-mono text-sm">[ Professional Dashboard Preview ]</div>
                </div>
              </div>
              {/* Floating Decoration */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
              Powerful features, zero complexity.
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to run your business efficiently, from the front counter to the back office.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;