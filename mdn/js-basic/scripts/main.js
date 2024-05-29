const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/fire.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
