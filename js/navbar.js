const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

$( document ).ready(function() {

    $(window).scroll(function(){
        ($(window).scrollTop() >= 30) ? (
            $('.fixed').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });
    
    // nav drop
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });

});