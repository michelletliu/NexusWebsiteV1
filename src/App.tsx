import { useState, useEffect } from 'react';
import svgPaths from "./imports/svg-gmt50cudxw";
import imgShifaazShamoonSLAk1GuBg90Unsplash1 from "figma:asset/e4f9e114cf294d346de4869f13b68f288882c60b.png";
import imgPrimaryMonogram from "figma:asset/166ff541e115b0c94e4874a07f09cb13be25bdb4.png";
import imgScriptLogo from "figma:asset/5499ecc8dc4bbfb9be350fc813c176d1b220c678.png";
import imgCaltechLogo2014 from "figma:asset/5e504449405b5b2f56c9c2e8f6210c7c99344e38.png";
import imgUciAnteatersLogo from "figma:asset/4deb956c3e915daccf6ed0ba42946463e4aa7acf.png";
import imgLmu from "figma:asset/e783360c74cbaae1929d5c02b03182ed4e2b3ba2.png";
import imgLogoUcsd2 from "figma:asset/5988daa27a1b57f7c54aebd438f0067e55d8df33.png";
import imgImg49081 from "figma:asset/48d8b5ee677ef5550d0ad1fce2bdcd4fa23dce99.png";
import imgRectangle12 from "figma:asset/14a66b4eab29a39f4780d604a9fe999a82796502.png";
import imgRectangle13 from "figma:asset/1ad67c52a39477982a4a47e0e589b52f5c6f91c8.png";
import imgRectangle14 from "figma:asset/c02a17fc14aa02cebcdb0d99275cf7da994cf8e6.png";
import imgRectangle15 from "figma:asset/c55a592a4c77aed8c2f527efaf08ae0d1b4483e4.png";
import imgRectangle5 from "figma:asset/18264c722ac273f2e194449d73f810e8929d20ce.png";
import imgRectangle6 from "figma:asset/e544ec6dcdd148d42afbbf2cd1399b2d5848bd8c.png";
import imgRectangle7 from "figma:asset/e0a768b916149eeffa0a2f4377e36d83aec03309.png";
import imgRectangle8 from "figma:asset/d83ce0f4a569c34cc4bc2e9927a47f95bd9ac2a6.png";
import imgRectangle9 from "figma:asset/7c03cb88c5f2ad14bfc9306eb5cb9fd48d4b9374.png";
import imgRectangle10 from "figma:asset/27229dd15d88e9f371aa090aa1a1bb1cd1c46ebe.png";
import imgRectangle11 from "figma:asset/0bc022474e73ddc86a11a8a123c3dd730d493d71.png";
import { imgShifaazShamoonSLAk1GuBg90Unsplash, imgShifaazShamoonSLAk1GuBg90Unsplash2 } from "./imports/svg-itm1w";

