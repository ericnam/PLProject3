$(document).ready(function (){
    $('a').each(function() {
        var URL = $(this).attr('href');

        //preload
        var img = new Image();
        img.src = URL;

        var caption = $(this).attr('title');
    });

    $('a').click(function (event) {
        //prevent link from redirect
        event.preventDefault();

        var caption = (document).getElementById('caption');
        caption.innerHTML = $(this).attr('title');

        var picture = document.getElementById('image');
        picture.src = $(this).attr('href');
    })
})