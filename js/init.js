(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".scrollspy").scrollSpy();
    $('.carousel').carousel({
      numVisible: 8,
      dist: 0
    });

    $('.modal').modal();

    setInterval(() => {
      let elem = document.getElementById("sponsor-carousel");

      var instance = M.Carousel.getInstance(elem);
      instance.next();
    }, 2500);

    $(document).scroll(function () {
      var $nav = $(".pushpin-nav");
      var scrollTop = $(this).scrollTop();
      $nav.toggleClass("white", scrollTop < $nav.height());
      $nav.toggleClass("red", scrollTop > $nav.height());

      $nav.toggleClass("scrolled", scrollTop > $nav.height());

      $nav.find(".nav-text")
        .toggleClass("black-text", scrollTop < $nav.height())
        .toggleClass("white-text", scrollTop > $nav.height());

    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
