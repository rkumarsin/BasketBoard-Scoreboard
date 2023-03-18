let homeScoreBtnOne=document.getElementById("home-score-btn-1")
let homeStoreEl=document.getElementById("home-score")
let homeStore=0

function increaseHomeScoreOne(){
    homeStore+=1
    homeStoreEl.textContent=homeStore
}
console.log(increaseHomeScoreOne)

function increaseHomeScoreTwo(){
    homeStore+=2
    homeStoreEl.textContent=homeStore
}
console.log(increaseHomeScoreTwo)

function increaseHomeScoreThree(){
    homeStore+=3
    homeStoreEl.textContent=homeStore
}
console.log(increaseHomeScoreThree)



let guestScoreBtnOne=document.getElementById("guest-score-btn-1")
let guestStoreEl=document.getElementById("guest-score")
let guestScore=0

function increaseGuestScoreOne(){
    guestScore+=1
    guestStoreEl.textContent=guestScore
}
console.log(increaseGuestScoreOne)

function increaseGuestScoreTwo(){
    guestScore+=2
    guestStoreEl.textContent=guestScore
}
console.log(increaseGuestScoreTwo)

function increaseGuestScoreThree(){
    guestScore+=3
    guestStoreEl.textContent=guestScore
}
console.log(increaseGuestScoreThree)