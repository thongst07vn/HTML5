const regexname = /[a-zA-z]+$/;
const regexphone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
const regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const regexdate = /^([1]+[9]+[6-9]+[0-9]|[2]+[0]+[0]+[0-5])[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/
const regexage = /^([1][8-9]|[2-5][0-9]|60)$/


document.getElementById(`btn1`).onclick = () =>{
    let fullname = document.getElementById(`fullname`);
    let spanname = document.getElementById(`spanname`);
    let telephone = document.getElementById(`telephone`);
    let email = document.getElementById(`email`);
    let date = document.getElementById(`birthdate`);
    let spanbirthdate = document.getElementById(`spanbirthdate`);
    let age = document.getElementById(`age`)
    let spanage = document.getElementById(`spanage`);
    let question = document.getElementById(`question`).value.trim().length;
    let spanquestion = document.getElementById(`spanquestion`); 
    let flaqname = 1;
    let flaqphone = 1;
    let flaqemail = 1;
    let flaqdate = 1;
    let flaqage = 1;
    let flaqquestion = 1;
    if(fullname.value < 2 || fullname.value>50 || regexname.test(fullname.value) == 0){
        spanname.removeAttribute(`hidden`);
        flaqname = 0;
    } else {
        spanname.getAttribute(`hidden`);
        spanname.setAttribute(`hidden`,`hidden`);
        flaqname = 1;
    }

    if(regexphone.test(telephone.value) == 0){
        alert(`số điện thoại sai`);
        flaqphone = 0;
    } else {
        flaqphone = 1;
    }

    if(regexemail.test(email.value) == 0){
        spanemail.removeAttribute(`hidden`);
        flaqemail = 0;
    } else {
        spanemail.getAttribute(`hidden`);
        spanemail.setAttribute(`hidden`,`hidden`);
        flaqemail = 1;
    }

    if(regexdate.test(date.value) == 0){
        spanbirthdate.removeAttribute(`hidden`);
        flaqdate = 0;
    } else {
        spanbirthdate.getAttribute(`hidden`);
        spanbirthdate.setAttribute(`hidden`,`hidden`);
        flaqdate = 1;
    }

    if(regexage.test(age.value) == 0){
        spanage.removeAttribute(`hidden`);
        flaqage = 0;
    } else {
        spanage.getAttribute(`hidden`);
        spanage.setAttribute(`hidden`,`hidden`);
        flaqage = 1;
    }

    if(question <= 0 || question > 1000){
        spanquestion.removeAttribute(`hidden`);
        flaqquestion = 0;
    } else {
        spanquestion.getAttribute(`hidden`);
        spanquestion.setAttribute(`hidden`,`hidden`);
        flaqquestion = 1;
    }
    if(flaqname == 1 && flaqphone == 1 && flaqemail == 1 && flaqdate == 1 && flaqage == 1 && flaqquestion == 1){
        alert(`submit thành công`);
    }
}


