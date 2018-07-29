//Animate Smooth Scroll
$('#view-posts').on('click', function(){
    const posts = $('#posts').position().top;

    $('html, body').animate({
        scrollTop: posts
    }, 900)
});

$('#view-about').on('click', function(){
    if ($('#about').hasClass('about-visible')) {
        $('#about').fadeOut();
        $('#about').removeClass('about-visible');
    }
    else {
        $('#about').fadeIn();
        $('#about').addClass('about-visible');
    }
});

$('#close').on('click', function(){
    $('#about').fadeOut();
    $('#about').removeClass('about-visible');
});

$('#back').on('click', function(){
    window.history.back();
})
