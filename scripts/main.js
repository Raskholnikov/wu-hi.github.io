const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Wuthering Heights.jpg") {
    myImage.setAttribute("src", "images/The_Climb_to_Top_Withens._-_geograph.org.uk_-_393405.jpg");
	myImage.setAttribute("alt", "the climb to top Withens");
  } else {
    myImage.setAttribute("src", "images/Wuthering Heights.jpg");
	myImage.setAttribute("alt", "Catherine on the moors");
  }
}

// let myButton = document.querySelector("button");
// let myParagraph = document.querySelector("p");

// function setUserName() {
  // const myName = prompt("Please enter your name.");
  // if (!myName) {
    // setUserName();
  // } else {
    // localStorage.setItem("name", myName);
    // myHeading.textContent = `Mozilla is cool, ${myName}`;
  // }
// }

// if (!localStorage.getItem("name")) {
  // setUserName();
// } else {
  // const storedName = localStorage.getItem("name");
  // myParagraph.textContent = `Let me in! Please, let me in! ${storedName}`;
// }

// myButton.onclick = () => {
  // setUserName();
// };