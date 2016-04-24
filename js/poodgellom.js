



function worm(){
    screenWidth = (window.innerWidth + 300) + "px";
    $( "#worm" ).animate({ "left": '-=' + screenWidth + ''}, 100000 );
}

worm();


$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".custom-main-menu").show();
    } else {
        $(".custom-main-menu").hide();
    }
    this.previousTop = currentTop;
})


