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
  let response = await fetch("https://the-one-api.dev/v2/character?name=/Giml/i", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data.docs[0].name);
  console.log(data.docs[0]._id);
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

getCharacter();
// getQuote();

let mbLotrMapping = [
    {MB:"ENTP" , name:"Gandalf", ID:"5cd99d4bde30eff6ebccfea0"},
    {MB:"ESFJ" , name:"Bilbo Baggins", ID:"5cd99d4bde30eff6ebccfc38"},
    {MB:"ESTJ" , name:"Boromir", ID:"5cd99d4bde30eff6ebccfc57"},
    {MB:"ISTJ" , name:"Aragorn", ID:"5cd99d4bde30eff6ebccfbe5"},
    {MB:"ISFJ" , name:"Samwise Gamgee", ID:"5cd99d4bde30eff6ebccfd0d"},
    {MB:"ESTP" , name:"Gimli", ID:"5cd99d4bde30eff6ebccfd23"},
    {MB:"ISTP", name:"Eowyn", ID:""},
    {MB:"ESFP", name:"Pippin", ID:""},
    {MB:"ISFP", name:"Arwen", ID""},
    {MB:"ENFJ", name:"Faramir"},
    {MB:"INFJ", name:"Galadriel"},
    {MB:"ENFP", name:"Merry"},
    {MB:"INFP", name:"Frodo"},
    {MB:"ENTJ", name:"Eomer"},
    {MB:"INTJ", name:"Eldrond"},
    {MB:"INTP", name:"Legolas"}
];
