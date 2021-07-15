$('.nav-toggle').click(function() {
    $('.nav-items').toggleClass('open', 500);
    $(this).toggleClass('active');
});