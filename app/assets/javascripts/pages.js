
$(document).ready(function() {
	var height = $(window).height();	
    $('.main').css('height', height);
    $('.bottom').css('height', height);

    
$('.filtering').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  autoplaySpeed: 2000, 
  cssEase: 'ease',
  dots: 'true'
});

var filtered = false;

$('.js-filter').on('click', function(){
  if(filtered === false) {
    $('.filtering').slickFilter(':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slickUnfilter();
    $(this).text('Filter Slides');
    filtered = false;
  }
});

				
});