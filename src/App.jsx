import { useState } from 'react'
import logo from "./images/dakshalogo.jpeg";
import Nanipic from"./images/nanipic.jpeg";
import Saipic from"./images/saipic.jpeg";
import centerImage from "./images/mekosannani.jpeg"; // New center image
import introVideo from "./images/foundation_intovideo.mp4";
import qrCode from "./images/qrcode.png";
import banner from "./images/Banner.jpg"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 scroll-smooth">
      {/* Registration Status Bar */}
      <div className="bg-amber-600 text-white py-2 px-4 text-xs md:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex gap-4">
            <span>Trust Reg No: IN-AP21484969076650W</span>
            <span className="hidden md:inline">|</span>
            <span>PAN: AAFTD0890C</span>
          </div>
          <div className="flex gap-4">
            <span>28-95 st colony KONDAPALLI Geethamandhir road 521228</span>
            <span className="hidden md:inline">|</span>
            <span className="font-bold">Donations are Tax Exempt</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
         <div className="flex items-center justify-between w-full">
  
  {/* Left: Logo + Trust Name */}
  <div className="flex items-center gap-3">
    <img
      src={logo}
      alt="Logo"
      className="w-20 h-20 rounded-full shadow-xl object-contain"
    />

    <div>
      <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">
        DHAKSHYANI
      </span>
      <span className="text-[10px] tracking-[0.2em] text-amber-600 font-semibold uppercase">
        Charitable Trust
      </span>
    </div>
  </div>

  {/* CENTER IMAGE */}
{/* <div className="w-full h-[220px] md:h-[300px] lg:h-[380px] overflow-hidden">
   <img
          src={banner}
          alt="Dhakshyani Charitable Trust Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
</div> */}



  {/* Right: Desktop Menu */}
  <div className="hidden md:flex space-x-8 items-center">
    <a href="#about" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
      About
    </a>
    <a href="#leadership" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
      Leadership
    </a>
    <a href="#gallery" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">
      Activities
    </a>
    <a
      href="#donate"
      className="bg-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-amber-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
    >
      Donate Now
    </a>
  </div>

</div>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-amber-600 focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-4 animate-in slide-in-from-top duration-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600 hover:text-amber-600 px-2 py-1">About</a>
            <a href="#leadership" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600 hover:text-amber-600 px-2 py-1">Leadership</a>
            <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="block text-base font-medium text-slate-600 hover:text-amber-600 px-2 py-1">Activities</a>
            <a href="#donate" onClick={() => setIsMenuOpen(false)} className="block bg-amber-600 text-white text-center px-6 py-3 rounded-xl text-base font-bold shadow-md">Donate Now</a>
          </div>
        )}
      </nav>


