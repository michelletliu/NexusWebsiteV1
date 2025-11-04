import svgPaths from "./svg-gmt50cudxw";
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
import { imgShifaazShamoonSLAk1GuBg90Unsplash, imgShifaazShamoonSLAk1GuBg90Unsplash2 } from "./svg-itm1w";
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



function NavLink() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Nav Link">
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre">About</p>
    </div>
  );
}

function NavLink1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Nav Link">
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre">Events</p>
    </div>
  );
}

function NavLink2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Nav Link">
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[17px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[8px] relative rounded-[999px] shrink-0" data-name="Button">
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#015358] text-[17px] text-nowrap whitespace-pre">Join Us</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-6 sm:justify-end px-4 sm:px-6 lg:px-8 py-4">
      <NavLink />
      <NavLink1 />
      <NavLink2 />
      <Button />
    </div>
  );
}

function HeroText() {
  return (
    <div className="flex flex-col items-center gap-4 px-2 sm:px-4 text-center">
      <p className="font-['Monomakh:Regular',_sans-serif] text-white leading-none tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-[72px] sm:text-[110px] lg:text-[140px]">
        Nexus
      </p>
      <p className="font-['Host_Grotesk:Regular',_sans-serif] text-[#015358] text-base sm:text-lg md:text-xl max-w-[28rem]">
        Southern California’s First Intercollegiate Entrepreneurship Society
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white whitespace-pre">Join the Community</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0">
      <HeroText />
      <Button1 />
    </div>
  );
}

function Schools() {
  return (
    <div className="flex w-full max-w-[960px] flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 py-3">
      <img src={imgPrimaryMonogram} alt="USC" className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain" />
      <img src={imgScriptLogo} alt="UCLA" className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain" />
      <img src={imgCaltechLogo2014} alt="Caltech" className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain" />
      <img src={imgUciAnteatersLogo} alt="UCI" className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain" />
      <img src={imgLmu} alt="LMU" className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain" />
      <img src={imgLogoUcsd2} alt="UC San Diego" className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain" />
    </div>
  );
}


function Frame5() {
  return (
    <div className="flex w-full flex-col items-center gap-12 sm:gap-16 px-4 sm:px-6 lg:px-10 py-6">
      <Frame6 />
      <Schools />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#01939f] via-[#dbebea] via-[71%] to-[#f6f6f3]">
      <div className="absolute inset-0 flex justify-center">
        <img
          src={imgShifaazShamoonSLAk1GuBg90Unsplash1}
          alt="splash"
          className="h-full w-full max-w-none object-cover opacity-90"
        />
      </div>
      <div className="absolute left-1/2 top-4 size-[64px] sm:size-[72px] lg:size-[80px] -translate-x-1/2" data-name="IMG_4908 1">
        <img alt="" className="absolute inset-0 size-full object-cover" src={imgImg49081} />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 sm:gap-14 lg:gap-20 px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-24">
        <Frame />
        <Frame5 />
      </div>
      <div className="pointer-events-none absolute -left-[694px] -top-[640px] size-[1389px]">
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
    <div className="content-stretch flex flex-col font-['Host_Grotesk:Regular',_sans-serif] font-normal gap-[clamp(1rem, 4vw, 3rem)] items-start leading-[0] relative shrink-0 text-[#f6f6f3] text-[36px]">
      <div className="leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
        <p className="mb-0">{`Nexus is the community for `}</p>
        <p>SoCal’s most talented and driven student entrepreneurs.</p>
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
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-[17px] text-center text-nowrap tracking-[2px] whitespace-pre">WHO WE ARE</p>
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
    <div className="bg-[rgba(2,147,159,0.4)] box-border content-stretch flex flex-col gap-[15.686px] h-[104px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[184px]">
      <div className="absolute bg-white left-[23px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[21px_72px] mask-size-[96px_42px] size-[165px] top-[-41px]" style={{ maskImage: `url('${imgRectangle12}')` }} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.686px] h-[104px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[183px]">
      <div className="absolute bg-white left-[9px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[13px_67.57px] mask-size-[139px_42.86px] size-[165px] top-[-37px]" style={{ maskImage: `url('${imgRectangle13}')` }} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.686px] h-[104px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[186px]">
      <div className="absolute bg-white left-[37px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.608px_59.799px] mask-size-[119.216px_62.402px] size-[165px] top-[-39px]" style={{ maskImage: `url('${imgRectangle14}')` }} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[15.686px] h-[106px] items-center justify-center px-[20px] py-[31.373px] relative rounded-[8px] shrink-0 w-[186px]">
      <div className="absolute bg-white left-[25px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-29.255px_38.239px] mask-size-[194.51px_109.521px] size-[165px] top-[-40px]" style={{ maskImage: `url('${imgRectangle15}')` }} />
    </div>
  );
}


