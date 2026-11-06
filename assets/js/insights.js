/**
 * PTM Jaufar Sadiq — Insights & Perspectives
 * Client-Side Interactive Engine: Category Filtering, Language Switcher, Real-Time Search, & Social Sharing
 */

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("article-search");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const categoryPills = document.querySelectorAll("[data-category-filter]");
  const languagePills = document.querySelectorAll("[data-language-filter]");
  const articleCards = document.querySelectorAll("[data-article-card]");
  const resultsCounter = document.getElementById("results-counter");
  const noResultsBox = document.getElementById("no-results-box");
  const resetFiltersBtn = document.getElementById("reset-filters-btn");

  let currentCategory = "all";
  let currentLanguage = "all";
  let searchQuery = "";

  // 1. URL Parameter Sync (deep-linking e.g. /insights/?category=emotional-intelligence)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("category")) {
    currentCategory = urlParams.get("category").toLowerCase();
  }
  if (urlParams.has("lang")) {
    currentLanguage = urlParams.get("lang").toLowerCase();
  }
  if (urlParams.has("q")) {
    searchQuery = urlParams.get("q").toLowerCase();
    if (searchInput) searchInput.value = searchQuery;
  }

  function updateActivePillStyles() {
    categoryPills.forEach((pill) => {
      const cat = pill.getAttribute("data-category-filter").toLowerCase();
      if (cat === currentCategory) {
        pill.classList.add("bg-gold", "text-navy", "border-gold", "font-semibold");
        pill.classList.remove("bg-navy-light/60", "text-slate-300", "border-white/10");
        pill.setAttribute("aria-pressed", "true");
      } else {
        pill.classList.remove("bg-gold", "text-navy", "border-gold", "font-semibold");
        pill.classList.add("bg-navy-light/60", "text-slate-300", "border-white/10");
        pill.setAttribute("aria-pressed", "false");
      }
    });

    languagePills.forEach((pill) => {
      const lang = pill.getAttribute("data-language-filter").toLowerCase();
      if (lang === currentLanguage) {
        pill.classList.add("bg-gold", "text-navy", "border-gold", "font-semibold");
        pill.classList.remove("bg-navy-light/60", "text-slate-300", "border-white/10");
        pill.setAttribute("aria-pressed", "true");
      } else {
        pill.classList.remove("bg-gold", "text-navy", "border-gold", "font-semibold");
        pill.classList.add("bg-navy-light/60", "text-slate-300", "border-white/10");
        pill.setAttribute("aria-pressed", "false");
      }
    });

    if (clearSearchBtn) {
      if (searchQuery.trim().length > 0) {
        clearSearchBtn.classList.remove("hidden");
      } else {
        clearSearchBtn.classList.add("hidden");
      }
    }
  }

  function filterArticles() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    articleCards.forEach((card) => {
      const cardCategory = (card.getAttribute("data-category") || "").toLowerCase();
      const cardLanguage = (card.getAttribute("data-language") || "").toLowerCase();
      const cardTitle = (card.getAttribute("data-title") || "").toLowerCase();
      const cardExcerpt = (card.getAttribute("data-excerpt") || "").toLowerCase();
      const cardKeywords = (card.getAttribute("data-keywords") || "").toLowerCase();

      // Check category match
      const categoryMatch =
        currentCategory === "all" ||
        cardCategory === currentCategory ||
        cardCategory.includes(currentCategory);

      // Check language match
      const languageMatch =
        currentLanguage === "all" ||
        cardLanguage === currentLanguage;

      // Check search query match
      const searchMatch =
        !query ||
        cardTitle.includes(query) ||
        cardExcerpt.includes(query) ||
        cardCategory.includes(query) ||
        cardKeywords.includes(query);

      if (categoryMatch && languageMatch && searchMatch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Update results counter
    if (resultsCounter) {
      if (visibleCount === articleCards.length && !query && currentCategory === "all" && currentLanguage === "all") {
        resultsCounter.textContent = `Showing all ${visibleCount} articles`;
      } else {
        resultsCounter.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "article" : "articles"}`;
      }
    }

    // Toggle no-results container
    if (noResultsBox) {
      if (visibleCount === 0) {
        noResultsBox.classList.remove("hidden");
      } else {
        noResultsBox.classList.add("hidden");
      }
    }

    updateActivePillStyles();
  }

  // Category Pill Event Listeners
  categoryPills.forEach((pill) => {
    pill.addEventListener("click", function (e) {
      e.preventDefault();
      currentCategory = this.getAttribute("data-category-filter").toLowerCase();
      filterArticles();
    });
  });

  // Language Pill Event Listeners
  languagePills.forEach((pill) => {
    pill.addEventListener("click", function (e) {
      e.preventDefault();
      currentLanguage = this.getAttribute("data-language-filter").toLowerCase();
      filterArticles();
    });
  });

  // Search Input Event Listener
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      searchQuery = this.value;
      filterArticles();
    });
  }

  // Clear Search Button
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener("click", function () {
      searchInput.value = "";
      searchQuery = "";
      filterArticles();
      searchInput.focus();
    });
  }

  // Reset Filters Button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", function () {
      currentCategory = "all";
      currentLanguage = "all";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      filterArticles();
    });
  }

  // Initial Run on Landing Page
  if (articleCards.length > 0) {
    filterArticles();
  }

  // 2. SOCIAL SHARING ENGINES (Available on Article Pages)
  const shareButtons = document.querySelectorAll("[data-share-platform]");
  shareButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const platform = this.getAttribute("data-share-platform");
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      const text = encodeURIComponent(`Insightful article by PTM Jaufar Sadiq: ${document.title}`);

      switch (platform) {
        case "whatsapp":
          window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
          break;
        case "linkedin":
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "width=600,height=500");
          break;
        case "twitter":
          window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, "_blank", "width=600,height=400");
          break;
        case "facebook":
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=500");
          break;
        case "copy":
          navigator.clipboard.writeText(window.location.href).then(() => {
            const toast = document.getElementById("copy-toast");
            if (toast) {
              toast.classList.remove("opacity-0", "translate-y-2", "pointer-events-none");
              toast.classList.add("opacity-100", "translate-y-0");
              setTimeout(() => {
                toast.classList.add("opacity-0", "translate-y-2", "pointer-events-none");
                toast.classList.remove("opacity-100", "translate-y-0");
              }, 2500);
            } else {
              alert("Article link copied to clipboard!");
            }
          });
          break;
      }
    });
  });
});
