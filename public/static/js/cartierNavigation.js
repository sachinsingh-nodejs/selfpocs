$(function () {
    var body = $(document.body),
        navigation = $("#jsNavigationToggle"),
        overlay = $(".js-navigation__overlay"),
        menu = $(".js-navigation__container");
    // Window "resize" event is a fallback for "orientationchange" event
    // and works on all major mobile browsers
    $(window).on("resize", function () {
        console.log("Orientation changed");
        if ($(this).width() < 768) {
            navigation.off("click").on("click", _toggleNavigation);
            overlay.off("click").on("click", _overlayClick);
            menu.off("click").on("click", _stopEvtPropagation);
        } else {
            // Everything is off
            navigation.off("click");
            overlay.off("click");
            menu.off("click");
        }
    });
    // Default page load
    if ($(window).width() < 768) {
        navigation.on("click", _toggleNavigation);
        overlay.on("click", _overlayClick);
        menu.on("click", _stopEvtPropagation);
    }

    function _toggleNavigation () {
        overlay.removeClass("hidden-xs");
        setTimeout(function () {
            overlay.addClass("color-transform");
            menu.addClass("translated");
        }, 10);
    }

    function _overlayClick () {
        body.addClass("modal-open");
        overlay.removeClass("color-transform");
        menu.removeClass("translated");
        setTimeout(function () {
            overlay.addClass("hidden-xs");
        }, 500); // Since transition runs for 500 ms
    }

    function _stopEvtPropagation (e) {
        e.stopPropagation();
    }
});