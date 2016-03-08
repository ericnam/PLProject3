$(document).ready(function (){
    $('a').each(function() {
        var URL = $(this).attr('href');
        //preload
        var img = new Image();
        img.src = URL;

        var caption = $(this).attr('title');

        $('a').click(function (evt) {
            $(document).getElementById('caption').value = $(this).attr('title');
        })
    });
})