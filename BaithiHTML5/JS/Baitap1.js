let bts = document.getElementsByClassName("bt");
for(let i = 0; i<bts.length; i++){
    bts[i].addEventListener('click',function(){
        for(let j = 0; j<bts.length; j++){
            if(j==i){
                bts[j].classList.add("active");
            } else {
                bts[j].classList.remove("active");
            }
        }
    })
}
let bt1s = document.getElementsByClassName("bt1");
for(let i = 0; i<bt1s.length; i++){
    bt1s[i].addEventListener('click',function(){
        for(let j = 0; j<bt1s.length; j++){
            if(j==i){
                bt1s[j].classList.add("active1");
            } else {
                bt1s[j].classList.remove("active1");
            }
        }
    })
}
let bt3s = document.getElementsByClassName("bt2");
let bt2s = document.getElementsByClassName("bt3");
let sounds = document.getElementsByClassName("sound");
for(let i = 0; i<bt3s.length; i++){
    bt3s[i].addEventListener('click',function(){
        for(let j = 0; j<bt3s.length; j++){
            if(j==i){
                bt3s[j].classList.add("remove");
                bt2s[j].removeAttribute("hidden");
                bt3s[j].classList.remove("add");
                sounds[j].play();
                sounds[j].volume = 0.3;
            } else {
                bt3s[j].classList.remove("remove");
                bt2s[j].getAttribute("hidden");
                bt2s[j].setAttribute("hidden","hidden");
                bt3s[j].classList.add("add");
            }
        }
    })
}