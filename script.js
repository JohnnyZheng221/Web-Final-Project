document.getElementById("myImage").onclick = function() {
    this.classList.add('moving');
    document.getElementById('content').style.animation = 'fadeOut 0.3s';
    setTimeout(function() {
        window.location.href = "FinalProject2.html";
    }, 1000);
    this.classList.add('moved');  
}
