window.onload=function () {
    let text=document.querySelector('.area');
    let num=document.querySelector('.texts>span');
    let btn=document.querySelector('.sub');
    let ul=document.querySelectorAll('ul')[1];
    let input=document.querySelectorAll('.text')[0];
    //实时监测textarea中的字数变化
    text.oninput=function () {
        let textnum=this.value.length;
        num.innerHTML=textnum;
    }
    // console.log(input);


    //2、当点击提交时，将右侧内容添加到左侧列表中
    btn.onclick=function () {
        if(input.value==''||text.value==''){
            alert('请按要求输入内容');
            return;
        }
        let name=input.value;
        let cont=text.value;
        let str=`<li>
                    <div l-left style="width: 46px;height: 53px;float: left; ">
                        <i class="iconfont icon-touxiang" style="font-size: 36px"></i>
                    </div>
                    <div l-right>
                        <p><h4 style="font-weight: normal;font-size: 14px">${name}</h4>
                            <h5 style="float: right; color: #76838F;font-weight: normal;font-size: 12px">2018-01-04 16:18:53</h5>
                        </p >
                        <p style="color: #76838F;font-size: 14px">${cont}</p>                        
                    </div>
				</li>`;
        ul.innerHTML+=str;
        text.value='';
        input.value='';
        num.innerHTML=0;
    }
    //鼠标移入每个li进行样式变化
    //事件委派
    ul.onmouseover=function (e) {
        let event=e.target;
        //判断节点名称和类名列表if(event.nodeName==='LI'&&event.classList.contains('list'))
        if(event.nodeName==='LI'){
            event.style.background='#ff6700';
        }
    }
    ul.onmouseout=function (e) {
        let event=e.target;
        if(event.nodeName==='LI'){
            event.style.background='';
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