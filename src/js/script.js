"use strict"

$(document).ready(function(){
	let options ={threshold: [0.5]};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = $('.element-animation');
	elements.each((i,el)=>{
		observer.observe(el);
	});

});




/*
	$(window).scroll(()=>{
		let scrollDistance = $(window).scrollTop();

		$("h2").each((i, el) =>{
			if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
				$("nav a").each((i, el)=>{
					if($(el).hasClass("active")){
						$(el).removeClass("active");
					}
				});
				$('nav li:eq('+ i +')').find('a').addClass('active');
			}
		});
	});
});
*/

let data = 0;
let sroki = 0;
document.querySelector('.button').addEventListener('click', ()=>{
	data += Number(document.querySelector('.type_of_syte').value);
});
document.querySelector('.button').addEventListener('click', ()=>{
	data += Number(document.querySelector('.design').value);
});
document.querySelector('.button').addEventListener('click', ()=>{
	data += Number(document.querySelector('.adaptability').value);
    sroki = (data/2500);
	document.querySelector('.out').innerHTML = data +" Р";
	document.querySelector('.out1').innerHTML = sroki +" Д";
	data = 0;
	sroki = 0;
});
	


$('a[href^="#"]').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"})
});

function outNum(num,elem, time, step){
	let l = document.querySelector('#'+elem);
	let n = 0;
	let t = Math.round(time/(num/step));
	let interval = setInterval(()=>{
		n = n + step;
		if (n ==num){
			clearInterval(interval);
		}
		l.innerHTML = n;

	},
		t);
}
let iteration = 0;
function onEntry(entry){
	entry.forEach(change =>{
		if((change.isIntersecting) && (iteration >= 6) && (iteration <= 7)){
			change.target.classList.add('show-animation');
			setTimeout(outNum, 1500, 120, "out-1", 5000, 1);
			setTimeout(outNum, 2500, 4600, "out-2", 5000, 20);
			setTimeout(outNum, 3500, 340, "out-3", 5000, 5);
			setTimeout(outNum, 4500, 23, "out-4", 5000, 1);
			iteration = iteration + 1;
			
		}
		else if (change.isIntersecting){
			change.target.classList.add('show-animation');
			iteration = iteration + 1;
		}
	});
}
	
var myModalEl = document.querySelector('#myModal');
var modal = bootstrap.Modal.getOrCreateInstance(myModalEl);


/*$(window). on('load', function(){
				$('.preloader').delay(1000).fadeOut(300)
			});
*/
