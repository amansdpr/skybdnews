(function ($) {
    'use strict';

    jQuery(document).ready(function () {
      

        /*  -------------------------------------------------------------------------  *
         *                   02. change Menu background on scroll donw                 *
         *  -------------------------------------------------------------------------  */
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

    });

})(jQuery);