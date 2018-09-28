window.onload=function () {
    //轮播
    let banner=document.querySelector('.banner');
    let bannerImg=document.querySelectorAll('.banner-img>.imgbox>img');
    let dots=document.querySelectorAll('.lunbodian>ul>li');
    let btnzuo=document.querySelector('.bleft');
    let btnyou=document.querySelector('.bright');
    let texts=document.querySelectorAll('.bottom>div');
    let bottom=document.querySelectorAll('.bottom>div');
    // console.log(bottom);
    let now = 0;
    let next = 0;
    // dots[0].classList.add("active");
    bannerImg[0].style.left = '0';
    bottom[0].style.height='104px';
    for(let i=0;i<dots.length;i++){
        dots[i].onclick = function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove('active');
                bottom[j].style.height='0';
                bannerImg[j].style.left = "1366px";
            }
            dots[i].classList.add('active');
            bannerImg[i].style.left = '0';
            bottom[i].style.height='104px';
            now=i;
            next=i;
        }

    }

    let t1 = setInterval(mo,2000);
    function mo(){
        next++;
        if(next == 2){
            next = 0;
        }
       bannerImg[now].style.left = 0;
        bannerImg[next].style.left = "1366px";
        animate(bannerImg[now],{left:-1366},function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove('active');
                bottom[j].style.height='0';
            }
        });
        animate(bannerImg[next],{left:0},function(){
            dots[next].classList.add('active');
            bottom[next].style.height='104px';
        });
        now = next;
    }

    banner.onmouseover = function(){
        clearInterval(t1);
    }
    banner.onmouseout = function(){
        t1 = setInterval(mo,2000);
    }

    function mol(){
        next--;
        if(next == -1){
            next = 1;
        }
        bannerImg[now].style.left = 0;
        bannerImg[next].style.left =  "-1366px";
        animate(bannerImg[now],{left:1366},function(){
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove('active');
                bottom[j].style.height='0';
            }
        });
        animate(bannerImg[next],{left:0},function(){
            dots[next].classList.add('active');
            bottom[next].style.height='104px';
        });
        now = next;
    }
    btnyou.onclick = function(){
        mo();
    }
    btnzuo.onclick = function(){
        mol();
    }
    // window.onblur = function(){
    // 	clearInterval(t1);
    // }
    // window.onfocus = function(){
    // 	t1 = setInterval(mo, 1500);
    // }



    //top栏
    let top=document.querySelector('.top');
    let topA=document.querySelectorAll('.top-right>li>a')
    // console.log(topA);
    topA[topA.length-1].style.color='#16B0DC';
    window.onscroll=function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop>=50){
            top.style.background='#fff';
            top.style.borderBottom='solid 1px #b0b0b0';
            for(let i=0;i<topA.length-1;i++){
                topA[i].style.color='#000';
                // topA[topA.length-1].style.color='#16B0DC';
                topA[i].onmouseover=function () {
                    topA[i].style.color='#16B0DC';
                }
                topA[i].onmouseout=function () {
                    topA[i].style.color='#000';
                }
            }
        }
        if(bodyTop<=50){
            top.style.background='';
            // top.style.borderBottom='';
            for(let i=0;i<topA.length-1;i++){
                topA[i].style.color='#fff';
                // topA[topA.length-1].style.color='#16B0DC';
                topA[i].onmouseover=function () {
                    topA[i].style.color='#16B0DC';
                }
                topA[i].onmouseout=function () {
                    topA[i].style.color='#fff';
                }
            }
        }
    }



    //素馨花语

    let liLeft=document.querySelectorAll('.home>div>ul>.h-left');
    let liRight=document.querySelectorAll('.home>div>ul>.h-right');
    let arr=[];
    console.log(liLeft,liRight);
    liLeft.forEach((val,index)=>{
        arr.push(val.offsetTop);
    })
    window.addEventListener("scroll", function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;

        arr.forEach((val,index)=>{
            if(bodyTop+innerHeight>=val){
                liLeft[index].style.transform="translateX(83px)";
                liRight[index].style.transform="translateX(-83px)";
            }
        })
    },false)


    //返回顶部
    let back=document.querySelector('.back');

    console.log(back);
    back.onclick=function () {

        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

    window.addEventListener("scroll", function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop>=600){
            back.style.bottom='10px';
        }
        if(bodyTop<=600){
            back.style.bottom='-38px';
        }
    },false)

    //按需加载  素馨花艺字体
    let H1=document.querySelector('.main>h3');
    let P1=document.querySelector('.main>p');
    let mains=document.querySelector('.main');
    let heights1=mains.offsetTop;
    // console.log(heights,H1.offsetTop);

    window.addEventListener("scroll", function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop+innerHeight>=heights1+H1.offsetTop){
            H1.style.opacity='1';
            H1.style.transform='translateY(40px)'
        }
        if(bodyTop+innerHeight>=heights1+P1.offsetTop){
            P1.style.opacity='1';
        }

    },false)

    //素馨花语字体
    let H2=document.querySelector('.home>div>h3');
    let home=document.querySelector('.home');
    let heights2=home.offsetTop;
    // console.log(H2,home);
    window.addEventListener("scroll", function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop+innerHeight>=heights2){
            H2.style.opacity='1';
            // H2.style.transform='translateY(40px)'
        }

    },false)

    var mySwiper = new Swiper ('.m-c', {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 30,
        autoplay:true,
        // direction: 'vertical',
        loop: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })

}