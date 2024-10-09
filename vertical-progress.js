<script>
jQuery(document).ready(function($) {
    // Define the new HTML to be added inside the vertical progress container
    var additionalHtml = `
        <div class="swiper-container-wrapper swiper-container-wrapper--timeline">
            <!-- Timeline -->
            <ul class="swiper-pagination-custom">
                <li class='swiper-pagination-switch first active'><span class='switch-title'>01</span></li>
                <li class='swiper-pagination-switch'><span class='switch-title'>02</span></li>
                <li class='swiper-pagination-switch'><span class='switch-title'>03</span></li>
                <li class='swiper-pagination-switch last'><span class='switch-title'>04</span></li>
            </ul>
            <!-- Progressbar -->
//             <div class="swiper-pagination swiper-pagination-progressbar swiper-pagination-horizontal">
// 	<div class="active-overlay"></div>
// 	</div>   
  </div>
    `;

    // Insert the new HTML before the specified container
    $('.elementor-element-9436ac2').before(additionalHtml);

    // Optionally initialize Swiper if needed
//     if (typeof Swiper !== 'undefined') {
//         var swiper = new Swiper('.swiper-container', {
//             pagination: {
//                 el: '.swiper-pagination',
//                 type: 'progressbar',
//             },
//             // Add other Swiper options as needed
//         });
//     }
});
	
  jQuery(document).ready(function ($) {
    const $slickSlider = $('.elementor-element-7d44011');
    const $progressPagination = $('.swiper-pagination-custom');
    const $slickDots = $('.jet-slick-dots');

    // Initialize Slick slider with autoplay and animation speed
    $slickSlider.slick({
      dots: false,          // Enable dots navigation
      autoplay: true,      // Enable autoplay
      autoplaySpeed: 5000, // Autoplay speed in milliseconds (e.g., 3000ms = 3s)
      speed: 500,         // Animation speed in milliseconds (e.g., 1000ms = 1s)
      // Other Slick options if needed
    });

    // Function to update the progress pagination
    function updateProgressPagination(index) {
      // Remove 'active' class from all progress pagination switches
      $progressPagination.find('.swiper-pagination-switch').removeClass('active');
      
      // Add 'active' class to the correct progress pagination switch
      $progressPagination.find('.swiper-pagination-switch').eq(index).addClass('active');
    }

    // Function to update Slick dots based on the current slide
    function updateSlickDots(index) {
      // Remove 'slick-active' class from all Slick dots
      $slickDots.find('li').removeClass('slick-active');
      
      // Add 'slick-active' class to the correct Slick dot
      $slickDots.find('li').eq(index).addClass('slick-active');
    }

    // Handle clicks on the progress pagination
    $progressPagination.on('click', '.swiper-pagination-switch', function () {
      const index = $(this).index();
      $slickSlider.slick('slickGoTo', index);  // Go to the corresponding slide
      updateProgressPagination(index);         // Update progress pagination
      updateSlickDots(index);                  // Update Slick dots
    });

    // Handle changes in Slick slider to keep progress pagination and dots in sync
    $slickSlider.on('afterChange', function (event, slick, currentSlide) {
      updateProgressPagination(currentSlide); // Update progress pagination based on the current slide
      updateSlickDots(currentSlide);          // Update Slick dots based on the current slide
    });

    // Optionally, set initial state
    const initialIndex = $slickSlider.slick('slickCurrentSlide');
    updateProgressPagination(initialIndex);
    updateSlickDots(initialIndex);
  });
</script>

 
