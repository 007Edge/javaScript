const start = document.getElementById('start')
const stop = document.getElementById('stop')

const bc = document.querySelector('body')


const changeColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#' ;
    
    
    for (let i=0; i<6; i++) {
        const random = parseInt(Math.random()*16);
        color+=hex[random];
    }
    bc.style.backgroundColor = color;
    
}

let startChange = null;


start.addEventListener('click', function() {
    console.log(startChange);
    if (!startChange) {
        startChange = setInterval(changeColor, 300);
    }
    console.log(startChange); 
});

stop.addEventListener('click', function() {
    console.log(startChange);
    if (startChange) {
        clearInterval(startChange)
        startChange = null
    }

    console.log(startChange);
    
})


