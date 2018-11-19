$(document).ready(function () {
    $("#feature-logo").hide().fadeIn(3000,function() {

    });

    // $('#feature-logo').hide().load(function () {
    //     $(this).fadeIn(1000);
    // });
    $(".button-trans").click(function() {
        $("#description").slideDown();
    });

});