function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-[17px] text-nowrap tracking-[2px] whitespace-pre">OUR PARTNERS</p>
      <PartnersRow />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] items-start p-[120px] relative shrink-0 w-[1440px]">
      <Frame24 />
      <Frame22 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center relative shrink-0">
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1917] text-[22px] text-center text-nowrap whitespace-pre">Connect</p>
      <div className="bg-[#dddddd] h-[27px] rounded-[8px] shrink-0 w-[2px]" />
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1917] text-[22px] text-center text-nowrap whitespace-pre">Build</p>
      <div className="bg-[#dddddd] h-[27px] rounded-[8px] shrink-0 w-[2px]" />
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1b1917] text-[22px] text-center text-nowrap whitespace-pre">Innovate</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="gap-[20px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[655px] relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] relative rounded-[8px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle5} />
      </div>
      <div className="[grid-area:1_/_2] relative rounded-[8px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle6} />
      </div>
      <div className="[grid-area:1_/_3] relative rounded-[8px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle7} />
      </div>
      <div className="[grid-area:2_/_1] relative rounded-[8px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle8} />
      </div>
      <div className="[grid-area:2_/_2] relative rounded-[8px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle9} />
      </div>
      <div className="[grid-area:2_/_3] relative rounded-[8px] shrink-0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle10} />
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
    <div className="bg-[#f6f6f3] box-border flex flex-col space-y-[80px] items-center p-[120px] relative w-full">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre">WHAT WE DO</p>
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#1b1917] text-[34px] text-center w-[700px]">We provide the most driven students with an extraordinary network, exclusive opportunities, and mentorship to achieve great things.</p>
      <Frame7 />
      <LumaEventEmbed />
      <Frame16 />
      <Group1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['Host_Grotesk:Regular',_sans-serif] font-normal gap-[28px] items-start leading-[1.3] relative shrink-0 text-[#1b1917] text-[17px] w-[443px]">
      <p className="relative shrink-0 w-full">{`We believe in high-growth individuals—those who take initiative, relentlessly pursue their goals, and aim to build transformative projects. `}</p>
      <p className="relative shrink-0 w-full">If this sounds like you, Nexus is here to provide the support, network, and exclusive opportunities to help you get there faster.</p>
    </div>
  );
}

function Button2() {
  return (
    <a
      href="https://tally.so/r/mOJP5K"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 hover:opacity-90 transition"
    >
      <p className="font-['Host_Grotesk:Regular',_sans-serif] font-normal leading-[normal] text-[22px] text-white whitespace-pre">
        Apply Now
      </p>
    </a>
  );
}


function Button3() {
  return (
    <a 
      href="https://excessive-pound-7e1.notion.site/Join-our-Team-116f0e56bcf380cf9158f8d435ca9f3a" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:bg-white hover:scale-105 no-underline inline-block" 
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#01939f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#01939f] text-[22px] text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Internal Team</p>
    </a>
  );
}



function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0">
      <Frame14 />
      <Frame15 />
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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f0f0eb] box-border content-stretch flex flex-col gap-[60px] items-center px-0 py-[120px] relative shrink-0 w-[1440px]">
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
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre">JOIN US</p>
      <Frame20 />
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
      <div className="relative shrink-0 size-[28px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p2ec6be80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[28px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p308e0370} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(50%-549.5px)] top-[53px] translate-x-[-50%] w-[227px]">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none w-full">
          <Socials />
        </div>
      </div>
      <div className="flex items-center justify-center min-w-full relative shrink-0 w-[min-content]">
        <div className="flex-none w-full">
          <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[normal] not-italic relative text-[#f6f6f3] text-[14px] tracking-[2px] w-full">CONTACT US</p>
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none">
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
      <MaskGroup2 />
      <Frame17 />
    </div>
  );
}

export default function HomepageDeploy() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Homepage - DEPLOY">
      <Frame1 />
      <Frame3 />
      <Frame4 />
      <Frame9 />
      <div className="flex items-center justify-center">
        <div className="flex-none w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
