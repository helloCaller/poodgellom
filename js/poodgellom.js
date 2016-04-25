



function worm(){
    screenWidth = (window.innerWidth + 300) + "px";
    $( "#worm" ).animate({ "left": '-=' + screenWidth + ''}, 100000 );
}
worm();


var navbar = {
    menuOut: "false",
    image:document.getElementById("imageNav"),
    
}

var currentImageWidth = navbar.image.clientWidth;
$(".navbar-toggle").click(function(){
     
    if(navbar.menuOut == "false"){
        navbar.menuOut = "true";
        $(".wrapper").css("position", "fixed");
        $(".wrapper").css("overflow", "hidden");
        
        
    } else {
        navbar.menuOut = "false";
        $(".wrapper").css("position", "absolute");
        $(".wrapper").css("overflow", "auto");
        
    }
});
    

$(window).scroll(
        {
            previousTop: 0
        }, 
        function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".custom-main-menu").show();
 
        } else if(navbar.menuOut == "false" && currentTop >=20){
            $(".custom-main-menu").hide();
            }
        
            this.previousTop = currentTop;

        })
    
    




