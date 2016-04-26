



function worm(){
   
    var endPoint= window.innerWidth/2 + "px";
    screenWidth = (window.innerWidth + 50) + "px";
    $( "#worm" ).animate(
        { "left": '-=' + endPoint + ''
            },
        {
        duration: 100000,
        step:function(){
                var wormPosition = $("#worm").position().left
                    if(wormPosition <= -50){
                        $("#worm").stop();
                        $("#worm").remove();
                    }
                }
        });    
}

worm();

var navbar = {
    menuOut: "false",
    image:document.getElementById("imageNav"),
    
}

if(navbar.image != null){
var currentImageWidth = navbar.image.clientWidth;
}
$(".navbar-toggle").click(function(){
     
    if(navbar.menuOut == "false"){
        navbar.menuOut = "true";
        $(".wrapper").css("position", "fixed");
        $(".wrapper").css("overflow", "hidden");
        
        $("#icon").removeClass("glyphicon-align-justify");
        $("#icon").addClass("glyphicon-remove");
    } else {
        navbar.menuOut = "false";
        $(".wrapper").css("position", "absolute");
        $(".wrapper").css("overflow", "auto");
        
         $("#icon").removeClass("glyphicon-remove");
        $("#icon").addClass("glyphicon-align-justify");
        
    }
    console.log(navbar.menuOut)
});

    
//---nav appear and leave
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
 
var jumbo = document.getElementById("jumbo");
function setPadding(){
     console.log(jumbo.clientHeight);
var heightDiff = window.innerHeight - jumbo.clientHeight;
    console.log(heightDiff);
$(".jumbotron").css("padding-bottom", heightDiff + "px");
}

if(jumbo != null){
    setPadding();
}




