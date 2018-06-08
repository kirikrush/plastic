$(document).ready(() => {
    $(".flex__item").mouseenter(e => {
        $(e.currentTarget).find(".heading").toggleClass("bounce animated");
        setTimeout(() => {
            $(e.currentTarget).find(".heading").toggleClass("bounce animated");
        }, 1000);
    })

    $(".city").mouseenter(e => {
        $(e.currentTarget).find(".geolocate").toggleClass("bounce animated");
        setTimeout(() => {
            $(e.currentTarget).find(".geolocate").toggleClass("bounce animated");
        }, 1000);
    })

    $(".animated__round").mouseenter(e => {
        $(e.currentTarget).toggleClass("rubberBand animated infinite");

    })

    $(".animated__round").mouseout(e => {
        $(e.currentTarget).toggleClass("rubberBand animated infinite");

    })


    $("#next,#prev").click(e => {

        $(e.currentTarget).toggleClass("pulse animated");
        setTimeout(() => {
            $(e.currentTarget).toggleClass("pulse animated");
        }, 300);

    })

})