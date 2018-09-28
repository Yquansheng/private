window.onload=function () {
    let lis=document.querySelectorAll('.main>ul>li');
    let zhezhao=document.querySelectorAll('.zhezhao');
    let imgs=document.querySelectorAll('.main>ul>li>img')
    // console.log(lis,zhezhao);

    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function () {
            zhezhao[i].style.opacity='1';
            imgs[i].style.transform='scale(1.1)';
        }
        lis[i].onmouseout=function () {
            zhezhao[i].style.opacity='0';
            imgs[i].style.transform='scale(1)';
        }
    }

    //返回顶部
    let back=document.querySelector('.back');

    console.log(back)
    back.onclick=function () {

        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }

    window.addEventListener("scroll", function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop>=400){
            back.style.bottom='10px';
        }
        if(bodyTop<=400){
            back.style.bottom='-38px';
        }
    },false)
}