// JavaScript Document
;$(function(){
	
	
	/*商品选择*/
	$('.choose a').click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');	
	})
	
	
	/*图片选择*/
	$('.piclist .pic').mouseover(function(){
		var i=$(this).index();
		$(this).addClass('ac').siblings().removeClass('ac');
		$('.l_t img').attr('src','images/gold_0'+i+'_big.jpg');
		$('.fangdajin img').attr('src','images/gold_0'+i+'_Mbig.jpg');
	})
	
	
	
	/*放大镜*/
	$('.l_t').mousemove(function(ev){
		var l=ev.pageX-$(this).offset().left-$('.l_t span').width()/2;
		var t=ev.pageY-$(this).offset().top-$('.l_t span').height()/2;
		if(l<0){
			l=0;
		}
		if(t<0){
			t=0;
		}
		if(l>$('.l_t').width()-$('.l_t span').width()){
			l=$('.l_t').width()-$('.l_t span').width();
		}
		if(t>$('.l_t').height()-$('.l_t span').height()){
			t=$('.l_t').height()-$('.l_t span').height();
		}
		$('.l_t span').show().css({"left":l,"top":t})
		$('.fangdajin').show();
		$('.fangdajin img').show().css({"left":-l*2,"top":-t*2});
	})
	$('.l_t').mouseleave(function(){
		$('.l_t span,.fangdajin').hide();	
	})
	
	
	
	/*数量添加*/
	var n=1;
	$('.plus').click(function(){
		n++;
		$('.num').val(n);
		if(n>1){
			$('.del').css('color','#666');	
		}
	})	
	$('.del').click(function(){
		n--;
		if(n<1){
			n=1;
		}
		$('.num').val(n)
		if(n<2){
			$('.del').css('color','#ccc');		
		}	
	})


	/*选项卡*/
	$('.tabList li').mouseover(function(){
		var i=$(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.tabCont .tabItem').eq(i).show().siblings().hide();
	})
	
	
	
	/*地址选择*/
	$('.address').mouseover(function(){
		$('.content').show();
		$('.content').mouseover(function(){
			$(this).show();
		})
		$('.content').mouseleave(function(){
			$(this).hide();
		})		
	})
	$('.address').mouseleave(function(){
		$('.content').hide();
	})
	$('.address-total-tab li').click(function(){
		var i=$(this).index();
		$(this).addClass('ac').siblings().removeClass('ac');
		$('.tabCon').eq(i).show().siblings().hide();
	})

		
})