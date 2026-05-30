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
      <div className="w-full px-6 relative z-10" style={{ maxWidth: 'min(1700px, 92vw)', margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-9 space-y-8 md:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <h1
                className="leading-[1.1]"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 7rem)',
                  color: '#ffffff',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: '900',
                  textShadow: '0 3px 10px rgba(0,0,0,0.9), 0 6px 20px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,1)'
                }}
              >
                Transform Your Business
                <br />
                with <span style={{
                  color: '#D9B24C',
                  fontWeight: '900',
                  textShadow: '0 0 25px rgba(217,178,76,0.9), 0 3px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)'
                }}>SAP Excellence</span>
                <br />
                <span style={{
                  color: '#FFFFFF',
                  fontWeight: '900',
                  textShadow: '0 0 25px rgba(217,178,76,0.9), 0 3px 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)'
                }}>Delivered Right</span>
              </h1>

              <p
                className="leading-relaxed max-w-3xl border-l-4 pl-6"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.5rem)' }}
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: '600',
                  borderColor: '#D9B24C',
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
                className="px-6 py-3 text-base font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_0_30px_rgba(217,178,76,0.5)] hover:shadow-[0_0_50px_rgba(217,178,76,0.8)] group hover:-translate-y-1"
                style={{
                  backgroundColor: '#D9B24C',
                  color: '#0A0A0A',
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
                  border: '2px solid #FFFFFF',
                  backgroundColor: 'transparent',
                  color: '#D9B24C',
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
          background: 'linear-gradient(90deg, #D9B24C 0%, #FFFFFF 50%, #D9B24C 100%)'
        }}
      ></div>
    </section>
  );
}
