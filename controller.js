app.controller('homeCtrl', function($scope, $http) {
	lazyLoad.init()
	$http.get("./data/p1.json").success(function(res) {
		//console.log(res);
		$scope.data = res;
	})

	$http.get("./data/p2.json").success(function(res) {
		//console.log(res);
		$scope.data1 = res;
	})

	$(window).scroll(function() {
		if ($(window).scrollTop() > 200) {
			$(".backtop").fadeIn(500);
		} else {
			$(".backtop").fadeOut(500);
		}
	});

	//当点击跳转链接后，回到页面顶部位置  

	$(".backtop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;

	});


	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    speed:900,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    });
   

	var endtime = new Date("2016/8/12 18:30:00")
	setInterval(timer, 1000)

	function timer() {
		var startTime = new Date()
		var start = startTime.getTime()
		var end = endtime.getTime()
		var dif = (end - start) / 1000
		var d = parseInt(dif / 3600 / 24)
		var h = parseInt(dif / 3600 % 24)
		var m = parseInt(dif / 60 % 60)
		var s = parseInt(dif % 60)
		s < 10 ? s = '0' + s : s = s;
		m < 10 ? m = '0' + m : m = m;
		h < 10 ? h = '0' + h : h = h;
		d < 10 ? d = '0' + d : d = d;
		//				console.log(d+'天'+h+'时'+m+'分'+s);
		$('.time').text(d + '天' + h + '时' + m + '分' + s)
	}
})

// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
.controller("shopping-bagCtrl", function($scope, $http) {
		//swiper
		
		var mySwiper = new Swiper('.swiper-container', {
				// loop: true,
				pagination: '.swiper-pagination',
				autoplay: 1500,
				speed: 1000
			})
			//swiper
			//
			//点击加数量
		var jian = $('#jian');
		var num = $('#num');
		var add = $('#add');
		var sum = $("#sum")
		console.log(num.text())
		var nummer = 1;
		var b = 0
		jian.bind("touchstart", function() {
			nummer--;
			if (nummer <= 1) {
				nummer = 1
			}
			num.text(nummer)
			sum.text(nummer*349)
		})
		
		
		add.bind("touchstart", function() {
				nummer++;
				num.text(nummer)
				sum.text(nummer*349)
			})
			//点击加数量
			//点击加购物车
		$('#add-shop').bind('touchstart', function() {
				b++;
				if (b >= 10) {
					b = 10;
				};
				$('#last-li').text(b)
			})
			//点击加购物车
			//倒计时
		var time = document.getElementById("time");
		//截止时间
		var endTime = new Date("2016/7/22 17:30:00");
		//定时器
		setInterval(timer, 1000);

		function timer() {
			var nowTime = new Date();
			var endTimeS = endTime.getTime();
			var nowTimeS = nowTime.getTime();
			var leftSec = parseInt((endTimeS - nowTimeS) / 1000);
			var d = parseInt(leftSec / 3600 / 24);
			//        console.log(d);
			var h = parseInt(leftSec / 3600 % 24);
			//        console.log(h);
			var m = parseInt(leftSec / 60 % 60);
			//        console.log(m);
			var s = leftSec % 60;
			//        console.log(s);

			d < 10 ? d = "0" + d : d;
			h < 10 ? h = "0" + h : h;
			m < 10 ? m = "0" + m : m;
			s < 10 ? s = "0" + s : s;
			time.innerHTML = d + "天" + h + "小时" + m + "分" + s + "秒";
		};
	})
	// 。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
	//社区
	.controller('communityCtrl', function($scope, $http) {
		//	  头部隐藏菜单

		$(".Nav").click(function() {
			$(".HideNav").toggle();
		})

		$http.get("./data/d1.json").success(function(res) {
			$scope.data1 = res;
		})
	})

