



(function worm() {
    "use strict";
    var endPoint = window.innerWidth / 2 + "px";
    var $worm = $("#worm");
    
    $worm.animate(
        { "left": '-=' + endPoint + ''
            },
        { duration: 100000,
          step: function () {
                var wormPosition = $worm.position().left;
                    if (wormPosition <= -50) {
                        $worm.stop();
                        $worm.remove();
                        }
                    }
        });    
    }());

var navbar = {
    menuOut: "false",
    image: document.getElementById("imageNav"),
};

if (navbar.image !== null) {
    var currentImageWidth = navbar.image.clientWidth;
}


$(".navbar-toggle").click(function() {
    var $wrapper = $(".wrapper");
    var $icon = $("#icon");
    
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
 

function bubblePop(bubble, glow, bee, pikk) {
    //ES6
/*    const bubbleHTML = `<img id = "${bee}" src = "img/bee.png"> <span class="${bubble}" onclick="bubblePop('${bubble}','${glow}', '${bee}')"><span class ="${glow}"></span></span>`;
    
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
                left: "+=1800%"
            },{
                duration: 2000,
                complete: function() {
                $(`#${bee}`).remove();
        }
        
    });
        }
        
    });
    
 */
    
   
    
    
    var bubbleHTML = '<img id = "' + bee + '" src = "img/bee.png" alt="flying bee"><img id="' + pikk + '" src="media/pikk.gif" alt="pikk swarm"> <span class="' + bubble + '" onclick="bubblePop(\'' + bubble + '\',\'' + glow + '\',\'' + bee + '\',\'' + pikk + '\')"><span class ="' + glow + '"></span></span>';
    
    
    $('.' + bubble).animate({
        width: "+=5",
        height: "+=5",
    },{
        duration: 100,
        complete: function() {
            $('.' + bubble).remove();
            setTimeout(function(){
                $("#beaker").append(bubbleHTML);
            },3900);
            
        }
        
    });
    
    if (bee != "null" & pikk != "null"){
        var $beeElement = $('#' + bee);
        var $pikkElement = $('#' + pikk);
    
        var pikkWidthString = $pikkElement.css("width");
        var pikkWidthNum = pikkWidthString.slice(0,(pikkWidthString.length - 2));
    
        $('#' + bee + ',#' + pikk).stop().animate({
                left: 6000
            },{
                duration: 40000,
                step: function () {
                    var beePosition = $beeElement.position().left;
                    var pikkPosition = $pikkElement.position().left;
                        
                    if (beePosition > window.innerWidth) {
                        $beeElement.stop().remove();
                            }
                      
                   if (pikkPosition > window.innerWidth) {
                        $pikkElement.stop().remove();
                            }
                        },
                });
    }
     
};


$("#second").css("top", window.innerHeight)
