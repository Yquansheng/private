window.onload=function () {
    //返回顶部
    let back=document.querySelector('.back');

    console.log(back)
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
}