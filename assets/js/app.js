function creandoDiv(getUrl){
	var contenedor = document.getElementById("contenedor");
	var div = document.createElement("div");
	div.classList.add("contenedor-img");
	var img = document.createElement("img");
	img.setAttribute("src",getUrl);

	var divFecha = document.createElement("div");
	divFecha.setAttribute("id","div-abrir-venta");
	divFecha.classList.add("div-abrir-venta");
	var imgFecha = document.createElement("img");
	imgFecha.setAttribute("src","assets/img/Expand Arrow-26.png");
	divFecha.appendChild(imgFecha);

	var divVentana = document.createElement("div");
	divVentana.setAttribute("id","ventana-medidas");
	divVentana.classList.add("ventana-medidas");
	var inputWidth = document.createElement("input");
	var inputHeight = document.createElement("input");
	divVentana.appendChild(inputWidth);

	div.appendChild(divVentana);
	div.appendChild(divFecha);
	div.appendChild(img);
	contenedor.appendChild(div);
}

function getUrl(e){
	if(e.keyCode == 13){
		creandoDiv(this.value);
	}
	this.value = "";
}

var inputUrl = document.getElementById("url");
inputUrl.onkeydown = getUrl;

var flecha = document.getElementById("div-abrir-venta");
console.log(flecha);
flecha.onlick =function(){
	document.getElementById("ventana-medidas").style.display = "inline-block";
};




