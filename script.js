
'use strict';

let text = document.querySelector('.main-heading');
let startingSize = 30;


function growing(txt , size){

    let going = setInterval(function(){
        
        txt.style.fontSize = `${++size}px`;
        
        if (size == 100){
            clearInterval(going);
        }

    },1000);



}

growing(text , startingSize);