const buttons = document.querySelectorAll('.items');
const outer = document.querySelector('div');

console.log(outer);


buttons.forEach((button)=> {
    button.addEventListener('click',function(e){
        if (e.target.id === 'red') {
            outer.style.backgroundColor=e.target.id; 
        }
        
        if (e.target.id === 'gold') {
            outer.style.backgroundColor=e.target.id;;  
        }

        if (e.target.id === 'grey') {
            outer.style.backgroundColor=e.target.id;;
        }
        
        if (e.target.id === 'blue') {
            outer.style.backgroundColor=e.target.id;; 
        }
        
    })
})




