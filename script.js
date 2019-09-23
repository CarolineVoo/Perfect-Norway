
$(document).ready(function(){

    $('.js-map-text').waypoint(function(direction){
        if(direction == "down"){
            $('.js-map-text').addClass('animated fadeInLeft');
            $('.js-map-text').css('animation-duration', '2s');  
        }else{
            $('.js-map-text').removeClass('animated fadeInLeft');  
        }
    }, { offset: '70%' });
    

    $('.js-map-img').waypoint(function(direction){
        if(direction == "down"){
            $('.js-map-img').addClass('animated fadeInRight'); 
            $('.js-map-img').css('animation-duration', '2s');   
        }else{
            $('.js-map-img').removeClass('animated fadeInRight');  
        }
    }, { offset: '70%' });


    
    $('.js-intro-box').waypoint(function(direction){
        if(direction == "down"){
            $('.js-intro-box').addClass('animated fadeInRight'); 
            $('.js-intro-box').css('animation-duration', '2s');   
        }else{
            $('.js-intro-box').removeClass('animated fadeInRight');  
        }
    }, { offset: '60%' });
    
    
}); 
    

console.log("TEST");    