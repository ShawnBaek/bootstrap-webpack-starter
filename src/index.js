import 'bootstrap/dist/css/bootstrap.css';
import 'swiper/dist/css/swiper.min.css';
import 'font-awesome/css/font-awesome.css';

import '../styles/fonts.css';
import '../styles/index.css';

var mySwiper = new Swiper ('.swiper-container', {
	centeredSlides: true,
	autoplay: 1500,
	direction: 'vertical',
	loop: true,
	speed: 700
});
