let image = document.getElementById('image');
let showcase = document.getElementById('showcase');
let partial = document.getElementById('partial');
let partial_trigger = false;
let current = '';
let lastItem;



$('#car_class a').click(function(event){
        event.preventDefault();
        $(".current").removeClass("current");
        $(this).parent().addClass("current");
        current = event.target.id;
        lastItem = 'standart++';
        reset();
        drawCar(current, lastItem);
        $("nav").addClass('active');
        $("#price, #recall").css('display', 'block');
        $("body,html").animate({scrollTop: $('#price').offset().top }, 800);
        
})

function drawCar(current, mod){
    image.setAttribute('src', `img/cars/${current}/${mod}.jpg`);
}



