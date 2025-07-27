/*my functions*/


$(document).ready(function(){
    
    //logo loader function
//    $("nav , footer , .container , #myslider , .products , #slogan , .info, #about_us").css("visibility", "hidden");
    function hide_logo_loader(){
        $("nav , footer , #myslider , .products , #slogan , .info, .sign_up, p, .container, #about_us, #slogan").css({
            visibility: "visible"
        });
        $("body").css("overflow-y","scroll");
        $("#logo-loader, #logo_running_ice, #logo_running_veg").css({
            display: "none"
        });
        
    }
    setTimeout(hide_logo_loader, 5000);
    
    //End of logo loader
    
    
    
    //Nav functions
        function reusable_changing_colors_nav()
        {
        $("#links").addClass("change-nav-style");
            $("#links li").addClass("change-nav-li-style");
            $("#links a").css({
                color: "white"
            })
            $("#links li:last-of-type").addClass("change-nav-li-a-lastBorder");
            $("#links").css("margin-right","1px");
        }
    
    
        $(window).on("resize",function(){
            if($(window).width()<=767)
            {
                reusable_changing_colors_nav();

                $("#login").removeClass("wide-screen-login").addClass("small-screen-login").css({
                    fontWeight: "bold"
                });
            }
            else
                {
                    $("#links").removeClass("change-nav-style").css("margin-right","30px");
                    $("#links li").removeClass("change-nav-li-style");
                    $("#links li a").css({
                        color: "#304e9b"
                    });
                     $("#login").removeClass("small-screen-login").addClass("wide-screen-login");
                }
        })
        if($(window).width()<=767){
            $("#button-toggle-nav").click(function(){

                                reusable_changing_colors_nav();
                            })
            $("#login").removeClass("wide-screen-login").addClass("small-screen-login").css({
                        fontWeight: "bold"
                    });
            
            $("#login").click(function(){
                window.location.href="Log_In.html";
            })
    }


    //End of nav functions


    //login popup
    $("#login").click(function(){
                            $(".log-container").fadeIn(250);
                        })
                        $(".exit-login-btn").click(function(){
                            $(".log-container").fadeOut(250);
                        })
    $('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.iso-nav ul li').click(function(){
	$('.iso-nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

//product page product buttons
    $("#btn_showall").css("background","blue");
$("#btn_showall").click(function(){
    $(this).css("background","blue");
    $("#btn_meat").css("background","white");
    $("#btn_seafood").css("background","white");
    $("#btn_veg").css("background","white");
})


    
})
$("#btn_veg").click(function(){
    $(this).css("background","blue");
    $("#btn_meat").css("background","white");
    $("#btn_seafood").css("background","white");
    $("#btn_showall").css("background","white");
})
$("#btn_meat").click(function(){
    $(this).css("background","blue");
    $("#btn_veg").css("background","white");
    $("#btn_seafood").css("background","white");
    $("#btn_showall").css("background","white");
})
$("#btn_seafood").click(function(){
    $(this).css("background","blue");
    $("#btn_veg").css("background","white");
    $("#btn_meat").css("background","white");
    $("#btn_showall").css("background","white");
})


//smoothing scroll to contact us
$("#contactUS").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop:$($(this).attr("href")).offset().top
        }, 500, "linear")
    })

//btn_color("#btn_seafood","blue")
//btn_color("#btn_meat","blue")
//
//
//function btn_color(idSelected, color){
//    
//    $(idSelected).click(function(){
//        $(this).css("background",color)
//    })
//    $(".mybtn").css("background","white");
//}