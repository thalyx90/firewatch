$(function(){


	var oAnime = anime({
		targets: '.section1 .layer',
  		translateY: {
		    // value: [0,200],
		    value:function(el, i, l){
		    	return [0,(9-i)*50];
		    },
		    // duration: 2000,
		},

		easing: 'linear',

		autoplay: false

	});



	$(document).on('scroll',function(e){
		var iScrollTop = $(document).scrollTop();

		// if(iScrollTop<=540){

			oAnime.seek(oAnime.duration * (iScrollTop / 450));
		
		// }

	});

	//animate form

	// var oFormAnime1 = anime({
	// 	targets: 'form .form-group label',
 //  		translateX: {
	// 	    value: ['100vw',0],
	// 	    // value:function(el, i, l){
	// 	    // 	return [((i+1)*150)+'%',0];
	// 	    // },
	// 	    duration: 2000,
	// 	    delay:function(el, i, l){
	// 	    	return i*500;
	// 	    }
	// 	},


	// 	easing: 'easeInOutQuart',

	// 	autoplay: true

	// });

	// var oFormAnime2 = anime({
	// 	targets: 'form .form-group input',
 //  		translateX: {
	// 	    value: ['-100vw',0],
	// 	    // value:function(el, i, l){
	// 	    // 	return [((i+1)*150)+'%',0];
	// 	    // },
	// 	    duration: 2000,
	// 	    delay:function(el, i, l){
	// 	    	return i*500;
	// 	    }
	// 	},


	// 	easing: 'easeInOutQuart',

	// 	autoplay: true

	// });




	var TLParamsInheritance = anime.timeline({

		autoplay: true,
		easing: 'easeInOutQuart',
		autoplay: false
	});

	TLParamsInheritance
	  .add({
		targets: 'form .form-group label',
  		translateX: {
		    value: ['100vw',0],
		    // value:function(el, i, l){
		    // 	return [((i+1)*150)+'%',0];
		    // },
		    duration: 2000,
		    delay:function(el, i, l){
		    	return i*500;
		    }
		},
		opacity: {
		    value: [0,1],
		    // value:function(el, i, l){
		    // 	return [((i+1)*150)+'%',0];
		    // },
		    duration: 2000,
		    delay:function(el, i, l){
		    	return i*500;
		    },
		    
		},
		offset: 0



	})
	  .add({
		targets: 'form .form-group input',
  		translateX: {
		    value: ['-100vw',0],
		    // value:function(el, i, l){
		    // 	return [((i+1)*150)+'%',0];
		    // },
		    duration: 2000,
		    delay:function(el, i, l){
		    	return i*500;
		    },
		    
		},
		opacity: {
		    value: [0,1],
		    // value:function(el, i, l){
		    // 	return [((i+1)*150)+'%',0];
		    // },
		    duration: 2000,
		    delay:function(el, i, l){
		    	return i*500;
		    },
		    
		},
		offset: 0
	})
	  .add({
		targets: 'form .btn',
  		scale: {
		    value: [2,1],

		    
		},
		opacity:[0,1]
	
	});

	 $(document).on('scroll',function(e){
		var iScrollTop = $(document).scrollTop();

		var iScrollTopOffset = iScrollTop - 500;

		//if(iScrollTopOffset>0){

			TLParamsInheritance.seek(TLParamsInheritance.duration * (iScrollTopOffset / 400));
		
		//}

	});





})