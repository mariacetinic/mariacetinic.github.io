
	
// Drop down menu

	$(document).ready(function(){
		$(".menu-btn").click(function(){
			$("nav").slideToggle(500);
		});
	});



// Lightbox

// Hämtar modulen
var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}

