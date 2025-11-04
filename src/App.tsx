import { useState, useEffect } from 'react';
import { useMediaQuery } from './hooks/useMediaQuery';
import svgPaths from "./imports/svg-gmt50cudxw";
import imgHero from "./assets/Nexus Hero Splash.png";
import imgPrimaryMonogram from "./assets/Teal USC.png";
import imgScriptLogo from "./assets/Teal UCLA.png";
import imgCaltechLogo2014 from "./assets/Teal Caltech.png";
import imgUciAnteatersLogo from "./assets/Teal UCI.png";
import imgLmu from "./assets/Teal LMU.png";
import imgLogoUcsd2 from "./assets/Teal UCSD.png";
import NexusLogo from "./assets/Nexus Logo.png";
import imgRectangle12 from "./assets/Pear.png";
import imgRectangle13 from "./assets/Soma.png";
import imgRectangle14 from "./assets/1517.png";
import imgRectangle15 from "./assets/ZFellows.png";
import imgRectangle5 from "./assets/image1.png";
import imgRectangle6 from "./assets/image2.png";
import imgRectangle7 from "./assets/image3.png";
import imgRectangle8 from "./assets/image4.png";
import imgRectangle9 from "./assets/a16z.png";
import imgRectangle10 from "./assets/image6.png";
import imgRectangle11 from "./assets/joinus.png";
import imgJoinUs from "./assets/joinus.png";
import imgFooter from "./assets/Footer.png";
import { imgShifaazShamoonSLAk1GuBg90Unsplash, imgShifaazShamoonSLAk1GuBg90Unsplash2 } from "./imports/svg-itm1w";
import './styles/globals.css';  


function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="
        flex items-center justify-center flex-none rounded-[12px]
        bg-[rgba(2,147,159,0.4)] hover:bg-[rgba(2,147,159,0.6)] transition-all
        h-[84px] w-[160px]                  /* base size */
        sm:h-[92px] sm:w-[176px]
        md:h-[100px] md:w-[192px]
        lg:h-[108px] lg:w-[208px]
      "
    >
      <img
        src={src}
        alt={alt}
        className="
          block
          w-auto !max-w-[80%]              /* cap width inside card */
          !max-h-[70%]                     /* cap height inside card */
          object-contain
        "
      />
    </div>
  );
}

function PartnersRow() {
  return (
    <div className="w-full">
      <div className="partners-row mx-auto">
        <img
          src={imgRectangle12}
          alt="Pear"
          className="partner-logo"
        />
        <img className="partner-logo" src={imgRectangle13} alt="Soma Capital" />
        <img className="partner-logo" src={imgRectangle14} alt="1517" />
        <img className="partner-logo" src={imgRectangle15} alt="Z Fellows" />
      </div>
    </div>
  );
}

function LumaEventEmbed() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1100px] h-[600px] rounded-md border border-[#bfcbda88] bg-white/10 overflow-hidden">
        <iframe
          src="https://luma.com/embed/event/evt-8OzAyhCPoSj9FU7/simple"
          title="Luma Event"
          allow="fullscreen; payment"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full block"
          style={{ minHeight: '500px' }}  // Force minimum height
        />
      </div>
    </div>
  );
}




function NavLink({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer transition-opacity hover:opacity-70" data-name="Nav Link" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>About</p>
    </div>
  );
}

function NavLink1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer transition-opacity hover:opacity-70" data-name="Nav Link" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Events</p>
    </div>
  );
}

function NavLink2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 cursor-pointer transition-opacity hover:opacity-70" data-name="Nav Link" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Contact</p>
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-white hover:scale-101" data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[#015358] text-[17px] text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join Us</p>
    </div>
  );
}

function Frame({ onAboutClick, onEventsClick, onContactClick, onJoinClick }: { onAboutClick: () => void; onEventsClick: () => void; onContactClick: () => void; onJoinClick: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[48px] items-center justify-end right-0 top-[35px]">
      <NavLink onClick={onAboutClick} />
      <NavLink1 onClick={onEventsClick} />
      <NavLink2 onClick={onContactClick} />
      <Button onClick={onJoinClick} />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center gap-2">
      <h1 className="text-[120px] text-white" style={{ fontFamily: 'Monomakh, serif', lineHeight: 1 }}>Nexus</h1>
      <p className="font-normal leading-[normal] min-w-full relative shrink-0 text-[#015358] text-xl w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Southern California's First Intercollegiate Entrepreneurship Society</p>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] hover:scale-101" data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Community</p>
    </div>
  );
}

