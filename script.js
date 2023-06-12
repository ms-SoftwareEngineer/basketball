const homeScorePara = document.getElementsByClassName("home-score")[0];
const guestScorePara = document.getElementsByClassName("guest-score")[0];
let count1 = 0;
let count2 = 0;
function addOne1(){
    count1++;
    homeScorePara.innerText = count1;
}
function addTwo1(){
    count1 += 2;
    homeScorePara.innerText = count1;
}
function addThree1(){
    count1 += 3;
    homeScorePara.innerText = count1;
}
function reset1(){
    count1 = 0
    homeScorePara.innerText = count1;
}

function addOne2(){
    count2++;
    guestScorePara.innerText = count2;
}
function addTwo2(){
    count2 += 2;
    guestScorePara.innerText = count2;
}
function addThree2(){
    count2 += 3;
    guestScorePara.innerText = count2;
}
function reset2(){
    count2 = 0;
    guestScorePara.innerText = count2;
}