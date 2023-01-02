function myFunction(y) {
    y.classList.toggle("change");
    document.getElementById("nav-details").style.display="block";
  }

var count = 0;
var btn = document.getElementById('humburger');
function tapFunction(){
  var x= ++count;
  if(x==0){
    document.getElementById("nav-details").style.display="none";
  }
  if(x%2==0){
    document.getElementById("nav-details").style.display="none";
  }
  else{
    document.getElementById("nav-details").style.display="block";
  }
}
