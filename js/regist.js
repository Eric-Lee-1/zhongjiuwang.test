var tel = document.querySelector('#tel')
var tel_show = document.querySelector('.tel_show')
tel.onclick=function(){
    tel.parentElement.style.borderColor = '#00cc33';
    tel_show.style.opacity = 1;
    tel_show.innerHTML = '请输入手机号码';
    tel_show.style.borderColor = '#cccccc';
    tel_show.style.color = '#666666';
    tel_show.style.backgroundColor = '#ffffff';   
}
tel.onblur = function () {
    tel.parentElement.style.borderColor = '#cccccc';
    var Tel = /1[3-9]\d{9}/
    var tel1 = this.value;
    if (Tel.test(tel1)) {
        tel_show.style.opacity = 0;
    } else if (tel1 === "") {
        tel_show.innerHTML = '请输入手机号码';
        tel_show.style.borderColor = '#ffbdbe';
        tel_show.style.color = '#e3393c';
        tel_show.style.backgroundColor = '#ffebeb';   
    } else {
        tel_show.innerHTML = '请输入正确手机号码';
        tel_show.style.borderColor = '#ffbdbe';
        tel_show.style.color = '#e3393c';
        tel_show.style.backgroundColor = '#ffebeb';   
    }
}


var password = document.querySelector('#password')
var password_show = document.querySelector('.password_show')
password.onclick=function(){
    password.parentElement.style.borderColor = '#00cc33';
    password_show.style.opacity = 1;
    password_show.innerHTML = '6-20位字符，可使用字母、数字或符号的组合，不建议使用纯数字、纯字母、纯符号';
    password_show.style.borderColor = '#cccccc';
    password_show.style.color = '#666666';
    password_show.style.backgroundColor = '#ffffff';   
}
password.onblur = function () {
    password.parentElement.style.borderColor = '#cccccc';
    var Password = /\w{6,20}/
    var password1 = this.value;
    if (Password.test(password1)) {
        password_show.style.opacity = 0;
    } else if (password1 === "") {
        password_show.innerHTML = '密码长度只能在6-20之间，不包含空格';
        password_show.style.borderColor = '#ffbdbe';
        password_show.style.color = '#e3393c';
        password_show.style.backgroundColor = '#ffebeb';   
    } else {
        password_show.innerHTML = '密码长度只能在6-20之间，不包含空格';
        password_show.style.borderColor = '#ffbdbe';
        password_show.style.color = '#e3393c';
        password_show.style.backgroundColor = '#ffebeb';   
    }
}

var con_password = document.querySelector('#con_password')
var con_password_show = document.querySelector('.con_password_show')
con_password.onclick=function(){
    con_password.parentElement.style.borderColor = '#00cc33';
    con_password_show.style.opacity = 1;
    con_password_show.innerHTML = '请再次输入密码';
    con_password_show.style.borderColor = '#cccccc';
    con_password_show.style.color = '#666666';
    con_password_show.style.backgroundColor = '#ffffff';   
}
con_password.onblur = function () {
    con_password.parentElement.style.borderColor = '#cccccc';
    var con_password1 = this.value;
    if (password.value === con_password1    ) {
        con_password_show.style.opacity = 0;
    } else if (con_password1 === "") {    
    } else {
        con_password_show.innerHTML = '两次输入密码不一致';
        con_password_show.style.borderColor = '#ffbdbe';
        con_password_show.style.color = '#e3393c';
        con_password_show.style.backgroundColor = '#ffebeb';   
    }
}

var verify = document.querySelector('#verify')
var verify_show = document.querySelector('.verify_show')
verify.onclick=function(){
    verify.style.borderColor = '#00cc33';
    console.log(verify_show)
}
verify.onblur = function () {
    verify.style.borderColor = '#cccccc';
    var Verify = /\d{6}/
    var verify1 = this.value;
    if (Verify.test(verify1)) {
        verify_show.style.opacity = 0;
    } else if (verify1 === "") {
        verify_show.style.opacity = 1;
        verify_show.innerHTML = '请输入验证码';
        verify_show.style.borderColor = '#ffbdbe';
        verify_show.style.color = '#e3393c';
        verify_show.style.backgroundColor = '#ffebeb';   
    } else {
        verify_show.style.opacity = 1;
        verify_show.innerHTML = '验证码不正确或已超时';
        verify_show.style.borderColor = '#ffbdbe';
        verify_show.style.color = '#e3393c';
        verify_show.style.backgroundColor = '#ffebeb';   
    }
}



var checked_box = document.querySelector('#checked_box')
var checked_box_show = document.querySelector('.checked_box_show')
var check_on = document.querySelector('.check_on')
check_on.parentElement.onclick=function(){
    let check2 = checked_box.checked;
    if(check2 === true){
        checked_box.checked = false;
        checked_box_show.style.opacity = 1;
        checked_box_show.innerHTML = '请仔细阅读并同意以上协议';
        checked_box_show.style.borderColor = '#ffbdbe';
        checked_box_show.style.color = '#e3393c';
        checked_box_show.style.backgroundColor = '#ffebeb';   
    }else if(check2 === false){
        checked_box.checked = true;
        checked_box_show.style.opacity = 0;
    }

}