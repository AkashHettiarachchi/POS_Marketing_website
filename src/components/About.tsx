import React from "react";
import { Users, Award, Headphones, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Businesses Served", value: "500+", icon: <Users className="text-green-600" /> },
  { label: "Years Experience", value: "5+", icon: <Award className="text-green-600" /> },
  { label: "Uptime Guarantee", value: "99.9%", icon: <ShieldCheck className="text-green-600" /> },
  { label: "Support Response", value: "< 1hr", icon: <Headphones className="text-green-600" /> },
];

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Empowering Sri Lankan <br /> <span className="text-green-600">Retailers & Restaurateurs</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            POSify was built with one goal: to simplify business management. We provide 
            local businesses with the digital tools they need to compete in a modern economy.
          </p>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl text-center shadow-sm">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              To provide a reliable, fast, and easy-to-use POS solution that eliminates 
              the technical barriers for small to medium-sized businesses in Sri Lanka[cite: 4, 34].
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
            <ul className="space-y-4">
              {["Local Support Team", "LankaQR Integrated", "Cloud-Based Reliability"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-200 aspect-video rounded-3xl overflow-hidden flex items-center justify-center text-slate-400 italic">
            [ Company Culture Image ]
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;