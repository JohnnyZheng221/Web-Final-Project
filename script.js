// Make the image interactive and move to top left.
document.getElementById("myImage").onclick = function() {
    this.classList.add('moving');
    document.getElementById('content').style.animation = 'fadeOut 0.3s';
    setTimeout(function() {
        window.location.href = "FinalProject2/FinalProject2.html";
    }, 1000);
    this.classList.add('moved');  

var continents = ["Asia", "Africa", "North America", "South America", "Antarctica","Europe","Australia"];
var weather = ["Drought", "Heat Waves", "Hurricanes, Typhoons and Cyclones", "Tornadoes", "Wildfires", "Winter Storms"];

function createList(items) {
    var list = document.createElement('ul');
    for(var i = 0; i < items.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(items[i]));
        list.appendChild(item);
    }
    return list;
}

document.getElementById('ghg').addEventListener('click', function() {
    document.getElementById('ghg-info').style.display = 'block';
    this.classList.add('clicked');
});} // Creating ghg tag so that if the users want to know what it is. 