{/* Intro Logo Video */}
<section className="bg-white w-full">
        <video
          autoPlay
          muted
          playsInline
          loop
          controls={false}
          disablePictureInPicture
          controlsList="nodownload"
          className="w-full h-screen object-contain bg-white"
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>


      {/* Hero Section */}
      <header id="about" className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-105 blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-amber-500 uppercase bg-amber-500/10 rounded-full border border-amber-500/20">Empowering Lives Since 2024</span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
            Dhakshyani <span className="text-amber-500">Charitable</span> Trust
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dedicate to serving the underprivileged through food security, education, and community support initiatives. Together, we can create a world without hunger.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#donate" className="px-8 py-4 bg-amber-600 text-white rounded-full font-bold text-lg hover:bg-amber-700 transition-all shadow-xl shadow-amber-600/20">Start Donating</a>
            <a href="#gallery" className="px-8 py-4 bg-white/10 text-white backdrop-blur-sm border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all">See Our Impact</a>
          </div>
        </div>
      </header>


      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Our Visionaries</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Leadership Team</p>
            <div className="w-20 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group text-center bg-slate-50 p-8 rounded-3xl transition-all hover:shadow-2xl hover:shadow-slate-200 border border-slate-100">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-amber-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <img 
                  src={Nanipic} 
                  alt="Chairman" 
                 className="relative w-48 h-48 md:w-56 md:h-56 object-contain rounded-2xl shadow-xl transition-all"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Mr. Ragala Narendra</h3>
              <p className="text-amber-600 font-bold uppercase text-xs tracking-wider mb-4">Chairman & Founder</p>
              <p className="text-slate-600 text-sm leading-relaxed">"Our mission is simple: to ensure that no one in our community goes to bed hungry. Every small contribution creates a ripple effect of hope."</p>
            </div>
            <div className="group text-center bg-slate-50 p-8 rounded-3xl transition-all hover:shadow-2xl hover:shadow-slate-200 border border-slate-100">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-amber-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <img 
                  src={Saipic}
                  alt="Vice President" 
                  className="relative w-48 h-48 md:w-56 md:h-56 object-contain rounded-2xl shadow-xl transition-all"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Mr. Annavarapu Gunasai</h3>
              <p className="text-amber-600 font-bold uppercase text-xs tracking-wider mb-4">Vice President</p>
              <p className="text-slate-600 text-sm leading-relaxed">"Transparency and accountability are the pillars of our trust. We are committed to directing every rupee towards meaningful change."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Food Donation Gallery */}
      <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Impact in Action</h2>
              <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Food Donation Gallery</p>
            </div>
            <p className="text-slate-500 max-w-md text-sm">A glimpse into our recent food distribution drives across rural and urban communities.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1591522810850-58128c5fb089?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2070&auto=format&fit=crop"
            ].map((url, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-2xl md:rounded-[2rem] group cursor-pointer relative shadow-lg">
                <img src={url} alt={`Donation Activity ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-xs md:text-sm font-medium">Activity Location - Drive #{index + 101}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">Video Stories</h2>
            <p className="text-3xl md:text-4xl font-extrabold text-slate-900">Watch Our Work</p>
            <div className="w-20 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
          </div>
        <div className="max-w-4xl mx-auto">
  {/* Video */}
  <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-100 aspect-video border border-slate-100">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/-wd02WP8Nak"
      title="Food Donation Drive – Vijayawada"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>

  {/* Description */}
  <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200">
    <h3 className="text-2xl font-bold text-slate-900 mb-4">
      Food Donation Drive – Vijayawada
    </h3>

    {/* English */}
    <p className="text-slate-600 text-sm leading-relaxed mb-4">
      On 01-FEB-2026 Sunday, our team successfully conducted a food donation drive in
      various areas of Vijayawada. As part of this initiative, freshly
      prepared and nutritious meals were distributed to more than
      <span className="font-semibold"> 100 underprivileged individuals</span>.
      This drive reflects our continued commitment to fighting hunger and
      supporting vulnerable communities with dignity and care.
    </p>

    {/* Telugu */}
    <p className="text-slate-600 text-sm leading-relaxed">
      01-FEB-2026 ఆదివారం రోజు విజయవాడ పరిసర ప్రాంతాలలో మా సంస్థ ఆధ్వర్యంలో
      ఆహార పంపిణీ కార్యక్రమం విజయవంతంగా నిర్వహించబడింది.
      ఈ కార్యక్రమంలో భాగంగా
      <span className="font-semibold"> 100 మందికి పైగా అవసరమైన వారికి</span>
      పరిశుభ్రంగా తయారు చేసిన భోజనం అందజేయబడింది.
      ఆకలితో ఉన్నవారికి భోజనం అందించడం ద్వారా సమాజంలో సానుకూల మార్పు
      తీసుకురావాలనే మా లక్ష్యానికి ఇది మరో అడుగు.
    </p>
  </div>
</div>

        </div>
      </section>
<div className="w-full h-[250px] overflow-hidden relative">
  <img
    src={banner}
    alt="Dhakshyani Charitable Trust Banner"
    className="w-full h-full object-cover"
  />
</div>
      {/* Donation Details */}
      <section id="donate" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4">Support Our Cause</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Every Donation <span className="text-amber-500 italic font-light">Saves a Life</span>.</h3>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">Your contribution goes directly to the procurement and distribution of nutritious meals for those in need. We maintain 100% financial transparency.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m7.733 12.917A12.188 12.188 0 0112 20.944a12.188 12.188 0 01-1.115-4.988M12 2.944a11.955 11.955 0 01-8.618 3.04M12 2.944V20.944" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Verified 80G Charity</h4>
                    <p className="text-slate-500 text-sm">Receive immediate tax exemption certificates for your donations.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Instant Impact</h4>
                    <p className="text-slate-500 text-sm">Your donation is utilized within 48 hours for food procurement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-amber-600/10">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white text-sm">B</span>
                Bank Account Details
              </h4>
              <div className="space-y-6">
                <div className="grid grid-cols-2 border-b border-slate-100 pb-4">
                  <span className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Account Name</span>
                  <span className="font-bold text-right">Ragala narendra </span>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100 pb-4">
                  <span className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Account No.</span>
                  <span className="font-bold text-right font-mono">50100469298532</span>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100 pb-4">
                  <span className="text-slate-500 text-sm uppercase tracking-wider font-semibold">Bank Name</span>
                  <span className="font-bold text-right">HDFC Bank Ltd</span>
                </div>
                <div className="grid grid-cols-2 border-b border-slate-100 pb-4">
                  <span className="text-slate-500 text-sm uppercase tracking-wider font-semibold">IFSC Code</span>
                  <span className="font-bold text-right font-mono"> HDFC0009188</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">UPI ID for Quick Pay</p>
                    <p className="text-xl font-black text-amber-600 font-mono">nani.ragala@ybl</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                   <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm">
  <img
    src={qrCode}
    alt="UPI QR Code"
    className="w-full h-full object-contain rounded-lg"
  />
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Registration Footer */}
      <footer className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">D</div>
                <div>
                  <span className="text-lg font-bold tracking-tight text-slate-900 block leading-none">DHAKSHYANI</span>
                  <span className="text-[8px] tracking-[0.2em] text-amber-600 font-semibold uppercase">Charitable Trust</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Registered non-profit organization dedicated to social welfare and humanitarian aid. Transparency is our commitment.
              </p>
              <div className="flex gap-4">
                {['fb', 'tw', 'ig', 'in'].map(soc => (
                  <div key={soc} className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 cursor-pointer hover:bg-amber-600 hover:text-white transition-colors">
                    {soc.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Reach Us</h5>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  #123 Charity Lane, NGO Colony,<br />City Name, State - 560001
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  naniragala02@gmail.com
                </li>
                <li className="flex gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  +91 8978955087
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Legal Details</h5>
              <div className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="space-y-3 text-[11px] text-slate-500 font-medium">
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>TRUST NO.</span>
                    <span className="text-slate-900">IN-AP21484969076650W</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>PAN NO.</span>
                    <span className="text-slate-900">AAFTD0890C</span>
                  </div>
                  {/* <div className="flex justify-between border-b border-slate-50 pb-2">
                    <span>80G REG.</span>
                    <span className="text-slate-900">CIT(EXEMPT)/BLR/80G/2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>12A REG.</span>
                    <span className="text-slate-900">CIT(EXEMPT)/BLR/12A/2024</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-400 text-xs">© 2024 Dhakshyani Charitable Trust. All rights reserved. Built for social impact.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
