window.onload=function () {
    let top=document.querySelector('.top');
    let topA=document.querySelectorAll('.top-right>li>a')
    console.log(topA);
    topA[0].style.color='#16B0DC';
    window.onscroll=function () {
        let bodyTop=document.body.scrollTop||document.documentElement.scrollTop;
        if(bodyTop>=50){
            top.style.background='#fff';
            top.style.borderBottom='solid 1px #b0b0b0';
            for(let i=1;i<topA.length;i++){
                topA[i].style.color='#000';
                // topA[topA.length].style.color='#16B0DC';
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
            for(let i=1;i<topA.length;i++){
                topA[i].style.color='#fff';
                // topA[topA.length].style.color='#16B0DC';
                topA[i].onmouseover=function () {
                    topA[i].style.color='#16B0DC';
                }
                topA[i].onmouseout=function () {
                    topA[i].style.color='#fff';
                }
            }
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
        if(bodyTop>=500){
            back.style.bottom='10px';
        }
        if(bodyTop<=500){
            back.style.bottom='-38px';
        }
    },false)
}