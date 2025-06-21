/* 
    document.getElementById('images').addEventListener('click',function(e){
        console.log("clicked inside the ul");
    },false)

    document.getElementById('car').addEventListener('click',function(e){
        e.stopPropagation();   // this will stop event propagation
        console.log('car clicked');

    })
*/


// event Bubbling: means the event bubbles up, i.e. the event will propagate on it's parent element as well

//.addEventListener('event', callback function, event propagation)


// Note: event propagation: false is event bubbling i.e. defaut
// and event propagation: true is capturing moded 

// type, timestamp, defalutPreventd, target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, keyCode



// prevemtDefault()   --  stop reloading || stops redirection
// preventDefault() is a method of the event object that stops the browser’s default action for an event.

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();  // this will prevent redirection on google page
    e.stopPropagation(); // stop bubbling
    console.log("google clicked");
    
},false)


// Event Delegation   -- adding eventListener to parent to handle click from many children
// means handling events with help of event bubbling

document.querySelector('#images').addEventListener('click', function(e){
    if(e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
    }
    
    console.log(e.type);  // this returns tag Name is capslock
    
    
    
},false)

// problem: when we click on any li, all the images are removed
// reason: when we click on li it's parent is selected that is ul and ul is removed 
// result: ul and it's child get removed

// solution: 
