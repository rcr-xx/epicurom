$(document).ready(function() {
    $("#orderedlist").addClass("red");
});


$(document).ready(function(){
    $("#menu div").each(function(){
        $(this).mouseover(function(){
            $(this).children("ul").slideDown("fast");
            if($.browser.msie) { 
                var hauteur = $(this).width();    
                $(this).children("ul").css({marginLeft:"-"+hauteur+"px"});   
                }
            $(this).prev().children("ul").fadeOut("fast");
            $(this).siblings().children("ul").fadeOut("fast");
        });
    });


    $("body").click(function(){
        $("#menu div ul").fadeOut("fast");
    });
});
