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

$(".nav_trigger").on("click", openNavigation);
$(".close_icon").on("click", closeNavigation);