//surround images in the article with an anker tag to enable lightbox support.
$( "div.section img" ).wrap(function() {
  return "<a data-lightbox='image' href='" + $( this ).attr('src') + "'></div>";
});