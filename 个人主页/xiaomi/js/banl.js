
//左右轮播/双下标轮播

function banl(coBoxlist,boxCont,btns1,btns2,dots,widths,active){

	coBoxlist.onmouseover=function(){			
			btns1.style.display='block';
			btns2.style.display='block';
		}
	coBoxlist.onmouseout=function(){
			btns1.style.display='none';
			btns2.style.display='none';
		}
	//2、初始化
	
	let now = 0;
	let next = 0;
	// let flag = true;	
	// dots[0].classList.add("active");
	boxCont[0].style.left = '0';

	//3、鼠标点击轮播点
	for(let i=0;i<dots.length;i++){
		dots[i].onclick = function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				boxCont[j].style.left = widths+"px";
			}
			dots[i].classList.add(active);
			boxCont[i].style.left = '0';
			now=i;
			next=i;
		}
		
	}

	//4、自动轮播
	// let t1 = setInterval(mo,1500);
	function mo(){
		/*if(!flag){
			return;
		}
		flag = false;*/
		next++;
		if(next == boxCont.length){
			next = boxCont.length-1;
			// flag = true;
			return;
		}
		boxCont[now].style.left = 0;
		boxCont[next].style.left = widths + "px";
		animate(boxCont[now],{left:-widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				// flag = true;
			}
		});
		animate(boxCont[next],{left:0},function(){
			dots[next].classList.add(active);
			// flag = true;
		});
		now = next;
	}

	/*coBoxlist.onmouseover = function(){
		clearInterval(t1);
	}
	coBoxlist.onmouseout = function(){
		t1 = setInterval(mo,1500);
	}*/

	function mol(){
		/*if(!flag){
			return;
		}
		flag = false;*/

		next--;
		if(next == -1){
			next = 0;
			// flag = true;
			return;
		}
		boxCont[now].style.left = 0;
		boxCont[next].style.left = -widths + "px";
		animate(boxCont[now],{left:widths},function(){
			for(let j=0;j<dots.length;j++){
				dots[j].classList.remove(active);
				// flag = true;
			}
		});
		animate(boxCont[next],{left:0},function(){
			dots[next].classList.add(active);
			// flag = true;
		});
		now = next;
	}
	btns1.onclick = function(){		
		/*if(!flag){
			return
		}
		flag = false;*/
		mo();
	}
	btns2.onclick = function(){
		// if(!flag){
		// 	return
		// }
		// flag = false;
		mol();
	}
	// window.onblur = function(){
	// 	clearInterval(t);
	// }
	// window.onfocus = function(){
	// 	t = setInterval(move, 1500);
	// }
}