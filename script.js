

var colonne3 = document.getElementById("colonne3");
var i;
for (i = 0; i < 36; i++) {
 if (i%2 == 0){
    var leHTMLdecollone3 = `
    <div class="nombre">
      <svg class="fondNombreNoir" height="42" width="62">
      <ellipse cx="30" cy="20" rx="25" ry="16" />
      </svg>
    <p>${i+1}</p>
    <div class="image">
      <img id=image${i+1} src="1_euro.png"/>
    </div>
  </div>
 
  `;
}
else {
  var leHTMLdecollone3 = `
    <div class="nombre">
      <svg class="fondNombreRouge" height="42" width="62">
      <ellipse cx="30" cy="20" rx="25" ry="16" />
      </svg>
    <p>${i+1}</p>
    <div class="image">
      <img id=image${i+1} src=""/>
    </div>
  </div>
  `;
}
  colonne3.innerHTML += leHTMLdecollone3;
}
;

var images = document.getElementsByTagName("img");

for (image of images) {
console.log(image);
console.log(image.getAttribute("src"));}
;

for (image of images) {
  image.addEventListener('click', function(e){
    e.preventDefault();
    if (image.getAttribute("src").value = ""){
     image.setAttribute("src","1_euro.png");
    }
    else if (image.getAttribute("src").value = "1_euro.png"){
      image.setAttribute("src","2_euros.png");
     }
  else {
    image.setAttribute("src","5_euros.png");
    }
  })
}; 