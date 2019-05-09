window.onload=function(){
    //获取ID元素
    function getId(id){
        return typeof(id)==='string'?document.getElementById(id):null
    }
    // console.log(getId('header'));
    
    let headerToggle=getId('header').getElementsByClassName('toggle')
    let headerdropdown=getId('header').getElementsByClassName('dropdown')
    let headericonfont=getId('header').getElementsByClassName('iconfont')
    let headerToggleList=getId('header').getElementsByClassName('toggle-list')
    // console.log(headericonfont);
    

    //header鼠标经过出现下拉列表
    for(let i=0;i<headerToggle.length;i++){
        headerToggleList[i].addEventListener('mouseenter',function(){
            headerdropdown[i].style.display='block';
            fadeIn(headerdropdown[i],10)
            headerToggle[i].className+=' header-active';
            headericonfont[i].style.transform='rotate(180deg)'
        })
        headerToggleList[i].addEventListener('mouseleave',function(){
            headerdropdown[i].style.display='none';
            fadeOut(headerdropdown[i],10)    
            headerToggle[i].className='link toggle';
            headericonfont[i].style.transform='rotate(0deg)'
        })
    }



    //轮播图
    let bannerWrap=document.getElementsByClassName('section-center')[0];
    let imgs=bannerWrap.getElementsByClassName('img')
    let arrow=bannerWrap.getElementsByClassName('arrow')
    let span=bannerWrap.getElementsByTagName('span')
    let index=0;
    function changeImg(){
        for(let i=0;i<imgs.length;i++){
            imgs[i].style.opacity='0';
            span[i].className=''
        }
        imgs[index].style.opacity='1'
        span[index].className='active'
    }
    let timer=null;
    function interval(){
        timer=setInterval(function(){                       
            index++;
            if(index>3){
                index=0
            }   
            changeImg()          
        },2000)
    }
    interval()
    for(let i=0;i<span.length;i++){
        span[i].addEventListener('click',function(){
            index=i
            changeImg()
        })
    }


    bannerWrap.addEventListener('mouseenter',function(){
            arrow[0].style.display='block';
            arrow[1].style.display='block';
            clearInterval(timer)
    })

    bannerWrap.addEventListener('mouseleave',function(){
        arrow[0].style.display='none';
        arrow[1].style.display='none';
        interval()
    })

    arrow[0].addEventListener('click',function(){
        index--;
        if(index<0){
            index=3
        }
        changeImg()
        
    })

    arrow[1].addEventListener('click',function(){
        index++;
        if(index>3){
            index=0
        }
        changeImg()
        
    })

    let container=getId('banner2').getElementsByClassName('container')[0];
    let item=container.getElementsByTagName('li')
    // console.log(item);
    
    let bannerArrow=container.getElementsByClassName('arrow')
    let index2=0;
    container.addEventListener('mouseover',function(){
        bannerArrow[0].style.display='block'
        bannerArrow[1].style.display='block'
    })
    container.addEventListener('mouseleave',function(){
        bannerArrow[0].style.display='none'
        bannerArrow[1].style.display='none'
    })
    function change(){
        for(let i=0;i<item.length;i++){
            item[i].style.opacity='0'
        }
        item[index2].style.opacity='1'
    }
    bannerArrow[0].addEventListener('click',function(){
            index2--
            if(index2<0){
                index2=2
            }
            change()
    })
    bannerArrow[1].addEventListener('click',function(){
        index2++
        if(index2>2){
            index2=0
        }
        change()
})


 
        //楼层选项卡
    let floorItem=getId('floor').getElementsByClassName('floor-item')
    for(let i=0;i<floorItem.length;i++){
        let link=floorItem[i].getElementsByClassName('btn')
        let content=floorItem[i].getElementsByClassName('content')
        // console.log(link,content);
        
        for(let j=0;j<link.length;j++){
            link[0].style.background='url(../img/floor-arrow.png) center bottom no-repeat';
            link[j].addEventListener('mouseover',function(){
                for(let k=0;k<link.length;k++){
                    link[k].style.background='';
                    content[k].style.display='none'
                }
                link[j].style.background='url(../img/floor-arrow.png) center bottom no-repeat';
                content[j].style.display='block'
            })
        }
    }
    
        let time=null
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
       
    // console.log(scrollTop,);
    
    function totop(top,ele){
        
        if(document.documentElement.scrollTop<=ele.offsetTop){
            
            time=setInterval(function(){
                document.documentElement.scrollTop+=150
                
                
                if(document.documentElement.scrollTop>=top||(document.documentElement.scrollTop==document.documentElement.offsetHeight-document.documentElement.clientHeight)){
                    clearInterval(time)
                }
            },30)
        }else if(document.documentElement.scrollTop>ele.offsetTop){
       
            time=setInterval(function(){
                document.documentElement.scrollTop-=150
                if(document.documentElement.scrollTop<=top){
                    clearInterval(time)
                }
            },30)
        }
        // console.log(scrollTop);
    }

    //返回顶部
    let top=document.getElementsByClassName('top')[0];
    
    top.addEventListener('click',function(){
        // let scrollTop=document.documentElement.scrollTop||document.body.scrollTop
       totop(0,getId('header'))
       console.log(getId('header').offsetTop);
       
    })

   

    // let search=getId('search');
    // console.log(search);
    
    // search.addEventListener('input',function(){
    //     let xml=new XMLHttpRequest();
    //     xml.open('GET','https://suggest.taobao.com/sug?code=utf-8&_ksTS=1484204931352_18291&callback=jsonp18292&k=1&area=c2c&bucketid=6');
    //     xml.send()
    //     xml.onreadystatechange=function(){
    //         if (xml.readyState==4&&xml.status==200){
    //             console.log(xml.responseText);
                
    //         }
    //     }
    // })

    var fixedLeft=getId('fixedLeft')
    let toggleBtn=getId('slide').getElementsByClassName('toggle')
    let toggleDown=getId('slide').getElementsByClassName('toggle-down')
    let floor=fixedLeft.getElementsByClassName('floor')
    let text=fixedLeft.getElementsByClassName('text')
    let aList=fixedLeft.getElementsByTagName('a')
    console.log(scrollTop,document.documentElement.offsetHeight,document.documentElement.clientHeight);
    // console.log(floor,text,aList);
    for(let i=0;i<floor.length;i++){
        aList[i].addEventListener('click',function(){
            totop(floorItem[i].offsetTop,floorItem[i])
        })
        aList[i].addEventListener('mouseover',function(){
            // console.log(111);
            
            floor[i].style.display='none';
            text[i].style.display='inline-block'
        })
        aList[i].addEventListener('mouseleave',function(){
            // console.log(111);
            
            floor[i].style.display='inline-block';
            text[i].style.display='none'
        })
    }
    for(let i=0;i<toggleBtn.length;i++){
        toggleBtn[i].addEventListener('mouseenter',function(){
            toggleDown[i].style.width='746px'
        })
        toggleBtn[i].addEventListener('mouseleave',function(){
            toggleDown[i].style.width='0'
        })
    }
    
    window.addEventListener('scroll',function(){
        let scrollTop=document.documentElement.scrollTop
        
        if(scrollTop>=getId('banner2').offsetTop){
            
            fixedLeft.style.display='block';
            fadeIn(fixedLeft,0)
        }else if(scrollTop<getId('banner2').offsetTop){
            // console.log(fixedLeft);
            
            fixedLeft.style.display='none';
            // fixedLeft.style.opacity='0';
            fadeOut(fixedLeft,0)
        }
        let pageH=document.documentElement.clientHeight
        // console.log(pageH);
        
        for(let i=0;i<floorItem.length;i++){
            // console.log(scrollTop,pageH,floorItem[0].offsetTop);
            if(scrollTop+pageH>floorItem[i].offsetTop+floorItem[i].clientHeight/2){
                for(let j=0;j<floorItem.length;j++){
                    floor[j].style.color=''
                }
                floor[i].style.color='#f01414'
            }
        }


    })
    }



    
    function fadeIn(elem,speed){
        if(elem.style.opacity!=1){
            // console.log(111);
            
            speed=speed||30;
            let num=0
            let timer=setInterval(function(){
            num++;
            elem.style.opacity=num/10;
            if(num>=10){
                clearInterval(timer)
            }
        },speed)
        }  
        
    }

    function fadeOut(elem,speed){
        if(elem.style.opacity!=0){
            speed=speed||30;
        let num=10
        let timer=setInterval(function(){
            num--;
            elem.style.opacity=num/10;
            if(num<=0){
                clearInterval(timer)
            }
        },speed)
    }


    
}