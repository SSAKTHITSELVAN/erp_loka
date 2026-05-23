import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaYoutube, FaWhatsapp, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6 group bg-white rounded-2xl py-2 pl-1 pr-4 w-fit">
              <img
                src="/logo_final_v.png"
                alt="ERP LOKA Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:rotate-3"
              />
              <div className="flex flex-col justify-center leading-none -ml-4">
                <span className="text-lg logo-main-title text-left transition-all duration-300 group-hover:text-[#0ea5e9] group-hover:tracking-wider whitespace-nowrap">
                  ERP LOKA
                </span>
                <p className="text-[10px] logo-sub-title mt-0.5 text-left transition-all duration-300 group-hover:text-[#f97316] group-hover:translate-x-1 pl-8">
                  IT Consulting
                </p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Delivering reliable and efficient SAP support and Application Management Services
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" title="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" title="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" title="X (Twitter)">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" title="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" title="WhatsApp">
                <FaWhatsapp size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg" title="Instagram">
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
