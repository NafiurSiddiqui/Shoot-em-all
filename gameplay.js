const enemyWindow = document.querySelectorAll('.enemy');
const troop = document.querySelector('.troop');
const timeLeft= document.querySelector('#time-left');
const score = document.querySelector('#score');
console.log(score);
console.log(enemy);


let result = 0;
// console.log(result);
let hitPosition;
let currentTime = 60;
// let timerId = null;

function randomTroop(){
    enemyWindow.forEach(enemy =>{
        enemy.classList.remove('troop');
    })
        let randomWindow= enemyWindow[Math.floor(Math.random() * 4)];
        randomWindow.classList.add('troop');
        // console.log(randomWindow);
        hitPosition = randomWindow.id;
};

randomTroop();



enemyWindow.forEach(enemy =>{
    enemy.addEventListener('mousedown',()=>{
        if(enemyWindow.id === hitPosition){
            result++;
            console.log(result);
            score.textContent = result;
            hitPosition = null;
        }
    })
})

const showTroop = function moveTroop(){
   setInterval(() => randomTroop(), 1000);
};

window.addEventListener('load',showTroop);
;



// function countDown() {
//  currentTime--;
//  timeLeft.textContent = currentTime;

//  if (currentTime == 0) {
//    clearInterval(countDownTimerId);
//    clearInterval(timerId);
//    alert('GAME OVER! Your final score is ' + result)
//  }

// }

// let countDownTimerId = setInterval(countDown, 1000);