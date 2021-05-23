'use strict';
//polucenie elementov so stranitsi 
//samii izvestnii sposob getelementbyid
//element box rabotaet na объектной модели документа DOM
const box = document.getElementById('box');
//console.log(box);
//polucenie elementa button a imenno 2-iu knopku
const btns= document.getElementsByTagName('button');//ili tak [1]
//console.log(btns[1]);
//polucenie klassov 
const circles = document.getElementsByClassName('circle');
//console.log(circles);
//polucenie selektorov tocika . nujna dlia css selectora
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item=> {
//console.log(item);
});

//polucenie toliko odnogo elementa 
 
const oneHeart = document .querySelector('.heart');
//console.log(oneHeart);

//deistvia s elementami na stranitse 
console.dir(box);
box.style.backgroundColor='blue';



