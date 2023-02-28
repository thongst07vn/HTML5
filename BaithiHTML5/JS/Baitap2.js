let checkname = /^[a-zA-Z ]+$/;
let checknum = /^[0-9]+$/;
let checkphone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
let checkemail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
let checkbirthday = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]([1]+[9]+[6-9]+[0-9]|[2]+[0]+[0]+[0-5])$/
let fullname = 0, phone = 0, email = 0, birthday = 0, age = 0, gender = 0, text = 0;
submit=document.getElementById(`bt`)
submit.onclick = () =>{
    if(document.getElementById(`name`).value.trim().length == 0 && document.getElementById(`telephone`).value.trim().length == 0 && document.getElementById(`email`).value.trim().length == 0 && document.getElementById(`Birthday`).value == "DD/MM/YYYY" && document.getElementById(`Age`).value.trim().length == 0 && document.getElementById(`Gender`).value == `None` && document.getElementById(`text`).value.trim().length == 0){
        alert(`Bạn Cần Điền Thông Tin`);
        document.querySelector(`fieldset:first-child > span:nth-child(4)`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:first-child > span:nth-child(4)`).classList.add(`color`);
        document.querySelector(`fieldset:first-child > span:last-child`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:first-child > span:last-child`).classList.add(`color`);
        document.querySelector(`fieldset:first-child > span:nth-child(8)`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:first-child > span:nth-child(8)`).classList.add(`color`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(4)`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(4)`).classList.add(`color`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(8)`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(8)`).classList.add(`color`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(12)`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(12)`).classList.add(`color`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(15)`).removeAttribute(`hidden`);
        document.querySelector(`fieldset:nth-child(2) > span:nth-child(15)`).classList.add(`color`);
        return false;  
    }else{
        if(document.getElementById(`name`).value.trim().length <= 2 || document.getElementById(`name`).value.trim().length >= 50 || checkname.test(document.getElementById(`name`).value) == 0){
            document.querySelector(`fieldset:first-child > span:nth-child(4)`).classList.add(`color`);
            document.querySelector(`fieldset:first-child > span:nth-child(4)`).removeAttribute(`hidden`);
            alert(`Bạn Điền Sai Tên`);
            fullname = 0;
            return false;
        }else{
            document.querySelector(`fieldset:first-child > span:nth-child(4)`).getAttribute(`hidden`);
            document.querySelector(`fieldset:first-child > span:nth-child(4)`).setAttribute(`hidden`, `hidden`);
            fullname = 1;
        }
        if(checkphone.test(document.getElementById(`telephone`).value) == 0){
            document.querySelector(`fieldset:first-child > span:nth-child(8)`).classList.add(`color`);
            document.querySelector(`fieldset:first-child > span:nth-child(8)`).removeAttribute(`hidden`);
            alert(`Bạn Điền Sai SĐT`);
            phone = 0;
            return false;
        }else{
            document.querySelector(`fieldset:first-child > span:nth-child(8)`).getAttribute(`hidden`);
            document.querySelector(`fieldset:first-child > span:nth-child(8)`).setAttribute(`hidden`, `hidden`);
            phone = 1;
        }
        if(checkemail.test(document.getElementById(`email`).value) == 0){
            document.querySelector(`fieldset:first-child > span:last-child`).classList.add(`color`);
            document.querySelector(`fieldset:first-child > span:last-child`).removeAttribute(`hidden`);
            alert(`Bạn Điền Sai Email`);
            email = 0;
            return false;
        }else{
            document.querySelector(`fieldset:first-child > span:last-child`).getAttribute(`hidden`);
            document.querySelector(`fieldset:first-child > span:last-child`).setAttribute(`hidden`, `hidden`);
            email = 1;
        }
        if(checkbirthday.test(document.getElementById(`Birthday`).value) == 0){
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(4)`).classList.add(`color`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(4)`).removeAttribute(`hidden`);
            alert(`Bạn Điền Sai Ngày Sinh`);
            birthday = 0;
            return false;
        }else{
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(4)`).getAttribute(`hidden`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(4)`).setAttribute(`hidden`, `hidden`);
            birthday = 1;
        }
        if(document.getElementById(`Age`).value < 18 || document.getElementById(`Age`).value > 60 || checknum.test(document.getElementById(`Age`).value) == 0){
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(8)`).classList.add(`color`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(8)`).removeAttribute(`hidden`);
            alert(`Bạn Điền Sai Tuổi`);
            age = 0;
            return false;
        }else{
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(8)`).getAttribute(`hidden`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(8)`).setAttribute(`hidden`, `hidden`);
            age = 1;
        }
        if(document.getElementById(`Gender`).value == `None`){
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(12)`).classList.add(`color`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(12)`).removeAttribute(`hidden`);
            alert(`Bạn Cần Chọn Giới Tính`);
            gender = 0;
            return false;
        }else{
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(12)`).getAttribute(`hidden`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(12)`).setAttribute(`hidden`, `hidden`);
            gender = 1;
        }
        if(document.getElementById(`text`).value.trim().length == 0 || document.getElementById(`text`).value.trim().length >= 1000){
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(15)`).classList.add(`color`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(15)`).removeAttribute(`hidden`);
            text = 0;
            return false;
        }else{
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(15)`).getAttribute(`hidden`);
            document.querySelector(`fieldset:nth-child(2) > span:nth-child(15)`).setAttribute(`hidden`, `hidden`);
            text = 1;
        }
        if(fullname == 1 && phone == 1 && email == 1 && birthday == 1 && age == 1 && gender == 1 && text == 1){
            alert(`Bạn Đã Điền Thông Tin Thành Công`);
            window.location.href = "../main.html";
            return true
       }else return false
    }  
}