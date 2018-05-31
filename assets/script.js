$(function(){

	//-----------------
	var oAnime = anime({
		targets: '.header',
  		translateY: {
		    value: [-300,500],
		    duration: 800
		},
		opacity: {
		    value: 1,
		    duration: 800
		},
		rotate: {
		    value: 360,
		    duration: 1800,
		    easing: 'easeInOutSine'
		},
		scale: {
		    value: 2,
		    duration: 1600,
		    delay: 800,
		    easing: 'easeInOutQuart'
		},
		// delay: 250 // All properties except 'scale' inherit 250ms delay
		autoplay: false

	});



	var oFormAnimation = anime({
		targets: 'form .formGroup label',
  		translateY: {
		    // value: [1000,0],
		    value:function(el, i, l){
		    	return [(i+1)*500,0];
		    },
		    // duration: 2000,
		},

		easing: 'easeInOutQuart',
		
		// delay : function(el, i, l) {

		// 	return i * 500;
		// }, 

		// All properties except 'scale' inherit 250ms delay
		autoplay: false

	});


	var oFormAnimation2 = anime({
		targets: 'form .formGroup input',
  		translateX: {
		    // value: [1000,0],
		    value:function(el, i, l){
		    	return [(i+1)*500,0];
		    },
		    // duration: 2000,
		},

		easing: 'easeInOutQuart',
		delay:2000,
		
		// delay : function(el, i, l) {

		// 	return i * 500;
		// }, 

		// All properties except 'scale' inherit 250ms delay
		autoplay: false

	});

	var oWaveAnimation = anime({
		targets: '.section5>div',
  		translateY: {
		    // value: [1000,0],
		    value:function(el, i, l){
		    	return [(i)*100,0];
		    },
		    // duration: 2000,
		},

		easing: 'easeInOutQuart',
		
		// delay : function(el, i, l) {

		// 	return i * 500;
		// }, 

		// All properties except 'scale' inherit 250ms delay
		autoplay: false

	});

	var oWaveAnimationinner = anime({
		targets: '.section5>div>div',
  		translateY: {
		    // value: [1000,0],
		    value:function(el, i, l){
		    	return [(i+1)*(-15),(i+1)*15];
		    },
		    duration: 1000,
		},

		// backgroundPositionX: {
		//     // value: [1000,0],
		//     value:function(el, i, l){
		//     	return [((i+1)*(-15)) +'px',((i+1)*15)+'px'];
		//     },
		//     duration: 1000,
		// },

		easing: 'easeInOutQuart',
		
		// delay : function(el, i, l) {

		// 	return i * 500;
		// }, 

		// All properties except 'scale' inherit 250ms delay
		autoplay: true,
		direction:'alternate',
		loop:true

	});



	var offset5 = $('.section5').offset().top;

	var iSection2Start = $('.section2').offset().top;
	var iSection2Height = $('.section2').height();
	var iSection2End = iSection2Start + iSection2Height;

	$('h1').addClass('invisible');

	$(document).on('scroll',function(e){
		var iScrollTop = $(document).scrollTop();

		if(iScrollTop>=0 && iScrollTop<=500){

			oAnime.seek(oAnime.duration * (iScrollTop / 500));
		
		}

		if(iScrollTop>=500 && iScrollTop<=1000){

			oFormAnimation.seek(oFormAnimation.duration * ((iScrollTop-500) / 500));
			oFormAnimation2.seek(oFormAnimation2.duration * ((iScrollTop-500) / 500));
		
		
		}

		if(iScrollTop>=offset5-500){


			oWaveAnimation.seek(oWaveAnimation.duration * ((iScrollTop-offset5+500) / 500));
			console.log(((iScrollTop-offset5+500) / 500));
	
		
		
		}

	

	

		$('.section2').css({'backgroundPositionX':iScrollTop/2+'px'});
		//$('.section2 .layer2').css({'backgroundPositionY':iScrollTop/2+'px'});

		$('.header-container h1').each(function(i,el){
			var iTop = $(el).offset().top;

			if(iScrollTop>iTop-700){

				if($(el).hasClass('invisible')){
					$(el).removeClass('invisible');
					$(el).addClass('slideInLeft');
					$(el).parent().addClass('grow');
				}
				
			}else{

				if(!$(el).hasClass('invisible')){
					$(el).removeClass('slideInLeft').addClass('slideOutLeft').one('animationend',function(){
						$(this).removeClass('slideOutLeft').addClass('invisible');
						$(el).parent().removeClass('grow');

					});
					
				}
				
			}
		});


	});
})