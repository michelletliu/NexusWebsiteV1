import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from './hooks/useMediaQuery';
import { ScrollReveal } from './components/ScrollReveal';
import { Analytics } from '@vercel/analytics/react';
import svgPaths from "./imports/svg-gmt50cudxw";
import imgHero from "./assets/Nexus Hero Splash 2.png";
import imgPrimaryMonogram from "./assets/Teal USC.png";
import imgScriptLogo from "./assets/Teal UCLA.png";
import imgCaltechLogo2014 from "./assets/Teal Caltech.png";
import imgUciAnteatersLogo from "./assets/UCI.png";
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
import imgRectangle8 from "./assets/Nexus Dinner.jpg";
import imgRectangle9 from "./assets/a16z.png";
import imgRectangle11 from "./assets/NexusSundays.png";
import imgJoinUs from "./assets/joinus.png";
import imgFooter from "./assets/Footer.png";
import imgWhatWeDo from "./assets/nexus-dinner-what-we-do.png";
import imgWhatWeDoDinnerPrep from "./assets/what-we-do-dinner-prep.png";
import imgWhatWeDoCast from "./assets/what-we-do-cast.png";
import imgWhatWeDoFounders from "./assets/what-we-do-founders.png";
import imgWhatWeDoSiMon from "./assets/what-we-do-si-mon.png";
import imgWhatWeDoSips from "./assets/what-we-do-sips.png";
import imgWhatWeDoTeam from "./assets/what-we-do-team.png";
import imgWhatWeDoChef from "./assets/what-we-do-chef.png";
import imgWhatWeDoNextDinner from "./assets/what-we-do-next-dinner.png";
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
    <div className="w-full h-auto min-h-fit bg-[#F7F8F9] rounded-md border border-neutral-200 overflow-hidden">
      <iframe
        src="https://luma.com/embed/calendar/cal-mE8WzhLbY45ceEg/events"
        title="Luma Event"
        allow="fullscreen; payment"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-auto block"
        style={{ minHeight: '450px' }}
      />
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
    <div className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[8px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-white " data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-[#015358] text-base text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join Us</p>
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
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center gap-2 mt-10 sm:mt-12 md:mt-14">
      <ScrollReveal>
        <h1
          className="text-8xl md:text-9xl font-normal tracking-tight bg-gradient-to-r from-[#003539] to-[#01939F] bg-clip-text text-transparent">
          Nexus
        </h1>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <p className="font-normal leading-[normal] min-w-full relative shrink-0 text-[#015358] text-xl text-pretty md:text-2xl w-[90vw] sm:w-[70vw] md:w-[60vw] lg:w-[30vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Southern California's First Intercollegiate Entrepreneurship Society</p>
      </ScrollReveal>
    </div>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] " data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-base md:text-base text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Community</p>
    </div>
  );
}

function HeaderCTA({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-16 lg:gap-24 items-center relative shrink-0 w-full max-w-none">
      <div className="content-stretch flex flex-col gap-12 lg:gap-16 items-center relative shrink-0 w-full max-w-none">
      <Header />
      <ScrollReveal delay={200}>
        <Button1 onClick={onJoinClick} />
      </ScrollReveal>
      </div>
      <Schools />
    </div>
  );
}

function Schools() {
  const schools = [
    { src: imgScriptLogo, alt: "UCLA" },
    { src: imgPrimaryMonogram, alt: "USC" },
    { src: imgCaltechLogo2014, alt: "Caltech" },
    { src: imgUciAnteatersLogo, alt: "UCI" },
    {src: imgLogoUcsd2, alt: "UC San Diego" },
    { src: imgLmu, alt: "LMU" },
  ];

  return (
    <ScrollReveal className="w-full">
      <div className="schools md:justify-between max-md:justify-center max-md:!gap-8 leading-none text-[0]">
        {schools.map(s => (
          <img
            key={s.alt}
            src={s.src}
            alt={s.alt}
            className="school-logo"
          />
        ))}
      </div>
    </ScrollReveal>
  );
}




