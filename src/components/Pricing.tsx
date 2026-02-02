import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "4,500",
    description: "Perfect for small retail shops.",
    features: ["Single Register", "Inventory Management", "Daily Sales Reports", "LankaQR Support"],
    buttonText: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    price: "8,500",
    description: "Ideal for growing restaurants.",
    features: ["Everything in Starter", "Kitchen Order Tickets (KOT)", "Table Management", "Multi-user Access", "24/7 Priority Support"],
    buttonText: "Most Popular",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large supermarkets and chains.",
    features: ["Multi-branch Sync", "Advanced Analytics", "Custom API Integration", "Dedicated Account Manager"],
    buttonText: "Contact Sales",
    highlight: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl font-black text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-600 mb-16">Choose the plan that fits your business scale. No hidden fees.</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div key={idx} className={`p-8 rounded-3xl border ${plan.highlight ? 'border-green-500 shadow-xl ring-4 ring-green-50' : 'border-slate-100'} transition-all`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">Rs. {plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500 text-sm"> /mo</span>}
              </div>
              <p className="text-slate-600 mb-8 text-sm">{plan.description}</p>
              <ul className="text-left space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <Check size={18} className="text-green-500" /> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;