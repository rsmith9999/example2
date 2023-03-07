function openService(service) {
    var i;
    var x = document.getElementsByClassName("ecgService");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(service).style.display = "block";  
  }