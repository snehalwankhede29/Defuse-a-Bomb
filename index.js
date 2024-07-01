let inputTextEl = document.getElementById("inputText");
let counterEl = document.getElementById("counter");
let img1El = document.getElementById("img1");
let resultEl = document.getElementById("result");

let bombCounter = 10;

let intervalId = setInterval(function(){
    bombCounter = bombCounter-1;
    counterEl.textContent = bombCounter;

    if(bombCounter===0){
        clearInterval(intervalId);
        img1El.src = "bomb boom.avif";
        resultEl.textContent = "Boom!!!";
    }


},1000);



// console.log(counterEl.textContent);

function onChangeInput(event){
    if(inputTextEl.value==="defuse" && event.key==="Enter" && bombCounter!==0){
        clearInterval(intervalId);
        resultEl.textContent = "Congratulation, You are successfully defused bomb";
    }
   
}

inputTextEl.addEventListener("keydown",onChangeInput)


// let randoM =  Math.ceil(Math.random()*100);
// console.log(randoM);

// let newV = String(randoM);