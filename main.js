const myersBriggsTypes = [
  "Please select a type",
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

const mbLotrMapping = [
  { MB: "ENTP", name: "Gandalf", ID: "5cd99d4bde30eff6ebccfea0" },
  { MB: "ESFJ", name: "Bilbo Baggins", ID: "5cd99d4bde30eff6ebccfc38" },
  { MB: "ESTJ", name: "Boromir", ID: "5cd99d4bde30eff6ebccfc57" },
  { MB: "ISTJ", name: "Aragorn", ID: "5cd99d4bde30eff6ebccfbe5" },
  { MB: "ISFJ", name: "Samwise Gamgee", ID: "5cd99d4bde30eff6ebccfd0d" },
  { MB: "ESTP", name: "Gimli", ID: "5cd99d4bde30eff6ebccfd23" },
  { MB: "ISTP", name: "Eowyn", ID: "5cdbdecb6dc0baeae48cfa59" },
  { MB: "ESFP", name: "Pippin", ID: "5cd99d4bde30eff6ebccfe7f" },
  { MB: "ISFP", name: "Arwen", ID: "5cd99d4bde30eff6ebccfc07" },
  { MB: "ENFJ", name: "Faramir", ID: "5cd99d4bde30eff6ebccfcef" },
  { MB: "INFJ", name: "Galadriel", ID: "5cd99d4bde30eff6ebccfd06" },
  { MB: "ENFP", name: "Merry", ID: "5cd99d4bde30eff6ebccfe7b" },
  { MB: "INFP", name: "Frodo", ID: "5cd99d4bde30eff6ebccfc15" },
  { MB: "ENTJ", name: "Eomer", ID: "5cdbdecb6dc0baeae48cfa5a" },
  { MB: "INTJ", name: "Elrond", id: "5cd99d4bde30eff6ebccfcc8" },
  { MB: "INTP", name: "Legolas", ID: "5cd99d4bde30eff6ebccfd81" }
];

//entrance button

let entranceButton = document.createElement("button");

entranceButton.id = "entrance-button";
entranceButton.className = "entrance-button";
entranceButton.innerText = "YOU SHALL PASS";

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
  explPara.innerText = `if you don't know your Myers Briggs,  `;
  mainDiv.appendChild(explPara);

  explPara.appendChild(sixteenPLink);

  inputTwo.addEventListener("click", getResult);

  function getResult(event) {
    event.preventDefault();
    let result = inputOne.value;
    console.log(result);
    let characterObject = mbLotrMapping.filter((element)=>{if(element.MB === result){console.log(element.MB); return(`this is the one we're looking for ${element.ID}`);}})
    characterInformation(characterObject);
  }
}

// take the result, use the objects within an array to display

function characterInformation(characterObject){
let characterID = characterObject[0].ID;
console.log(characterID);
const token = "c47rg1zHgNfX4-dBEcDv";
async function getCharacterQuote() {
  let response = await fetch(`https://the-one-api.dev/v2/character/${characterID}/quote`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  let random = Math.floor(Math.random() * data.docs.length);
  // console.log(random)
  console.log(data.docs[random].dialog);
  
}
async function getCharacter(characterID) {
  console.log(characterID);
  let response = await fetch(`https://the-one-api.dev/v2/character/${characterID}`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const dataInfo = await response.json();
  console.log(dataInfo.docs[0].name);
  console.log(dataInfo.docs[0]._id);
  // console.log(dataInfo);
}
getCharacterQuote(characterObject);
getCharacter(characterID);
}




// getQuote();

