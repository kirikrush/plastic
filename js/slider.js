$(document).ready(() => {
    let activeItem = $("#r0");
    $(".round").click(e => {
        activeItem.toggleClass("active");
        activeItem = $(e.target);
        activeItem.toggleClass("active");
        multiplicator = +activeItem.attr("id")[1];
        console.log($(".slider__item").height());
        shift = +$(".slider__item").css("height").split("px")[0] * multiplicator;
        $(".slider__item").css("bottom", shift + "px")
    })
    let activeSlide = $("#s0");
    $(".list span").click(e => {
        activeSlide.toggleClass("active");
        activeSlide = $(e.target);
        activeSlide.toggleClass("active");
        multiplicator = +activeSlide.attr("id")[1];
        shift = (+$(".grid__container").css("width").split("px")[0] + (+$(".grid__container").css("margin-right").split("px")[0])) * multiplicator;
        $(".grid__container").css("left", "-" + shift + "px")
    })


    $("#next").click(e => {
        if (+activeSlide.attr("id")[1] < 3) {
            activeSlide.toggleClass("active");
            activeSlide = $("#s" + ((+activeSlide.attr("id")[1]) + 1));
            activeSlide.toggleClass("active");
            multiplicator = +activeSlide.attr("id")[1];
            shift = (+$(".grid__container").css("width").split("px")[0] + (+$(".grid__container").css("margin-right").split("px")[0])) * multiplicator;
            $(".grid__container").css("left", "-" + shift + "px")
        }

    })

    $("#prev").click(e => {
        if (+activeSlide.attr("id")[1] > 0) {
            activeSlide.toggleClass("active");
            activeSlide = $("#s" + ((+activeSlide.attr("id")[1]) - 1));
            activeSlide.toggleClass("active");
            multiplicator = +activeSlide.attr("id")[1];
            shift = (+$(".grid__container").css("width").split("px")[0] + (+$(".grid__container").css("margin-right").split("px")[0])) * multiplicator;
            $(".grid__container").css("left", "-" + shift + "px")
        }
    })
})