let gameseq = [];
let userseq = [];

let issarted = false;
let level = 0;
let btns1 = ["red", "green", "purple", "yellow"];

let h2 = document.querySelector("h2");
//we have to start the game when user press any of key on the widows 

document.addEventListener("keypress", function () {
    if (issarted == false) {
        console.log("game is started");
        issarted = true;

        setTimeout(()=>{
            document.removeEventListener("keypress");

        }, 250);

    }

    levelup();

});

function gamebtnflash(btn) {
    btn.classList.add("gameflashh");
    setTimeout(function () {
        btn.classList.remove("gameflashh");
    }, 250);
}

function levelup() {
    userseq = [];

    level++;
    h2.innerText = `level ${level}`;

    let randomindex = Math.floor(Math.random() * 4);

    let randomcolor = btns1[randomindex];


    let btn = document.querySelector(`.${randomcolor}`);

    gameseq.push(btns1[randomindex]);
    console.log(gameseq);

    gamebtnflash(btn);

}
function userbtnflash(btn) {
    btn.classList.add("userflashh");
    setTimeout(function () {
        btn.classList.remove("userflashh");
    }, 250);
}

function userbtnpressed() {
    let btn = this;
    userbtnflash(btn);

    let usercolor = btn.getAttribute("id");

    userseq.push(usercolor);
    console.log(userseq);

    checkanswers(userseq.length - 1);//checking for newly interd sequence

}

function checkanswers(index) {
    console.log("courrent level is" + level);


    if (gameseq[index] === userseq[index]) {
        console.log("same value");
        if (userseq.length == gameseq.length) {
            setTimeout(function () { levelup(); }, 1000);

        }
    }
    else {
        h2.innerHTML = `Game over...score is <b> ${level} </b>Press any key to continue`;
        gamereset();
    }
}

function gamereset() {
    issarted = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

let btn = document.querySelectorAll(".box");

for (btns of btn) {
    btns.addEventListener("click", userbtnpressed)

}

