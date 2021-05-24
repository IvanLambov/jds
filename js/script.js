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
const wrapper = document.querySelector('.wrapper');
const hearts = wrapper.querySelectorAll('.heart');
//hearts.forEach(item=> {
//console.log(item);
//});

//polucenie toliko odnogo elementa 
 
const oneHeart = wrapper.querySelector('.heart');
//console.log(oneHeart);

//deistvia s elementami na stranitse 
//console.dir(box);
//meneen zvet i razmer pervogo div 
//box.style.backgroundColor='blue';
//box.style.width = '500px';
box.style.cssText= 'background-color:blue; width:500px ';
//meneaem svoistva knopki 
btns[1].style.borderRadius='100%';
//ukazaevaem ciotko element i izmeneaem zvet kruga 
circles[0].style.backgroundColor='green';
//proizvodim nad neskolikimi elementami odni i teje deistvia 
//1 sposob
//for(let i =0; i<hearts.length; i++){
//hearts[i].style.//backgroundColor='orange';
//}
//2 sposob
hearts.forEach(item =>{
 item.style.backgroundColor='orange';
});
//sozdanie tega vnutri js 
const div = document.createElement('div');
//sozdanie textovih uzlov- obolo4ki bez tega 
//const text = document.createTextNode('here i was');
//dobavlenie block i izmenenie v drugoi zvet 
div.classList.add('black');

//document.body.append(div);
//pomehenie blocka v block
wrapper.append(div);

//wrapper.appendChild(div);
//stavit v nacealo 
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div)
//wrapper.insertBefore(div, hearts[2]);
//udalenie 
//circles[0].remove();
//wrapper.removeChild(hearts[1]);
//zameneaem odin element na drugoi 
hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0],hearts[0]);

//dobableaem text ,tegi
div.innerHTML="<h1>Hello world!</h1>";
//toliko s textom , s tegami ne rabotatet 
//div.textContent= "Hello";
// vstavliaem kuso4ek html coda pered ili posle tegov
div.insertAdjacentHTML("beforeend",'<h2>Hello</h2>');







