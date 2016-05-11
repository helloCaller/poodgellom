



(function worm() {
    "use strict";
    var endPoint = window.innerWidth / 2 + "px";
    var $worm = $("#worm");
    
    $worm.animate(
        { "left": '-=' + endPoint + ''
            },
        { duration: 100000,
          step:function() {
                let wormPosition = $worm.position().left;
                    if (wormPosition <= -50) {
                        $worm.stop();
                        $worm.remove();
                        }
                    }
        });    
    }());

const navbar = {
    menuOut: "false",
    image: document.getElementById("imageNav"),
};

if (navbar.image !== null) {
    const currentImageWidth = navbar.image.clientWidth;
}


$(".navbar-toggle").click(function() {
    const $wrapper = $(".wrapper");
    const $icon = $("#icon");
    
     if (navbar.menuOut === "false") {
        navbar.menuOut = "true";
         
        $wrapper.css("position", "fixed");
        $wrapper.css("overflow", "hidden");
        $icon.removeClass("glyphicon-align-justify");
        $icon.addClass("glyphicon-remove");
        
    } else {
        navbar.menuOut = "false";
        
        $wrapper.css("position", "absolute");
        $wrapper.css("overflow", "auto");
        $icon.removeClass("glyphicon-remove");
        $icon.addClass("glyphicon-align-justify");
        
    }
    console.log(navbar.menuOut);
});

    
//---nav appear and leave
$(window).scroll(
        { previousTop: 0
        },
    
        function() {
            var currentTop = $(window).scrollTop();
            
            if (currentTop < this.previousTop) {
                $(".custom-main-menu").show();
            } else if(navbar.menuOut === "false" && currentTop >=20){
                $(".custom-main-menu").hide();
            }
            
            this.previousTop = currentTop;
        }
    );
 

function bubblePop(bubble, glow, bee) {
    const bubbleHTML = `<img id = "${bee}" src = "img/bee.png"> <span class="${bubble}" onclick="bubblePop('${bubble}','${glow}', '${bee}')"><span class ="${glow}"></span></span>`;
    
    $(`.${bubble}`).animate({
        width: "+=5",
        height: "+=5",
    },{
        duration: 100,
        complete: function() {
            $(`#${bee}`).stop();
            $(`.${bubble}`).remove();
            $("#beaker").append(bubbleHTML);
            
            $(`#${bee}`).animate({
                left: "+=35000%"
            },{
                duration: 2000,
                complete: function() {
                $(`#${bee}`).remove();
        }
        
    });
        }
        
    });
    
//      $(`#${bee}`).animate({
//        left: "+=90%"
//    },{
//        duration: 2000,
//        complete: function() {
//            $(`#${bee}`).remove();
//        }
//        
//    });
    
   
    
}



