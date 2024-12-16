function light(sw){
    let pic;
    if(sw==0){
        pic= "https://www.w3schools.com/js/pic_bulboff.gif"
        document.getElementById("heading").style.color="white"
    }else{
        pic ="https://www.w3schools.com/jsref/bulbon.gif"
        document.getElementById("heading").style.color="yellow"

    }
    document.getElementById("myimg").src=pic;
    
}
