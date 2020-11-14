(function ($) {
    'use strict';

    jQuery(document).ready(function () {
      

        
        $(window).on('scroll', function () {
          var menu_area = $('.navbar-sticky');
          if ($(window).scrollTop() > 200) {
              menu_area.addClass('sticky-menu');
          } else {
              menu_area.removeClass('sticky-menu');
          }
        });


        $("#search-toggle").click(function(e){
          e.preventDefault();
          $(".search-form").toggleClass('show');
        });


       $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.menu-prepent',
        });

        // addclass & removeclass
        $(".menu-toggle").on("click", function() {
            $(".mobile-menu, .overlay-inn").addClass("active");
        });

        $(".overlay-inn").on("click", function() {
            $(".mobile-menu, .overlay-inn").removeClass("active");
        });

        // Show mobile sub menu when click arrow
        $('.mobile-menu ul.m-sub-menu').slideUp();
        $('.menu i.fa-caret-down').on('click', function(){
            $(this).toggleClass('fa-caret-up');
            $(this).prev('ul.m-sub-menu').toggleClass('show');
            $(this).prev('ul.m-sub-menu').slideToggle('slow');
        });






    });

})(jQuery);