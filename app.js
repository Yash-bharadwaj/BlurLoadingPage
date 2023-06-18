const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const myText = document.querySelector('.heading');

 let load = 0 

 let int = setInterval(blurring, 30)


function blurring(){

    load++

    if (load>99){

        clearInterval(int)
    }

    loadText.innerHTML = `${load}%`
    loadText.style.opacity  = scale(load,0,100,1,0 )
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
    myText.innerHTML = `Made by @Yash With ❤  `;
    myText.style.opacity = scale(load,0,100,1,0 )
    myText.style.filter = `blur(${scale(load,100,0,2,0)}px)`

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

}