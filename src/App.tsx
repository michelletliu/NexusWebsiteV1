import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-gmt50cudxw";
import imgShifaazShamoonSLAk1GuBg90Unsplash1 from "./assets/Ocean Mask.png";
import imgPrimaryMonogram from "./assets/Teal USC.png";
import imgScriptLogo from "./assets/Teal UCLA.png";
import imgCaltechLogo2014 from "./assets/Teal Caltech.png";
import imgUciAnteatersLogo from "./assets/Teal UCI.png";
import imgLmu from "./assets/Teal LMU.png";
import imgLogoUcsd2 from "./assets/Teal UCSD.png";
import imgImg49081 from "./assets/Nexus Logo.png";
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
import { imgShifaazShamoonSLAk1GuBg90Unsplash, imgShifaazShamoonSLAk1GuBg90Unsplash2 } from "./imports/svg-itm1w";
import './styles/globals.css';  // ✅ Correct path

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
    <div id="partners-row" className="w-full flex items-center justify-between gap-x-12 gap-y-8 flex-wrap">
<img 
  src={imgRectangle12} 
  alt="Pear" 
/>
<img className="logo-img" src={imgRectangle13} alt="Soma Capital" />
<img className="logo-img" src={imgRectangle14} alt="1517" />
<img className="logo-img" src={imgRectangle15} alt="Z Fellows" />
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
    <div className="absolute content-stretch flex gap-[48px] items-center justify-end right-[120px] top-[35px]">
      <NavLink onClick={onAboutClick} />
      <NavLink1 onClick={onEventsClick} />
      <NavLink2 onClick={onContactClick} />
      <Button onClick={onJoinClick} />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center">
      <h1 className="text-[140px] text-white tracking-[10px] !leading-0.7px]" style={{ fontFamily: 'Monomakh, serif', lineHeight: 1 }}>Nexus</h1>
      <p className="font-normal leading-[normal] min-w-full relative shrink-0 text-[#015358] text-[22px] w-[min-content]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Southern California's First Intercollegiate Entrepreneurship Society</p>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] hover:scale-101" data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Community</p>
    </div>
  );
}

function HeaderCTA({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0">
      <Header />
      <Button1 onClick={onJoinClick} />
      <Schools />
    </div>
  );
}

function Schools() {
  return (
    <div
      className="static flex items-center gap-[90px] h-[44px]"
      data-name="schools"
    >
      <img src={imgPrimaryMonogram} alt="USC" className="h-full w-auto object-contain" />
      <img src={imgScriptLogo} alt="UCLA" className="h-full w-auto object-contain" />
      <img src={imgCaltechLogo2014} alt="Caltech" className="h-full w-auto object-contain" />
      <img src={imgUciAnteatersLogo} alt="UCI" className="h-full w-auto object-contain" />
      <img src={imgLmu} alt="LMU" className="h-full w-auto object-contain" />
      <img src={imgLogoUcsd2} alt="UC San Diego" className="h-full w-auto object-contain" />
    </div>
  );
}




// HeroContent
function HeroContent({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div
      className="
        /* removed absolute + transforms */
        flex flex-col items-center
        gap-20 sm:gap-28 lg:gap-36
        w-max max-w-[min(100vw-2rem,80rem)]
        px-4 sm:px-6
      "
    >
      <HeaderCTA onJoinClick={onJoinClick} />
    </div>
  );
}



