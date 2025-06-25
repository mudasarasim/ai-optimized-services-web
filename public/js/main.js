/*-----------------------------------------------------------------------------------

    Theme Name: Cleaning - Cleaning Services HTML5 Template
    Description: Cleaning Services HTML5 Template
    Author: Chitrakoot Web
    Version: 1.0
        
    ---------------------------------- */

! function(n) {
    "use strict";
    var i = n(window);

    function a() {
        var e, a, o, s, t;
        e = n(".full-screen"), a = i.height(), e.css("min-height", a), o = n("header").height(), s = n(".screen-height"), t = i.height() - o, s.css("height", t)
    }
    n("#preloader").fadeOut("normall", function() {
        n(this).remove()
    }), n.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -70
    }), i.on("scroll", function() {
        var e = i.scrollTop(),
            a = n(".navbar-brand img"),
            o = n(".navbar-brand.logodefault img");
        e <= 50 ? (n("header").removeClass("scrollHeader").addClass("fixedHeader"), a.attr("src", "img/logos/logo-inner.png")) : (n("header").removeClass("fixedHeader").addClass("scrollHeader"), a.attr("src", "img/logos/logo.png")), o.attr("src", "img/logos/logo.png")
    }), i.on("scroll", function() {
        500 < n(this).scrollTop() ? n(".scroll-to-top").fadeIn(400) : n(".scroll-to-top").fadeOut(400)
    }), n(".scroll-to-top").on("click", function(e) {
        e.preventDefault(), n("html, body").animate({
            scrollTop: 0
        }, 600)
    }), i.on("scroll", function() {
        var e = i.scrollTop(),
            a = n(".onepage-nav.navbar");
        100 < e ? a.addClass("nav-scroll") : a.removeClass("nav-scroll")
    }), i.width() <= 991 && n(".onepage-nav .navbar-nav .nav-link").on("click", function() {
        n(".onepage-nav .navbar-nav").removeClass("open").hide(), n(".onepage-nav .navbar-toggler").removeClass("menu-opened")
    }), n("#sidebar_toggle").length && (n("body").addClass("sidebar-menu"), n("#sidebar_toggle").on("click", function() {
        n(".sidebar-menu").toggleClass("active"), n(".side-menu").addClass("side-menu-active"), n("#close_sidebar").fadeIn(700)
    }), n("#close_sidebar").on("click", function() {
        n(".side-menu").removeClass("side-menu-active"), n(this).fadeOut(200), n(".sidebar-menu").removeClass("active")
    }), n("#btn_sidebar_colse").on("click", function() {
        n(".side-menu").removeClass("side-menu-active"), n("#close_sidebar").fadeOut(200), n(".sidebar-menu").removeClass("active")
    })), n(".parallax,.bg-img").each(function(e) {
        n(this).attr("data-background") && n(this).css("background-image", "url(" + n(this).data("background") + ")")
    }), n(".story-video").magnificPopup({
        delegate: ".video",
        type: "iframe"
    }), n(".popup-social-video").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }), i.resize(function(e) {
        setTimeout(function() {
            a()
        }, 500), e.preventDefault()
    }), a(), n(document).ready(function() {
        n(".service-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 3e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), n(".testimonial-style1").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            nav: !1,
            dots: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            margin: 35,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        }), n(".testimonial2-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !1,
            smartSpeed: 1500,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), n(".testimonial3-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 900,
            autoplayTimeout: 5e3,
            nav: !0,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            dots: !1,
            center: !1,
            margin: 30,
            items: 1
        }), n(".blog-carousel").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            autoplayTimeout: 5e3,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 40,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1,
                    margin: 0
                },
                992: {
                    items: 2
                }
            }
        }), n(".project-details").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), n(".related-products").owlCarousel({
            loop: !0,
            responsiveClass: !0,
            autoplay: !0,
            smartSpeed: 900,
            nav: !1,
            dots: !0,
            center: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        }), n(".slider-fade1 .owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !0,
            nav: !1,
            navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
            margin: 0,
            autoplay: !0,
            smartSpeed: 500,
            mouseDrag: !1,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            responsive: {
                768: {
                    nav: !1
                },
                992: {
                    nav: !0
                }
            }
        }), n(".owl-carousel").owlCarousel({
            items: 1,
            loop: !0,
            dots: !1,
            margin: 0,
            autoplay: !0,
            smartSpeed: 500
        }), n(".slider-fade1").on("changed.owl.carousel", function(e) {
            var a = e.item.index - 2;
            n("h3").removeClass("animated fadeInUp"), n("h1").removeClass("animated fadeInUp"), n("p").removeClass("animated fadeInUp"), n(".butn").removeClass("animated fadeInUp"), n(".owl-item").not(".cloned").eq(a).find("h3").addClass("animated fadeInUp"), n(".owl-item").not(".cloned").eq(a).find("h1").addClass("animated fadeInUp"), n(".owl-item").not(".cloned").eq(a).find("p").addClass("animated fadeInUp"), n(".owl-item").not(".cloned").eq(a).find(".butn").addClass("animated fadeInUp")
        }), 0 !== n(".horizontaltab").length && n(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function(e) {
                var a = n(this),
                    o = n("#nested-tabInfo");
                n("span", o).text(a.text()), o.show()
            }
        }), n(".countup").counterUp({
            delay: 25,
            time: 2e3
        }), n(".countdown").countdown({
            date: "01 Jan 2023 00:01:00",
            format: "on"
        })
    }), i.on("load", function() {
        i.stellar()
    })
}(jQuery);