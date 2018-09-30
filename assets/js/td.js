console.log("connected");

$("span").on("click",function(){
	$(this).parent().toggleClass("strike");
});