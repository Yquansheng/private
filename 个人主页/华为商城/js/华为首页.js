window.onload=function () {
    //下载APP
    let li7=document.querySelectorAll('.li7')[0];
    let dropd=document.querySelector('.dropd');
    let icon1=document.querySelectorAll('i')[0];
    console.log(icon1)
    li7.onmouseover=function () {
        dropd.style.display='block';
        // icon1.style.transform='rotate(90deg)';
    }
    li7.onmouseout=function () {
        dropd.style.display='none';
    }

    //更多精彩
    let li3=document.querySelectorAll('.li3')[1];
    let more=document.querySelector('.more');
    li3.onmouseover=function () {
        more.style.display='block';
    }
    li3.onmouseout=function () {
        more.style.display='none';
    }

    //购物车
    let cart=document.querySelector('.cart');
    let cartdown0=document.querySelector('.cartdown');
    console.log(cart,cartdown0);
    cart.onmouseover=function () {
        cartdown0.style.display='block';
    }
    cart.onmouseout=function () {
        cartdown0.style.display='none';
    }


    //搜索栏
    let text=document.querySelector('.text');
    let search=document.querySelector('.searchbar');
    text.onfocus=function () {
        search.style.display='none';
    }
    text.onblur=function () {
        search.style.display='block';
    }

    //轮播
    let banner=document.querySelector('.banner');
    let imgs=document.querySelectorAll('.banner>img');
    let dots=document.querySelectorAll('.dots>span');
    // console.log(imgs,dots);
    let num=0;
    let t=setInterval(move,2000);
    function move(){
        num++;
        if(num==8){
            num=0
        }
        for(let i=0;i<imgs.length;i++){
            imgs[i].style.opacity='0';
            dots[i].classList.remove('active');
        }
        imgs[num].style.opacity='1';
        dots[num].classList.add('active');
    }
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
    }
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function(){
            for(let j=0;j<dots.length;j++){
                imgs[j].style.opacity='0';
                dots[j].classList.remove('active');
            }
            imgs[i].style.opacity='1';
            dots[i].classList.add('active');
            // 当鼠标移走后，继续轮播
            num=i;
        }
    }
    window.onblur=function(){
        clearInterval(t);
    }
    window.onfocus=function(){
        t=setInterval(move,2000);
    }

    //轮播左侧选项卡
    let lis=document.querySelectorAll('.bannerleft>ul>li');
    let leftlist=document.querySelectorAll('.leftlist')
    // console.log(lis,leftlist);
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            for(let j=0;j<leftlist.length;j++){
            	leftlist[j].style.display="none";
            }
            leftlist[i].style.display="block";
        }
        lis[i].onmouseout=function(){
            leftlist[i].style.display="none";
        }
    }

    //精品推荐
    let zuo=document.querySelectorAll('.zuo')[0];
    let you=document.querySelectorAll('.you')[0];
    let mainF=document.querySelectorAll('.main-footer-b>ul')[0];
    let wid=parseInt(getComputedStyle(mainF,null).width)/3;
    // console.log(wid);
    let num1=0
    you.onclick=function(){
        num1++;
        if(num1==3){
            you.style.cursor='not-allowed'
            num1=1;
            return;
        }
        mainF.style.transform='translateX('+(-wid*num1)+'px)';
        you.style.cursor='pointer'
    }
    zuo.onclick=function(){
        num1--;
        if(num1==-1){
            zuo.style.cursor='not-allowed'
            num1=0;
            return;
        }
        mainF.style.transform='translateX('+(-wid*num1)+'px)';
        zuo.style.cursor='pointer'
    }



    //智能家居
    let zuo1=document.querySelectorAll('.zuo')[1];
    let you1=document.querySelectorAll('.you')[1];
    let mainF1=document.querySelectorAll('.main-footer-b>ul')[1];
    let wid1=parseInt(getComputedStyle(mainF1,null).width)/3;
    // console.log(zuo1);
    let num2=0;
    you1.onclick=function(){
        num2++;
        if(num2==3){
            you1.style.cursor='not-allowed'
            num2=1;
            return;
        }
        mainF1.style.transform='translateX('+(-wid1*num2)+'px)';
        you1.style.cursor='pointer'
    }
    zuo1.onclick=function(){
        num2--;
        if(num2==-1){
            zuo1.style.cursor='not-allowed'
            num2=0;
            return;
        }
        mainF1.style.transform='translateX('+(-wid1*num2)+'px)';
        zuo1.style.cursor='pointer'
    }

    //热销配件
    let zuo2=document.querySelectorAll('.zuo')[2];
    let you2=document.querySelectorAll('.you')[2];
    let mainF2=document.querySelectorAll('.main-footer-b>ul')[2];
    let wid2=parseInt(getComputedStyle(mainF2,null).width)/3;
    console.log(wid2);
    let num3=0
    you2.onclick=function(){
        num3++;
        if(num3==3){
            you2.style.cursor='not-allowed'
            num3=1;
            return;
        }
        mainF2.style.transform='translateX('+(-wid2*num3)+'px)';
        you2.style.cursor='pointer'

    }
    zuo2.onclick=function(){
        num3--;
        if(num3==-1){
            zuo2.style.cursor='not-allowed'
            num3=0;
            return;
        }
        mainF2.style.transform='translateX('+(-wid2*num3)+'px)';
        zuo2.style.cursor='pointer'
    }


    //品牌配件
    let zuo3=document.querySelectorAll('.zuo')[3];
    let you3=document.querySelectorAll('.you')[3];
    let mainF3=document.querySelectorAll('.main-footer-b>ul')[3];
    let wid3=parseInt(getComputedStyle(mainF3,null).width)/3;
    console.log(wid3);
    let num4=0
    you3.onclick=function(){
        num4++;
        if(num4==3){
            you3.style.cursor='not-allowed'
            num4=1;
            return;
        }
        mainF3.style.transform='translateX('+(-wid3*num4)+'px)';
        you3.style.cursor='pointer'
    }
    zuo3.onclick=function(){
        num4--;
        if(num4==-1){
            zuo3.style.cursor='not-allowed'
            num4=0;
            return;
        }
        mainF3.style.transform='translateX('+(-wid3*num4)+'px)';
        zuo3.style.cursor='pointer'
    }


    //返回顶部

    let back=document.querySelector('.return');
    console.log(back)
        back.onclick=function () {

            animate(document.body,{scrollTop:0});
            animate(document.documentElement,{scrollTop:0});
        }

    window.onscroll=function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop>=800){
            back.style.right='30px';
        }
        if(bodyTop<=800){
            back.style.right='-50px';
        }
    }


    let help=document.querySelector('.help');
    let sug=document.querySelector('.sug');
    let men=document.querySelector('.men');
    help.onmouseover=function () {
        help.style.background='#7D7D7D';
        sug.style.right='70px';
        men.style.right='108px';
    }
    help.onmouseout=function () {
        help.style.background='#494949';
        sug.style.right='33px';
        men.style.right='33px';
    }
}