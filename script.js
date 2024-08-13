document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const navItemMarker = document.getElementById("nav-item-marker");

  function updateNavItemMarker(item) {
    const itemRect = item.getBoundingClientRect();
    const containerRect = item.parentElement.getBoundingClientRect();

    navItemMarker.style.width = `${itemRect.width}px`;
    navItemMarker.style.left = `${itemRect.left - containerRect.left}px`;
    navItemMarker.style.top = `${itemRect.bottom - containerRect.top - 10}px`; // Positioning at the bottom of the nav item
    navItemMarker.classList.remove("hidden");
  }

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");
      if (window.innerWidth >= 768) {
        // Only apply for desktop view
        updateNavItemMarker(item);
      }
    });
  });

  // Mobile menu toggle
  document.getElementById("menu-button").addEventListener("click", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });

  // Ensure nav item marker is updated on window resize
  window.addEventListener("resize", function () {
    const activeNavItem = document.querySelector(".nav-item.active");
    if (activeNavItem && window.innerWidth >= 768) {
      updateNavItemMarker(activeNavItem);
    } else {
      navItemMarker.classList.add("hidden");
    }
  });

  // Swiper Carousel functionality
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 2, // Show 2 slides at a time
    spaceBetween: 40, // Space between slides
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    loop: false, // Don't loop through the slides
    initialSlide: 0,
    on: {
      slideChange: function () {
        const prevButton = document.querySelector(".custom-button-prev");
        const nextButton = document.querySelector(".custom-button-next");

        if (this.isBeginning) {
          prevButton.classList.add("button-faded");
        } else {
          prevButton.classList.remove("button-faded");
        }

        if (this.isEnd) {
          nextButton.classList.add("button-faded");
        } else {
          nextButton.classList.remove("button-faded");
        }
      },
    },
  });

  // Initial state check when the page loads
  if (swiper.isBeginning) {
    document.querySelector(".custom-button-prev").classList.add("button-faded");
  }
  if (swiper.isEnd) {
    document.querySelector(".custom-button-next").classList.add("button-faded");
  }

  // FAQ toggle functionality
  window.toggleFAQ = function (id) {
    const answer = document.getElementById(`answer-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
      // Hide the answer with slide up animation
      answer.style.maxHeight = "0px";
      icon.textContent = "+";
    } else {
      // Show the answer with slide down animation
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "-";
    }
  };

  //Stars Animation
  const stars = document.querySelectorAll(".star-animation");
  let currentIndex = 0;

  function showStar(index) {
    if (index < stars.length) {
      stars[index].classList.add("star-visible"); // Remove the dot here
      setTimeout(() => {
        showStar(index + 1);
      }, 500); // Adjust timing as necessary
    } else {
      setTimeout(() => {
        hideStars();
      }, 1000); // Adjust timing as necessary
    }
  }

  function hideStars() {
    stars.forEach((star) => star.classList.remove("star-visible")); // Remove the dot here
    setTimeout(() => {
      showStar(0); // Restart the animation
    }, 1000); // Adjust timing as necessary
  }

  showStar(currentIndex);
});
