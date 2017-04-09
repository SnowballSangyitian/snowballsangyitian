	//rem
		document.documentElement.style.fontSize=innerWidth/16+'px';
				onresize=function(){
					document.documentElement.style.fontSize=innerWidth/16+'px';
				}
		//rem
		
		
//		头部菜单隐藏显示
		$(function  () {
			$('.Nav').click(function  () {
				$('.HideNav').toggle();
			})
		})
		
		
		
		
		
		
		//swiper
		 var mySwiper = new Swiper ('.swiper-container', {
		    // loop: true,
		    pagination: '.swiper-pagination',
		    autoplay: 1500,
		    speed:1000
 		 })        
		//swiper
		//
		//点击加数量
		var jian=$('#jian');
		var num=$('#num');
		var add=$('#add');
		console.log(num.text())
		var nummer=1;
		var b=0
		jian.bind("touchstart",function(){
			nummer--;
			if (nummer<=1) {
				nummer=1
			}
			num.text(nummer)
		})
		add.bind("touchstart",function(){
			nummer++;
			num.text(nummer)
		})
		//点击加数量
		//点击加购物车
			$('#add-shop').bind('touchstart',function(){
				b++;
				if (b>=10) {
					b=10;
				};
				$('#last-li').text(b)
			})
		//点击加购物车
		//倒计时
		var time=document.getElementById('time');
		var endTime=new Date("2016/7/7 17:30:00");
		setInterval(timer,1000);
		function timer(){
			var nowTime=new Date();
			var endTimes=endTime.getTime();
			var nowTimes=nowTime.getTime();
//			console.log(nowTimes)
			var leftSec=parseInt((endTimes-nowTimes)/1000);
			var d = parseInt(leftSec / 3600 / 24)
			var h = parseInt(leftSec / 3600 % 24)
			var m = parseInt(leftSec / 60 % 60);
			var s = leftSec % 60;
			
			  d < 10 ? d = "0" + d : d;
       		  h < 10 ? h = "0" + h : h;
       		  m < 10 ? m = "0" + m : m;
       		  s < 10 ? s = "0" + s : s;
       		  
       		  time.innerHTML= d +"天"+ h +"小时" + m + "分"+ s +"秒！";
		}






		//倒计时
















