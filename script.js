let btn1 = document.getElementById('LowBtn')
let btn2 = document.getElementById('AddBtn')
let res = document.getElementById('reset-btn')
let zero = document.getElementById('zero')
let a = 0;
btn1.addEventListener('click',()=>{
    a--
    zero.innerHTML = a
})
btn2.addEventListener('click',()=>{
    a++;
    zero.innerHTML = a
})
res.addEventListener('click',()=>{
    a = 0;
    zero.innerHTML = a
})