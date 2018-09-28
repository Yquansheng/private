function ban(spot,imgs,banner,icon1,icon2,hot,time) {
	for(let i=0;i<spot.length;i++){
		spot[i].onmouseover=function(){
			for(let j=0;j<spot.length;j++){
				imgs[j].style.zIndex='1';
				spot[j].classList.remove(hot);
			}
			imgs[i].style.zIndex='2';
			spot[i].classList.add(hot);
			// 当鼠标移走后，继续轮播
			num=i;
		}
	}
	// 自动轮播
	let num=0;
	let t=setInterval(move,time);
	function move(){
		num++;
		if(num==5){
			num=0
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex='1';
			spot[i].classList.remove(hot);
		}
		imgs[num].style.zIndex='2';
		spot[num].classList.add(hot);
	}

	// console.log(banner);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,time);
	}

	//点击箭头
	icon2.onclick=function(){
		move();
	}
	icon1.onclick=function(){
		movel();
	}
	function movel(){
		num--;
		if(num<0){
			num=4;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.zIndex='1';
			spot[i].classList.remove(hot);
		}
		imgs[num].style.zIndex='2';
		spot[num].classList.add(hot);
	}

	//窗口失去焦点
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,time);
	}
}