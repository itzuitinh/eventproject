(function($, app) {

    var contestCls = function() {

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

        };

        this.resize = function() {

        };

        var initSlide = function() {
            var slide = new Swiper('.slide-detail', {
                spaceBetween: 10,
                slidesPerView: 3,
                loop: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
            });
        };
    };


    $(document).ready(function() {
        var contestObj = new contestCls();
        contestObj.run();
        // On resize
        $(window).resize(function() {
            contestObj.resize();
        });
    });
}(jQuery, $.app));
