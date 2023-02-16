
let countEl1 = document.getElementById("points1")
let countEl2 = document.getElementById("points2")
let points1 = 0
let points2 = 0

function sum1(){
    points1 += 1
    countEl1.textContent = points1
}

function sum2(){
    points1 += 2
    countEl1.textContent = points1
}


function sum3(){
    points1 += 3
    countEl1.textContent = points1
}


function sum4(){
    points2 += 1
    countEl2.textContent = points2
}


function sum5(){
    points2 += 2
    countEl2.textContent = points2
}


function sum6(){
    points2 += 3
    countEl2.textContent = points2
}

function reset(){
    points1 = 00 
    points2 = 00
    countEl1.textContent = points1
    countEl2.textContent = points2
}