/*function modalShow(){
    document.getElementById("modal-kit").style.display = 'block';
}
function modalClose(){
    document.getElementById("modal-kit").style.display = 'none';
    }*/
$('body').on('click','.modal-show',function(){
    $('.modal-kit').show();
});
$('body').on('click','.modal-close',function(){
    $('.modal-kit').hide();
});
$(window).scroll(function(){
    let scrollHeight = parseInt($(window).scrollTop());
    if (scrollHeight < 300){
        $('.go-top').css('opacity','0')
    }else{
        $('.go-top').css('opacity','1')
    }
});
$(document).ready(function(){
    $('.cookies').slideDown('show');
});
$('body').on('click','.go-top',function(){
    $('body').animate({
        scrollTop:0
    }, 700);
});
$('body').on('click','.cookies-close',function(){
    $('.cookies').slideUp();
});