function HeaderCTA({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-full max-w-none">
      <Header />
      {/*
      <div className="
  fixed bottom-0 left-0 z-50 h-3 w-full
  bg-red-500
  sm:bg-orange-500
  md:bg-yellow-500
  lg:bg-green-500
  xl:bg-blue-500
  2xl:bg-purple-500
"></div> */}
      <Button1 onClick={onJoinClick} />
      <Schools />
    </div>
  );
}

function Schools() {
  const schools = [
    { src: imgPrimaryMonogram, alt: "USC" },
    { src: imgScriptLogo, alt: "UCLA" },
    { src: imgCaltechLogo2014, alt: "Caltech" },
    { src: imgUciAnteatersLogo, alt: "UCI" },
    { src: imgLmu, alt: "LMU" },
    { src: imgLogoUcsd2, alt: "UC San Diego" },
  ];

  return (
    <div className="w-full">
      <div className="schools leading-none text-[0]">
        {schools.map(s => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            className="school-logo"
          />
        ))}
      </div>
    </div>
  );
}




// HeroContent
function HeroContent({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div
      className="
        relative
        flex flex-col items-center
        gap-20 sm:gap-28 lg:gap-36
      "
    >
      <HeaderCTA onJoinClick={onJoinClick} />
    </div>
  );
}

type NavHandlers = {
  onAboutClick: () => void;
  onEventsClick: () => void;
  onContactClick: () => void;
  onJoinClick: () => void;
};

function NavBar({
  onAboutClick,
  onEventsClick,
  onContactClick,
  onJoinClick,
}: NavHandlers) {
  const isSmUp = useMediaQuery("(min-width: 1200px)");

  return (
    <div className="relative w-full" >
      <div className="absolute left-1/2 size-[80px] top-[14px] -translate-x-1/2">
        <img
          alt="Nexus Logo"
          className="absolute inset-0 size-full object-cover pointer-events-none"
          src={NexusLogo}
        />
      </div >
      {isSmUp && (
        <div className="hidden sm:block">
          <Frame
            onAboutClick={onAboutClick}
            onEventsClick={onEventsClick}
            onContactClick={onContactClick}
            onJoinClick={onJoinClick}
          />
        </div>
      )}
    </div>
  );
}

function Hero({
  onAboutClick,
  onEventsClick,
  onContactClick,
  onJoinClick,
}: NavHandlers) {
  return (

    <section className="relative w-full">
    <img
    src={imgHero}
    alt="Splash"
    className="absolute inset-0 z-0 h-full w-auto min-w-full object-cover object-center"
  />
  <div className="relative z-50 mx-auto w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col items-stretch gap-48 pb-20 md:pb-28">
      <NavBar
        className="relative z-50 w-full"
        onAboutClick={onAboutClick}
        onEventsClick={onEventsClick}
        onContactClick={onContactClick}
        onJoinClick={onJoinClick}
      />
  <HeroContent onJoinClick={onJoinClick} />
      </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div
      className="flex flex-col font-normal gap-10 items-start text-[#f6f6f3] text-[28px] leading-tight"
      style={{ fontFamily: 'Host Grotesk, sans-serif' }}
    >
      <div className="leading-normal w-[50vw]">
        <p>Nexus is the community for SoCal's most talented and driven student entrepreneurs.</p>
      </div>
      <div className="leading-normal w-full">
        <p className="mb-0">We bring together the brightest builders:</p>
        <p>engineers, designers, creators, and more.</p>
      </div>
    </div>
  );
}


