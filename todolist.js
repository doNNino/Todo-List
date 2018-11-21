
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
	$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var todoNew = $(this).val();
		$("ul").append("<li>" + "<span><i class='fas fa-trash'></i></span> " + todoNew + "</li>");
		$(this).val("");
	}
});

$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle(1000);
});