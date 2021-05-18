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
  { MB: "INTJ", name: "Elrond", ID: "5cd99d4bde30eff6ebccfcc8" },
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

let resultsDiv = document.querySelector("#results-container")
resultsDiv.style.display = 'none';
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
const token = "c47rg1zHgNfX4-dBEcDv";

async function getCharacterQuoteAndInfo() {
  let response = await fetch(`https://the-one-api.dev/v2/character/${characterID}/quote`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await response.json();
  
  let response2 = await fetch(
    `https://the-one-api.dev/v2/character/${characterID}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
    );
  let dataInfo = await response2.json();
  postResults(data, dataInfo);
}
// postResults(data, dataInfo);
getCharacterQuoteAndInfo(characterObject);




function postResults(data, dataInfo){
  console.log(data);
  console.log(dataInfo);
  let random = Math.floor(Math.random() * data.docs.length);
  // console.log(data.docs[random].dialog);

  // let resultsContainer = document.querySelector("#results-container");

  resultsDiv.style.display = 'block';
  let characterName = document.createElement('h1');
  characterName.innerText = dataInfo.docs[0].name;
  resultsDiv.appendChild(characterName);

  let attributesList = document.createElement('ul');
  resultsDiv.appendChild(attributesList);

  const characterAttributes = ["race", "birth", "death", "wikiUrl"]

  let docs = dataInfo.docs[0];

  characterAttributes.map((item) => {
    let info = document.createElement('li');
    info.innerText = `${item}: ${docs[item]}`;
    attributesList.appendChild(info);
  })
}
}

// https://likeananchor.com/2013/12/16/lord-of-the-rings-mbti/