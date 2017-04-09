			//rem
		document.documentElement.style.fontSize=innerWidth/16+'px';
				onresize=function(){
					document.documentElement.style.fontSize=innerWidth/16+'px';
				}
		//rem
		



	console.log('aaa')
	var num=0;
	var a=$(".addNume b").text();
	var b=$('#price b').text();
	console.log(a)
	console.log(b)
	$('#totle b').text(a*b+'.00')
	$('#one').click(function(){
		a--;
		if (a<=0) {
			a=0
		}
		$(".addNume b").text(a)
		$('#totle b').text(a*b+'.00')
		$("#kind").text(a)
		$('footer b').text(a*b+'.00')
	})
	
	$('#two').click(function(){
		a++;
		$(".addNume b").text(a)
		$('#totle b').text(a*b+'.00')
		$("#kind").text(a);
		$('footer b').text(a*b+'.00')
	})
	
	$('#arc span').click(function(){
		if (num==0) {
			$(this).css('background-position','0rem 0rem');
			$('footer span').css('background-position','0rem 0rem');
			num=1;
			$('#totle b').text(a*b+'.00')
			$('footer b').text(a*b+'.00')
		}else if(num==1){
			$(this).css('background-position','-1.28rem 0rem');
			$('footer span').css('background-position','-1.28rem 0rem');
			num=0;
			$('#totle b').text("0.00")
			$('footer b').text("0.00")
		}	
	})
	
	$('footer span').click(function(){
		if (num==0) {
			$(this).css('background-position','0rem 0rem');
			$('#arc span').css('background-position','0rem 0rem');
			num=1;
			$('#totle b').text(a*b+'.00')
			$('footer b').text(a*b+'.00')
		}else if (num==1) {
			$(this).css('background-position','-1.28rem 0rem');
			$('#arc span').css('background-position','-1.28rem 0rem');
			num=0;
				$('#totle b').text("0.00")
			$('footer b').text('0.00')
		}
	})	
	
	
	
	
	
