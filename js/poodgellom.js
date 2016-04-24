



function worm(){
    screenWidth = (window.innerWidth + 300) + "px";
    $( "#worm" ).animate({ "left": '-=' + screenWidth + ''}, 100000 );
}

worm();

var navbar = {
    menuOut: "false"
}

$(".custom-main-menu").click(function(){
    if(navbar.menuOut == "false"){
        navbar.menuOut = "true";
    } else {
        navbar.menuOut = "false";
    }
    console.log(navbar.menuOut);
});


    $(window).scroll(
        {
            previousTop: 0
        }, 
        function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".custom-main-menu").show();
        } else {
            if(navbar.menuOut == "false"){
            $(".custom-main-menu").hide();
            }
        }
            this.previousTop = currentTop;
        })


