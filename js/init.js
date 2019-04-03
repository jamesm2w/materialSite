(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".scrollspy").scrollSpy();
    $('.carousel').carousel({
      numVisible: 8,
      dist: 0
    });

    setInterval(() => {
      let elem = document.getElementById("sponsor-carousel");

      var instance = M.Carousel.getInstance(elem);
      instance.next();
    }, 2500);

  }); // end of document ready
})(jQuery); // end of jQuery name space
