//引入该js,即可引入一级顶部菜单
$(function(){
    var url = window.location.href;
    	$("#footer").load("/e9/public/footer.html",function(){
			
			var name= $('#footer').attr("name");
			var setName= "Location"
			if(name== setName ){
				$($("#footer")[0]).addClass("Location1");
			}

$(".qcode").on('click', function() {
	$(".wcode").css("display","block");
	// event.stopPropagation();
	return false
});

$(".wcode").mouseleave(function(){
	$(".wcode").css("display","none");
})
$(document).on('click', function(ev) {
	$(".wcode").css("display","none");
})

			
    });
});

$(window).load(function(){
});

function loadJsCss(filename, filetype) {
	if (filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype == "css") {
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}




























