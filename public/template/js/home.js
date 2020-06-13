(function($, app) {

    var homeCls = function() {

        var vars = {};
        var ele = {};

        this.run = function() {
            this.init();
            this.bindEvents();
        };

        this.init = function() {
            vars.id = 0;

        };

        this.bindEvents = function() {

            initSlide();
            initAlert();

        };

        this.resize = function() {

        };



        var initSlide = function() {
            const breakpoint = window.matchMedia( '(max-width: 991px)' );

            let mySwiper;
            const breakpointChecker = function() {

                // if larger viewport and multi-row layout needed
                if ( breakpoint.matches === true ) {
                    
                  // clean up old instances and inline styles when available
                  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
                  console.log('mb');
                  // or/and do nothing
                  return;
            
                  // else if a small viewport and single column layout needed
                  } else if ( breakpoint.matches === false ) {
                    console.log('dk');
                    // fire small viewport version of swiper
                    return enableSwiper();
            
                  }
            
              };

              const enableSwiper = function() {

                mySwiper = new Swiper ('.main-screen', {
            
                  loop: false,
                  effect: 'fade',
                  slidesPerView: 'auto',
                  mousewheelControl: true,
                  centeredSlides: true,
                  keyboardControl: true,
                  grabCursor: true,
                  direction: "horizontal",
                  mousewheelControl: true,
                  slidesPerView: "auto",
                  freeMode: true,
                  followFinger: true,
                  mousewheel: {
                    releaseOnEdges: true,
                  },
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                  pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<div class="' + className + '">' + '<span>' + '</span>' + '0'+ (index + 1) + '<span>' + '</span>' + '</div>';
                    },
                  },
            
                });
            
              };

                            // keep an eye on viewport size changes
            breakpoint.addListener(breakpointChecker);

            // kickstart
            breakpointChecker();
            
            // if($( window ).width() > 992){
            //     var mainSlide = new Swiper('.main-screen',{
            //         // effect: 'fade',
            //         // navigation: {
            //         //     nextEl: '.swiper-button-next',
            //         //     prevEl: '.swiper-button-prev',
            //         //   },
            //     });
            //     console.log('fhsdjfhjs');
            // }else{
            //     console.log('mobile');
            //     return false;
            // }
        };

        var initAlert = function () {
          
        }
    };


    $(document).ready(function() {
        var homeObj = new homeCls();
        homeObj.run();
        // On resize
        $(window).resize(function() {
            homeObj.resize();
        });
    });
}(jQuery, $.app));
