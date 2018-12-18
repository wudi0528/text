function aa(q){
	var a= document.querySelectorAll(q);
	if(a.length===1){
		return a[0];
	}else{
		return a;
	}
}

window.onscroll=function(){
	var top = aa(".kuang");
	var index = 0;
	var kuan = aa(".dabox").offsetWidth;
	var kua = aa(".kua");
	var ac = aa(".ac");
	var xians = aa(".lii5 .divv");
	var n = 0;
	for(var i=0;i<xians.length;i++){
		n++;
		ac[i].setAttribute("index",i);
		ac[i].onclick=function(){
			n=this.getAttribute("index");
			for(var j = 0;j<xians.length;j++){
				xians[j].style.display = "none";
			}
			xians[n].style.display = "block";
		}
	}
	if(document.documentElement.scrollTop >= top.offsetHeight){
		top.style.position = "fixed"
	}
	if(document.documentElement.scrollTop<0){
		top.style.position = "relative"	
	}
	$(".sha").click(function(){
		if(index<kua.lebgth-1||index>0){
			index--;
			$(".ding").animate({	
			"left":-index*kuan
			})
		}
	})
	$(".xi").click(function(){
		if(index < kua.length - 1){
			index++;
			$(".ding").animate({
				"left":-index*kuan
			})	
		}
	})
	var zq = setInterval(function(){
		$(".xi").click()
	},9000);
	$(".li1").click(function(){
		$(".ddku").show();
		$(".dabox").hide();
	})
	$(".li3").click(function(){
		$(".ddku").hide();
		$(".dabox").show();
	})
	$(".aaa").click(function(){
		$(".ull").show();
		$(".aaa").hide();
		$(".bao").hide();
	})
	$(".li22").click(function(){
		$(".ddkua").show();
		$(".aaa").hide();
		$(".bao").hide();
		$(".zhuju").hide();
		$(".li22").css({background:"#c2a060"});
		$(".li22").css({color:"#fff"});
		$(".to").css({background:"#fff"});
		$(".to").css({color:"#000"});
		$(".one").css({background:"#fff"});
		$(".one").css({color:"#000"});
		$(".divv").fadeOut();
	})
	$(".one").click(function(){
		$(".ddkua").hide();
		$(".bao").show();
		$(".zhujue").hide();
		$(".zhu").hide();
		$(".aaa").show();
		$(".to").css({background:"#fff"});
		$(".to").css({color:"#000"});
		$(".one").css({background:"#c2a060"});
		$(".one").css({color:"#fff"});
		$(".li22").css({background:"#fff"});
		$(".li22").css({color:"#000"})
	})
	$(".aqr").click(function(){
		$(".dtu2").fadeIn();
		$(".dtu").fadeOut();
	})
	$(".aq").click(function(){
		$(".dtu2").fadeOut();
		$(".dtu").fadeIn();
	})
	$(".aqr1").click(function(){
		$(".dtu5").fadeIn();
		$(".dtu6").fadeOut();
	})
	$(".aq1").click(function(){
		$(".dtu5").fadeOut();
		$(".dtu6").fadeIn();
	})
	$(".to").click(function(){
		$(".to").css({background:"#c2a060"});
		$(".to").css({color:"#fff"});
		$(".one").css({background:"#fff"});
		$(".one").css({color:"#000"});
		$(".bao").hide();
		$(".zhuju").show();
		$(".ddkua").hide();
		$(".zhujue").show();
		$(".zhu").show();
		$(".aaa").hide();
		$(".li22").css({background:"#fff"});
		$(".li22").css({color:"#000"});
		$(".ull").hide();
	})
	var li = aa(".libox li");
	var ul = aa(".bottom ul");
	for(var i=0;i<li.length;i++){
		li[i].setAttribute("index",i);
		li[i].onmouseenter=function(){
			for(var j=0;j<li.length;j++){
				li[j].removeAttribute("class");
			}
			this.className="chu1";
			var q = this.getAttribute("index");
			dd(q,ul);
		}
	}
	function dd(z,y){
		for(var i=0;i<y.length;i++){
			y[i].style.display = "none";
			y[i].style.opacity = 0;
		}
		y[z].style.display = "block";
		var ss = setInterval(function(){
			var opacity = Number(y[z].style.opacity);
			if(opacity >= 1){
				clearInterval(ss);
				y[z].style.opacity = 1;
				return;
			}
			y[z].style.opacity = opacity+0.03;
		},17)
	}
}
