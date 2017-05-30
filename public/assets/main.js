$(document).ready(function() {

    $(".fa.fa-mob").click(function() {
        $(".menu-responsive.menu-hamburger").slideToggle();
        $(".fa-mob").toggleClass("fa fa-bars").toggleClass("remove icon");
    });

    $(window).data("width", $(this).width()).resize(function() {
        if ($(".menu-responsive.menu-hamburger").is(':visible')) {
            $(".menu-responsive.menu-hamburger").hide();
            $(".fa-mob").addClass("fa fa-bars").removeClass("remove icon");
        }
    });

    
    

    


    $('.shape').shape();

    $('.ui.menu a.item')
        .on('click', function() {
            $(this)
                .addClass('active')
                .siblings()
                .removeClass('active');
        });

    $('.ui.checkbox').checkbox();
    $('.ui.radio.checkbox').checkbox();
    $('.ui.dropdown').dropdown({
        'direction': 'downward',
        'fullTextSearch': true
    });

    $('.clear-school.ui.button')
        .on('click', function() {
            $('.clear-school.ui.dropdown')
                .dropdown('clear');
        });

    


});
