WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true
		})
	}


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			autoHeight: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 2,
			breakpoints: {
				0: {
					// slidesPerView: 1
					slidesPerView: 2
				},
				480: {
					slidesPerView: 2
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				},
				1280: {
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Categories slider
	const categoriesSliders = [],
		categories = document.querySelectorAll('.categories .swiper')

	categories.forEach((el, i) => {
		el.classList.add('categories_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 2,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		categoriesSliders.push(new Swiper('.categories_s' + i, options))
	})


	// Banners slider
	const bannersSliders = [],
		banners = document.querySelectorAll('.banners_slider .swiper')

	banners.forEach((el, i) => {
		el.classList.add('banners_s' + i)

		let options = {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			on: {
				beforeSlideChangeStart: swiper => {
					$(swiper.el).find('video').get(0).pause()

					pauseAllVideos()
				}
			}
		}

		bannersSliders.push(new Swiper('.banners_s' + i, options))
	})


	// About info slider
	const aboutInfoImagesSliders = [],
		aboutInfoImages = document.querySelectorAll('.about_info .images .swiper')

	aboutInfoImages.forEach((el, i) => {
		el.classList.add('about_info_images_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			nested: true,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		aboutInfoImagesSliders.push(new Swiper('.about_info_images_s' + i, options))
	})


	const aboutInfoSliders = [],
		aboutInfo = document.querySelectorAll('.about_info > .swiper')

	aboutInfo.forEach((el, i) => {
		el.classList.add('about_info_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.about-swiper-button-next',
				prevEl: '.about-swiper-button-prev'
			}
		}

		aboutInfoSliders.push(new Swiper('.about_info_s' + i, options))
	})


	// Instagram slider
	const instagramSliders = [],
		instagram = document.querySelectorAll('.instagram .swiper')

	instagram.forEach((el, i) => {
		el.classList.add('instagram_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 2,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				768: {
					slidesPerView: 3
				},
				1024: {
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.image').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.image').outerHeight() * 0.5
						)
					})
				}
			}
		}

		instagramSliders.push(new Swiper('.instagram_s' + i, options))
	})


	// Look book slider
	const lookBookSliders = [],
		lookBook = document.querySelectorAll('.look_book .swiper')

	lookBook.forEach((el, i) => {
		el.classList.add('look_book_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 2,
			breakpoints: {
				0: {
					slidesPerView: 1
				},
				480: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('> .swiper-button-next, > .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		lookBookSliders.push(new Swiper('.look_book_s' + i, options))
	})


	// Info block slider
	const infoBlocksSliders = [],
		infoBlocks = document.querySelectorAll('.info_blocks .slider .swiper')

	infoBlocks.forEach((el, i) => {
		el.classList.add('info_blocks_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		}

		infoBlocksSliders.push(new Swiper('.info_blocks_s' + i, options))
	})


	// Links slider
	const productsLinksSliders = [],
		productsLinks = document.querySelectorAll('.products_head .links .swiper')

	productsLinks.forEach((el, i) => {
		el.classList.add('products_links_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		productsLinksSliders.push(new Swiper('.products_links_s' + i, options))
	})


	// Videos slider
	const videosSliders = [],
		videos = document.querySelectorAll('.videos .swiper')

	videos.forEach((el, i) => {
		el.classList.add('videos_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 'auto'
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 2
				}
			}
		}

		videosSliders.push(new Swiper('.videos_s' + i, options))
	})


	// Product colors slider
	const productColorsSliders = [],
		productColors = document.querySelectorAll('.product_info .colors .swiper')

	productColors.forEach((el, i) => {
		el.classList.add('product_colors_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 22,
			slidesPerView: 'auto'
		}

		productColorsSliders.push(new Swiper('.product_colors_s' + i, options))
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Mob. menu
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('lock')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('lock')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Select file
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Submenu on the touch screen
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const dropdown = $(this).next()

			if (dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Change the amount
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// LK - Orders
	$('.lk_info .orders .order .head').click(function(e) {
		e.preventDefault()

		let order = $(this).closest('.order')

		order.toggleClass('open').find('.data').slideToggle(300)
	})


	// Product description spoler
	$('.product_desc .block_head .title').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.product_desc')

		$(this).toggleClass('active')
		parent.find('.text_block').slideToggle(300)
	})


	// Product sizes spoler
	$('.product_sizes .block_head .title').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.product_sizes')

		$(this).toggleClass('active')
		parent.find('.text_block').slideToggle(300)
	})


	// Videos spoler
	$('.videos .block_head .title').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.videos')

		$(this).toggleClass('active')
		parent.find('.slider').slideToggle(300)
	})


	// Product page
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			lazy: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 20,
			slidesPerView: 1,
			lazy: true,
			thumbs: {
				swiper: productThumbs
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			}
		})
	}


	// Filter
	$('.filter_btn').click(function(e) {
		e.preventDefault()

		$('#filter_modal').addClass('show')
		$('.overlay').fadeIn(300)
	})


	$('#filter_modal .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('#filter_modal').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	$('#filter_modal .item .name').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$('#filter_modal .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	priceRange = $('#filter_modal #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 3000,
		from: 895,
		to: 1360,
		step: 5,
		onChange: data => {
			$('#filter_modal .price_range .range_val .from').text(data.from.toLocaleString())
			$('#filter_modal .price_range .range_val .to').text(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('#filter_modal .price_range .range_val .from').text(data.from.toLocaleString())
			$('#filter_modal .price_range .range_val .to').text(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')


	$('.filter .reset_btn').click(function() {
		if(priceRange) {
			priceRange.reset()
		}
	})


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})

	// Close the popup when you click on the cross in the popup
	$('.mini_modal .close_btn').click(e => {
		e.preventDefault()

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Product to cart
	$('.product .buy_btn, .product_info .buy .buy_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Product to favorite
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Youtube
	var players = []

	function onYouTubeIframeAPIReady() {
		var iframes = document.querySelectorAll('.youtube-player')

		iframes.forEach(function(iframe, i) {
			let videoId = iframe.getAttribute('data-video-id')

			players[i] = new YT.Player(iframe, {
				videoId: videoId
			})
		})
	}


	function pauseAllVideos() {
		players.forEach(function(player) {
			player.pauseVideo()
		})
	}
})



window.addEventListener('load', function () {
	// Fix. header
	headerInit = true,
	headerHeight = $('header').outerHeight()

	$('header:not(.absolute)').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Fix. mob. header
	mobHeaderInit = true,
	mobHeaderHeight = $('.mob_header').outerHeight()

	$('.mob_header:not(.absolute)').wrap('<div class="mob_header_wrap"></div>')
	$('.mob_header_wrap').height(mobHeaderHeight)

	mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')
})



window.addEventListener('scroll', function () {
	// Fix. header
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > headerHeight
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')

	// Fix. mob. header
	typeof mobHeaderInit !== 'undefined' && mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Fix. header
		headerInit = false
		$('.header_wrap').height('auto')

		setTimeout(() => {
			headerInit   = true
			headerHeight = $('header').outerHeight()

			$('.header_wrap').height(headerHeight)

			headerInit && $(window).scrollTop() > headerHeight
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')
		}, 100)


		// Fix. mob. header
		mobHeaderInit = false
		$('.mob_header_wrap').height('auto')

		setTimeout(() => {
			mobHeaderInit = true
			mobHeaderHeight = $('.mob_header').outerHeight()

			$('.mob_header_wrap').height(mobHeaderHeight)

			mobHeaderInit && $(window).scrollTop() > mobHeaderHeight
				? $('.mob_header').addClass('fixed')
				: $('.mob_header').removeClass('fixed')
		}, 100)


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})