let price = {
    'standart+++' : 30000,
    'standart++' : 25000,
    'standart+' : 23000,
    'standart' : 19000,
    'minimal' : 15000,
    'all' : 50000
}

let coeficients = {
    'mini' : 1,
    'middle' : 1.4,
    'premium' : 1.9
}

let partial_services = {
    'headlights' : false,
    'inside_tresholds' : false,
    'outside_tresholds' : false,
    'doors' : false,
    'rear_wing' : false,
    'hood' : false,
    'front_bumper' : false,
    'rear_bumper' : false
}

function drawPrice(current, mod){
    let output = document.getElementById("output");
    let sum = Math.round(price[mod] * coeficients[current]);
    if(mod !== 'all'){
        for(let key in partial_services){
            if(partial_services[key]){
                sum += 3000;
            }
        }
    } 
    output.innerHTML =  sum;
}