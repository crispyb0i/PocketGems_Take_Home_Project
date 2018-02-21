$(function() {
  //Assigning Quantity To Rewards (10 = max)
  $(document).ready(function(e) {
    $(".col").each(function(){
      if($(this).find('.icon').attr('data-quantity')!==undefined && $(this).find('.icon').attr('data-quantity')==10){
        $(this).append('<p>' + $(this).find('.icon').attr('data-quantity') + '</p>');
        $(this).find('p').css("color","gold");
      }
      else if($(this).find('.icon').attr('data-quantity')!==undefined){
        $(this).append('<p>' + $(this).find('.icon').attr('data-quantity') + '</p>');
      }
      //Grayscale All Locked Rewards
      if($(this).find('.icon').attr('data-locked')==="true"){
        $(this).find('.icon').css({"-webkit-filter":"grayscale(90%)","filter":"grayscale(100%)"});
      }
    })
  });
  
  // Modal Toggle Function
  $('.img-modal').click(function(e){
    $('.modal-image').attr('src',$(this).attr("src"));
    $('.modal-image').css({"-webkit-filter":"grayscale(0%)","filter":"grayscale(0%)"});
    if(e.target.dataset.quantity==10){
      $('.modal-header').html(e.target.dataset.title + " (MAX)")
    }else if(e.target.dataset.quantity!==undefined && e.target.dataset.locked==="false"){
      $('.modal-header').html(e.target.dataset.title + " (x" + e.target.dataset.quantity + ")")
    }else if(e.target.dataset.locked==="true"){
      $('.modal-header').html(e.target.dataset.title + " (LOCKED)");
      $('.modal-image').css({"-webkit-filter":"grayscale(90%)","filter":"grayscale(100%)"});
    }else{
      $('.modal-header').html(e.target.dataset.title)
    }
    $('#modal').modal('toggle');
  })

  // Legendary Rewards Pagechange Animation
  $('.leftButton').click(function(){
    $('.pagination2').hide();
    $('.pagination1').show();
    $('.page2').fadeOut("slow");
    $('.page2').hide();
    $('.page1').fadeIn("slow");
  })
  $('.rightButton').click(function(){
    $('.pagination1').hide();
    $('.pagination2').show();
    $('.page1').fadeOut("slow");
    $('.page1').hide();
    $('.page2').fadeIn("slow");
  })
});
