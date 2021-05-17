//entrance button
let entranceButton = document.createElement("button");
entranceButton.id = "entrance-button";
entranceButton.className = "entrance-button";
entranceButton.innerText = "You shall pass";

let mainDiv = document.querySelector("#container");
mainDiv.appendChild(entranceButton);

function enter() {
  entranceButton.style.display = "none";
  createPageTwo();
}

entranceButton.addEventListener("click", enter);

//title
//form input dropdown and submit button
//ul where character will be displayed

function createPageTwo() {
  let title = document.createElement("h1");
  title.id = "title";
  title.innerText = "Lord of the Personality Type";
  mainDiv.appendChild(title);

  let tagline = document.createElement("h2");
  tagline.id = "tag-line";
  tagline.innerText =
    "Enter your Myers Briggs Personality Type, and find out which LOTR character you are.";
  mainDiv.appendChild(tagline);

  let inputForm = document.createElement("form");
  mainDiv.appendChild(inputForm);

  let inputOne = document.createElement("select");
  inputForm.appendChild(inputOne);

  let myersBriggsTypes = [
    "ISTJ",
    "ISTP",
    "ISFJ",
    "ISFP",
    "INFJ",
    "INFP",
    "INTJ",
    "INTP",
    "ESTP",
    "ESTJ",
    "ESFP",
    "ESFJ",
    "ENFP",
    "ENFJ",
    "ENTP",
    "ENTJ",
  ];

  myersBriggsTypes.map((element) => {
    let option = document.createElement("option");
    option.appendChild(document.createTextNode(element));
    option.value = element;
    inputOne.appendChild(option);
  });

  let inputTwo = document.createElement("input");
  inputTwo.type = "submit";
  inputTwo.value = "Find character";
  inputForm.appendChild(inputTwo);

  let sixteenPLink = document.createElement("a");
  sixteenPLink.href = "https://www.16personalities.com/";
  sixteenPLink.text = "click here";

  let explPara = document.createElement("p");
  explPara.id = "expl-para";
  explPara.innerText = `if you don't know your Myers Briggs, ${sixteenPLink}`;
  mainDiv.appendChild(explPara);

  explPara.appendChild(sixteenPLink);

  inputTwo.addEventListener("click", getResult);

  function getResult(event) {
    event.preventDefault();
    let result = inputOne.value;
    console.log(result);
  }
}


const token = "c47rg1zHgNfX4-dBEcDv";
async function getCharacter() {
  let response = await fetch("https://the-one-api.dev/v2/character", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
}

async function getQuote() {
  let response = await fetch("https://the-one-api.dev/v2/quote", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
}

// getCharacter();
// getQuote();
