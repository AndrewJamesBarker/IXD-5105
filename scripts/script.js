
$(window).on("load", function() {

$('.search-button').hide();

$('#searchMenuOpen').hide();

$('.chevDown3').hide();

$('#writingCourses').hide();

$('#searchMenu').on('click',function(){
    $('.search-button').toggle(300);
    $('#searchMenuOpen').toggle(300);  
    $(this).toggle(300); 
    
});

$('.search-button').on('click',function(){
    $('#searchMenu').toggle(300);
    $('#searchMenuOpen').toggle(300);  
    $(this).hide(300); 
    
});


$('#menu-toggle').on('click',function(){
    $('#main-menu').show(500);   
});

$('#humberLogoWhite').on('click',function(){
    $('#main-menu').hide(500);   
});

    // $('.chevRight3').on('click',function(){ 
    //     $('#writingCourses').show(500);
    //     $(this).toggle();
    //     $('.chevDown3').toggle(500);
    // });

    // $('.chevDown3').on('click',function(){ 
    //     $('#writingCourses').hide(500);
    //     $(this).toggle();
    //     $('.chevRight3').show(500);
    // });

    $('#writingListTitle').on('click',function() {
        $('#writingCourses').toggle(500);
        $('.chevRight3').toggle(500);
        $('.chevDown3').toggle(500);
    });

    $('#closeWindowBtn').on('click',function(){
        $('#main-menu').hide(500);   
         $('#writingCourses').hide(500);
    });
    


});