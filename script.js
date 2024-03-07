let slots = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector('.reset-btn');
let newGame = document.querySelector('.new-game');
let winningMsg = document.querySelector('.wining-message')
let darkBtn = document.querySelector('.dark');
let lightBtn  = document.querySelector('.light');
let mode =  true;
let darkMode = ()=>{
    if(mode){
        let body = document.querySelector('body');
        body.style.backgroundColor = "black";
        newGame.style.backgroundColor = "white";
        newGame.style.color = "black";
        resetBtn.style.backgroundColor = "white"
        resetBtn.style.color = "black";
        winningMsg.style.color = "white";
        
    }
   

 

}
let lightMode = ()=>{
    let body = document.querySelector('body');
    body.style.backgroundColor = "white";
    newGame.style.backgroundColor = "black";
    newGame.style.color = "white";
    resetBtn.style.backgroundColor = "black"
    resetBtn.style.color = "white";
    winningMsg.style.color = "black";
}

turn0 = true;
let winningSlot = [
      [0,1,2],
       [0,3,6],
           [0,4,8],
                [1,4,7],
         [2,5,8],
 [2,4,6],
    [3,4,5],
          [6,7,8]
]

let resetGame = ()=>{
    turn0 = true;
    enabled();
    winningMsg.innerHTML = "";

}


slots.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
           box.innerHTML="X";
           turn0 = false;
         }else{
            box.innerHTML='O';
            turn0=true;
        }
        box.disabled = true;
        checkWin();
    
    })
})
let disabled = ()=>{
    for (let box of slots) {
        box.disabled = true;
    }
}

let enabled = ()=>{
    for (let box of slots) {
        box.disabled = false;
        box.innerHTML = "";

    }
}
checkWin = ()=>{
    for (let pattern of winningSlot) {
            let pos1 = slots[pattern[0]].innerText;
            let pos2 = slots[pattern[1]].innerText;
            let pos3 = slots[pattern[2]].innerText;
           if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
               winningMsg.innerHTML = `Winner ${pos1}`;
               disabled();
            
            }
           }


    }
}

resetBtn.addEventListener('click',resetGame);
newGame.addEventListener('click',resetGame);
darkBtn.addEventListener('click',darkMode);
lightBtn.addEventListener('click',lightMode)