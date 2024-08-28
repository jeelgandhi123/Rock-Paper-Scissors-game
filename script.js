let msg = document.querySelector("#message");
let USER = document.querySelector("#User-score");
let COMP = document.querySelector("#computer-score");
let DRAW = document.querySelector("#draw");


let user_score = 0;
let comp_score = 0;
let draw_score=0;

const images = document.querySelectorAll(".image");

const comp = () => {
    const arr = ["rock", "paper", "scissors"];
    const randomgenrated = Math.floor(Math.random() * 3);
    return arr[randomgenrated];
};

const showwinner = (userwin, user_clicked, computer_choice) => {
    if (userwin) {
        user_score++;
        USER.innerText = user_score;
        msg.innerText = `You won! You selected ${user_clicked} and computer selected ${computer_choice}.`;
        msg.style.backgroundColor = "green";
    }
    else {
        comp_score++;
        COMP.innerText = comp_score;
        msg.innerText = `You Lost! You selected ${user_clicked} and computer selected ${computer_choice}.`;
        msg.style.backgroundColor = "red";
    }
}

const draw = (user_clicked, computer_choice) => {
    draw_score++;
    DRAW.innerText = draw_score;
    msg.innerText = `Game Draw! You selected ${user_clicked} and computer selected ${computer_choice}.`;
    msg.style.backgroundColor = "blue";
}


const playgame = (user_clicked) => {
    console.log("user choice:", user_clicked);
    const computer_choice = comp();
    console.log("computer choice:", computer_choice);

    if (user_clicked == computer_choice) {
        draw(user_clicked, computer_choice);
    }
    else {
        let userwin = true;
        if (user_clicked === "rock") {
            //scissors, paper
            userwin = computer_choice === "paper" ? false : true;
        } else if (user_clicked === "paper") {
            //rock, scissors
            userwin = computer_choice === "scissors" ? false : true;
        } else {
            //rock, paper
            userwin = computer_choice === "rock" ? false : true;
        }

        showwinner(userwin, user_clicked, computer_choice);
    }
}

images.forEach((block) => {
    block.addEventListener("click", () => {
        const user_clicked = block.getAttribute("id");
        playgame(user_clicked);
    });
});
