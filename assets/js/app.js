function creandoDiv(getUrl){
	var contenedor = document.getElementById("contenedor");
	var div = document.createElement("div");
	var img = document.createElement("img");

	div.classList.add("contenedor-img");
	img.setAttribute("src",getUrl);

	div.appendChild(img);
	contenedor.appendChild(div);
}

function getUrl(e){
	console.log(e);
	if(e.keyCode == 13){
		creandoDiv(this.value);
	}
	this.value = "";
}

var inputUrl = document.getElementById("url");
inputUrl.onkeydown = getUrl;