var content=document.getElementById("containerGrid");
for (var i = 3; i < 12; i++) {
	var image=document.createElement("img");
	var div=document.createElement("div");
	var span=document.createElement("p");
	var proyect=document.createTextNode("NOMBRE DEL PROYECTO");
	div.setAttribute("class","div-image");
	image.setAttribute("src","assets/img/img-"+i+".jpg");
	span.appendChild(proyect);
	div.appendChild(image);
	div.appendChild(span);
	content.appendChild(div);
}

/*Modal*/
var modal=document.getElementById("modal");/*Modal fondo*/
var close=document.getElementById("close");/*Button Close*/
var next=document.getElementById("next");
var prev=document.getElementById("previous");
var img = document.getElementById("containerGrid");/*Imagen alimentador*/
var contentImage=document.getElementById("viewImage");/*Contenedo de la imagen modal*/
var classImage = document.getElementsByClassName("div-image");/*clase imagenes*/
img.addEventListener("click",function(event){
		if (event.target.tagName == "IMG"){
			modal.style.display = "block";
			contentImage.src = event.target.src;
		}
},false);

close.addEventListener("click",function(){
	modal.style.display = "none";
});

next.addEventListener("click",function(event){
	/*IMPLEMENTAR*/
});

prev.addEventListener("click",function(event){
	/*IMPLEMENTAR*/
});