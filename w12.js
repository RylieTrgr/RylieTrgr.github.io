let refreshBtn = document.querySelector("#Refresh").addEventListener('click', newRefresh);



let imageTable = ['SC-Type00.png','SC-Type01.png','SC-Type02.png','SC-Type03.png','SC-Type04.png'];
let i = Math.floor(Math.random() * imageTable.length);
let r = imageTable[i];
console.log(r);

var myReco = ['0','0','0','0','0'];




function newRefresh(){

}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

