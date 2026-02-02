import React, { useState } from "react";
import { Mail, Phone, Send, ArrowRight, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();setIsSubmitted(true);
  };

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

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <div>
            <h2 className="text-6xl font-black text-slate-900 mb-6">Let's grow your <br /><span className="text-green-600">business together.</span></h2>
            <p className="text-lg text-slate-600 mb-10">Have questions? Fill out the form and our POS experts will be in touch shortly.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl text-green-600"><Mail /></div>
                <div><p className="text-sm text-slate-500">Email us</p><p className="font-bold text-slate-900">sales@posify.lk</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-xl text-green-600"><Phone /></div>
                <div><p className="text-sm text-slate-500">Call us</p><p className="font-bold text-slate-900">+94 81 234 5678</p></div>
              </div>
            </div>
          </div>

          {/* Form Side */}
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