function Frame1({ onAboutClick, onEventsClick, onContactClick, onJoinClick }: { onAboutClick: () => void; onEventsClick: () => void; onContactClick: () => void; onJoinClick: () => void }) {
  return (
    <div className="bg-gradient-to-b from-[#01939f] via-[#dbebea] to-[#f6f6f3]
                flex flex-col items-center justify-center relative overflow-clip py-[140px] pt-[200px] w-full">
      <div className="absolute left-1/2 size-[80px] top-[14px] translate-x-[-50%]" data-name="IMG_4908 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg49081} />
      </div>
      <img className="" src={imgShifaazShamoonSLAk1GuBg90Unsplash1} alt="splash" />
      <Frame onAboutClick={onAboutClick} onEventsClick={onEventsClick} onContactClick={onContactClick} onJoinClick={onJoinClick} />
      <HeroContent onJoinClick={onJoinClick} />
      <div className="absolute left-[-694px] size-[1389px] top-[-640px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1389 1389">
          <circle cx="694.5" cy="694.5" fill="url(#paint0_radial_1_222)" id="Ellipse 3" opacity="0.7" r="694.5" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(694.5 694.5) rotate(90) scale(779.504)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_222" r="1">
              <stop stopColor="#FFB949" />
              <stop offset="0.235577" stopColor="#FECC35" stopOpacity="0.5" />
              <stop offset="0.898621" stopColor="#FFD99B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[40px] items-start leading-[0] relative shrink-0 text-[#f6f6f3] text-[36px]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>
      <div className="leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
        <p className="mb-0">{`Nexus is the community for `}</p>
        <p>SoCal's most talented and driven student entrepreneurs.</p>
      </div>
      <div className="leading-[normal] relative shrink-0 w-[724px]">
        <p className="mb-0">{`We bring together the brightest builders— `}</p>
        <p>engineers, designers, creators, and more.</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0">
      <p className="leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-[17px] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>WHO WE ARE</p>
      <Frame21 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start relative shrink-0 w-full">
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
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-[17px] text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>OUR PARTNERS</p>
      <PartnersRow />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] items-start p-[120px] relative shrink-0 max-w-[1440px] w-full bg-[#015358]">
      <Frame24 />
      <Frame22 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center relative shrink-0">
      <p className="font-normal leading-[normal] relative shrink-0 text-[#1b1917] text-[22px] text-center text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Connect</p>
      <div className="bg-[#dddddd] h-[27px] rounded-[8px] shrink-0 w-[2px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#1b1917] text-[22px] text-center text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Build</p>
      <div className="bg-[#dddddd] h-[27px] rounded-[8px] shrink-0 w-[2px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#1b1917] text-[22px] text-center text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Innovate</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[655px] relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] relative rounded-[8px] shrink-0 overflow-hidden group cursor-pointer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgRectangle5} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="[grid-area:1_/_2] relative rounded-[8px] shrink-0 overflow-hidden group cursor-pointer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgRectangle6} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="[grid-area:1_/_3] relative rounded-[8px] shrink-0 overflow-hidden group cursor-pointer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgJoinUs} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="[grid-area:2_/_1] relative rounded-[8px] shrink-0 overflow-hidden group cursor-pointer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgRectangle8} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="[grid-area:2_/_2] relative rounded-[8px] shrink-0 overflow-hidden group cursor-pointer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgRectangle9} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
      <div className="[grid-area:2_/_3] relative rounded-[8px] shrink-0 overflow-hidden group cursor-pointer">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgRectangle10} />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[74px] left-[461px] top-[411px] w-[538px]">
      <div className="absolute bottom-[-2.65%] left-0 right-[-0.36%] top-[-1.79%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540 78">
          <g id="Group 2">
            <g id="Frame 37">
              <path d={svgPaths.p265ee500} fill="url(#paint0_linear_1_209)" id="Vector 2" />
              <path d={svgPaths.pc283d00} fill="url(#paint1_linear_1_209)" id="Vector 3" />
            </g>
            <path d={svgPaths.pfd44100} fill="url(#paint2_linear_1_209)" id="Vector 4" />
            <path d={svgPaths.p211758f0} fill="url(#paint3_linear_1_209)" id="Vector 5" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_209" x1="208.405" x2="317.405" y1="59.3263" y2="59.3263">
              <stop stopColor="#B3D9D9" />
              <stop offset="1" stopColor="#01939F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_209" x1="205.905" x2="319.905" y1="69.8263" y2="69.8263">
              <stop stopColor="#B3D9D9" />
              <stop offset="1" stopColor="#01939F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_209" x1="520.5" x2="520.5" y1="22.3263" y2="56.3263">
              <stop stopColor="#01939F" />
              <stop offset="1" stopColor="#B3D9D9" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_209" x1="0" x2="130" y1="20.3263" y2="20.3263">
              <stop stopColor="#01939F" />
              <stop offset="1" stopColor="#B3D9D9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f6f6f3] box-border flex flex-col gap-[60px] items-center p-[120px] relative w-full">
      <p className="leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>WHAT WE DO</p>
      <p className="font-normal leading-[1.3] relative shrink-0 text-[#1b1917] text-[34px] text-center w-[700px]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>We provide the most driven students with an extraordinary network, exclusive opportunities, and mentorship to achieve great things.</p>
      <Frame7 />
      <div className="py-24 w-full">  {/* py-24 = 96px top and bottom */}
        <LumaEventEmbed />
      </div>
      <Frame16 />
      <Group1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[28px] items-start leading-[1.3] relative shrink-0 text-[#1b1917] text-[17px] w-[443px]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>
      <p className="relative shrink-0 w-full">{`We believe in high-growth individuals—those who take initiative, relentlessly pursue their goals, and aim to build transformative projects. `}</p>
      <p className="relative shrink-0 w-full">If this sounds like you, Nexus is here to provide the support, network, and exclusive opportunities to help you get there faster.</p>
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] hover:scale-101" data-name="Button" onClick={onClick}>
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
      <div aria-hidden="true" className="absolute border border-[#01939f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#01939f] text-[17px] text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Internal Team</p>
    </a>
  );
}

