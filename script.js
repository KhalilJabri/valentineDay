// 16704234

let lst = [1, 2, 3, 4, 5, 6]

// let gif1 = document.getElementById('gif1');

let btnYes = document.getElementById('btnYes');

let btnNo = document.getElementById('btnNo');
let i = 0;
let width = 70;
let height = 30;
let size = 1;
btnNo.addEventListener('click', function() {
    if(i <=4) {
        gif = document.getElementById('gif'+lst[i]);
        gif.style.display = "none"
        i+=1;
        gif = document.getElementById('gif'+lst[i]);
        gif.style.display = "inline-block"
    }else {
        gif = document.getElementById('gif'+lst[i]);
        gif.style.display = "none"
        i=0;
        gif = document.getElementById('gif'+lst[i]);
        gif.style.display = "inline-block"
    }
    size += 0.5;
    width += 30;
    height += 20;
    btnYes.style.width = width+"px";
    btnYes.style.height = height+"px";
    btnYes.style.fontSize = size+"rem";
})

btnYes.addEventListener('click', function() {
    let title = document.getElementById('title');
    title.textContent = "i love you my princess"
    gif = document.getElementById('gif'+lst[i]);
    gif.style.display = "none";
    i = 7
    gif = document.getElementById('gif7');
    gif.style.display = "inline-block";
    btnYes.style.width = "70px";
    btnYes.style.height = "30px";
    btnYes.style.fontSize = "1rem";

    
    console.log('Button clicked!');
});