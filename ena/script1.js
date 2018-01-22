(function($) {
    'use strict';
    $('#collapseOne, #collapseTwo, #collapseThree, #collapseFour').on({
    
      'show.bs.collapse': function() {
        $('a[href="#' + this.id + '"] span.glyphicons-chevron-down')
          .addClass('glyphicons-chevron-up');
      },
      
      'hide.bs.collapse': function() {
        $('a[href="#' + this.id + '"] span.glyphicon-chevron-up')
          .addClass('glyphicons-chevron-down');
      }
    });
  })(jQuery);