function Frame15({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Button2 onClick={onApplyClick} />
      <Button3 onClick={onJoinTeamClick} />
    </div>
  );
}

function Frame18({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0">
      <Frame14 />
      <Frame15 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] h-[273px] items-start relative rounded-[20px] shrink-0 w-[441px]">
      <div className="h-[273px] relative rounded-[12px] shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgRectangle11} />
      </div>
    </div>
  );
}

function Frame20({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <Frame18 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
      <Frame19 />
    </div>
  );
}

function Frame9({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="bg-[#f0f0eb] box-border content-stretch flex flex-col gap-[60px] items-center px-0 py-[120px] relative shrink-0 max-w-[1440px] w-full">
      <div className="absolute left-[1146px] size-[587px] top-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 587 587">
          <circle cx="293.5" cy="293.5" fill="url(#paint0_radial_1_205)" id="Ellipse 3" opacity="0.7" r="293.5" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(293.5 293.5) rotate(90) scale(329.423)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_205" r="1">
              <stop stopColor="#FFB949" />
              <stop offset="0.235577" stopColor="#FECC35" stopOpacity="0.5" />
              <stop offset="0.898621" stopColor="#FFD99B" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <p className="leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>JOIN US</p>
      <Frame20 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
    </div>
  );
}


function Group() {
  return (
    <div className="h-[28px] relative shrink-0 w-[31.2px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 28">
        <g id="Group">
          <path d={svgPaths.p25778480} fill="var(--fill-0, #F6F6F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Socials() {
  return (
    <div className="content-stretch flex items-center justify-between relative w-full" data-name="Socials">
      <a href="https://instagram.com/nexussocal" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[28px] transition-opacity hover:opacity-70 cursor-pointer" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p2ec6be80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/company/nexussocal" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[28px] transition-opacity hover:opacity-70 cursor-pointer" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p308e0370} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://x.com/nexussocal" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70 cursor-pointer">
        <Group />
      </a>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(50%-549.5px)] top-[53px] translate-x-[-50%] w-[227px]">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none scale-y-[-100%] w-full">
          <Socials />
        </div>
      </div>
      <div className="flex items-center justify-center min-w-full relative shrink-0 w-[min-content]">
        <div className="flex-none scale-y-[-100%] w-full">
          <p className="leading-[normal] not-italic relative text-[#f6f6f3] text-[14px] tracking-[2px] w-full" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>CONTACT US</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="h-[53px] relative w-[38px]" data-name="IMG_4908 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[150.94%] left-[-55.26%] max-w-none top-[-22.64%] w-[210.53%]" src={imgImg49081} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-gradient-to-b from-[#01939f] h-[493px] overflow-clip relative to-[#f6f6f3] to-[96.131%] via-[#dbebea] via-[71.048%] w-full" data-name="Footer">
      <img src={imgShifaazShamoonSLAk1GuBg90Unsplash1} alt="splash" />
      <Frame17 />
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
      <Frame1
        onAboutClick={handleAboutClick}
        onEventsClick={handleEventsClick}
        onContactClick={handleContactClick}
        onJoinClick={handleJoinClick}
      />

      <section id="about" className="w-full">
        <Frame3 />
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
          <div className="flex-none w-full  scale-y-[-100%]">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
