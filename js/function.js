$(function(){

	var indiceAtual = 0;
	var indiceMaximo = $('.artigo-art article').length;
	var delay = 5000;

	initSlider();
	clickSlider();

	function initSlider(){
		for(var i = 0; i < indiceMaximo; i++){
			if(i == 0){
				$('.bullets-nav').append('<span style="background-color: #069;"></span>');
			}else{
				$('.bullets-nav').append('<span></span>');
			}
		}

		$('.artigo-art article').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},delay);
	}

	function clickSlider(){
		$('.bullets-nav span').click(function(){
			$('.artigo-art article').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual = $(this).index();
			$('.artigo-art article').eq(indiceAtual).stop().fadeIn(2000);
			$('.bullets-nav span').css('background-color','#ccc');
			$(this).css('background-color','#069');

		});
	}

	function alternarSlider(){
		$('.artigo-art article').eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo)
			indiceAtual = 0;
		$('.bullets-nav span').css('background-color','#ccc');
		$('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
		$('.artigo-art article').eq(indiceAtual).stop().fadeIn(2000);
	}
});