$(function(){
	/* 팝업창 */
	$("#header h1 img, #footer h1 img").click(function(){
		$("#pop").show();
	}); // 	$(".one li li:eq(0) a").click(function(){ 끝

	$("#pop span").click(function(){
		$("#pop").hide();
	}); // $("#pop span").click(function(){ 끝
	
   $('#gnb>li').mouseenter(function(){
      $(this).children("ul").stop().slideDown(500);
   });
   $('#gnb>li').mouseleave(function(){
      $(this).children("ul").stop().slideUp(500);
   });
	 
	/* slide */
	$('#slide').each(function(aa){
		$(this).css({left:1160*aa}) // img를 불러올 때마다 top값이 1160씩 증가
	}); // $('#slide img').each(function(){ 끝
	var aIndex=0;
	setInterval(function(){
		$("#slide").each(function(){
			aIndex++;
			var nowLeft=parseInt($(this).css("left"));
			var movePos=nowLeft-1160;
			$(this).animate({left:movePos},1000,function(){
				if(movePos<=-5800){ // if(movePos<=-600)
					$(this).css("left",0); // $(this).css("left",300);
				} // 끝 if(movePos 끝
				
				$(".icon li img").attr("src","images/ico_slider.png");
				$('.icon li').eq(aIndex).children("img").attr({"src":"images/ico_slider_on.png"});
				if(aIndex==4){
					aIndex=-1;
					};
			});// $(this).animate({left:movePos},1000,function(){ 끝
		}); // $("#slide img").each(function(){ 끝
	},3000); // setInterval(function(){ 끝
		
		/* 페이지 클릭*/
		var b=0;
		var IndexNum=0;
			$(".icon li").click(function(){
				b=$(this).index();
				$(".icon li img").attr("src","images/ico_slider.png");
				$(this).children().attr("src","images/ico_slider_on.png");
				$("#imgview #slide").stop(true).animate({left:-1160*b});
				aIndex=b;
				if ( aIndex==4) {
					aIndex=-1
				}
				
			});	 // $(".icon li").click(function(){ 끝
	
	/* side */
	 $(window).scroll(function(){
      $("#side").stop().animate({top:$(this).scrollTop()-500},500);
   });
	
	/* 의료진 소개 */
		var n=0;
		var img_count=$(".doctor li ").last().index()+1;
		$("#name").text($('.doctor li').eq(n).find("span").text());

		$('.left').click(function(){
		n++;
		if(n==img_count){
			$('.doctor').css({left:0});
			n=1;
			}
			$('.doctor').stop(true).animate({left:-300*n});

		$("#name").text($('.doctor li').eq(n).find("span").text());
			
		}); // left 끝
		$('.right').click(function(){
			n--;
			if(n==-1){
				$('.doctor').css({left:-300*(img_count-1)});
				n=2;
				}
				$('.doctor').stop(true).animate({left:-300*n});
				$("#name").text($('.doctor li').eq(n).find("span").text());
		});	// right 끝
		
	
		
	
}); // $(function(){ 끝