var beforecss;
$(document.body).click(function(e){
    var current = $(e.target),weaverdialog = $(".weaver_dialog");
    if(!current.hasClass("weaver_dialog") && weaverdialog.has(current).length === 0 && current.attr("id") !='onlinechatimg' && current.attr("id") !='onlinetitle' && current.attr("id") !='chatClose' && current.attr("id") !='topcontrol'){
        closeDialog();
    }
});
function openDialog(){
    var container = $("#menu_container"),weaverdialog = $(".weaver_dialog"),
            laywidth = container.width(),
            offset = container.offset();
    weaverdialog.css("width",laywidth+'px').css("left",(offset.left-10)+'px');
    $(".weaver_dialogbody").css("width",(laywidth+20)+'px');
    weaverdialog.show();
    //加载动画
    setTimeout(function(){$(".animateoverlay").css("width",(laywidth+20)+'px');},200);
}
window.onresize=function(){
//          if($(".animateoverlay").width()>0){
//              openDialog();
//          }
}
function closeDialog(){
    $(".applyfloat").hide();
    var weaverdialog = $(".weaver_dialog");
    $(".animateoverlay").css(beforecss);
    setTimeout(function(){
        weaverdialog.hide();},300);
}
$(".tilecomponent").click(function(e){
    //openDialog();
    var container = $("#menu_container"),weaverdialog = $(".weaver_dialog"),
            laywidth = 1000,
            offset = container.offset(),
            target = $(this),position = target.position(),
            moduleid = target.attr("itemid");
    weaverdialog.css("width",laywidth+'px').css("left",(offset.left-124)+'px');
    $(".weaver_dialogbody").css("width",(laywidth+20)+'px');
    weaverdialog.show();
    $(".animateoverlay").hide();
    var topnew = position.top+($("#menu_container").offset().top-$(".weaver_dialog").offset().top);
    beforecss = {left:(position.left+124)+"px",top:topnew+"px","right":(laywidth-position.left-target.width()-120)+"px","bottom":(weaverdialog.height()-target.height()-topnew)+"px"};
    $(".animateoverlay").show();
    $(".animateoverlay").css(beforecss);
    //加载动画
    setTimeout(function(){
        var after = {left:0,top:0,width:"auto","height":"auto","right":"-20px","bottom":0};
        $("span[itemid='"+moduleid+"']").trigger("click");
        $(".animateoverlay").css(after); $(".applyfloat").fadeIn();},100);
    e.stopPropagation();
});


function showMenu(){
    $(".e8_menuswrapper").css("height","auto").css("overflow","auto").css("background","#2a2e34");
    $(".e8_menus").css("color","#63aeeb");
    $(".e8_menusmore").css("background-color","#2a2e34");
}
function hideMenu(){
    $(".e8_menuswrapper").css("height","40px").css("overflow","hidden").css("background","#006ec6");
    $(".e8_menus").css("color","#A4CCEB");
    $(".e8_menusmore").css("background-color","#0783e5");
}
//   2级栏目图片
//   首页
function showhome1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【执行】的【目标】我们能够清晰的了解公司目标，我的目标、并对目标的执行反馈交流，让领导能够及时了解我对目标的执行情况。可以通过层级视图、分类视图、列表视图多维度呈现你的目标"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--业务数据导出-->
function showywsjdc1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：个人门户是一个网上办公室，是一个个人资讯、知识、工作获取平台，个人工作门户最大的价值就是帮我把所有的事情都集中起来，把所有需要我处理的，需要我知道，需要我查阅的，需要我参与等等都展现在个人门户中。这样的集中实际上就成为了我的每天的工作指引"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//  <!--权限管理-->
function showqxgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/03_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：我们点击一下【流程】的【新建流程】，我们就可以看到所有你可能会涉及的办事流程；这些流程也可以通过已经有的业务系统触发来生产，打通多套信息化系统之间的障碍"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showqxgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/03_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：我今天我要外出到客户现场做方案讲解，我就在来之前，我首先要填一个【外出申请流程】，找到打开后，系统直接展现给外出申请表单，通过这个表单可以看出要填哪些信息，哪些信息必须要填的，填好了之后要通过流程图你就可以知道要怎么办的。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showqxgl3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/03_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：我今天我要外出到客户现场做方案讲解，我就在来之前，我首先要填一个【外出申请流程】，找到打开后，系统直接展现给外出申请表单，通过这个表单可以看出要填哪些信息，哪些信息必须要填的，填好了之后要通过流程图你就可以知道要怎么办的。"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}


