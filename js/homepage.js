

$(function(){
	//$(".sidebar")css("visibility","hidden");
	//$("#menu-bar-scbb").css("visibility","visible");
	$("#title").click(function(){
		$(".navbar-nav>li>a:not(#title)").parent().removeClass("active");
		$("#scbb").parent().addClass("active");
	});
	$("#scbb").click(function(){
		$(".navbar-nav>li>a:not(#scbb)").parent().removeClass("active");
		$("#scbb").parent().addClass("active");
	});
	$("#gcbb").click(function(){
		$(".navbar-nav>li>a:not(#gcbb)").parent().removeClass("active");
		$("#gcbb").parent().addClass("active");
	});
	$("#sqgc").click(function(){
		$(".navbar-nav>li>a:not(#sqgc)").parent().removeClass("active");
		$("#sqgc").parent().addClass("active");
	});
	$("#jtbb").click(function(){
		$(".navbar-nav>li>a:not(#jtbb)").parent().removeClass("active");
		$("#jtbb").parent().addClass("active");
	});
    $("#ztt").click(function(){
		$(".navbar-nav>li>a:not(#ztt)").parent().removeClass("active");
		$("#ztt").parent().addClass("active");
	});
    $("#cjcx").click(function(){
		$(".navbar-nav>li>a:not(#cjcx)").parent().removeClass("active");
		$("#cjcx").parent().addClass("active");
	});
    $("#wdgl").click(function(){
		$(".navbar-nav>li>a:not(#wdgl)").parent().removeClass("active");
		$("#wdgl").parent().addClass("active");
	});
    $("#txgl").click(function(){
		$(".navbar-nav>li>a:not(#txgl)").parent().removeClass("active");
		$("#txgl").parent().addClass("active");
	});
});



