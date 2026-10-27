import React from 'react';
import {
  ShieldCheck,
  Heart,
  Target,
  Award,
  Phone,
  MessageCircle,
  ExternalLink,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const team = [
    {
      name: 'Eryc Saprones',
      role: 'Founder & CEO',
      bio: 'Visionary leader with a passion for family financial empowerment and cooperative community growth.',
      photo: '/uploads/team/team_1791229675_2454.png',
      whatsapp: '+256773982192',
      phone: '+256773982192',
    },
    {
      name: 'Sharon Cantrells',
      role: 'Head of Operations',
      bio: 'Ensures every transaction is smooth, secure, and on time across all family savings pools.',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      whatsapp: '+256775357739',
    },
    {
      name: 'Amanya Daryl',
      role: 'Lead Developer',
      bio: 'Architects and maintains the cryptographic security and Android mobile applications behind Saprones.',
      photo: '/uploads/team/team_1791229713_6558.png',
    },
    {
      name: 'Kwagala Bridget',
      role: 'Customer Support',
      bio: 'Here to assist you and your family members every step of the way with deposits and passbook inquiries.',
      photo: '/uploads/team/team_1791229763_6620.png',
      whatsapp: '+256778472063',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f1c3f]/5 text-[#0f1c3f] text-xs font-bold uppercase tracking-wider">
              Our Heritage & Vision
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight">
              Built on Trust. Driven by Family Solidarity.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Saprones Family Savings was founded to eliminate the insecurity of informal family collections. In traditional gatherings, funds were frequently mismanaged, delayed, or lost due to lack of transparent records.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We engineered a modern digital cooperative combining high-yield treasury management, instant Mobile Money integration (MTN & Airtel), and ironclad dual-signatory approvals.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1e3c72] flex items-center justify-center mb-2">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Our Mission</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Empower families to build durable wealth and fund residential land projects collectively.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d4af37] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Our Governance</h4>
                <p className="text-xs text-slate-500 mt-1">
                  100% audited accounts, transparent monthly passbooks, and dual signatory controls.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000&auto=format&fit=crop"
                alt="Family Wealth"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-200 max-w-xs text-slate-800">
              <div className="text-2xl font-bold font-serif text-[#0f1c3f]">100%</div>
              <div className="text-xs text-slate-600 mt-0.5">
                Transparent transactions accessible in real-time from the Saprones Android App.
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e3c72]/10 text-[#0f1c3f] text-xs font-bold uppercase tracking-wider">
            Executive Board
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900">
            Meet the Saprones Leadership Team
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Dedicated professionals safeguarding your family capital with integrity and technical expertise.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-6 border border-slate-200 shadow-md hover:shadow-xl transition-all text-center flex flex-col items-center group"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#d4af37] to-[#0f1c3f] shadow-lg mb-4 group-hover:scale-105 transition">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full bg-slate-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      member.name
                    )}&background=0f1c3f&color=d4af37`;
                  }}
                />
              </div>

              <h4 className="text-lg font-bold font-serif text-slate-900">{member.name}</h4>
              <span className="text-xs font-semibold text-[#1e3c72] uppercase tracking-wider mt-0.5 mb-2">
                {member.role}
              </span>
              <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">
                {member.bio}
              </p>

              {/* Direct Communication Channels */}
              <div className="flex items-center justify-center gap-2 pt-3 border-t border-slate-100 w-full">
                {member.whatsapp && (
                  <a
                    href={`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="p-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 transition"
                    title="Direct Call"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                )}
                <div className="p-2 rounded-xl bg-slate-100 text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