function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-sm text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>WHO WE ARE</p>
      <About />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame23 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 1">
            <line id="Line 1" stroke="var(--stroke-0, #E5E5E5)" strokeOpacity="0.5" x2="1200" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[rgba(2,147,159,0.4)] box-border content-stretch flex flex-col gap-[15.686px] h-[104px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[184px] transition-all hover:bg-[rgba(2,147,159,0.6)]">
      <div className="absolute bg-white left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[21px_72px] mask-size-[96px_42px] size-[165px] top-[-41px]" style={{ WebkitMaskImage: `url('${imgRectangle12}')`, maskImage: `url('${imgRectangle12}')` }} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.686px] h-[104px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[183px] bg-[rgba(2,147,159,0.4)] transition-all hover:bg-[rgba(2,147,159,0.6)]">
      <div className="absolute bg-white left-[9px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13px_67.57px] mask-size-[139px_42.86px] size-[165px] top-[-37px]" style={{ WebkitMaskImage: `url('${imgRectangle13}')`, maskImage: `url('${imgRectangle13}')` }} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.686px] h-[104px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[186px] bg-[rgba(2,147,159,0.4)] transition-all hover:bg-[rgba(2,147,159,0.6)]">
      <div className="absolute bg-white left-[37px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.608px_59.799px] mask-size-[119.216px_62.402px] size-[165px] top-[-39px]" style={{ WebkitMaskImage: `url('${imgRectangle14}')`, maskImage: `url('${imgRectangle14}')` }} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.686px] h-[106px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[186px] bg-[rgba(2,147,159,0.4)] transition-all hover:bg-[rgba(2,147,159,0.6)]">
      <div className="absolute bg-white left-[25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.255px_38.239px] mask-size-[194.51px_109.521px] size-[165px] top-[-40px]" style={{ WebkitMaskImage: `url('${imgRectangle15}')`, maskImage: `url('${imgRectangle15}')` }} />
    </div>
  );
}






function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <p className="leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-sm text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>OUR PARTNERS</p>
      <PartnersRow />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] items-start px-10 sm:px-10 md:px-16 lg:px-20 py-20 relative shrink-0 max-w-[1440px] w-full"   style={{
      background:
        'radial-gradient(307.49% 203.57% at 180% -20%, #01939F 28.88%, #015358 70%)',
    }}> 
      <Frame24 />
      <Frame22 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="max-w-[50vw] mx-auto flex items-center gap-8">
      <p className="flex-1 basis-0 text-center font-normal text-[#1b1917] text-[clamp(1rem,2.5vw,1.375rem)]">
        Connect
      </p>
      <div className="w-[2px] h-6 bg-[#dddddd] rounded" />
      <p className="flex-1 basis-0 text-center font-normal text-[#1b1917] text-[clamp(1rem,2.5vw,1.375rem)]">
        Build
      </p>
      <div className="w-[2px] h-6 bg-[#dddddd] rounded" />
      <p className="flex-1 basis-0 text-center font-normal text-[#1b1917] text-[clamp(1rem,2.5vw,1.375rem)]">
        Innovate
      </p>
    </div>
  );
}


function Frame16() {
  return (
    <div
      className="
        grid gap-5 w-full relative shrink-0
        grid-cols-1           /* 📱 mobile: 1 column (stacked) */
        sm:grid-cols-2        /* 📱 small tablets: 2 columns */
        md:grid-cols-3        /* 💻 desktop: 3 columns */
        auto-rows-[minmax(0,_1fr)] /* each row adjusts evenly */
      "
    >
      {[imgRectangle5, imgRectangle6, imgJoinUs, imgRectangle8, imgRectangle9, imgRectangle10].map(
        (imgSrc, i) => (
          <div
            key={i}
            className="relative rounded-[8px] overflow-hidden group cursor-pointer aspect-[4/3]"
          >
            <img
              alt=""
              src={imgSrc}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-[8px]"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
          </div>
        )
      )}
    </div>
  );
}


function Frame4() {
  return (
    <div className="bg-[#f6f6f3] box-border flex flex-col gap-[40px] items-center px-10 sm:px-10 md:px-16 lg:px-20 py-20 relative w-full">
      <p className="leading-[normal] not-italic relative shrink-0 text-sm text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>WHAT WE DO</p>
      <p className="font-normal leading-[1.3] relative shrink-0 text-[#1b1917] text-[30px] text-center sm:w-[50vw] w-[80vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>We provide the most driven students with an extraordinary network, exclusive opportunities, and mentorship to achieve great things.</p>
      <Frame7 />
      <div className="py-12 w-full">  {/* py-24 = 96px top and bottom */}
        <LumaEventEmbed />
      </div>
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-normal items-center leading-[1.3] relative shrink-0 text-[#1b1917] text-[28px] sm:w-[40vw] w-[70vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>
      <p className="relative shrink-0 w-full text-center">{`If you’re someone who loves taking initiative and building meaningful projects, we’d love to get to know you!`}</p>
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] hover:scale-101" data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Apply Now</p>
    </div>
  );
}

function Button3() {
  return (
    <a 
      href="https://excessive-pound-7e1.notion.site/Join-our-Team-116f0e56bcf380cf9158f8d435ca9f3a" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:opacity-70 hover:scale-101 no-underline inline-block" 
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#01939f] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#01939f] text-[17px] text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Internal Team</p>
    </a>
  );
}

