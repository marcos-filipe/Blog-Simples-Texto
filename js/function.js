$(function(){

	var delay = 8000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){

		amt = $('.artigo-art').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.artigo-art').css('width',sizeBoxSingle+'%');
		$('.artigo-art-p').css('width',sizeContainer+'%');

		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.bullets-nav').append('<span style="background-color: rgb(170,170,170)"></span>');
			else
				$('.bullets-nav').append('<span></span>');			
		}
	

	}


	function autoPlay(){
		setInterval(function(){

			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);

		},delay)
		

	}


	function goToSlider(curIndex){

		var offSetX = $('.artigo-art').eq(curIndex).offset().left - $('.artigo-art-p').offset().left;
		$('.bullets-nav span').css('background-color','rgb(200,200,200)');
		$('.bullets-nav span').eq(curIndex).css('background-color','rgb(170,170,170)');
		$('.slider-destaque').stop().animate({'scrollLeft':offSetX+'px'});		
	}


	$(window).resize(function(){

		$('.slider-destaque').stop().animate({'scrollLeft':0});

	});

});