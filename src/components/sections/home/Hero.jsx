import { Mail, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="/hero_section_background_video_flow_lines.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-9 space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]"
                style={{
                  color: '#ffffff',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '900',
                  textShadow: '0 3px 10px rgba(0,0,0,0.9), 0 6px 20px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,1)'
                }}
              >
                Transform Your Business
                <br />
                with <span style={{
                  color: '#0ea5e9',
                  fontWeight: '900',
                  textShadow: '0 0 25px rgba(14,165,233,0.9), 0 3px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)'
                }}>SAP Excellence</span>
                <br />
                <span style={{
                  color: '#f97316',
                  fontWeight: '900',
                  textShadow: '0 0 25px rgba(249,115,22,0.9), 0 3px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)'
                }}>Delivered Right</span>
              </h1>

              <p
                className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl border-l-4 pl-6"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: '600',
                  borderColor: '#0ea5e9',
                  color: '#ffffff',
                  textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,1)'
                }}
              >
                Delivering reliable and efficient SAP support and Application Management Services that help businesses optimize operations and achieve long-term success.
              </p>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
              <a
                href="#contact"
                className="px-6 py-3 text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] group hover:-translate-y-1"
                style={{
                  backgroundColor: '#f97316',
                  color: '#FFFFFF',
                  fontFamily: 'Rajdhani, sans-serif',
                  letterSpacing: '0.05em',
                  borderRadius: '4px'
                }}
              >
                <MessageSquare size={20} />
                <span>SCHEDULE CONSULTATION</span>
              </a>

              <a
                href="mailto:info@erploka.com"
                className="px-6 py-3 text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 group hover:-translate-y-1"
                style={{
                  border: '2px solid #0ea5e9',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#0ea5e9',
                  fontFamily: 'Rajdhani, sans-serif',
                  letterSpacing: '0.05em',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
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