.controller('detailsCtrl', function($scope) {
	//	  头部隐藏菜单
	$(function() {
		$(".Nav").click(function() {
			$(".HideNav").toggle();
			return false;
		})
	})

})
.controller('mineCtrl',function($scope,$routeParams){
	var params = $routeParams;
	console.log(params)
	if(params.id==1){
		$('#allOrderForm a').eq(0).css('color','red')
		$('#allOrderForm li').eq(0).css('border-bottom','0.05rem solid #f2144e')
		
	}else if(params.id==2){
		$('#allOrderForm a').eq(1).css('color','red')
		$('#allOrderForm li').eq(1).css('border-bottom','0.05rem solid #f2144e')
	}else if(params.id==3){
		$('#allOrderForm a').eq(2).css('color','red')
		$('#allOrderForm li').eq(2).css('border-bottom','0.05rem solid #f2144e')
	}else if(params.id==4){
		$('#allOrderForm a').eq(3).css('color','red')
		$('#allOrderForm li').eq(3).css('border-bottom','0.05rem solid #f2144e')
	} 
	
	
})//end
.controller('cosmeticCtrl', function($scope, $http) {
	$("#huazhuangUl li").each(function() {
		$(this).click(function() {
			$(this).css("color", "red").siblings().css("color", "#999")
		})
	})

	$http.get("./data/p1.json").success(function(res) {
		$scope.data = res;

		var uls = document.getElementById("huazhuangUl")
		var lis = uls.getElementsByTagName("li")
		for (var j = 0; j < res.data.length; j++) {
			$("#dl")[0].innerHTML += '<dl>\
				<dt><a href="Javascript:;"><img src="' + res.data[j].img + '"/></a></dt>\
				<dd>\
					<p><i><img src="' + res.data[j].nation + '"/></i>"' + res.data[j].address + '"</p>\
					<p><a href="Javascript:;">"' + res.data[j].introduce + '"</a></p>\
				</dd>\
			</dl>'
		}

		//点击
		for (var i = 0; i < lis.length; i++) {
			lis[i].onclick = function() {
				var that = this.innerHTML;
				$("#dl")[0].innerHTML = "";
				for (var k = 0; k < res.data.length; k++) {
					if (res.data[k].kind == that) {
						$("#dl")[0].innerHTML += '<dl>\
								<dt><a href="#"><img src="' + res.data[k].img + '"/></a></dt>\
								<dd>\
									<p><i><img src="' + res.data[k].nation + '"/></i>"' + res.data[k].address + '"</p>\
									<p><a href="#">"' + res.data[k].introduce + '"</a></p>\
									<p><span>"' + res.data[k].price + '"</span><del>"' + res.data[k].delprice + '"</del></p>\
								</dd>\
							</dl>';
					} else if (that == "全部") {
						$("#dl")[0].innerHTML += '<dl>\
								<dt><a href="#"><img src="' + res.data[k].img + '"/></a></dt>\
								<dd>\
									<p><i><img src="' + res.data[k].nation + '"/></i>"' + res.data[k].address + '"</p>\
									<p><a href="#">"' + res.data[k].introduce + '"</a></p>\
									<p><span>"' + res.data[k].price + '"</span><del>"' + res.data[k].delprice + '"</del></p>\
								</dd>\
							</dl>';
					}

				}
			}

		}
	})
})
.controller('CarCtrl', function($scope) {
		var num = 0;
		var a = $(".addNume b").text();
		var b = $('#price b').text();
		console.log(a)
		console.log(b)
		$('#totle b').text(a * b + '.00')
		$('#one').click(function() {
			a--;
			if (a <= 0) {
				a = 0
			}
			$(".addNume b").text(a)
			$('#totle b').text(a * b + '.00')
			$("#kind").text(a)
			$('footer b').text(a * b + '.00')
		})

		$('#two').click(function() {
			a++;
			$(".addNume b").text(a)
			$('#totle b').text(a * b + '.00')
			$("#kind").text(a);
			$('footer b').text(a * b + '.00')
		})

		$('#arc span').click(function() {
			if (num == 0) {
				$(this).css('background-position', '0rem 0rem');
				$('footer span').css('background-position', '0rem 0rem');
				num = 1;
				$('#totle b').text(a * b + '.00')
				$('footer b').text(a * b + '.00')
			} else if (num == 1) {
				$(this).css('background-position', '-1.28rem 0rem');
				$('footer span').css('background-position', '-1.28rem 0rem');
				num = 0;
				$('#totle b').text("0.00")
				$('footer b').text("0.00")
			}
		})

		$('footer span').click(function() {
			if (num == 0) {
				$(this).css('background-position', '0rem 0rem');
				$('#arc span').css('background-position', '0rem 0rem');
				num = 1;
				$('#totle b').text(a * b + '.00')
				$('footer b').text(a * b + '.00')
			} else if (num == 1) {
				$(this).css('background-position', '-1.28rem 0rem');
				$('#arc span').css('background-position', '-1.28rem 0rem');
				num = 0;
				$('#totle b').text("0.00")
				$('footer b').text('0.00')
			}
		})

	})
	//品质狂欢节
	.controller('CarnivalCtrl', function($scope) {
		$("#tab_nav ul li").each(function() {
			$(this).click(function() {
				$("#tab_nav ul li").each(function() {
					$(this).css("color", "#FF9357");
					$(this).css("border-bottom", "2px solid #ff5c00");
				});
				$("#tab_nav ul li").not(this).css("color", "#333");
				$("#tab_nav ul li").not(this).css("border-bottom", "none");
			})
		})

		$("#tab_nav ul li").each(function() {
			$(this).click(function() {
				var index = $(this).index();
				$(".a").css("display", "none");
				$(".a").eq(index).css("display", "block");
			})
		})

		//	  头部隐藏菜单
		$(function() {
			$(".Nav").click(function() {
				$(".HideNav").toggle();
			})
		})

	})
	
	

