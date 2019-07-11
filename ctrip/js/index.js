(function(){
    let oBanner = document.getElementById('banner'),
        oUl = oBanner.getElementsByTagName('ul')[0],
        bannerW = oBanner.offsetWidth,
        index = 1;
    oBanner.ontouchstart = function(e){
        let initX = oUl.offsetmarginLeft,
            init_x = e.changedTouches[0].clientX;
        document.ontouchmove = function(e){
            oUl.style.marginLeft = initX+e.changedTouches[0].clientX-init_x+'px';
        }
        document.ontouchend = function(e){
            let moveX= e.changedTouches[0].clientX-init_x;
            if(moveX<-30){
               //下一张
               index++;
                if(index===8){
                 oUl.style.marginLeft = -100+'%';
                    index = 2;
               }
            }else if(moveX>30){
                //上一张
                index--;
                if(index===-1){
                    oUl.style.marginLeft = -6*100+'%';
                    index = 5;
                }
            }
            oUl.classList.add('tran');
            oUl.style.marginLeft = -100*index+'%';
            document.addEventListener('transitionend',function(){
                oUl.classList.remove('tran');
            },false)
            this.ontouchmove = null;
            this.ontouchend = null;
        }
    }
})();