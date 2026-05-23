import { Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center pt-12 md:pt-20 pb-20 overflow-hidden bg-slate-950"
    >
      {/* Dark Gradient Background with Grid Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/80"></div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-electric/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-9 space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]"
                style={{
                  color: '#f1f5f9',
                  fontFamily: 'Rajdhani, sans-serif',
                }}
              >
                Transform Your Business
                <br />
                with <span style={{ color: '#0ea5e9' }}>SAP Excellence</span>
                <br />
                <span style={{ color: '#f97316' }}>Delivered Right</span>
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed max-w-3xl border-l-4 pl-6 text-slate-300"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  borderColor: '#0ea5e9'
                }}
              >
                Delivering reliable and efficient SAP support and Application Management Services that help businesses optimize operations and achieve long-term success.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
              <a
                href="#contact"
                className="px-6 py-3 text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] group hover:-translate-y-1"
                style={{
                  backgroundColor: '#f97316',
                  color: '#FFFFFF',
                  fontFamily: 'Rajdhani, sans-serif',
                  letterSpacing: '0.05em',
                  borderRadius: '2px'
                }}
              >
                <MessageSquare size={20} />
                <span>SCHEDULE CONSULTATION</span>
              </a>

              <a
                href="mailto:info@erploka.com"
                className="px-6 py-3 text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-gray-150 hover:text-slate-950 group hover:-translate-y-1"
                style={{
                  border: '2px solid #f1f5f9',
                  color: '#f1f5f9',
                  fontFamily: 'Rajdhani, sans-serif',
                  letterSpacing: '0.05em',
                  borderRadius: '2px'
                }}
              >
                <Mail size={20} />
                <span>EMAIL US</span>
              </a>
            </div>
          </div>

          {/* Right Side - Empty for visual balance */}
          <div className="hidden lg:block lg:col-span-3"></div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 50%, #f97316 100%)'
        }}
      ></div>
    </section>
  );
}
