window.onload=function () {
	let topbarCart=document.querySelector('.topbar-cart');
	let topbarCartA=document.querySelector('.topbar-cart a');
	let cartList=document.querySelector('.cart-list');
	// console.log(topbarCart,cartList);
	topbarCart.onmouseover=function(){
		// cartList.style.display="block";
		cartList.style.height="100px";
		cartList.style.boxShadow="0 15px 30px 0 rgba(0,0,0,0.1)";
		// cartList.style.transition="2s"
		topbarCart.style.background="white";
		topbarCartA.style.color="#ff6700";
	}
	topbarCart.onmouseout=function(){
		cartList.style.height='0';
		// cartList.style.height="";
		topbarCart.style.background="#424242";
		topbarCartA.style.color="#b0b0b0";
	}
	let headerNav=document.querySelectorAll('.header-nav>li');
	let headerNavA=document.querySelectorAll('.header-nav>li>a');
	let headerlist=document.querySelectorAll('.headerlist');
	// console.log(headerNav,headerlist);
	for(let i=0;i<headerNav.length;i++){
		headerNav[i].onmouseover=function(){
			// for(let j=0;j<headerlist.length;j++){
			// 	headerlist[i].style.display="none";
			// }
			headerlist[i].style.height="229px";
			headerNav[i].style.color="#ff6700";
			headerlist[i].style.borderBottom='solid 1px #424242';
		}
		headerNav[i].onmouseout=function(){
			headerlist[i].style.height='0';
			headerNav[i].style.color="";
			headerlist[i].style.borderBottom='';
		}
	}
	let bannerLeft=document.querySelectorAll('.banner-left>li');
	let bannerRight=document.querySelectorAll('.banner-right');
	// console.log(bannerRight,bannerLeft);
	for(let m=0;m<bannerLeft.length;m++){
		bannerLeft[m].onmouseover=function(){
			for(let n=0;n<bannerLeft.length;n++){
				// bannerRight[m].style.display='none';
			}
			bannerRight[m].style.display='block';
			bannerRight[m].style.boxShadow='0 15px 30px 0 rgba(0,0,0,0.1)';
			bannerLeft[m].style.background='#ff6700';
		}
		bannerLeft[m].onmouseout=function(){
			bannerRight[m].style.display='none';
			bannerLeft[m].style.background='';
		}
	}
	let homelist=document.querySelectorAll('.brick-home>ul>li');
	let review=document.querySelectorAll('.review');
	for(let i=0;i<homelist.length;i++){
		homelist[i].onmouseover=function(){
			// for(let j=0;j<homelist.length;j++){
			// 	review[i].style.display='none';
			// }
			// review[i].style.display='block';
			review[i].style.height='95px';
			review[i].style.transition='0.5s';
			homelist[i].style.boxShadow='0 15px 30px 0 rgba(0,0,0,0.1)';
		}
		homelist[i].onmouseout=function(){
			review[i].style.height='0';
			homelist[i].style.boxShadow='';
		}
	}
	let brickli=document.querySelectorAll('.brick-title>ul>li');
	let bricklia=document.querySelectorAll('.brick-title>ul>li>a')
	let brickHome=document.querySelectorAll('.brick-home');
	// console.log(brickli,brickHome);
	bricklia[0].style.color='#ff6700';
	brickli[0].style.borderBottom='solid 2px #ff6700';
	for(let i=0;i<brickli.length;i++){
		brickli[i].onmouseover=function(){
			for(let j=0;j<brickli.length;j++){
				brickHome[j].style.display='none';	
				bricklia[j].style.color='';
				brickli[j].style.borderBottom='';
			}
			bricklia[i].style.color='#ff6700';
			brickli[i].style.borderBottom='solid 2px #ff6700';
			brickHome[i].style.display='block';		
		}
		
	}

	//内容

	//1、获取元素
	//li1
	let coBoxlist=document.querySelector('.co-box>ul>li');
	let boxCont=document.querySelectorAll('.box-cont');
	let btns1=document.querySelector('.co-icon1');
	let btns2=document.querySelector('.co-icon2');
	let dots=document.querySelectorAll('.portBox>ul>span');
	let bContBox=document.querySelector('.b-cont-box');
	let widths=parseInt(getComputedStyle(bContBox,null).width);
	// console.log(btns1);		
	banl(coBoxlist,boxCont,btns1,btns2,dots,widths,'active');

	//li2
	let coBoxlist1=document.querySelectorAll('.co-box>ul>li')[1];
	let boxCont1=document.querySelectorAll('.box-cont1');
	let btns3=document.querySelector('.co-icon3');
	let btns4=document.querySelector('.co-icon4');
	let dots1=document.querySelectorAll('.portBox1>ul>span');
	let bContBox1=document.querySelector('.b-cont-box1');
	let widths1=parseInt(getComputedStyle(bContBox1,null).width);
	// console.log(btns1);		
	banl(coBoxlist1,boxCont1,btns3,btns4,dots1,widths1,'active');

	//li3
	let coBoxlist2=document.querySelectorAll('.co-box>ul>li')[2];
	let boxCont2=document.querySelectorAll('.box-cont2');
	let btns5=document.querySelector('.co-icon5');
	let btns6=document.querySelector('.co-icon6');
	let dots2=document.querySelectorAll('.portBox2>ul>span');
	let bContBox2=document.querySelector('.b-cont-box2');
	let widths2=parseInt(getComputedStyle(bContBox2,null).width);
	// console.log(btns1);		
	banl(coBoxlist2,boxCont2,btns5,btns6,dots2,widths2,'active');

	//li4
	let coBoxlist3=document.querySelectorAll('.co-box>ul>li')[3];
	let boxCont3=document.querySelectorAll('.box-cont3');
	let btns7=document.querySelector('.co-icon7');
	let btns8=document.querySelector('.co-icon8');
	let dots3=document.querySelectorAll('.portBox3>ul>span');
	let bContBox3=document.querySelector('.b-cont-box3');
	let widths3=parseInt(getComputedStyle(bContBox3,null).width);
	// console.log(btns1);		
	banl(coBoxlist3,boxCont3,btns7,btns8,dots3,widths3,'active');	


	//小米闪购
	let fIcon1=document.querySelector('.fl-icon1');
	let fIcon2=document.querySelector('.fl-icon2');
	let flashbox=document.querySelector('.flash-l>ul');
	let wid=parseInt(getComputedStyle(flashbox,null).width)/2;
	// console.log(wid);
	let num1=0
	fIcon1.onclick=function(){
		num1++;
		if(num1==2){
			num1=1;
			return;
		}
		flashbox.style.transform='translateX('+(-wid*num1)+'px)';
	}
	fIcon2.onclick=function(){
		num1--;
		if(num1==-1){
			num1=0;
			return;
		}
		flashbox.style.transform='translateX('+(-wid*num1)+'px)';
	}




	//为您推荐
	let recon1=document.querySelector('.re-icon1');
	let recon2=document.querySelector('.re-icon2');
	let rebox=document.querySelector('.re-box>ul');
	let wid1=parseInt(getComputedStyle(rebox,null).width)/3; 
	console.log(rebox);
	let num2=0;
	recon1.onclick=function(){
		num2++;
		if(num2==3){
			num2=2;
			return;
		}
		rebox.style.transform='translateX('+(-wid1*num2)+'px)';
	}
	recon2.onclick=function(){
		num2--;
		if(num2==-1){
			num2=0;
			return;
		}
		rebox.style.transform='translateX('+(-wid1*num1)+'px)';
	}




	//搜索

	let text=document.querySelector('.text');
	let search=document.querySelector('.search');
	let searchList=document.querySelector('.search-list');
	let mi8=document.querySelector('.mi8');
	let mix2=document.querySelector('.mix2');
	text.onfocus=function(){
		text.style.border='solid 1px #ff6700';
		search.style.border='solid 1px #ff6700';
		text.style.borderRight='0';
		searchList.style.display='block';
		mi8.style.display='none';
		mix2.style.display='none';

	}
	text.onblur=function(){
		text.style.border='';
		search.style.border='';
		searchList.style.display='none';
		mi8.style.display='block';
		mix2.style.display='block';
	}


	// 轮播图
	let spot=document.querySelectorAll('.dot');
	let imgs=document.querySelectorAll('.imagesbox>img');
	let banner=document.querySelector('.banner>.container');
	let icon1=document.querySelector('.icon1');
	let icon2=document.querySelector('.icon2');
	// ban(spot,imgs,banner,icon1,icon2,'hot',2000);
	// console.log(spot,imgs);
	spot[0].style.background='white';
	for(let i=0;i<spot.length;i++){
		spot[i].onmouseover=function(){
			for(let j=0;j<spot.length;j++){
				imgs[j].style.opacity='0';
				spot[j].style.background='#707070';
			}
			imgs[i].style.opacity='1';
			spot[i].style.background='white';
			// 当鼠标移走后，继续轮播
			num=i;
		}
	}
	// 自动轮播
	let num=0;
	let t=setInterval(move,2000);
	function move(){
		num++;
		if(num==5){
			num=0
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.opacity='0';
			spot[i].style.background='#707070';
		}
		imgs[num].style.opacity='1';
		spot[num].style.background='white';
	}

	// console.log(banner);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,2000);
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
			imgs[i].style.opacity='0';
			spot[i].style.background='#707070';
		}
		imgs[num].style.opacity='1';
		spot[num].style.background='white';
	}

	//窗口失去焦点
	window.onblur=function(){
		clearInterval(t);
	}
	window.onfocus=function(){
		t=setInterval(move,2000);
	}
}