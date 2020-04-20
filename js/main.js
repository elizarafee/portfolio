
$(document).ready(function(){
    // selecting all the buttons
    let $btns = $('.project-area .button-group button'); //returns all the buttons

    // click event on all the buttons
    $btns.click(function(e){
        $('project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        // Getting data filtered value
        let selector = $(e.target).attr('data-filter');

        // Calling Isotope
        $('.project-area .grid').isotope({
            filter : selector
        });

        return false;
    })

    // Setting layout
    $('.project-area .button-group #btn1').trigger('click');

    // Calling Magnific popup method
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });

    // Owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop : true,
        autoplay : true,
        dots : true,
        responsive: {
            0 : {
                items : 1
            },
            544 : {
                items : 2
            }
        }
    })

});