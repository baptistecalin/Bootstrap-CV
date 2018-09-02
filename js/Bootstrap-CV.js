function changeLanguage(lang){
    if(lang == "FR"){
        showDiv("FR", true);
        showDiv("EN", false);
    }else if(lang == "EN"){
        showDiv("FR", false);
        showDiv("EN", true);
    }
}

function showDiv(lang, show){
    var divs = document.getElementsByClassName("lang"+lang);
    var i;
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = show ? "inline" : "none";
    }
}