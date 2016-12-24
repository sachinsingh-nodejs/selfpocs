$(function () {
    var overlay = $(".js-navigation__overlay"),
        menu = $(".js-navigation__container");
    if ($(window).width() < 768) {
        $("#jsNavigationToggle").on("click", function (event) {
            overlay.removeClass("hidden-xs");
            setTimeout(function () {
                overlay.addClass("color-transform");
                menu.addClass("translated");
            }, 1);
        });
        overlay.on("click", function () {
            overlay.removeClass("color-transform");
            menu.removeClass("translated");
            setTimeout(function () {
                overlay.addClass("hidden-xs");
            }, 500); // Since transition runs for 500 ms
        });
        menu.on("click", function (event) {
            event.stopPropagation();
        });
    }
});