import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export const ContactSection: React.FC<{ onOpenApkModal: () => void }> = ({ onOpenApkModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Family Group Savings Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'Family Group Savings Inquiry',
        message: '',
      });
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Saprones Team, I am interested in joining Saprones Family Savings (${formData.subject}). My name is ${formData.name || 'a member'}.`
  );

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1c3f]/5 text-[#0f1c3f] text-xs font-bold uppercase tracking-wider">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
            Contact Saprones Family Savings
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Have questions about enrolling your family, contributing through Mobile Money, or downloading our Android APK? Our support team is here 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="navy-gradient text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#d4af37]/15 rounded-full blur-2xl"></div>

              <div>
                <h3 className="text-2xl font-bold font-serif">Official Headquarters</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Serving family cooperatives in Uganda and across the East African diaspora.
                </p>
              </div>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                
                {/* Phone Call */}
                <a
                  href="tel:+256773982192"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#f6e082] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300">Telephone / MTN Line</div>
                    <div className="font-bold text-white font-mono">+256 773 982 192</div>
                  </div>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/256780218814"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/50 transition cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-300 font-semibold">Instant WhatsApp Chat</div>
                    <div className="font-bold text-white font-mono">+256 780 218 814</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:www.erycsaprones@gmail.com?subject=Inquiry%20from%20Saprones%20App"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 text-[#f6e082] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300">Official Inquiries Email</div>
                    <div className="font-bold text-white break-all">www.erycsaprones@gmail.com</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-300">Location</div>
                    <div className="font-bold text-white">Kampala, Uganda, East Africa</div>
                  </div>
                </div>

              </div>

              <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>Working Hours: Mon – Sat (8:00 AM – 7:00 PM EAT)</span>
              </div>
            </div>

            {/* APK Callout Banner */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-amber-700" /> Android APK App
                </h4>
                <p className="text-xs text-amber-800">
                  Prefer managing your savings from the official Android APK app?
                </p>
              </div>
              <button
                onClick={onOpenApkModal}
                className="px-4 py-2 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] text-xs font-bold transition shrink-0 cursor-pointer"
              >
                Get APK
              </button>
            </div>

          </div>

          {/* Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            
            <h3 className="text-xl font-bold font-serif text-slate-900 mb-2">
              Send Us a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill in your details and an executive officer will reply within 2 business hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 space-y-3 text-center animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold">Message Transmitted!</h4>
                <p className="text-xs">
                  Thank you, <strong>{formData.name || 'Member'}</strong>. Eryc Saprones and the support team have received your request and will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Mugisha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:ring-2 focus:ring-[#0f1c3f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +256 770 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:ring-2 focus:ring-[#0f1c3f] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. member@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:ring-2 focus:ring-[#0f1c3f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:ring-2 focus:ring-[#0f1c3f] outline-none cursor-pointer"
                    >
                      <option value="Family Group Savings Inquiry">Family Group Savings Scheme</option>
                      <option value="Construction & Land Fund">Construction & Land Development</option>
                      <option value="Emergency Relief Pool">Emergency Relief Cushion</option>
                      <option value="Android APK Installation Help">Android APK Installation Help</option>
                      <option value="Other">Other Family Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Your Message / Family Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your family size, target savings, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-800 focus:ring-2 focus:ring-[#0f1c3f] outline-none resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[#0f1c3f] hover:bg-[#1e3c72] text-[#f6e082] font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#d4af37]" />
                    <span>Send Message</span>
                  </button>

                  <a
                    href={`https://wa.me/256780218814?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
