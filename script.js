let audio = new Audio("start.wav");
let turn = "X";
let flag = false;
let info = document.getElementsByClassName('info')[0];
let box2 = document.getElementsByClassName('box2')[0];
let btn = document.getElementById('btn');
let winline = document.getElementById('win-line');
let gif = document.getElementById('gif');

// change sign 
const changeturn = () => {
    return turn === 'X' ? '0' : 'X';
}
const win = () => {
    let boxtext = document.getElementsByClassName('textbox');
    let win = [
        [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText === boxtext[e[2]].innerText)&&(boxtext[e[1]].innerText !=="")) {
            flag = true;
            gif.src = "/winner.webp";
            box2.className = 'box2';
            winline.innerText = `${boxtext[e[0]].innerText} you win`;

        } else {
            
    let boxtextall = document.querySelectorAll('.textbox');
    let boxlength = boxtextall.length;
    let count = 0;
    for (let i = 0; i < boxtextall.length; i++){
        if (boxtextall[i].innerText != "") {
            count++;  
        }
    }
            if (count === boxlength) {
                gif.src = "/nowinner.gif";
        winline.innerText = "No one winner";
        box2.className = 'box2';
    }

        }
       
    })  


}

// main logic
let box = document.getElementsByClassName('box');
Array.from(box).forEach(e => {
    let boxtext = e.querySelector(".textbox")
    e.addEventListener('click',()=> {
        if (boxtext.innerText === "") {
            audio.play();   
            boxtext.innerText = turn;
            turn = changeturn();
            win();
        }
        if (!flag) {
            info.innerText = `now it's ${turn} turn`;
        }
   
 

    })

})




// reset button
btn.addEventListener('click', () => {
let boxtext = document.querySelectorAll('.textbox')
    Array.from(boxtext).forEach(e => {
            e.innerText = ""; 
    })
    flag = false;
    turn = "X";
    box2.className = 'box2 hide';
    info.innerText = `who will win`;
})

