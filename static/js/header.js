//引入该js,即可引入一级顶部菜单
$(function(){
    var url = window.location.href;
    	$("#header").load("/e9/public/header.html",function(){

    	// 点击显示效果
        $(".btn_zixun a").click(function(){
            $(".box_zixunbg").show();
            return false
        });
        $(document).on('click', function(){
            $(".box_zixunbg").hide();
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




























