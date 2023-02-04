const back = document.querySelector(".back");
const next = document.querySelector(".next");

const photo = ['./attachment/1.jpeg', './attachment/2.jpeg', './attachment/3.jpeg', './attachment/4.jpeg', './attachment/5.jpeg', './attachment/6.jpeg', './attachment/7.jpeg', './attachment/8.jpeg'];

let i = 0
next.addEventListener('click', () =>{
    i++;
    if ( i>photo.length-1){
        i=0;
    }
    document.querySelector("#pictures").src = photo[i];
})

back.addEventListener('click', () =>{
    i--;
    if (i < 0){
        i=photo.length-1;
    }
    document.querySelector("#pictures").src = photo[i];
})

