
// $("nav > ul > li > a").mouseenter(function(event){
//     if(event.target.id !== 'dropdown'){
//         drawCar(current, event.target.id); 
//         drawPrice(current, event.target.id);

//         if(partial_trigger){
//             partial.innerHTML = '';
//             drawPartial(event.target.id);
//         }
//     }    
// })

// $("nav > ul > li > a").mouseleave(function(){
//     drawCar(current, lastItem);
//     drawPrice(current, lastItem);
//     if(partial_trigger){
//         partial.innerHTML = '';
//         drawPartial(lastItem);
//     }
// })

$("nav > ul > li > a").click(function(event){
    if(event.target.id !== 'dropdown'){ 
        $("nav > ul > li > a").removeClass('active_link');
        $(this).addClass('active_link');
        event.preventDefault();
        lastItem = event.target.id;
        drawCar(current, lastItem); 
        drawPrice(current, lastItem);
    }
})


$("nav > ul > li > a#dropdown").click(function(event){
    event.preventDefault();
    if(lastItem == 'all'){
        alert('Вы выбрали максимальную комплектацию');
        return;
    }
        
    $(this).toggleClass('submenu_link');
    $(this).find("~ ul").stop().slideToggle("slow");  

    $('i.fas').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
            
    if(partial_trigger == false){
        drawPartial(lastItem);
        partial_trigger = !partial_trigger;
    } else {
        partial.innerHTML = '';
        partial_trigger = !partial_trigger;
    }   
})

$('ul.submenu > li > a').click(function(event){
    event.preventDefault();
    $(this).toggleClass('active_link');
    partial_services[event.target.id] = !partial_services[event.target.id];
    drawPrice(current, lastItem);
})

$('.submenu > li > a').mouseenter(function(event){
    event.preventDefault();
    drawCar(current, event.target.id);
    drawPrice(current, lastItem);
})

    


function reset(){
    $("nav > ul > li > a, ul.submenu > li > a ").removeClass('active_link');
    document.getElementById('standart++').classList = "active_link";
    $("ul.submenu").css("display", "none");
    $("nav > ul > li > a#dropdown").removeClass('submenu_link');
    $("i.fas").removeClass('fas fa-angle-up fa-lg').addClass('fas fa-angle-down fa-lg');
    partial_trigger = false;
    partial.innerHTML = '';
    for(let key in partial_services){
        partial_services[key] = false;
    }
    drawPrice(current, lastItem);
}