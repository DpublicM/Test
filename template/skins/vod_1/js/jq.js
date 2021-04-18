$(function(){
$("img.lazy").lazyload();
$(".jsfrom li:first").addClass("on");
$(".jsplist:first").addClass("flod");
$(".sytab").click(function(){
  $(this).parent().next().toggle();
  $(this).children().children().toggleClass("v");
});
$(".playul li").hover(function(){
  $(this).addClass("v");
  $(this).siblings().removeClass("v");
});
$(".search .im").hover(function(){
  $(this).children().toggleClass("v");
});
$(".nav .jqnav").click(function(){
  $(this).parent().parent().next().toggleClass("mv");
  $(this).parent().parent().next().next().removeClass("mv");
});
$(".nav .jqms").click(function(){
  $(this).parent().parent().next().next().toggleClass("mv");
  $(this).parent().parent().next().removeClass("mv");
});
$(".searchgb").click(function(){
  $(this).parent().removeClass("mv");
});
});
function setTab(name,name2,cursel,n){  
 if(n==0){
    n = $('.playlist').length;
 }
 for(i=1;i<=n;i++){
	 if(i == cursel){
		$('#'+name+i).addClass("on");
		$('#'+name2+i).show();
	 }else{
		$('#'+name+i).removeClass("on");
		$('#'+name2+i).hide();
	 }
 }
};
/**
* JavaScript脚本实现回到页面顶部示例
* @param acceleration 速度
* @param stime 时间间隔 (毫秒)
**/

function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0; 
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;
 
   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));
 
   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));
 
   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}
//素材家园 - www.sucaijiayuan.com