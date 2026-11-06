/**
 * PTM Jaufar Sadiq — Personal Branding Website
 * Vanilla JavaScript Interactive Engine
 * Zero dependencies, pure ES6+ vanilla JS
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. STICKY HEADER SCROLL EFFECT
  const siteHeader = document.getElementById("site-header");
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add(
          "bg-navy-header-gradient",
          "backdrop-blur-md",
          "py-3",
          "shadow-2xl",
          "border-gold/20"
        );
        siteHeader.classList.remove(
          "bg-navy/90",
          "backdrop-blur-sm",
          "py-4",
          "border-white/10"
        );
      } else {
        siteHeader.classList.remove(
          "bg-navy-header-gradient",
          "backdrop-blur-md",
          "py-3",
          "shadow-2xl",
          "border-gold/20"
        );
        siteHeader.classList.add(
          "bg-navy/90",
          "backdrop-blur-sm",
          "py-4",
          "border-white/10"
        );
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
  }

  // 2. MOBILE MENU DRAWER
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenuClose = document.getElementById("mobile-menu-close");
  const mobileDrawerContainer = document.getElementById("mobile-drawer-container");
  const mobileBackdrop = document.getElementById("mobile-backdrop");
  const mobileDrawer = document.getElementById("mobile-drawer");

  function openMobileMenu() {
    if (!mobileDrawerContainer || !mobileDrawer) return;
    mobileDrawerContainer.classList.remove("opacity-0", "pointer-events-none");
    mobileDrawerContainer.classList.add("opacity-100", "pointer-events-auto");
    mobileDrawer.classList.remove("translate-x-full");
    mobileDrawer.classList.add("translate-x-0");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    if (!mobileDrawerContainer || !mobileDrawer) return;
    mobileDrawerContainer.classList.remove("opacity-100", "pointer-events-auto");
    mobileDrawerContainer.classList.add("opacity-0", "pointer-events-none");
    mobileDrawer.classList.remove("translate-x-0");
    mobileDrawer.classList.add("translate-x-full");
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", closeMobileMenu);
  }

  // Close drawer on clicking any navigation link
  const drawerLinks = document.querySelectorAll("#mobile-drawer a");
  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // 3. WHAT YOU DO — INTERACTIVE SLIDER
  const sliderContainer = document.getElementById("what-you-do-slider");
  if (sliderContainer) {
    const tabs = sliderContainer.querySelectorAll("[data-slider-tab]");
    const slides = sliderContainer.querySelectorAll("[data-slider-slide]");
    const prevBtn = document.getElementById("slider-prev");
    const nextBtn = document.getElementById("slider-next");
    const counterEl = document.getElementById("slider-counter");

    let activeIndex = 0;
    const totalSlides = slides.length;
    let autoplayTimer = null;
    let isPaused = false;

    function showSlide(index) {
      activeIndex = (index + totalSlides) % totalSlides;

      // Update Slides Visibility
      slides.forEach((slide, idx) => {
        if (idx === activeIndex) {
          slide.classList.remove("hidden");
          slide.classList.add("block", "animate-card-fade");
        } else {
          slide.classList.add("hidden");
          slide.classList.remove("block", "animate-card-fade");
        }
      });

      // Update Tab Styles
      tabs.forEach((tab, idx) => {
        if (idx === activeIndex) {
          tab.className =
            "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 btn-gold-gradient text-navy font-bold scale-[1.02] shadow-lg shadow-gold/25 cursor-pointer";
        } else {
          tab.className =
            "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 bg-navy-light/60 text-slate-300 hover:text-white hover:bg-navy-light border border-white/10 cursor-pointer";
        }
      });

      // Update Counter
      if (counterEl) {
        counterEl.textContent = `0${activeIndex + 1} / 0${totalSlides}`;
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = parseInt(tab.getAttribute("data-slider-tab"), 10);
        showSlide(target);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => showSlide(activeIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => showSlide(activeIndex + 1));
    }

    function startAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        if (!isPaused) {
          showSlide(activeIndex + 1);
        }
      }, 5500);
    }

    sliderContainer.addEventListener("mouseenter", () => {
      isPaused = true;
    });
    sliderContainer.addEventListener("mouseleave", () => {
      isPaused = false;
    });

    showSlide(0);
    startAutoplay();
  }

  // 4. WHO YOU HELP — 3D COVERFLOW CAROUSEL
  const coverflowContainer = document.getElementById("coverflow-container");
  if (coverflowContainer) {
    const cards = coverflowContainer.querySelectorAll(".coverflow-card");
    const dots = coverflowContainer.querySelectorAll("[data-coverflow-dot]");
    const prevBtn = document.getElementById("coverflow-prev");
    const nextBtn = document.getElementById("coverflow-next");

    let activeIdx = 0;
    const totalCards = cards.length;
    let autoplayTimer = null;
    let isPaused = false;

    function updateCoverflow(index) {
      activeIdx = (index + totalCards) % totalCards;

      cards.forEach((card, idx) => {
        let offset = (idx - activeIdx + totalCards) % totalCards;
        if (offset > 2) offset -= totalCards;

        let translateX = "0%";
        let scale = 1;
        let zIndex = 30;
        let opacity = 1;
        let brightness = "brightness(100%)";
        let rotateY = "0deg";
        const isActive = offset === 0;

        if (isActive) {
          translateX = "0%";
          scale = 1.04;
          zIndex = 30;
          opacity = 1;
          brightness = "brightness(100%)";
          rotateY = "0deg";
          card.classList.add(
            "border-gold/60",
            "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(209,167,81,0.25)]"
          );
          card.classList.remove("border-white/10", "hover:border-gold/30");
        } else if (offset === -1) {
          translateX = "-62%";
          scale = 0.86;
          zIndex = 20;
          opacity = 0.82;
          brightness = "brightness(70%)";
          rotateY = "8deg";
          card.classList.remove(
            "border-gold/60",
            "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(209,167,81,0.25)]"
          );
          card.classList.add("border-white/10");
        } else if (offset === 1) {
          translateX = "62%";
          scale = 0.86;
          zIndex = 20;
          opacity = 0.82;
          brightness = "brightness(70%)";
          rotateY = "-8deg";
          card.classList.remove(
            "border-gold/60",
            "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(209,167,81,0.25)]"
          );
          card.classList.add("border-white/10");
        } else if (offset === -2) {
          translateX = "-118%";
          scale = 0.72;
          zIndex = 10;
          opacity = 0.45;
          brightness = "brightness(45%)";
          rotateY = "14deg";
          card.classList.remove(
            "border-gold/60",
            "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(209,167,81,0.25)]"
          );
          card.classList.add("border-white/10");
        } else if (offset === 2) {
          translateX = "118%";
          scale = 0.72;
          zIndex = 10;
          opacity = 0.45;
          brightness = "brightness(45%)";
          rotateY = "-14deg";
          card.classList.remove(
            "border-gold/60",
            "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(209,167,81,0.25)]"
          );
          card.classList.add("border-white/10");
        }

        card.style.transform = `translate(calc(-50% + ${translateX}), -50%) scale(${scale}) perspective(1200px) rotateY(${rotateY})`;
        card.style.zIndex = zIndex;
        card.style.opacity = opacity;
        card.style.filter = brightness;
      });

      // Update Dots/Pills
      dots.forEach((dot, idx) => {
        if (idx === activeIdx) {
          dot.className =
            "px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 btn-gold-gradient text-navy shadow-md cursor-pointer";
        } else {
          dot.className =
            "px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-navy-light/60 hover:bg-navy-light border border-white/10 transition-colors cursor-pointer";
        }
      });

      // Update Current Card Counter
      const coverflowCurrent = document.getElementById("coverflow-current");
      if (coverflowCurrent) {
        coverflowCurrent.textContent = activeIdx + 1;
      }
    }

    cards.forEach((card, idx) => {
      card.addEventListener("click", () => updateCoverflow(idx));
    });

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const target = parseInt(dot.getAttribute("data-coverflow-dot"), 10);
        updateCoverflow(target);
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => updateCoverflow(activeIdx - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => updateCoverflow(activeIdx + 1));
    }

    // Touch Swipe Support
    let touchStartX = null;
    coverflowContainer.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.targetTouches[0].clientX;
      },
      { passive: true }
    );
    coverflowContainer.addEventListener(
      "touchend",
      (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (diff > 45) {
          updateCoverflow(activeIdx + 1);
        } else if (diff < -45) {
          updateCoverflow(activeIdx - 1);
        }
        touchStartX = null;
      },
      { passive: true }
    );

    // Keyboard Arrow navigation
    coverflowContainer.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        updateCoverflow(activeIdx - 1);
      } else if (e.key === "ArrowRight") {
        updateCoverflow(activeIdx + 1);
      }
    });

    coverflowContainer.addEventListener("mouseenter", () => {
      isPaused = true;
    });
    coverflowContainer.addEventListener("mouseleave", () => {
      isPaused = false;
    });

    function startCoverflowAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        if (!isPaused) {
          updateCoverflow(activeIdx + 1);
        }
      }, 5500);
    }

    updateCoverflow(0);
    startCoverflowAutoplay();
  }

  // 5. ANIMATED IMPACT NUMBER COUNTERS
  const counterElements = document.querySelectorAll("[data-counter]");
  if (counterElements.length > 0) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function animateCounter(el) {
      const target = parseInt(el.getAttribute("data-target"), 10) || 0;
      if (prefersReducedMotion) {
        el.textContent = target.toLocaleString();
        return;
      }

      const duration = 1600;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(easeOut * target);

        if (frame >= totalFrames) {
          el.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          el.textContent = current.toLocaleString();
        }
      }, frameRate);
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    counterElements.forEach((el) => observer.observe(el));
  }

  // 6. INQUIRY FORM INTERACTIVE VALIDATION & SUBMISSION
  const inquiryForm = document.getElementById("inquiry-form");
  const formSuccess = document.getElementById("form-success");
  const formRefId = document.getElementById("form-ref-id");
  const formResetBtn = document.getElementById("form-reset-btn");
  const formError = document.getElementById("form-error");
  const formSubmitBtn = document.getElementById("form-submit-btn");

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();

      if (formError) formError.classList.add("hidden");

      const fullName = (inquiryForm.elements["fullName"]?.value || "").trim();
      const email = (inquiryForm.elements["email"]?.value || "").trim();
      const phone = (inquiryForm.elements["phone"]?.value || "").trim();
      const organization = (inquiryForm.elements["organization"]?.value || "").trim();
      const inquiryType = (inquiryForm.elements["inquiryType"]?.value || "").trim();
      const message = (inquiryForm.elements["message"]?.value || "").trim();

      if (!fullName || !email || !message) {
        if (formError) {
          formError.textContent = "Please complete all required fields (Name, Email, Message).";
          formError.classList.remove("hidden");
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formError) {
          formError.textContent = "Please provide a valid professional email address.";
          formError.classList.remove("hidden");
        }
        return;
      }

      const refCode = "REQ-" + Math.floor(100000 + Math.random() * 900000);

      // Store in localStorage for safe keeping
      try {
        const stored = JSON.parse(localStorage.getItem("ptm_inquiries") || "[]");
        stored.push({
          id: refCode,
          timestamp: new Date().toISOString(),
          fullName,
          email,
          phone,
          organization,
          inquiryType,
          message,
        });
        localStorage.setItem("ptm_inquiries", JSON.stringify(stored));
      } catch {
        // localStorage quota/disabled fallback
      }

      // Format WhatsApp Message
      const whatsappNumber = "919544393636";
      const waLines = [
        "✨ *NEW INQUIRY — PTM Jaufar Sadiq* ✨",
        "",
        `📌 *Reference ID:* ${refCode}`,
        `👤 *Name:* ${fullName}`,
        `✉️ *Email:* ${email}`,
        phone ? `📞 *Phone / WhatsApp:* ${phone}` : null,
        organization ? `🏛️ *Organization:* ${organization}` : null,
        `🎯 *Focus Area:* ${inquiryType}`,
        "",
        "📝 *Requirements / Message:*",
        message,
        "",
        "🌐 _Sent from ptmjaufarsadiq.com_"
      ].filter(Boolean).join("\n");

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(waLines)}`;

      // Update Success Screen
      if (formRefId) formRefId.textContent = refCode;
      const waBtn = document.getElementById("form-whatsapp-btn");
      if (waBtn) {
        waBtn.href = whatsappUrl;
      }

      inquiryForm.classList.add("hidden");
      if (formSuccess) formSuccess.classList.remove("hidden");

      // Trigger WhatsApp directly in current user action (prevents popup blockers)
      try {
        const popup = window.open(whatsappUrl, "_blank");
        if (!popup || popup.closed || typeof popup.closed === "undefined") {
          window.location.href = whatsappUrl;
        }
      } catch {
        window.location.href = whatsappUrl;
      }
    });

    if (formResetBtn) {
      formResetBtn.addEventListener("click", function () {
        inquiryForm.reset();
        inquiryForm.classList.remove("hidden");
        if (formSuccess) formSuccess.classList.add("hidden");
        if (formError) formError.classList.add("hidden");
      });
    }
  }

  // 7. COURSES PAGE COUNTDOWN REDIRECT
  const countdownEl = document.getElementById("courses-countdown");
  if (countdownEl) {
    const targetUrl = countdownEl.getAttribute("data-target-url") || "https://learn.hujixglobal.com";
    let seconds = 2;

    const timer = setInterval(() => {
      seconds--;
      if (seconds <= 0) {
        countdownEl.textContent = "Now";
        clearInterval(timer);
        window.location.href = targetUrl;
      } else {
        countdownEl.textContent = `${seconds}s`;
      }
    }, 1000);
  }
});