//   <!--客户-->
    function showkh1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【新建文档】，我们可以在相关知识目录下新建HTML、WORD、EXCEL、WPS等各种形式的文档，保存提交后文档即上传到系统中"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--客户查重（管理员）-->
    function showkhccgly1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/05.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【人事】的【我的卡片】，通过人力资源卡片可以直接了解到我工作过程以及现在正在进行的工作，如未处理的工作流程、未读的文档、需关注的计划任务、参与过的会议与日程、项目任务、我的资产信息、参加过的培训等信息"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//  <!--客户查重-->
    function showkhcc1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/06.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：【我的下属】中列出的是当前操作者的直接下级，也就是他们人事卡片中的【上级】字段中的上级是当前操作者，下级的下级是不会在这里直接列出的，这样单独列出的目的是为了方便领导更好的查找自己的下级，并通过菜单了解下级的工作日程、待办流程等信息"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--联系人-->
    function showlxr1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/07.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【流程】的【新建流程】，找到【办公用品领用申请流程】，选择领用的办公用品名称，填写并提交"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}

//   <!--call-plan-->
    function showcp1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【新建客户】，在创建过程中，系统会自动过滤是否有重名的客户，如果有的话，会优先将重名的客户提供给你参考，这样可以更好得整合客户信息"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showcp2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：建立一个客户卡片信息，让客户经理具体维护客户信息、联系人信息、联系记录、合同、销售机会等内容"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    function showcp3(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_03.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【客户联系】，新建客户联系信息，记录联系内容等，还可以设置周期，对客户经理进行提醒，说明需要和客户进行联系了"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}function showcp4(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_04.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【客户联系】，新建客户联系信息，记录联系内容等，还可以设置周期，对客户经理进行提醒，说明需要和客户进行联系了"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showcp5(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_05.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【客户联系】，新建客户联系信息，记录联系内容等，还可以设置周期，对客户经理进行提醒，说明需要和客户进行联系了"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showcp6(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/08_06.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【客户联系】，新建客户联系信息，记录联系内容等，还可以设置周期，对客户经理进行提醒，说明需要和客户进行联系了"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--营销活动-->
    function showyxhd1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/09.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【项目】的【新建项目】，选择一个对应的项目模板进行创建"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
    
//   <!--商机线索-->
    function showsjxs1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/10.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：如果我们想实时关注协作区的动态，点击【协作】的【协作交流】找到要设置提醒的协作，右键设置为日程，如果有新的反馈，就会更新到日程提醒"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}

// <!--我的待办-->
    function showwddb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/11.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【微博】的【我的关注】可以通过我的关注、组织架构、分享给我三个维度查看下属的工作微博，默认上级都可以看到下属的微博"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--对象子对象管理-->
    function showdxzdxgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/12.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：【我的日程】帮助我设定每日相关的工作计划，工作计划可能来自于：自己的任务安排、项目的任务、其他同事分派的事项…所有这些都被统一安排到一个图形化的日程表中"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
//   <!--审批流设置-->
    function showsplsz1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/13.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：点击【会议】的【会议日历】，在日历面板选择要召开会议的时间，点击新建，填写会议的基本信息，如会议类型、召集人、会议名称、地点、内容，会议日程等信息"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

//   <!--批量邮寄-->
    function showplyj1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/14.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：我们可以通过组织架构或输入关键字的方式快速找到同事及其联系方式"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}

// <!--员工承接-->
    function showygcj1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/15.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：为企业提供了一个类似AppStore的商店，用户可在线下载试用各类应用，如主题风格"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}
// <!--赠品管理-->
    function showzpgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/16.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：知识树提供了一个让员工全面了解系统功能的途径，选择具体功能模块后，查看其使用说明，了解该功能的研发进展情况，以及和研发人员进行互动交流"+
            "</div>" ;
    $(".e8_silideritem").html(html);
    
}
// <!--系统公告-->
    function showxtgg1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/17.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：系统的说明书，图文并茂展示功能使用方法"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--文件下载-->
    function showwjxz1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/18.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--日志管理-->
function showrzgl1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/19_01.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function showrzgl2(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/19_02.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--预约任务-->
function showyyrw1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/20.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--申请历史-->
function showsqls1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/21.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--对象共享-->
function showdxgx1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/22.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--未接来电-->
function showwjld1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/23.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--语音留言-->
function showyyly1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/24.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--客户标签-->
function showkhbq1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/25.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}

// <!--系统报表-->
function showxtbb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/26.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--客户动态-->
function showkhdt1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/27.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--IB工单-->
function showibgd1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/28.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
// <!--码表-->
function showmb1(){
    var html = "<div class='weaver_img' >"+
            "<img src='./images/HW/29.png'/>" +
            "</div>" +
            "<div class='weaver_title' >"+
            "说明：统一需求库管理需求"+
            "</div>" ;
    $(".e8_silideritem").html(html);
}
function getYeallFulls(){
    initialDate = new Date();
    $(".copyright-year").text(initialDate.getFullYear());
}
$(function() {
    getYeallFulls();
    $(".e8_menusmore").click(function(){
        showMenu();
    });
    $(".e8_menuswrapper").hover(function(){},function(){
        hideMenu();
    });
    $(document.body).click(function(e){
        var current = $(e.target),e8_menuswrapper = $(".e8_menuswrapper");
        if(!current.hasClass("e8_menuswrapper") && e8_menuswrapper.has(current).length === 0){
            hideMenu();
        }
    });
    $(".e8_submenus").delegate(".e8_submenu","click",function(e){
        var current = $(this);
        var itemid = current.attr("itemid");
        $(".e8_submenu").removeClass("subactive");
        current.addClass('subactive');
        if(itemid === 'home_1'){
            showhome1();
        }else if(itemid === 'ywsjdc_1'){
            showywsjdc1();
        }else if(itemid === 'qxgl_1'){
            showqxgl1();
        }else if(itemid === 'qxgl_2'){
            showqxgl2();
        }else if(itemid === 'qxgl_3'){
            showqxgl3();
        }else if(itemid === 'kh_1'){
            showkh1();
        }else if(itemid === 'khccgly_1'){
            showkhccgly1();
        }else if(itemid === 'khcc_1'){
            showkhcc1();
        }else if(itemid === 'lxr_1'){
            showlxr1();
        }else if(itemid === 'cp_1'){
            showcp1();
        }else if(itemid === 'cp_2'){
            showcp2();
        }else if(itemid === 'cp_3'){
            showcp3();
        }else if(itemid === 'cp_4'){
            showcp4();
        }else if(itemid === 'cp_5'){
            showcp5();
        }else if(itemid === 'cp_6'){
            showcp6();
        }else if(itemid === 'yxhd_1'){
            showyxhd1();
        }else if(itemid === 'sjxs_1'){
            showsjxs1();
        }else if(itemid === 'wddb_1'){
            showwddb1();
        }else if(itemid === 'dxzdxgl_1'){
            showdxzdxgl1();
        }else if(itemid === 'splsz_1'){
            showsplsz1();
        }else if(itemid === 'plyj_1'){
            showplyj1();
        }else if(itemid === 'ygcj_1'){
            showygcj1();
        }else if(itemid === 'zpgl_1'){
            showzpgl1();
        }else if(itemid === 'xtgg_1'){
            showxtgg1();
        }else if(itemid === 'wjxz_1'){
            showwjxz1();
        }else if(itemid === 'rzgl_1'){
            showrzgl1();
        }else if(itemid === 'rzgl_2'){
            showrzgl2();
        }else if(itemid === 'yyrw_1'){
            showyyrw1();
        }else if(itemid === 'sqls_1'){
            showsqls1();
        }else if(itemid === 'dxgx_1'){
            showdxgx1();
        }else if(itemid === 'wjld_1'){
            showwjld1();
        }else if(itemid === 'yyly_1'){
            showyyly1();
        }else if(itemid === 'khbq_1'){
            showkhbq1();
        }else if(itemid === 'xtbb_1'){
            showxtbb1();
        }else if(itemid === 'khdt_1'){
            showkhdt1();
        }else if(itemid === 'ibgd_1'){
            showibgd1();
        }else if(itemid === 'mb_1'){
            showmb1();
        }   
        e.stopPropagation();
    });
    $(".e8_close").click(function(){
        closeDialog();
    });
    $(".e8_menu").click(function(){
        var current = $(this);
        var itemid = current.attr("itemid"),submenus= [],submenu;
        if(itemid === 'sy'){
            submenu= "<div class='e8_submenu' itemid='home_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>首页</span> "+
            "</div>";
            submenus.push(submenu);
           
            $(".e8_modulename").html("首页模块");
        }
        else if(itemid === 'ywsjdc'){
            submenu= "<div class='e8_submenu' itemid='ywsjdc_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>业务数据导出</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("业务数据导出模块");	  
            
        } else if(itemid === 'qxgl'){
            submenu= "<div class='e8_submenu' itemid='qxgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>组织架构</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='qxgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>角色管理</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='qxgl_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统菜单调整</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("权限管理模块");	  
        }else if(itemid === 'kh'){
            submenu= "<div class='e8_submenu' itemid='kh_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户</span> "+
            "</div>";
            submenus.push(submenu);
           
            $(".e8_modulename").html("客户模块");	  
        }else if(itemid === 'khccgly'){
            submenu= "<div class='e8_submenu' itemid='khccgly_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户查重(管理员)</span> "+
            "</div>";
            submenus.push(submenu);

            $(".e8_modulename").html("客户查重(管理员)模块");	  
        }else if(itemid === 'khcc'){

            submenu= "<div class='e8_submenu' itemid='khcc_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户查重</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("客户查重模块");

        }else if(itemid === 'lxr'){
            submenu= "<div class='e8_submenu' itemid='lxr_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>联系人</span> "+
            "</div>";
            submenus.push(submenu);

            
            $(".e8_modulename").html("联系人模块");	  
        }else if(itemid === 'cp'){
            submenu= "<div class='e8_submenu' itemid='cp_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-plan</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='cp_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-plan设置</span> "+
            "</div>";
            submenus.push(submenu);

            submenu= "<div class='e8_submenu' itemid='cp_3'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-plan明细</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='cp_4'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-list</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='cp_5'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-log</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='cp_6'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>call-log-NRT</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("call-plan模块");	  
        }else if(itemid === 'yxhd'){
            submenu= "<div class='e8_submenu' itemid='yxhd_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>营销活动</span> "+
            "</div>";
            submenus.push(submenu);
            
            $(".e8_modulename").html("营销活动模块");	  
        }  else if(itemid === 'sjxs'){
            submenu= "<div class='e8_submenu' itemid='sjxs_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>商机线索</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("商机线索模块");	  
        }  else if(itemid === 'wddb'){
            submenu= "<div class='e8_submenu' itemid='wddb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>我的待办</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("我的待办模块");	  
        }  else if(itemid === 'hygl'){
            submenu= "<div class='e8_submenu' itemid='hygl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>管理员设置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("管理员设置模块");	  
        }  else if(itemid === 'dxzdxgl'){
            submenu= "<div class='e8_submenu' itemid='dxzdxgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>对象子对象管理</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("对象子对象管理模块");	  
        }else if(itemid === 'splsz'){
            submenu= "<div class='e8_submenu' itemid='splsz_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>审批流设置</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("审批流设置模块");	  
        }else if(itemid === 'plyj'){
            submenu= "<div class='e8_submenu' itemid='plyj_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>批量邮寄</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("批量邮寄模块");	  
        }else if(itemid === 'ygcj'){
            submenu= "<div class='e8_submenu' itemid='ygcj_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>员工承接</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("员工承接模块");	  
        }else if(itemid === 'zpgl'){
            submenu= "<div class='e8_submenu' itemid='zpgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>赠品管理</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("赠品管理模块");	  
        }else if(itemid === 'xtgg'){
            submenu= "<div class='e8_submenu' itemid='xtgg_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统公告</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统公告模块");	  
        }else if(itemid === 'wjxz'){
            submenu= "<div class='e8_submenu' itemid='wjxz_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>文件下载</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("文件下载模块");	  
        }else if(itemid === 'rzgl'){
            submenu= "<div class='e8_submenu' itemid='rzgl_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>登录日志</span> "+
            "</div>";
            submenus.push(submenu);
            submenu= "<div class='e8_submenu' itemid='rzgl_2'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>操作日志</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("日志管理模块");	  
        }else if(itemid === 'yyrw'){
            submenu= "<div class='e8_submenu' itemid='yyrw_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>预约任务</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("预约任务模块");	  
        }else if(itemid === 'sqls'){
            submenu= "<div class='e8_submenu' itemid='sqls_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>申请历史</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("申请历史模块");	  
        }else if(itemid === 'dxgx'){
            submenu= "<div class='e8_submenu' itemid='dxgx_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>对象共享</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("对象共享模块");	  
        }else if(itemid === 'wjld'){
            submenu= "<div class='e8_submenu' itemid='wjld_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>未接来电</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("未接来电模块");	  
        }else if(itemid === 'yyly'){
            submenu= "<div class='e8_submenu' itemid='yyly_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>语音留言</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("语音留言模块");	  
        }else if(itemid === 'khbq'){
            submenu= "<div class='e8_submenu' itemid='khbq_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户标签</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("客户标签模块");	  
        }else if(itemid === 'xtbb'){
            submenu= "<div class='e8_submenu' itemid='xtbb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>系统报表</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("系统报表模块");	  
        }else if(itemid === 'khdt'){
            submenu= "<div class='e8_submenu' itemid='khdt_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>客户动态</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("客户动态模块");	  
        }else if(itemid === 'ibgd'){
            submenu= "<div class='e8_submenu' itemid='ibgd_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>IB工单</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("IB工单模块");	  
        }else if(itemid === 'mb'){
            submenu= "<div class='e8_submenu' itemid='mb_1'> "+
            " <span class='middlehelper'></span> "+
            " <img src='../images/nav.png'> "+
            " <span>码表</span> "+
            "</div>";
            submenus.push(submenu);
            $(".e8_modulename").html("码表模块");	  
        }
        $(".e8_menu").removeClass("e8_menulight");
        current.addClass("e8_menulight");
        $(".e8_submenus").html(submenus.join(""));
        $(".e8_submenu").eq(0).trigger("click");
    });
    $(".e8_menu").eq(0).trigger("click");
});