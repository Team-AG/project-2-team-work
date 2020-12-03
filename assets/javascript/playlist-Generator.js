// THIS IS AN OWL CAROUSEL
// LINKED WITH https://cdnjs.com/
$(document).ready(function () {
    $('.carousel').owlCarousel({
        autoWidth: true,
        autoHeight: true,
        loop: true,
        nav: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            960: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    $('.carousel').on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            $('.carousel').trigger('next.owl');
        } else {
            $('.carousel').trigger('prev.owl');
        }
        e.preventDefault();
    });
});