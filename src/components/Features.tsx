import { ShoppingBag, Utensils, Box, PieChart, CreditCard } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    { title: "Retail POS", desc: "Barcode scanning, stock alerts, and multi-branch sync.", icon: <ShoppingBag /> },
    { title: "Restaurant POS", desc: "Table management, KOT printing, and recipe costing.", icon: <Utensils /> },
    { title: "Inventory", desc: "Real-time tracking with automated reordering levels.", icon: <Box /> },
    { title: "Analytics", desc: "Deep-dive reports on sales, tax, and profit margins.", icon: <PieChart /> },
    { title: "Payments", desc: "LankaQR, Visa, Mastercard, and Cash integrated.", icon: <CreditCard /> },
  ];

  return (
    <div className="bg-white">
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Powerful features, <span className="text-green-600">zero complexity.</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to run your business efficiently, from the front counter to the back office.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((f, i) => (
              <div key={i} className="p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;