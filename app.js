let s=0;
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let White = document.querySelector(".white");
let Game = document.querySelector(".game");
let exit=document.querySelector(".exit-btn");
let printbtn=document.querySelector(".print-btn");
let turnO = true; 
let count = 0;
let tic=document.querySelector(".tic");
var player1=0;
var player2=0;
var namec,namea=localStorage.getItem("NAMEA");
var nameb=localStorage.getItem("NAMEB");
var text=document.querySelector(".test");
var text2=document.querySelector(".test2");
var secret=document.querySelector(".secret");
var tt=document.querySelector(".tt");
function printvalue(){
document.querySelector(".test").innerText=namea+" : "+player1;
document.querySelector(".test2").innerText=nameb+" : "+player2;
}

// const winPatterns = [
//   [0, 1, 2], 
//   [0, 3, 6], 
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
const winPatterns = [
  { pattern: [0, 1, 2], lineClass: 'line1' },
  { pattern: [0, 3, 6], lineClass: 'line2' },
  { pattern: [0, 4, 8], lineClass: 'line3' },
  { pattern: [1, 4, 7], lineClass: 'line4' },
  { pattern: [2, 5, 8], lineClass: 'line5' },
  { pattern: [2, 4, 6], lineClass: 'line6' },
  { pattern: [3, 4, 5], lineClass: 'line7' },
  { pattern: [6, 7, 8], lineClass: 'line8' },
];
const resetGame = () => {
  document.getElementById("line").className="hide";
  turnO = true;
  count = 0;
  document.getElementById("draw").innerText="";
  enableBoxes(); 
  msgContainer.classList.add("hide");
  White.classList.remove("hide");
  Game.classList.remove("hide");
  tic.classList.remove("hide");
  newGameBtn.classList.add("hide");
  exit.classList.add("hide");
  printbtn.classList.add("hide");
  secret.classList.add("bl");
  secret.classList.remove("red");
  text.classList.add("bl");
  text2.classList.remove("red");
};
function turn(){
  
    if (turnO) {
      text.classList.add("bl");
      text2.classList.remove("red");
    } else {
      text2.classList.add("red");
      text.classList.remove("bl");
    }
    if(!count)
    {
      secret.classList.add("bl");
      secret.classList.remove("red");
    }
    else
    {
      secret.classList.add("red");
      secret.classList.remove("bl");
    }
}
boxes.forEach((box) => {
box.addEventListener("click", () => {
  
    if (turnO) {
      //playerO
      box.style.color=`aqua`;
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.style.color=`red`;
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
  box.addEventListener("mouseover",()=>{
    if(box.disabled===false){
    if (turnO) {
      box.style.color=`grey`;
      box.innerText = "O";
      
    } else {
      box.style.color=`grey`;
      box.innerText = "X";
    }
  }
  });
  box.addEventListener("mouseout",()=>{
    if(box.disabled===false)
     box.innerText = "";
    box.style.color=`none`;
  });
});

const gameDraw = () => {
  document.getElementById("draw").classList.remove("hide");
  document.getElementById("error").play();
  document.getElementById("draw").style.marginTop=`0vh`;
  document.getElementById("draw").innerText="GAME WAS DRAW";
  disableBoxes(); 
  setTimeout(playagain,3000);
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.background="black";
    box.style.textShadow="none";
  }
};

const showWinner = (winner) => {
  s+=1;
  document.getElementById("cheering").play();
  msg.style.textShadow= `0 0 10px gold, 0 0 20px gold, 0 0 40px gold, 0 0 80px gold, 0 0 160px gold`;
  if(s==1)
  confetti();
  msg.innerText = `CONGRATULATIONS\n Winner is ${winner.toUpperCase()}`;
  newGameBtn.classList.add("hide");
  exit.classList.add("hide");
  printbtn.classList.add("hide");
  msgContainer.classList.remove("hide");
  White.classList.add("hide");
  Game.classList.add("hide");
  tic.classList.add("hide");
  text.classList.remove("bl");
  text2.classList.remove("red");
  secret.classList.remove("bl");
  secret.classList.remove("red");
  disableBoxes();
};

const checkWinner = () => {
  turn();
  for (let { pattern, lineClass } of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBoxes();
            boxes[pattern[0]].style.color="white";
            boxes[pattern[1]].style.color="white";
            boxes[pattern[2]].style.color="white";
            document.getElementById("line").className=lineClass;
        if(pos1Val==="O")
          {
            player1++;namec=namea;
            document.getElementById("line").style.boxShadow=`0 0 10px aqua, 0 0 20px aqua, 0 0 40px aqua, 0 0 80px aqua, 0 0 160px aqua`;
            boxes[pattern[0]].style.textShadow=`0 0 10px aqua, 0 0 20px aqua, 0 0 40px aqua, 0 0 80px aqua, 0 0 160px aqua`;
            boxes[pattern[1]].style.textShadow=`0 0 10px aqua, 0 0 20px aqua, 0 0 40px aqua, 0 0 80px aqua, 0 0 160px aqua`;
            boxes[pattern[2]].style.textShadow=`0 0 10px aqua, 0 0 20px aqua, 0 0 40px aqua, 0 0 80px aqua, 0 0 160px aqua`;
          }
          else
          {
            player2++;namec=nameb;
            document.getElementById("line").style.boxShadow=`0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red`;
            boxes[pattern[0]].style.textShadow=`0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red`;
            boxes[pattern[1]].style.textShadow=`0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red`;
            boxes[pattern[2]].style.textShadow=`0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red`;
          }
          printvalue();
         setTimeout(()=>{
           showWinner(namec);
         },1500);
         
        return true;
      }
    }
  }
};
msg.addEventListener('click',()=>{
  if(namea && nameb)
  {newGameBtn.classList.remove("hide");
  exit.classList.remove("hide");
  printbtn.classList.remove("hide");}
});
function playagain(){
  document.getElementById("line").className="hide";
  document.getElementById("draw").classList.add("hide");
  document.getElementById("draw").innerText="";
  document.getElementById("cheering").pause();
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
  White.classList.remove("hide");
  Game.classList.remove("hide");
  tic.classList.remove("hide");
  secret.classList.add("bl");
  secret.classList.remove("red");
  text.classList.add("bl");
  text2.classList.remove("red");
}
function newGame(){
  document.getElementById("line").className="hide";
  document.getElementById("cheering").pause();
  player1=player2=0;
  printvalue();
  turnO = true;
  count = 0;s=0;
  enableBoxes();
  msgContainer.classList.add("hide");
  White.classList.remove("hide");
  Game.classList.remove("hide");
  tic.classList.remove("hide");
  newGameBtn.classList.add("hide");
  exit.classList.add("hide");
  printbtn.classList.add("hide");
  secret.classList.add("bl");
  secret.classList.remove("red");
  text.classList.add("bl");
  text2.classList.remove("red");
  tt.classList.remove("hide");
}
function showerror(){
  document.getElementById("error").play();
  document.getElementById("cheering").pause();
  msg.style.textShadow= `0 0 10px red, 0 0 20px red, 0 0 40px red, 0 0 80px red, 0 0 160px red`;
  msg.innerText = `! ! ! Not a valid Name ! ! !`;
  newGameBtn.classList.add("hide");
  printbtn.classList.add("hide");
  msgContainer.classList.remove("hide");
  White.classList.add("hide");
  Game.classList.add("hide");
  tic.classList.add("hide");
  disableBoxes();
  exit.classList.remove("hide");
  tt.classList.add("hide");
}
if(!namea && !nameb)
  showerror();
else if(namea.charAt()===" " || nameb.charAt()===" ")
  showerror();
else
newGame();
function swap(){
  if(!count)
  {
    sound();
  var temp=namea;
  namea=nameb;
  nameb=temp;
  temp=player1;
  player1=player2;
  player2=temp;
  printvalue();
  }
}
newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);

// const confettiContainer = document.querySelector('.confetti-container');


function createConfettiPiece() {
  
  if(s==1)
  {
  const confettiPiece = document.createElement('div');
  confettiPiece.classList.add('confetti-piece');
  const randomX = Math.random(1,5)* 1500;
  const randomY = Math.random(1,5)* -msgContainer.offsetHeight;
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  confettiPiece.style.left = `${randomX}px`;
  confettiPiece.style.top = `${randomY}px`;
  confettiPiece.style.boxShadow = `0 0 10px ${randomColor},0 0 20px ${randomColor},0 0 40px ${randomColor},0 0 60px ${randomColor},0 0 80px ${randomColor},0 0 160px ${randomColor}`;

  msgContainer.appendChild(confettiPiece);
  confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
  }
}
function confetti()
{
  for(let i=0;i<100;i++)
    {
      createConfettiPiece();
    }
}
function sound(){
  document.getElementById("bu").play();
}
