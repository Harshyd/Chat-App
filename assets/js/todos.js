$("ul").on("click","li",(function(){
$(this).toggleClass("style");
}));

// OR

/*$(this).css({
	color:"gray";
	textDecoration :"line=through";
});*/

// $("h1 i").on("click",function(){
// 	//$("input[type='text']").fadeIn();
// });



$(".list").on("click","span",(function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
}));

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13)
	{
	 var inputtext = $(this).val();
	 $("ul").append("<li class='list'>" + inputtext + "</li>");
	 $(this).val("");
	}
});