function pause(){
	var element = document.getElementById("carré");
  element.classList.toggle("pause");
}

function afficher(){
    document.getElementById('text').style.opacity = 1;
}

function cacher(){
    document.getElementById('form').style.opacity = 0;
}