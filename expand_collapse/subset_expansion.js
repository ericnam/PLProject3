$(document).ready(function(){
    $('a').click(function(){
        var previous = $(this).prev().hasClass('hide');
        //alert(previous);
        if (previous == true) {
            $(this).prev().toggleClass('hide');
            $(this).text('Show Less');
        } else {
            $(this).prev().toggleClass('hide');
            $(this).text('Show More');
        }
    })
})