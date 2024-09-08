// <!-- Initialize white navbar -->
$(window).on('scroll',function () {
    var scrollDistance = $(window).scrollTop();
    if (scrollDistance > 100) {
        $('header .navbar').addClass('navNew')
        $('.logo').attr('src','img/logo.png');
    }else{
        $('header .navbar').removeClass('navNew')
        $('.logo').attr('src','img/logo-white.png');   
    }
    
})

$('.show li a').addClass('text-center')
//how to go to the click section from nav
$("#navbar").find(".link").click(function(e) {
  e.preventDefault();
  $( ".show" ).removeClass( "show" )
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top - 100
  },2000,"swing");
});
$("footer ul").find("a").click(function(e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
      scrollTop: $(section).offset().top - 100
  },2000,"swing");
});





AOS.init({
    once: true
   
  });
 //controol products elements
 $("#products .btn-custom").click(
    function() {
      $("#products .btn-custom").toggleClass("seen");
      if($("#products .btn-custom").hasClass('seen')){
        $("#products .btn-custom p").text('show Less');	
        $("#products .btn-custom i").removeClass( "fas fa-arrow-down" ).addClass("fas fa-arrow-up");
       
  
        $("#products .hiddable" ).animate({
          opacity: 1,
          height: "88%"
        }, 500)
       
       
          } else {
        $("#products .btn-custom p").text('show More');
        $("#products .btn-custom i").removeClass( "fas fa-arrow-up" ).addClass("fas fa-arrow-down");      
        $("#products .hiddable" ).animate({
          opacity: 0,
          height: "0"
        }, 500)      
          }
    }
  )
  