n = 0;
document.addEventListener("click", function(e) {
    var a = e.target.closest("button[id='create']");
    if (a) {
        // The event passed through the element on its way to the document
        if (document.getElementById('spin') != null && document.getElementById('create') != null ) {
            document.getElementById('spin').style.visibility = 'visible';
            document.getElementById('create').disabled=true;
            setTimeout("document.getElementById('create').disabled=false", 300);
            setTimeout("document.getElementById('spin').style.visibility = 'hidden'", 300);
        }
        
        let layid = document.getElementById('otextto');
        let taophantu = document.createElement('div');
        taophantu.setAttribute = n;
        taophantu.id= 'text' + n;
        let textxx = taophantu.innerHTML='text' + taophantu.id;
        layid.innerHTML += textxx + "\n";
        console.log(textxx);
        n ++;    
    }
});