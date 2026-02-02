import React, { useState } from "react";
import { 
  CalendarCheck, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Headphones 
} from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();setIsSubmitted(true);
  };

  // --- PAGE 2: Submission Confirmation ---
  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center bg-white p-10 rounded-[2.5rem] shadow-xl border border-green-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Request Sent!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for your interest in POSify. One of our experts will contact you within 
            <span className="font-bold text-slate-900"> 24 hours</span> to schedule your personalized demo.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  // --- PAGE 1: Contact Form ---
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Marketing Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-bold mb-6">
              <CalendarCheck size={16} />
              Free Personalized Demo
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              See POSify in <span className="text-green-600">Action.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Discover how our cloud-based POS system can help you automate sales, 
              manage inventory, and grow your Sri Lankan business.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Zap />, title: "Live Feature Tour", desc: "See exactly how billing and KOT works." },
                { icon: <ShieldCheck />, title: "Inventory Strategy", desc: "Learn how to track stock across branches." },
                { icon: <Headphones />, title: "Expert Q&A", desc: "Get answers to your specific business needs." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-slate-50 text-green-600 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+94"
                    className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Business Type</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all appearance-none cursor-pointer">
                  <option>Retail Store</option>
                  <option>Restaurant / Cafe</option>
                  <option>Supermarket</option>
                  <option>Wholesale</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Message (Optional)</label>
                <textarea 
                  rows={3} 
                  placeholder="Anything specific you'd like to see?"
                  className="w-full px-5 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-green-500 transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-green-600 text-white rounded-2xl font-black text-lg hover:bg-green-700 transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                Schedule My Demo <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;