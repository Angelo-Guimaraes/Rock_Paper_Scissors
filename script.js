//creat var
var roundPlayer=0;
var roundComp=0;
var roundDraw=0;
//inc according to resulte until 5points

function round(){

   while ((this.roundPlayer < 5) && (this.roundComp < 5)) {
    
    playRound()
   }
    if (this.roundPlayer == 5) {
        return "You WIN";
    }

    else{
        return "You lose"
    }

}

//save user pick

//pc chooses one of the three 
function computerPlays(){
    let options = ["rock","paper","scissors"]
    return options[Math.floor(Math.random()*options.length)]
}

//compares both picks with all the options
function playRound(){
    let message = ""
    let humanPlays = prompt("rock,paper,scissors?");
    //give result 
    if (humanPlays == computerPlays()){
        this.roundDraw++;
        message = "It's a tie"
    }

    if  ((humanPlays=="rock" && computerPlays()=="scissors")||
        (humanPlays=="paper" && computerPlays()=="rock")||
        (humanPlays=="scissors" && computerPlays()== "paper")) {
        this.roundPlayer++;

        message = "You win!"
    }

    else {
        this.roundComp++;   

        message = "You lose!"
    }

    return message

}