function MaskGroup() {
  return (
    <div className="absolute contents left-[calc(50%-0.088px)] top-[-148px] translate-x-[-50%]" data-name="Mask group">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-1/2 top-[-144.7px] -translate-x-1/2 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "815.390625", "--transform-inner-height": "1451.46875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[1451.48px] relative w-[815.397px]" data-name="shifaaz-shamoon-sLAk1guBG90-unsplash" style={{ 
            WebkitMaskImage: `url('${imgShifaazShamoonSLAk1GuBg90Unsplash}')`, 
            maskImage: `url('${imgShifaazShamoonSLAk1GuBg90Unsplash}')`,
            WebkitMaskSize: '1439.82px 808.846px',
            maskSize: '1439.82px 808.846px',
            WebkitMaskPosition: '5.83px -3.302px',
            maskPosition: '5.83px -3.302px',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" style={{ objectPosition: '50% 50%' }} src={imgShifaazShamoonSLAk1GuBg90Unsplash1} />
          </div>
        </div>
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
    <div className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-white hover:scale-105" data-name="Button" onClick={onClick}>
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center">
      <p className="leading-[200px] not-italic relative shrink-0 text-[140px] text-nowrap text-white tracking-[10px] whitespace-pre" style={{ fontFamily: 'Monomakh, sans-serif' }}>Nexus</p>
      <p className="font-normal leading-[normal] min-w-full relative shrink-0 text-[#015358] text-[22px] w-[min-content]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Southern California's First Intercollegiate Entrepreneurship Society</p>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] hover:scale-105" data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Community</p>
    </div>
  );
}

function Frame6({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0">
      <Frame2 />
      <Button1 onClick={onJoinClick} />
    </div>
  );
}

function Schools() {
  return (
    <div className="absolute content-stretch flex gap-[90px] h-[44px] items-center left-[-380.87px] top-[483px] z-10" data-name="schools">
      <div className="h-[44px] relative shrink-0 w-[132.677px] transition-opacity hover:opacity-100 opacity-90" data-name="PrimaryMonogram">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPrimaryMonogram} />
      </div>
      <div className="h-[43.981px] mix-blend-multiply relative shrink-0 w-[92.231px] transition-opacity hover:opacity-100 opacity-90" data-name="script-logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[258.48%] left-[-37.95%] max-w-none top-[-80.2%] w-[175.66%]" src={imgScriptLogo} />
        </div>
      </div>
      <div className="h-[33.846px] relative shrink-0 w-[139.044px] transition-opacity hover:opacity-100 opacity-90" data-name="Caltech_logo_2014">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[231.98%] left-[-15.46%] max-w-none top-[-65.32%] w-[131.58%]" src={imgCaltechLogo2014} />
        </div>
      </div>
      <div className="h-[43.971px] relative shrink-0 w-[39.092px] transition-opacity hover:opacity-100 opacity-90" data-name="UCI_Anteaters_logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUciAnteatersLogo} />
      </div>
      <div className="h-[43.986px] mix-blend-multiply relative shrink-0 w-[129.631px] transition-opacity hover:opacity-100 opacity-90" data-name="lmu">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[176.47%] left-[-9.78%] max-w-none top-[-37.06%] w-[119.76%]" src={imgLmu} />
        </div>
      </div>
      <div className="h-[44.009px] relative shrink-0 w-[223.215px] transition-opacity hover:opacity-100 opacity-90" data-name="logo-ucsd-2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[169.37%] left-[-4.44%] max-w-none top-[-69.37%] w-[108.88%]" src={imgLogoUcsd2} />
        </div>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents left-[-380.87px] top-[483px]" data-name="Mask group">
      <Schools />
      <div className="absolute bg-[#23b0b5] h-[105px] left-[-380.87px] top-[483px] w-[1276px] -z-10" />
    </div>
  );
}

function Frame5({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[100px] items-center left-[calc(50%-0.132px)] top-[258px] translate-x-[-50%]">
      <Frame6 onJoinClick={onJoinClick} />
      <MaskGroup1 />
    </div>
  );
}

function Frame1({ onAboutClick, onEventsClick, onContactClick, onJoinClick }: { onAboutClick: () => void; onEventsClick: () => void; onContactClick: () => void; onJoinClick: () => void }) {
  return (
    <div className="bg-gradient-to-b from-[#01939f] h-[889px] overflow-clip relative shrink-0 to-[#f6f6f3] to-[96.131%] via-[#dbebea] via-[71.048%] w-full">
      <div className="absolute left-1/2 size-[80px] top-[14px] translate-x-[-50%]" data-name="IMG_4908 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImg49081} />
      </div>
      <MaskGroup />
      <Frame onAboutClick={onAboutClick} onEventsClick={onEventsClick} onContactClick={onContactClick} onJoinClick={onJoinClick} />
      <Frame5 onJoinClick={onJoinClick} />
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="leading-[normal] not-italic relative shrink-0 text-[#f0f0eb] text-[17px] text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>OUR PARTNERS</p>
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[60px] items-start p-[120px] relative shrink-0 w-[1440px] bg-[#015358]">
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
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full transition-transform duration-300 group-hover:scale-110" src={imgRectangle7} />
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
    <div className="bg-[#f6f6f3] box-border content-stretch flex flex-col gap-[60px] items-center p-[120px] relative shrink-0 w-[1440px]">
      <p className="leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>WHAT WE DO</p>
      <p className="font-normal leading-[1.3] relative shrink-0 text-[#1b1917] text-[34px] text-center w-[700px]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>We provide the most driven students with an extraordinary network, exclusive opportunities, and mentorship to achieve great things.</p>
      <Frame7 />
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
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] hover:scale-105" data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[22px] text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Apply Now</p>
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[8px] shrink-0 cursor-pointer transition-all hover:bg-white hover:scale-105" data-name="Button" onClick={onClick}>
      <div aria-hidden="true" className="absolute border border-[#01939f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#01939f] text-[22px] text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Internal Team</p>
    </div>
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
      <p className="leading-[normal] not-italic relative shrink-0 text-[17px] text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>JOIN US</p>
      <Frame20 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents left-[calc(50%-23.588px)] top-[-392.25px] translate-x-[-50%]" data-name="Mask group">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-1/2 top-[-392.25px] -translate-x-1/2 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "835.234375", "--transform-inner-height": "1486.8125" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[1486.82px] relative w-[835.249px]" data-name="shifaaz-shamoon-sLAk1guBG90-unsplash" style={{ 
            WebkitMaskImage: `url('${imgShifaazShamoonSLAk1GuBg90Unsplash2}')`, 
            maskImage: `url('${imgShifaazShamoonSLAk1GuBg90Unsplash2}')`,
            WebkitMaskSize: '1486.82px 835.25px',
            maskSize: '1486.82px 835.25px',
            WebkitMaskPosition: '0px',
            maskPosition: '0px',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskComposite: 'source-in',
            maskComposite: 'intersect'
          }}>
            <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" style={{ objectPosition: '50% 50%' }} src={imgShifaazShamoonSLAk1GuBg90Unsplash1} />
          </div>
        </div>
      </div>
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
      <a href="https://instagram.com/nexus_socal" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[28px] transition-opacity hover:opacity-70 cursor-pointer" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p2ec6be80} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://twitter.com/nexus_socal" target="_blank" rel="noopener noreferrer" className="relative shrink-0 size-[28px] transition-opacity hover:opacity-70 cursor-pointer" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <path d={svgPaths.p308e0370} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </a>
      <a href="https://linkedin.com/company/nexus-socal" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70 cursor-pointer">
        <Group />
      </a>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[calc(50%-549.5px)] top-[53px] translate-x-[-50%] w-[227px]">
      <div className="flex items-center justify-center min-w-full relative shrink-0 w-[min-content]">
        <div className="flex-none scale-y-[-100%] w-full">
          <div className="leading-[normal] not-italic relative text-[#f6f6f3] text-[14px] tracking-[2px] w-full" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>
            <p className="mb-0 text-[rgba(246,246,243,0.7)]">MADE BY</p>
            <p style={{ fontFamily: 'IBM Plex Mono, monospace', fontWeight: 500 }}>
              EMILY SHEN
              <br aria-hidden="true" />
              MICHELLE LIU
            </p>
          </div>
        </div>
      </div>
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
      <MaskGroup2 />
      <Frame17 />
    </div>
  );
}

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => scrollToSection('about');
  const handleEventsClick = () => scrollToSection('events');
  const handleContactClick = () => scrollToSection('contact');
  const handleJoinClick = () => scrollToSection('join-us');
  const handleApplyClick = () => {
    window.open('https://forms.gle/nexus-application', '_blank');
  };
  const handleJoinTeamClick = () => {
    window.open('https://forms.gle/nexus-team', '_blank');
  };

  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Homepage - DEPLOY">
      <Frame1 onAboutClick={handleAboutClick} onEventsClick={handleEventsClick} onContactClick={handleContactClick} onJoinClick={handleJoinClick} />
      <div id="about">
        <Frame3 />
      </div>
      <div id="events">
        <Frame4 />
      </div>
      <div id="join-us">
        <Frame9 onApplyClick={handleApplyClick} onJoinTeamClick={handleJoinTeamClick} />
      </div>
      <div className="flex items-center justify-center relative shrink-0 w-full" id="contact">
        <div className="flex-none scale-y-[-100%] w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
