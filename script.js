$(document).ready(() => {
    $('.menu-button').on('mouseenter',() => {
      $('.nav-menu.hide').slideToggle();
      $('.login-form').hide();
      $(".contact").hide();
    });
    $(".nav-menu.hide").on("mouseleave", () =>{
      $(".nav-menu.hide").hide();
    });
      
    $(".login-button").on("mouseenter", () => {
      $(".login-form").slideToggle();
      $('.nav-menu.hide').hide();
      $('.contact').hide();
    });

    $(".login-form").on("mouseleave", () =>{
      $(".login-form").hide();
    });

    $(".contact-button").on('mouseenter',() => {
    $(".contact").slideToggle();
    $(".login-form").hide();
    $(".nav-menu.hide").hide();
    });

    $(".contact").on("mouseleave", () =>{
      $(".contact").hide();
    });
    
    $(".arrow-one").on("click", () => {
      $(".shoe-details-one").toggle();
    });
    
    
    $(".arrow-two").on("click", () => {
      $(".shoe-details-two").toggle();
    });
    
    
    $(".arrow-three").on("click", () => {
      $(".shoe-details-three").toggle();
    });
    $(".sizes-one").on("click", ()  => {
      $(".text-one").fadeIn();
    });
  });