"use strict"
let data = 0;
let sroki = 0;
document.querySelector('.button').addEventListener('click', ()=>{
	data += Number(document.querySelector('.type_of_syte').value);
})
document.querySelector('.button').addEventListener('click', ()=>{
	data += Number(document.querySelector('.design').value);
})
document.querySelector('.button').addEventListener('click', ()=>{
	data += Number(document.querySelector('.adaptability').value);
    sroki = (data/2500);
	document.querySelector('.out').innerHTML = data +" Р";
	document.querySelector('.out1').innerHTML = sroki +" Д";
	data = 0;
	sroki = 0;
})
