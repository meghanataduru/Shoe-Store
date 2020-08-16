$(document).ready(() => {
    $('.menu-button').on('mouseenter',() => {
      $('.nav-menu.hide').slideToggle('slow');
      $('.login-form').hide();
      $(".contact").hide();
    });
      
    $(".login-button").on("mouseenter", () => {
      $(".login-form").slideToggle();
      $('.nav-menu.hide').hide();
      $('.contact').hide();
    });
    
    $(".arrow-one").on("click", () => {
      $(".shoe-details-one").toggle();
    });
    
    $(".sizes-one").on("click", () => {
      $(".text-one").fadeIn(1000);
    });
    
    $(".arrow-two").on("click", () => {
      $(".shoe-details-two").toggle();
    });
    
    $(".sizes-two").on("click", () => {
      $(".text-two").fadeIn();
    });
    
    $(".arrow-three").on("click", () => {
      $(".shoe-details-three").toggle();
    });
    
    $(".sizes-three").on("click", () => {
      $(".text-three").fadeIn(1000);
    });
    $(".text-one").on("click",()=>{
     
     var quantity = $('#number').text(parseInt($("#number").text()) + 1);
    });
    $(".text-two").on("click",()=>{
     
      $('#number').text(parseInt($("#number").text()) + 1);
     });
     $(".text-three").on("click",()=>{
     
      $('#number').text(parseInt($("#number").text()) + 1);
     });
     $(".contact-button").on('mouseenter',() => {
      $(".contact").slideToggle();
      $(".login-form").hide();
      $(".nav-menu.hide").hide();
      });
  
      $(".contact").on("mouseleave", () =>{
        $(".contact").hide();
      });

  });