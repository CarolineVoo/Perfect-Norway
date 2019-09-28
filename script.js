
$(document).ready(function(){
    $('.intro-text').css('opacity', 0);
    $('.box-map').css('opacity', 0);
    $('.box-img').css('opacity', 0);

    

    $('.section-fact').waypoint(function(direction){
        if(direction == 'down'){
            $('.js-fadeIn').addClass('animated fadeIn');
            $('.js-fadeIn').css('animation-duration', '1s'); 
        }else{
            $('.js-fadeIn').removeClass('animated fadeIn'); 
        }
    }, {offset: '70%'});
    
    $('.section-fact').waypoint(function(direction){
        if(direction == 'up'){
            $('.js-fadeIn').addClass('animated fadeIn');
            $('.js-fadeIn').css('animation-duration', '2s');  
        }else{
            $('.js-fadeIn').removeClass('animated fadeIn');  
        }
    }, { offset: '-100%' });


    
    $('.section-mapOfNorway').waypoint(function(direction){
        if(direction == 'down'){
            $('.js-fadeInLeft').addClass('animated fadeInLeft');
            $('.js-fadeInLeft').css('animation-duration', '2s');  
        }else{
            $('.js-fadeInLeft').removeClass('animated fadeInLeft');  
        }
    }, { offset: '70%' });

    $('.section-mapOfNorway').waypoint(function(direction){
        if(direction == 'up'){
            $('.js-fadeInLeft').addClass('animated fadeInLeft');
            $('.js-fadeInLeft').css('animation-duration', '2s');  
        }else{
            $('.js-fadeInLeft').removeClass('animated fadeInLeft');  
        }
    }, { offset: '-100%' });
    


    $('.section-mapOfNorway').waypoint(function(direction){
        if(direction == 'down'){
            $('.js-fadeInRight').addClass('animated fadeInRight'); 
            $('.js-fadeInRight').css('animation-duration', '2s');   
        }else{
            $('.js-fadeInRight').removeClass('animated fadeInRight');  
        }
    }, { offset: '70%' });
    
    $('.section-mapOfNorway').waypoint(function(direction){
        if(direction == 'up'){
            $('.js-fadeInRight').addClass('animated fadeInRight'); 
            $('.js-fadeInRight').css('animation-duration', '2s');   
        }else{
            $('.js-fadeInRight').removeClass('animated fadeInRight');  
        }
    }, { offset: '-100%' });


/*
    $('.js-map-text').waypoint(function(direction){
        if(direction === 'down'){
            $('.js-map-text').addClass('animated fadeInLeft');
            $('.js-map-text').prev().removeClass("animated fadeInLeft");
        }
    }, {offset:'70%'}).waypoint(function(direction){
        if(direction === 'up'){
            $('.js-map-text').addClass('animated fadeInLeft');
            $('.js-map-text').next().removeClass("animated fadeInLeft");
        }
    }, { offset: '0%'}
    
    );
*/


    $('.js-intro-box').waypoint(function(direction){
        if(direction == "down"){
            $('.js-intro-box').addClass('animated heartBeat'); 
            $('.js-intro-box').css('animation-duration', '1.5s');   
        }else{
            $('.js-intro-box').removeClass('animated heartBeat');  
        }
    }, { offset: '60%' });

    $('.js-intro-box').waypoint(function(direction){
        if(direction == "up"){
            $('.js-intro-box').addClass('animated heartBeat'); 
            $('.js-intro-box').css('animation-duration', '1.5s');   
        }else{
            $('.js-intro-box').removeClass('animated heartBeat');  
        }
    }, { offset: '0%' });
    
    
}); 
    

console.log("TEST");    