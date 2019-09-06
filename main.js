$(document).ready(function() {
    function openNavigation() {
        TweenMax.to(".full_nav", 0.5, {
            left: "0",
            opacity: 1,
            ease: Sine.easeIn
        });
    }

    function closeNavigation() {
        TweenMax.to(".full_nav", 0.5, {
            left: "-100%",
            opacity: 0,
            ease: Sine.easeOut
        });
    }

    // function isOnScreen(elem) {
    //     // if the element doesn't exist, abort
    //     if (elem.length == 0) {
    //         return;
    //     }
    //     var $window = jQuery(window);
    //     var viewport_top = $window.scrollTop();
    //     var viewport_height = $window.height();
    //     var viewport_bottom = viewport_top + viewport_height;
    //     var $elem = jQuery(elem);
    //     var top = $elem.offset().top;
    //     var height = $elem.height();
    //     var bottom = top + height;

    //     return (
    //         (top >= viewport_top && top < viewport_bottom) ||
    //         (bottom > viewport_top && bottom <= viewport_bottom) ||
    //         (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    //     );
    // }

    // function switchNavColor() {
    //     if (isOnScreen(jQuery(".darknav"))) {
    //         $(".line").addClass("dark");
    //         $(".txt").addClass("dark");
    //     } else {
    //         $(".line").removeClass("dark");
    //         $(".txt").removeClass("dark");
    //     }
    // }

    function isOffScreen(elem) {
        if (elem.length == 0) {
            return;
        }
        var $window = jQuery(window);
        var viewport_top = $window.scrollTop();
        var viewport_height = $window.height();
        var viewport_bottom = viewport_top + viewport_height;
        var $elem = jQuery(elem);
        var top = $elem.offset().top;
        var height = $elem.height();
        var bottom = top + height;
        return top <= viewport_top + 20;
    }

    function switchNavColor() {
        var elem = $(".darknav");
        // console.log(isOffScreen(elem));
        if (elem) {
            if (isOffScreen(elem)) {
                $(".line").addClass("dark");
                $(".txt").addClass("dark");
            } else {
                $(".line").removeClass("dark");
                $(".txt").removeClass("dark");
            }
        } else {
            $(".line").addClass("dark");
            $(".txt").addClass("dark");
        }
    }

    $(".nav_trigger").on("click", openNavigation);
    $(".close_icon").on("click", closeNavigation);

    switchNavColor();

    $(window).scroll(function() {
        switchNavColor();
    });

    $(window).resize(function() {
        switchNavColor();
    });
});