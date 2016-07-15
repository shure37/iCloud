$(document).ready(function(){
    $("#f01").click(function(){
        $(this).toggleClass("f-active");
        $("#f02,#f03,#f04").removeClass("f-active");
        $("#s01").toggle(400);
        $(".second-level").not("#s01").hide();
    })
    
    $("#f02").click(function(){
        $(this).toggleClass("f-active");
        $("#f01,#f03,#f04").removeClass("f-active");
        $("#s02").toggle(400);
        $(".second-level").not("#s02").hide();
    })
    
    $("#f03").click(function(){
        $(this).toggleClass("f-active");
        $("#f01,#f02,#f04").removeClass("f-active");
        $("#s03").toggle(400);
        $(".second-level").not("#s03").hide();
    })
    
    $("#f04").click(function(){
        $(this).toggleClass("f-active");
        $("#f01,#f02,#f03").removeClass("f-active");
        $("#s04").toggle(400);
        $(".second-level").not("#s04").hide();
    })
    
     $("#f00").click(function(){
        $("#f01,#f02,#f03,#f04").removeClass("f-active");
        $("#s01,#s02,#s03,#s04").hide(400);
    })
})