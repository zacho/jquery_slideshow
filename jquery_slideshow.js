// $Id: jquery_slideshow.js,v 1.1 2010/01/18 13:36:47 spydor Exp $
Drupal.behaviors.jQuerySlideshow = function(context) {
  if (Drupal.settings.jqueryslideshow) {
    jQuery.each(Drupal.settings.jqueryslideshow, function(id, options) {
      $('#' + id + ':not(".jqueryslideshow-processed")', context)
        .addClass('jqueryslideshow-processed')
        .css({height: options.height + 'px', width: options.width + 'px'})
        .cycle(options);
    });
  }
};