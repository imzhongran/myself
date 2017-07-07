// JavaScript Document
$(function(){
	
	/*轮播图*/
	$('.slide ul').cycle({ 
		fx:'fade',
		speed:1000,
		pause:true,
		timeout:2000,
		prev:".slide .prevBtn",
		next:".slide .nextBtn",
		pager:".slide .sliderBtn",
		showSlideNum:false,
	});
	
	
	
	/*子导航栏*/
	$('#list li').mouseover(function(){
		var i=$(this).index();
		$(this).addClass('ac').siblings().removeClass('ac');
		$('.channel_list').eq(i).show().siblings().hide();
		$('.channel_list').mouseover(function(){
			$(this).show();
		})
		$('.channel_list').mouseleave(function(){
			$(this).hide();
		})
	})
	$('#list li').mouseleave(function(){
		var i=$(this).index();
		$(this).removeClass('ac');
		$('.channel_list').eq(i).hide();
	})
	
		
	/*楼层滚动*/
	$(window).scroll(function(){
		if($(window).scrollTop()>1500){
			$('.LocationFloorList').fadeIn();
		}else{
			$('.LocationFloorList').fadeOut();
		}				
		$('.louceng').each(function() {
	        var st=$(window).scrollTop()+$(window).height()/2;
			var h=$(this).offset().top;
			if(h<st){
				var index=$(this).index();				
				$('.LocationFloorList li').eq(index).addClass('ac').siblings().removeClass('ac');
			}
	    })
	})	
	$('.LocationFloorList li').click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		var index=$(this).index();
		var t=$('.louceng').eq(index).offset().top;
		$('body,html').animate({"scrollTop":t});	
	})	
	
	
	
	$('.nav_list li').mouseover(function(){		
		var i=$(this).index();
		$(this).addClass('ac').siblings().removeClass('ac');		
		$('.ware .you').eq(i).show().siblings().hide();
		$('.ware .zuo').show();
	})
	
	
	
	
})
