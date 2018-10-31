let plans = {
    'standart+++' : ["icon_hood", "icon_full_wing", "icon_rear_bumper", "icon_mirrors", "icon_headlights", "icon_handles", "icon_fog_light", "icon_front_bumper"],
    'standart++' : ["icon_hood", "icon_full_wing", "icon_front_bumper", "icon_mirrors", "icon_headlights", "icon_handles", "icon_fog_light"],
    'standart+' : ["icon_hood", "icon_partly_wing", "icon_front_bumper", "icon_mirrors", "icon_headlights", "icon_handles", "icon_fog_light"],
    'standart' : ["icon_hood_partly", "icon_partly_wing", "icon_front_bumper", "icon_mirrors", "icon_headlights", "icon_handles", "icon_fog_light"],
    'minimal' : ["icon_thresholds", "icon_door_ends", "icon_rear_bumper", "icon_mirrors", "icon_headlights", "icon_handles"],
    'all' : []
}

let details_description = {
    "icon_hood" : "капот полностью",
    "icon_full_wing" : "крыла полностью",
    "icon_rear_bumper" : "задний бампер",
    "icon_mirrors" : "зеркала",
    "icon_headlights" : "фары",
    "icon_handles" : "ручки",
    "icon_fog_light" : "противотуманки",
    "icon_front_bumper" : "передний бампер",
    "icon_partly_wing" : "часть крыльев",
    "icon_thresholds" : "пороги внутренние",
    "icon_door_ends" : "тоцы дверей",
    "icon_hood_partly" : "часть капота"
}


function drawPartial(mod){
    let tmp = plans[mod];
    console.log(tmp.length);
    for(let i = 0; i < tmp.length; i++){
        let div = document.createElement('div');
        div.className = 'partial-block';
        div.innerHTML = `<img src="img/icons/${tmp[i]}.png" />
                        <span>${details_description[tmp[i]]}</span>`;
        partial.appendChild(div);
    }
}