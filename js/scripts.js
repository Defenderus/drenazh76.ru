$(function() {	

	wow = new WOW({
		mobile: false
	});	
	wow.init();	
	
	const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	
	const scrollTop = ($(window).width() > 1) ? ($(window).height()*.5) : ($('.action').offset().top)

	function isVisibleUpDown() {
		if ($(this).scrollTop() > scrollTop) {			
			$(".up").addClass("is-visible")
		} else {			
			$(".up").removeClass("is-visible")
		}		
		if ($(this).scrollTop() > 0) {			
			$(".down").removeClass("is-visible")
		} else {			
			if ($('main > *:nth-of-type(2)').length > 0) {
				$(".down").addClass("is-visible")
			}
		}
	}

	isVisibleUpDown();

	$(window).scroll(function(){			
		isVisibleUpDown();
	})

	$('.down').click(function() {
		if ($('main > *:nth-of-type(2)').length > 0) {
			if ($(window).width() > 1200) {
				const top = $('main > *:nth-of-type(2)').offset().top - 129;	
				$('body,html').animate({scrollTop: top}, 1000)
			}
			if ($(window).width() <= 1199) {
				const top = $('main > *:nth-of-type(2)').offset().top - 94;	
				$('body,html').animate({scrollTop: top}, 1000)
			}
		} 
	});

	$('.up').click(function() {
		$('body,html').animate({scrollTop: 0}, 1000)
	});	

	$(window).scroll(function(){
		if ($('main > *:nth-of-type(2)').length > 0) {
			var scrollTop = $('main > *:nth-of-type(2)').offset().top - 130;
			if ($(this).scrollTop() > scrollTop) {
				$(".header").addClass("is-fixed");			
			} else {
				$(".header").removeClass("is-fixed");			
			};
		} 
	});

	$(".menu__link, .scroll-link").mPageScroll2id({
		offset: 129,
		scrollSpeed: 1000,
		forceSingleHighlight: true
	});
	if ($(window).width() <= 1199) {
		$(".menu__link, .scroll-link").mPageScroll2id({
			offset: 94
		});
	}

	const menu = $('.menu');	

	$('.hamburger').click(function() {
		if (menu.hasClass('visible')) {			
			menu.removeClass("visible");		
			$('.overlay').removeClass('is-visible');
			$('body').removeClass('noscroll');
			$(this).removeClass('is-active');	
		} else {			
			menu.addClass('visible');	
			$('.overlay').addClass('is-visible');
			$('body').addClass('noscroll');
			$(this).addClass('is-active');
		};
	});	

	$('.overlay').click(function(){	
		menu.removeClass("visible");		
		$(this).removeClass('is-visible');
		$('body').removeClass('noscroll');	
		$('.hamburger').removeClass('is-active');		
	});	

	$(".menu__link").click(function(){				
		if (menu.hasClass('visible')) {			
			menu.removeClass("visible");		
			$('.overlay').removeClass('is-visible');
			$('body').removeClass('noscroll');
			$('.hamburger').removeClass('is-active');	
		};			
	});	

	// открытие меню в бургере
  $('.header__menu-text').click(function(event) {
    $('.header__menu-text').toggleClass('sub-menu-active');
    $('.header__sub-menu').toggleClass('sub-menu-active');
  });

	$(".hero .tab").click(function(){
		if(!$(this).hasClass("active")) {
			$(".hero .tab").removeClass("active");
			$(this).addClass("active");
			$(".hero .img-box").removeClass("active").eq($(this).index()).addClass("active");
		};
	});
	// Переключать вкладку каждые 3 сек
	$(function() {
    var tabs = $('.hero .tab');
    tabs.click(function() { $(this).addClass('active').siblings('.active').removeClass('active'); });
    heroInterval = setInterval(function() {
      var onTab = tabs.filter('.active');
      var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
      nextTab.click();
    }, 3000);
		$('.tab-images').click(function() {
			clearInterval(heroInterval);
		});
	});

	// beauti-tabs
  $('.beauti-wrapper').each(function() {
    let ths = $(this);
    ths.find('.beauti-tab-item').not(':first').hide();
    ths.find('.beauti-tab').click(function() {
      ths.find('.beauti-tab').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.beauti-tab-item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });
	// Переключать вкладку каждые 5 сек
	$(function() {
    var tabs = $('.beauti-tab');
    tabs.click(function() { 
			$(this).addClass('active').siblings('.active').removeClass('active'); 
			// clearInterval(intervalID);
		});
    beautiInterval = setInterval(function() {
      var onTab = tabs.filter('.active');
      var nextTab = onTab.index() < tabs.length-1 ? onTab.next() : tabs.first();
      nextTab.click();
    }, 3000);
		$('.beauti-tab-img, .beauti-tab-text').click(function() {
			clearInterval(beautiInterval);
		});
	});

	// Аккордеон 
  $('.accordion-heading').click(function () {
    $(this).toggleClass('in').next().slideToggle();
    $('.accordion-heading').not(this).removeClass('in').next().slideUp();
  });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });	

	// magnificPopup image
  $('.image-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

	// magnificPopup video
  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
          enabled:true
        }
    });
  });

});