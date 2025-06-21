const time = document.querySelector('span');
const div = document.getElementById('myDiv');
const btn = document.querySelector('button');

const changeColor = function() {
    div.style.backgroundColor = 'red';
}

let counter = 5;

const timer = setInterval(function(){
    --counter
    time.innerHTML = `${counter}`
    
    if (counter === 0) {
        clearInterval(timer)
    }
},1000)

const timeOut = setTimeout(changeColor, 5000);

btn.addEventListener('click',function(){
    clearTimeout(timeOut);
    clearInterval(timer)
})