// HeroContent
function HeroContent({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div
      className="
        relative
        flex flex-col items-center
        gap-28 sm:gap-32 lg:gap-40
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
  <div className="section-gutter relative z-50 mx-auto w-full max-w-[1440px]">
      <div className="flex flex-col items-stretch gap-48 pb-16 md:pb-20">
      <NavBar
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
      className="flex flex-col gap-10 items-start font-normal text-[#f6f6f3] text-3xl text-pretty"
      style={{ fontFamily: 'Host Grotesk, sans-serif' }}
    >
      <div className="leading-normal sm:w-[50vw] w-[80vw]">
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
      <ScrollReveal>
        <Frame23 />
      </ScrollReveal>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200 1">
            <line id="Line 1" stroke="var(--stroke-0, #E5E5E5)" strokeOpacity="0.2" x2="1200" y1="0.5" y2="0.5" />
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
    <div className="section-gutter about-surface box-border content-stretch flex flex-col gap-[60px] items-start py-20 relative shrink-0 max-w-[1440px] w-full">
      <Frame24 />
      <ScrollReveal className="w-full">
        <Frame22 />
      </ScrollReveal>
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
      {[imgRectangle5, imgRectangle6, imgJoinUs, imgRectangle8, imgRectangle9, imgRectangle11].map(
        (imgSrc, i) => (
          <ScrollReveal key={i} delay={(i % 3) * 80}>
            <div className="relative rounded-[8px] overflow-hidden aspect-[4/3]">
              <img
                alt=""
                src={imgSrc}
                className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </ScrollReveal>
        )
      )}
    </div>
  );
}


const whatWeDoImages = [
  { src: imgWhatWeDo, alt: "Nexus members sharing a candlelit dinner" },
  { src: imgWhatWeDoDinnerPrep, alt: "Dinner plates prepared for a Nexus gathering" },
  { src: imgWhatWeDoCast, alt: "Polaroid portraits from a Nexus dinner" },
  { src: imgWhatWeDoFounders, alt: "Consumer founders gathered for a Nexus dinner" },
  { src: imgWhatWeDoSiMon, alt: "A Panamanian fusion dinner at Si Mon" },
  { src: imgWhatWeDoSips, alt: "Guests enjoying drinks and dinner at a Nexus gathering" },
  { src: imgWhatWeDoTeam, alt: "The Nexus team at Si Mon" },
  { src: imgWhatWeDoChef, alt: "Dinner crafted by a retired Michelin chef" },
  { src: imgWhatWeDoNextDinner, alt: "A tray of food prepared for a Nexus dinner" },
];

const CAROUSEL_AUTOPLAY_SPEED = 36;

function WhatWeDoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hasInteractedRef = useRef(false);
  const isVisibleRef = useRef(false);
  const isJumpingRef = useRef(false);
  const setWidthRef = useRef(0);
  const slideCount = whatWeDoImages.length;
  const loopImages = [...whatWeDoImages, ...whatWeDoImages, ...whatWeDoImages];

  const stopAutoplay = () => {
    if (hasInteractedRef.current) return;
    hasInteractedRef.current = true;
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    // Keep scrollSnapType 'none'. Re-enabling proximity snap-start pulls the
    // gap-centered phase onto card edges and breaks one-card chevron steps.
  };

  // Vertical wheel events are just the page scrolling past the carousel.
  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) stopAutoplay();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown', ' '].includes(event.key)) {
      stopAutoplay();
    }
  };

  const getMetrics = (carousel: HTMLDivElement) => {
    const firstImage = carousel.querySelector('img');
    if (!firstImage) return null;
    const styles = window.getComputedStyle(carousel);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    const cardWidth = firstImage.getBoundingClientRect().width;
    if (cardWidth <= 0) return null;
    const stride = cardWidth + gap;
    return { cardWidth, gap, stride, setWidth: stride * slideCount };
  };

  const getStride = (carousel: HTMLDivElement) => getMetrics(carousel)?.stride ?? 0;

  const measureSetWidth = (carousel: HTMLDivElement) => getMetrics(carousel)?.setWidth ?? 0;

  // Park so the viewport centerline bisects a gap (not a card): content at
  // setWidth + cardWidth + gap/2 lands at clientWidth/2. Stay in the middle
  // copy so seamless wrap has headroom on both sides.
  const getCenteredOffset = (carousel: HTMLDivElement, setWidth: number) => {
    const metrics = getMetrics(carousel);
    if (!metrics || setWidth <= 0) return setWidth;
    const { cardWidth, gap } = metrics;
    let left = setWidth + cardWidth + gap / 2 - carousel.clientWidth / 2;
    while (left < setWidth) left += setWidth;
    while (left >= setWidth * 2) left -= setWidth;
    return left;
  };

  const jumpTo = (carousel: HTMLDivElement, left: number) => {
    isJumpingRef.current = true;
    const previousSnap = carousel.style.scrollSnapType;
    carousel.style.scrollSnapType = 'none';
    carousel.scrollLeft = left;
    void carousel.offsetHeight;
    carousel.style.scrollSnapType = previousSnap;
    requestAnimationFrame(() => {
      isJumpingRef.current = false;
    });
  };

  const normalizeScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel || isJumpingRef.current) return;

    const setWidth = setWidthRef.current || measureSetWidth(carousel);
    if (setWidth <= 0) return;
    setWidthRef.current = setWidth;

    const { scrollLeft } = carousel;
    if (scrollLeft < setWidth) {
      jumpTo(carousel, scrollLeft + setWidth);
    } else if (scrollLeft >= setWidth * 2) {
      jumpTo(carousel, scrollLeft - setWidth);
    }
  };

  const scrollCarousel = (direction: -1 | 1) => {
    stopAutoplay();
    const carousel = carouselRef.current;
    if (!carousel) return;

    normalizeScroll();
    const stride = getStride(carousel);
    const setWidth = setWidthRef.current || measureSetWidth(carousel);
    if (stride <= 0 || setWidth <= 0) return;

    // Snap stays 'none' so proximity snap cannot shorten or reverse the step.
    carousel.style.scrollSnapType = 'none';

    // Keep the smooth scroll inside the middle copy so normalizeScroll cannot
    // jump mid-animation and cancel scrollBy.
    const next = carousel.scrollLeft + direction * stride;
    if (direction > 0 && next >= setWidth * 2) {
      jumpTo(carousel, carousel.scrollLeft - setWidth);
    } else if (direction < 0 && next < setWidth) {
      jumpTo(carousel, carousel.scrollLeft + setWidth);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    carousel.scrollBy({
      left: direction * stride,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  useLayoutEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const placeCentered = () => {
      if (hasInteractedRef.current) return false;
      const setWidth = measureSetWidth(carousel);
      if (setWidth <= 0) return false;
      setWidthRef.current = setWidth;
      jumpTo(carousel, getCenteredOffset(carousel, setWidth));
      return true;
    };

    placeCentered();
    // Re-measure after layout/fonts settle so the first paint is truly centered.
    const rafId = requestAnimationFrame(() => {
      placeCentered();
    });

    const images = [...carousel.querySelectorAll('img')];
    const onImageReady = () => placeCentered();
    for (const image of images) {
      if (!image.complete) image.addEventListener('load', onImageReady);
    }

    let settleTimer = 0;
    const onScroll = () => {
      if (isJumpingRef.current) return;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(normalizeScroll, 80);
    };
    const onScrollEnd = () => normalizeScroll();

    carousel.addEventListener('scroll', onScroll, { passive: true });
    carousel.addEventListener('scrollend', onScrollEnd);

    const resizeObserver = new ResizeObserver(() => {
      // Before any interaction, always re-center. Preserving "offset from center"
      // here wrongly locked in the flush-left position from the pre-measure frame.
      if (!hasInteractedRef.current) {
        placeCentered();
        return;
      }

      const prevSetWidth = setWidthRef.current;
      const prevCentered = getCenteredOffset(carousel, prevSetWidth || measureSetWidth(carousel));
      const offsetFromCentered =
        prevSetWidth > 0
          ? ((carousel.scrollLeft - prevCentered) % prevSetWidth + prevSetWidth) % prevSetWidth
          : 0;
      const nextSetWidth = measureSetWidth(carousel);
      if (nextSetWidth <= 0) return;
      setWidthRef.current = nextSetWidth;
      jumpTo(carousel, getCenteredOffset(carousel, nextSetWidth) + offsetFromCentered);
    });
    resizeObserver.observe(carousel);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(settleTimer);
      for (const image of images) {
        image.removeEventListener('load', onImageReady);
      }
      carousel.removeEventListener('scroll', onScroll);
      carousel.removeEventListener('scrollend', onScrollEnd);
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    observer.observe(carousel);

    // Disable snap for autoplay and keep it off after interaction so
    // gap-centered paging and chevron scrollBy are not pulled to snap-start.
    carousel.style.scrollSnapType = 'none';

    let previousTime: number | null = null;
    const animate = (time: number) => {
      // stopAutoplay cancels the pending frame, but also gate here so a
      // mid-callback interaction cannot reschedule and keep writing scrollLeft
      // over the chevron's scrollBy.
      if (hasInteractedRef.current) {
        animationFrameRef.current = null;
        return;
      }

      if (previousTime !== null && isVisibleRef.current && !document.hidden) {
        const setWidth = setWidthRef.current || measureSetWidth(carousel);
        if (setWidth > 0) {
          setWidthRef.current = setWidth;
          carousel.scrollLeft += CAROUSEL_AUTOPLAY_SPEED * Math.min(time - previousTime, 64) / 1000;

          // The adjacent copy has identical pixels, so this wrap is invisible.
          if (carousel.scrollLeft >= setWidth * 2) {
            carousel.scrollLeft -= setWidth;
          }
        }
      }

      previousTime = time;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) stopAutoplay();
    };
    const handleVisibilityChange = () => {
      previousTime = null;
    };
    reducedMotionQuery.addEventListener('change', handleReducedMotion);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      reducedMotionQuery.removeEventListener('change', handleReducedMotion);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
      carousel.style.scrollSnapType = '';
    };
  }, []);

  const chevronButtonClassName =
    'flex size-10 items-center justify-center rounded-sm text-[rgba(27,25,23,0.5)] transition-[color,transform] duration-150 hover:text-[#1b1917] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#01939f]';

  return (
    <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2">
      <div className="section-gutter mb-6 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Show previous images"
          aria-controls="what-we-do-carousel"
          onClick={() => scrollCarousel(-1)}
          className={chevronButtonClassName}
        >
          <ChevronLeft aria-hidden="true" className="size-6" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Show next images"
          aria-controls="what-we-do-carousel"
          onClick={() => scrollCarousel(1)}
          className={chevronButtonClassName}
        >
          <ChevronRight aria-hidden="true" className="size-6" strokeWidth={1.5} />
        </button>
      </div>
      <div
        id="what-we-do-carousel"
        ref={carouselRef}
        className="flex gap-4 w-full overflow-x-auto overscroll-x-contain snap-x snap-proximity pb-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#01939f] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        role="region"
        aria-label="Nexus community highlights"
        tabIndex={0}
        onPointerDown={stopAutoplay}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
      >
        {loopImages.map(({ src, alt }, index) => {
          const isClone = index < slideCount || index >= slideCount * 2;
          return (
            <img
              key={`${src}-${index}`}
              src={src}
              alt={isClone ? '' : alt}
              aria-hidden={isClone || undefined}
              className="flex-none w-[72vw] sm:w-[320px] md:w-[360px] aspect-[4/5] object-cover rounded-[8px] snap-start"
            />
          );
        })}
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <section className="section-gutter bg-[#f6f6f3] box-border py-16 md:py-20 relative w-full">
      <div className="flex flex-col gap-14 items-center max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-8 items-center">
          <ScrollReveal>
            <p className="leading-[normal] not-italic text-sm text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>WHAT WE DO</p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-normal leading-[1.3] text-[#1b1917] text-3xl text-center text-pretty w-[70vw] sm:w-[40vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>We provide the most driven students with an extraordinary network, exclusive opportunities, and mentorship to achieve great things.</p>
          </ScrollReveal>
        </div>
        <ScrollReveal className="w-full">
          <WhatWeDoCarousel />
        </ScrollReveal>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  return (
    <div className="section-gutter bg-[#f0f0eb] box-border grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch py-20 relative w-full">
      <div className="flex flex-col gap-6 items-start justify-start">
        <ScrollReveal>
          <p className="leading-[normal] not-italic relative shrink-0 text-sm text-[rgba(27,25,23,0.5)] text-left text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>UPCOMING EVENTS</p>
        </ScrollReveal>
        <ScrollReveal className="w-full" delay={100}>
          <p className="font-normal leading-[1.3] relative shrink-0 text-[#1b1917] text-3xl text-pretty text-left w-[70vw] sm:w-[40vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join us for conversations, connections, and a little bit of magic.</p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <a 
            href="https://lu.ma/nexussocal?k=c" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer transition-colors hover:bg-[#027983] no-underline"
          >
            <p className="font-normal leading-[normal] relative shrink-0 text-base md:text-base text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Subscribe to Calendar</p>
          </a>
        </ScrollReveal>
      </div>
      <ScrollReveal className="w-full" delay={100}>
        <LumaEventEmbed />
      </ScrollReveal>
    </div>
  );
}

function PhotoGallery() {
  return (
    <div className="section-gutter bg-[#f6f6f3] box-border flex flex-col gap-[40px] items-center py-20 relative w-full">
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-normal items-center leading-[1.3] relative shrink-0 text-[#1b1917] text-3xl sm:w-[40vw] w-[70vw]" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>
      <p className="relative shrink-0 w-full text-center text-pretty">{`If you’re someone who loves taking initiative and building meaningful projects, we’d love to get to know you!`}</p>
    </div>
  );
}

function Button2({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#01939f] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:bg-[#027983] " data-name="Button" onClick={onClick}>
      <p className="font-normal leading-[normal] relative shrink-0 text-base text-nowrap text-white whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Apply Now</p>
    </div>
  );
}

function Button3() {
  return (
    <a 
      href="https://excessive-pound-7e1.notion.site/Join-our-Team-116f0e56bcf380cf9158f8d435ca9f3a" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#f6f6f3] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[12px] relative rounded-[999px] shrink-0 cursor-pointer transition-all hover:opacity-70  no-underline inline-block" 
      data-name="Button"
    >
      <div aria-hidden="true" className="absolute border border-[#01939f] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-normal leading-[normal] relative shrink-0 text-[#01939f] text-base text-nowrap whitespace-pre" style={{ fontFamily: 'Host Grotesk, sans-serif' }}>Join the Internal Team</p>
    </a>
  );
}

function Frame15({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
      <Button2 onClick={onApplyClick} />
    </div>
  );
}

function Frame9({ onApplyClick, onJoinTeamClick }: { onApplyClick: () => void; onJoinTeamClick: () => void }) {
  return (
    <div className="section-gutter bg-[#f0f0eb] box-border content-stretch flex flex-col gap-[60px] items-center py-20 relative shrink-0 max-w-[1440px] w-full">
      <div className="flex flex-col gap-10 items-center">
        <ScrollReveal>
          <p className="leading-[normal] not-italic relative shrink-0 text-sm text-[rgba(27,25,23,0.5)] text-center text-nowrap tracking-[2px] whitespace-pre" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>JOIN US</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Frame14 />
        </ScrollReveal>
        <ScrollReveal className="w-full" delay={200}>
          <Frame15 onApplyClick={onApplyClick} onJoinTeamClick={onJoinTeamClick} />
        </ScrollReveal>
      </div>
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
      <svg className="block size-full"  viewBox="0 0 20 20"  fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="flex flex-col gap-[32px] items-center w-full">
      <ScrollReveal>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none">
            <div className="h-[53px] relative w-[38px]" data-name="IMG_4908 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[150.94%] left-[-55.26%] max-w-none top-[-22.64%] w-[210.53%]" src={NexusLogo} />
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal className="w-full" delay={100}>
        <div className="flex items-center justify-center min-w-full relative shrink-0">
          <div className="flex-none">
            <p className="leading-[normal] not-italic relative text-[#f6f6f3] text-[14px] tracking-[2px] w-full" style={{ fontFamily: 'IBM Plex Mono, monospace' }}>CONTACT US</p>
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal className="w-full" delay={200}>
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none">
            <Socials />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative w-full overflow-hidden" data-name="Footer">
      {/* Footer image as background */}
      <img
        src={imgFooter}
        alt="splash"
        className="absolute left-0 top-0 h-[110%] w-full object-cover object-top"
        aria-hidden
      />

      {/* Links define the height, with min-height on desktop to show more of the image */}
      <div className="section-gutter relative flex flex-col justify-end pt-20 pb-16 md:min-h-[300px] lg:min-h-[340px]">
        <Links />
      </div>
    </div>
  );
}

// Pauses the ambient about-surface animation while it is off-screen
function useScrollAnimations() {
  useEffect(() => {
    const ambientObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    });

    document
      .querySelectorAll('.about-surface')
      .forEach((el) => ambientObserver.observe(el));

    return () => ambientObserver.disconnect();
  }, []);
}

export default function App() {
  useScrollAnimations();
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => scrollToSection('about');
  const handleEventsClick = () => scrollToSection('events');
  const handleContactClick = () => scrollToSection('contact');
  const handleJoinClick = () => scrollToSection('join-us');
  const handleApplyClick = () => window.open('https://nexussocal.notion.site/nexus-join-our-team?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnuzZyR-gf7X3XOsIpbTGPPVGVGrzDFuGtYT_rbrx0X34EY2vGQXD-3_JkAAs_aem_5vouHdjncZnqZoUuvJHohw', '_blank');
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
        <Frame4 />
        <UpcomingEvents />
        <PhotoGallery />
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
      <Analytics />
    </div>
  );
}
