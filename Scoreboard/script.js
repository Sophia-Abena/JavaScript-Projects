let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

let homeCount = 0;
let awayCount = 0;

// Function to increase score for each team
const increaseCount = (team, point) =>{
    if (team === "home"){
        homeCount += point;
        homeScoreEl.innerText = homeCount;
    }else if (team === "away") {
        awayCount += point;
        awayScoreEl.innerText = awayCount;
    }
    determineLeadingScore();
}

// Function to decrease a count by 1
const decreaseCountByOne = (team) =>{
    if (team === "home"){
        homeCount -= 1;
        homeScoreEl.innerText = homeCount;
    }else if (team === "away") {
        awayCount -= 1;
        awayScoreEl.innerText = awayCount;
    }
    determineLeadingScore();
}

// Function to reset score to zero
const resetScore = () =>{
    homeCount = 0;
    awayCount = 0;
    homeScoreEl.textContent = homeCount;
    awayScoreEl.textContent = awayCount;
    awayScoreEl.style.backgroundColor = '#690B22';
    homeScoreEl.style.backgroundColor = '#690B22'
}

// Function to determine leading team
const determineLeadingScore = () =>{
    if(homeCount > awayCount){
      homeScoreEl.style.backgroundColor = 'green'
      awayScoreEl.style.backgroundColor = 'red'
    }
    else if(awayCount > homeCount){
      awayScoreEl.style.backgroundColor = 'green'
      homeScoreEl.style.backgroundColor = 'red'
    } else{
      awayScoreEl.style.backgroundColor = '#690B22';
      homeScoreEl.style.backgroundColor = '#690B22';
    }
}

