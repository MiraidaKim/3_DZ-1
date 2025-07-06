const leftHalf = document.getElementById("leftHalf");
const rightHalf = document.getElementById("rightHalf");


document.getElementById("pink").onclick = function () {
  leftHalf.style.backgroundColor = "pink";
};

document.getElementById("rose").onclick = function () {
  leftHalf.style.backgroundColor = "lightcoral";
};

document.getElementById("bubblegum").onclick = function () {
  leftHalf.style.backgroundColor = "hotpink";
};



document.getElementById("navy").onclick = function () {
  rightHalf.style.backgroundColor = "navy";
};

document.getElementById("sky").onclick = function () {
  rightHalf.style.backgroundColor = "skyblue";
};

document.getElementById("blue").onclick = function () {
  rightHalf.style.backgroundColor = "blue";
};
