// Make the image interactive and move to top left.
document.getElementById("myImage").onclick = function() {
    this.classList.add('moving');
    document.getElementById('content').style.animation = 'fadeOut 0.3s';
    setTimeout(function() {
        window.location.href = "FinalProject2/FinalProject2.html";
    }, 1000);
    this.classList.add('moved');  
    
document.getElementById('ghg').addEventListener('click', function() {
    document.getElementById('ghg-info').style.display = 'block';
    this.classList.add('clicked');
});} // Creating ghg tag so that if the users want to know what it is. 
