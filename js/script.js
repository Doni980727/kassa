$(document).ready(function() {
  
  $(window).scroll(function () {
      
      console.log($(window).scrollTop())
      
    if ($(window).scrollTop() > 227) {
        
      $('#nav_bar').addClass('navbar-fixed');
        
    }
      
    if ($(window).scrollTop() < 228) {
        
      $('#nav_bar').removeClass('navbar-fixed');
        
    }
      
  });
    
});