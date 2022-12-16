(function () {
    function mobileNav() {
        const nav = document.querySelector('.nav')
        const navButton = document.querySelector('.mobile-nav__button')
        const closeButton = document.querySelector('.nav__close')
        navButton.addEventListener('click', () => {
            nav.classList.add('active')
        })
        closeButton.addEventListener('click', () => {
            nav.classList.remove('active')
        })
    }
    mobileNav()

    function initSliders() {
      const sliders = document.querySelectorAll('.slider')

      if (sliders) {
        sliders.forEach((slider) => {
          const slides = slider.querySelector('.slides')
          const next = slider.querySelector('.next')
          const prev = slider.querySelector('.prev')
          tns({
            container: slides,
            items: 1,
            gutter: 20,
            mouseDrag: true,
            prevButton: prev,
            nextButton: next,
            nav: false,
            responsive: {
                640: {
                    items: 2
                },
                840: {
                    items: 3
                },
            },
          })
        })
      }
    }
    initSliders()

})()

