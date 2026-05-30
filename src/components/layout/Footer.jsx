import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white overflow-hidden" style={{ background: '#0A0A0A' }}>
      {/* Top border */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #D9B24C, #E0B84F, #D9B24C)' }}></div>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(217,178,76,0.03)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(217,178,76,0.03)' }}></div>
      </div>

      <div className="relative z-10 px-6 py-16" style={{ maxWidth: 'min(1700px, 92vw)', margin: '0 auto' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6 group -ml-4">
              <img
                src="/logo_final_v.png"
                alt="ERP LOKA Logo"
                className="w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
                style={{ height: 'clamp(4.5rem, 5vw, 6rem)' }}
              />
              <div className="flex flex-col justify-center -ml-2" style={{ gap: '2px' }}>
                <span className="logo-main-title transition-all duration-300 group-hover:tracking-wider" style={{ fontSize: 'clamp(1.1rem, 1.4vw, 1.6rem)', letterSpacing: '0.08em', display: 'block' }}>
                  ERP <span style={{ background: 'linear-gradient(90deg, #D9B24C, #F5D76E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>LOKA</span>
                </span>
                <p className="logo-sub-title transition-all duration-300 group-hover:translate-x-1" style={{ fontSize: 'clamp(0.55rem, 0.65vw, 0.75rem)', letterSpacing: '0.22em', display: 'block' }}>
                  LEARN. GROW. LEAD.
                </p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Delivering reliable and efficient SAP support and Application Management Services
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#D9B24C]/30 flex items-center justify-center hover:bg-[#D9B24C] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 hover:shadow-lg" title="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#D9B24C]/30 flex items-center justify-center hover:bg-[#D9B24C] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 hover:shadow-lg" title="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#D9B24C]/30 flex items-center justify-center hover:bg-[#D9B24C] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 hover:shadow-lg" title="X (Twitter)">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#D9B24C]/30 flex items-center justify-center hover:bg-[#D9B24C] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 hover:shadow-lg" title="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#D9B24C]/30 flex items-center justify-center hover:bg-[#D9B24C] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 hover:shadow-lg" title="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-[#D9B24C]/30 flex items-center justify-center hover:bg-[#D9B24C] hover:text-[#0A0A0A] transition-all duration-300 hover:scale-110 hover:shadow-lg" title="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-white transition-all duration-300 inline-flex items-center gap-2 group hover:translate-x-1">
                    <span className="w-1 h-1 bg-white rounded-full group-hover:w-2 group-hover:h-2 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['SAP Support', 'SAP Implementation', 'SAP Optimization', 'SAP Consulting'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:info@erploka.com" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span>info@erploka.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <span>+1 (234) 567-890</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>Business Address<br />City, State, Country</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 pb-20 md:pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              © {currentYear} ERP LOKA. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