function Frame15({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Button2 onClick={onApplyClick} />
      <Button3 onClick={onJoinTeamClick} />
    </div>
  );
}

function Frame18({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0">
      <Frame14 />
      <Frame15 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative rounded-[20px] w-full lg:w-[20vw]">
      <div className="relative w-full lg:w-[10vw] rounded-[12px] aspect-[3/2]">
        <img
          src={imgRectangle11}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center rounded-[12px] pointer-events-none"
        />
      </div>
    </div>
  );
}


function Frame20({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center justify-center relative shrink-0">
      <Frame18 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
      <Frame19 />
    </div>
  );
}

function Frame9({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="bg-[#f0f0eb] box-border content-stretch flex flex-col gap-[60px] items-center px-10 sm:px-10 md:px-16 lg:px-20 py-20 relative shrink-0 max-w-[1440px] w-full">
      <p className="leading-[normal] not-italic relative shrink-0 text-sm text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>JOIN US</p>
      <Frame20 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
    </div>
  );
}


function Group() {
  return (

      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28">
        <g id="Group">
          <path d={svgPaths.p25778480} fill="var(--fill-0, #F6F6F3)" id="Vector" />
        </g>
      </svg>

  );
}

function Socials() {
  return (
    <div className="flex items-center relative gap-[32px] w-full" data-name="Socials">
      <a href="https://instagram.com/nexussocal" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[20px] transition-opacity hover:opacity-70 cursor-pointer" data-name="Vector">
      <svg className="block size-full"  viewBox="0 0 20 20"  fill="none" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z" fill="#F6F6F3"/>
</svg>
      </a>
      <a href="https://www.linkedin.com/company/nexussocal" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[20px] transition-opacity hover:opacity-70 cursor-pointer" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p308e0370} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://x.com/nexussocal" target="_blank" rel="noopener noreferrer" className="size-[20px] transition-opacity hover:opacity-70 cursor-pointer">
        <Group />
      </a>
    </div>
  );
}

function Links() {
  return (
    <div className="flex flex-col gap-[40px] items-start w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none">
          <div className="h-[53px] relative w-[38px]" data-name="IMG_4908 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.94%] left-[-55.26%] max-w-none top-[-22.64%] w-[210.53%]" src={NexusLogo} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-full relative shrink-0">
        <div className="flex-none w-full">
          <p className="leading-[normal] not-italic relative text-[#f6f6f3] text-[14px] tracking-[2px] w-full" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>CONTACT US</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none w-full">
          <Socials />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative w-full overflow-hidden" data-name="Footer">
      {/* Footer image covers the dynamic content height */}
      <img
        src={imgFooter}
        alt="splash"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* Links define the footer height */}
      <div className="relative flex items-center justify-center px-10 sm:px-10 md:px-16 lg:px-20 py-20">
        <Links />
      </div>
    </div>
  );
}

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => scrollToSection('about');
  const handleEventsClick = () => scrollToSection('events');
  const handleContactClick = () => scrollToSection('contact');
  const handleJoinClick = () => scrollToSection('join-us');
  const handleApplyClick = () => window.open('https://tally.so/r/mOJP5K', '_blank');
  const handleJoinTeamClick = () =>
    window.open(
      'https://excessive-pound-7e1.notion.site/Join-our-Team-116f0e56bcf380cf9158f8d435ca9f3a',
      '_blank'
    );

  return (
    <div className="w-full min-h-dvh flex flex-col items-stretch relative overflow-x-hidden" data-name="Homepage - DEPLOY">
      <Hero
        onAboutClick={handleAboutClick}
        onEventsClick={handleEventsClick}
        onContactClick={handleContactClick}
        onJoinClick={handleJoinClick}
      />

      <section id="about" className="w-full">
        <AboutSection />
      </section>

      <section id="events" className="w-full">
        {/* If Frame4 needs an edge-to-edge background but a parent has max-w, use the breaker below */}
        {/* <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen"> */}
          <Frame4 />
        {/* </div> */}
      </section>

      <section id="join-us" className="w-full">
        <Frame9 onApplyClick={handleApplyClick} onJoinTeamClick={handleJoinTeamClick} />
      </section>

      <section id="contact" className="w-full">
        <div className="flex items-center justify-center">
          <div className="flex-none w-full">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
