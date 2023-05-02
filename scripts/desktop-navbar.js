$(() => {
    var lastVerticalScroll = 0;
    var nav = $("#navbar-desktop");

    function navCss(topValue) {
        nav.css({
            top: topValue,
            transition: "top 300ms linear",
        });
    }

    $(document).on("scroll", function () {
        nav.toggleClass(
            "blur-background fixed-top",
            $(this).scrollTop() > nav.position().top
        );

        var verticalScroll = $(this).scrollTop();
        // Downscroll code
        if (verticalScroll > lastVerticalScroll) {
            if ($(this).scrollTop() > nav.position().top) {
                $("#pseudoElement").removeClass("d-none");
                navCss("-150px");
                setTimeout(() => {
                    navCss("0px");
                }, 300);
            }
        }
        // upscroll code
        else {
            if (
                $(this).scrollTop() < nav.position().top ||
                $(this).scrollTop() < nav.height()
            ) {
                $("#pseudoElement").addClass("d-none");
                nav.removeClass("fixed-top blur-background");
            }
        }

        // Update last vertical scroll state
        lastVerticalScroll = verticalScroll;
    });
});
