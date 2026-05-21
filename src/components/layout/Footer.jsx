import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <CheckCircle className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ERP LOKA</h3>
                <p className="text-sm text-white/80">IT consulting</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Delivering reliable and efficient SAP support and Application Management Services
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full"></span>
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

        <div className="border-t border-white/20 pt-8">
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
