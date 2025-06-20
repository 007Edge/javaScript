const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.textContent = date.toLocaleTimeString();
}, 1000)

// NOTE: setInterval(function(){}, time_in_miliseconds)
// two parameters (callback_function, time_in_miliseconds)
