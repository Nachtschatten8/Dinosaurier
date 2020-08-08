var elem = document.getElementById("Velociraptor")
elem.style.display = "none";
document.getElementsByName("Velociraptor")[0].onclick = function(ev) {
   var elem = document.getElementById("Velociraptor"); 
   
   if (elem.style.display == "none") { 
      elem.style.display = "block";
   }
  else {
        elem.style.display = "none";
   }
}