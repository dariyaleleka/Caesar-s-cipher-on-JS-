//Задача - Шифр цезаря
document.getElementById('in').oninput = function(){
    const offset = 3;
    let str = this.value;
    //из символа в код
    let out = '';
    for (let i=0; i< str.length; i++){
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
};

document.getElementById('out2').oninput = function () {
    const offset = 3;
    let str = this.value;
    let out = '';
    for (let i=0; i< str.length; i++){
        let code = str.charCodeAt(i);
        code = code - offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out3').innerHTML = out;
};

//*************** End ******************//
