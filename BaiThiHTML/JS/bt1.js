let btns2 = document.getElementsByClassName("btn2");
for(let i = 0; i<btns2.length; i++){
    btns2[i].addEventListener('click',function(){
        let current = document.getElementsByClassName("active2");
        current[0].className = current[0].className.replace(" active2");
        this.className += " active2";
    })
}

let btns1 = document.getElementsByClassName("btn1");
for(let i = 0; i<btns1.length; i++){
    btns1[i].addEventListener('click',function(){
        let current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace(" active1");
        this.className += " active1";
    })
}

let btns3 = document.getElementsByClassName("btn3");
for(let i = 0; i<btns3.length; i++){    
    btns3[i].addEventListener('click',function(){
        for(let j = 0; j<btns3.length; j++){
            if(j==i){
                btns3[j].classList.add("cbg");
            } else {
                btns3[j].classList.remove("cbg");
            }
        }        
    })
}
let id1 = document.getElementsByName("gifs");
let btns4 = document.getElementsByClassName("btn3");
for(let i=0; i<btns4.length; i++){
    btns4[i].addEventListener('click',function(){
        for(let j=0; j<btns4.length; j++){
            if(i==j){
                id1[j].removeAttribute('hidden');
                switch (j){
                    case 0:
                        id1[0].setAttribute('src', '');
                        id1[0].setAttribute('src', '../image/a1in.gif');
                        setTimeout(function() {
                            id1[0].setAttribute('src', '');
                            id1[0].setAttribute('src', '../image/a1.gif');
                          }, 650);
                        break;
                    case 1:
                        id1[1].setAttribute('src', '');
                        id1[1].setAttribute('src', '../image/a2in.gif');
                        setTimeout(function() {
                            id1[1].setAttribute('src', '');
                            id1[1].setAttribute('src', '../image/a2.gif');
                          }, 650);
                        break;
                    case 2:
                        id1[2].setAttribute('src', '');
                        id1[2].setAttribute('src', '../image/a3in.gif');
                        setTimeout(function() {
                            id1[2].setAttribute('src', '');
                            id1[2].setAttribute('src', '../image/a3.gif');
                          }, 650);
                        break;   
                    case 3:
                        id1[3].setAttribute('src', '');
                        id1[3].setAttribute('src', '../image/a4in.gif');
                        setTimeout(function() {
                            id1[3].setAttribute('src', '');
                            id1[3].setAttribute('src', '../image/a4.gif');
                          }, 650);
                        break; 
                    case 4:
                        id1[4].setAttribute('src', '');
                        id1[4].setAttribute('src', '../image/a5in.gif');
                        setTimeout(function() {
                            id1[4].setAttribute('src', '');
                            id1[4].setAttribute('src', '../image/a5.gif');
                          }, 650);
                        break;
                    case 5:
                        id1[5].setAttribute('src', '');
                        id1[5].setAttribute('src', '../image/a6in.gif');
                        setTimeout(function() {
                            id1[5].setAttribute('src', '');
                            id1[5].setAttribute('src', '../image/a6.gif');
                          }, 650);
                        break;
                    case 6:
                        id1[6].setAttribute('src', '');
                        id1[6].setAttribute('src', '../image/a7in.gif');
                        setTimeout(function() {
                            id1[6].setAttribute('src', '');
                            id1[6].setAttribute('src', '../image/a7.gif');
                          }, 650);
                        break;
                    case 7:
                        id1[7].setAttribute('src', '');
                        id1[7].setAttribute('src', '../image/a8in.gif');
                        setTimeout(function() {
                            id1[7].setAttribute('src', '');
                            id1[7].setAttribute('src', '../image/a8.gif');
                          }, 950);
                        break;
                }
            } else {
                id1[j].setAttribute('src', '');
                id1[j].getAttribute('hidden');
                id1[j].setAttribute('hidden', 'hidden');
            }
        }
    })
}
for(let i = 0; i<btns3.length; i++){    
    btns3[i].addEventListener('mouseenter',function(){
        for(let j = 0; j<btns3.length; j++){
            if(j==i){
                id1[j].classList.remove('mouse-out');
                id1[j].classList.add('mouse-over');
            }
        }        
    })
}
for(let i = 0; i<btns3.length; i++){    
    btns3[i].addEventListener('mouseleave',function(){
        for(let j = 0; j<btns3.length; j++){
            if(j==i){
                id1[j].classList.remove('mouse-over');
                id1[j].classList.add('mouse-out');    
            }
        }        
    })
}
