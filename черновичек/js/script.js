"use strict"

$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.button__blue,.menu__body').toggleClass('active');
	});
}); 
$("#burger").bind("click", function() {
      let src = ($(this).attr("src") === "img/menu.png")
                    ? "img/crossing.png" 
                    : "img/menu.png";
      $(this).attr("src", src);
});