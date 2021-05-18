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
  { MB: "ENTP", name: "Gandalf", ID: "5cd99d4bde30eff6ebccfea0", IMG:"https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754"},
  { MB: "ESFJ", name: "Bilbo Baggins", ID: "5cd99d4bde30eff6ebccfc38", IMG:"https://static.wikia.nocookie.net/lotr/images/b/b6/The_Hobbit_wallpaper_48.jpg/revision/latest/scale-to-width-down/1000?cb=20131112182330" },
  { MB: "ESTJ", name: "Boromir", ID: "5cd99d4bde30eff6ebccfc57", IMG:"https://static.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg/revision/latest/scale-to-width-down/750?cb=20110327195115" },
  { MB: "ISTJ", name: "Aragorn", ID: "5cd99d4bde30eff6ebccfbe6", IMG:"https://static.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest/scale-to-width-down/500?cb=20170121121423" },
  { MB: "ISFJ", name: "Samwise Gamgee", ID: "5cd99d4bde30eff6ebccfd0d", IMG:"https://static.wikia.nocookie.net/lotr/images/2/20/Sam.jpg/revision/latest/scale-to-width-down/310?cb=20070623123241" },
  { MB: "ESTP", name: "Gimli", ID: "5cd99d4bde30eff6ebccfd23", IMG:"https://static.wikia.nocookie.net/lotr/images/e/ec/Gimli_-_FOTR.png/revision/latest/scale-to-width-down/919?cb=20121008105956" },
  { MB: "ISTP", name: "Eowyn", ID: "5cdbdecb6dc0baeae48cfa59", IMG:"https://static.wikia.nocookie.net/lotr/images/3/30/Eowyn.jpg/revision/latest/scale-to-width-down/360?cb=20070624161202" },
  { MB: "ESFP", name: "Pippin", ID: "5cd99d4bde30eff6ebccfe2e", IMG:"https://static.wikia.nocookie.net/lotr/images/0/0a/Pippinprintscreen.jpg/revision/latest/scale-to-width-down/199?cb=20060310083048" },
  { MB: "ISFP", name: "Arwen", ID: "5cd99d4bde30eff6ebccfc07", IMG:"https://static.wikia.nocookie.net/lotr/images/d/dd/100_beautiful_arwen.jpg/revision/latest/scale-to-width-down/700?cb=20110313201140" },
  { MB: "ENFJ", name: "Faramir", ID: "5cd99d4bde30eff6ebccfcef", IMG:"https://static.wikia.nocookie.net/lotr/images/d/d7/Faramir_in_Two_Towers.png/revision/latest/scale-to-width-down/903?cb=20121006112209" },
  { MB: "INFJ", name: "Galadriel", ID: "5cd99d4bde30eff6ebccfd06", IMG:"https://static.wikia.nocookie.net/lotr/images/c/cb/Galadriel.jpg/revision/latest/scale-to-width-down/828?cb=20151015204512" },
  { MB: "ENFP", name: "Merry", ID: "5cd99d4bde30eff6ebccfc7c", IMG:"https://static.wikia.nocookie.net/lotr/images/d/d8/Merry1.jpg/revision/latest/scale-to-width-down/398?cb=20080318214905" },
  { MB: "INFP", name: "Frodo", ID: "5cd99d4bde30eff6ebccfc15", IMG:"https://static.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png/revision/latest/scale-to-width-down/1000?cb=20130313174543" },
  { MB: "ENTJ", name: "Eomer", ID: "5cdbdecb6dc0baeae48cfa5a", IMG:"https://static.wikia.nocookie.net/lotr/images/b/b9/Eomer_-_Close_up.PNG/revision/latest?cb=20120922113500" },
  { MB: "INTJ", name: "Elrond", ID: "5cd99d4bde30eff6ebccfcc8", IMG:"https://static.wikia.nocookie.net/lotr/images/9/9f/Elrond_of_Rivendell.jpg/revision/latest/scale-to-width-down/1000?cb=20130202120854" },
  { MB: "INTP", name: "Legolas", ID: "5cd99d4bde30eff6ebccfd81", IMG:"https://static.wikia.nocookie.net/lotr/images/3/33/Legolas_-_in_Two_Towers.PNG/revision/latest/scale-to-width-down/636?cb=20120916035151" }
];

//entrance button

let entranceButton = document.createElement("button");

entranceButton.id = "entrance-button";
entranceButton.className = "entrance-button";
entranceButton.innerText = "YOU SHALL PASS";

let mainDiv = document.querySelector("#container");
mainDiv.appendChild(entranceButton);

function enter() {
  mainDiv.removeChild(entranceButton);
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

  let characterImage = document.createElement("img");
  let id = dataInfo.docs[0]._id;
  console.log(id);
  urlObject = mbLotrMapping.find((element)=>{if(element.ID === id){return element.IMG}}); 
  console.log(urlObject)
  url = urlObject.IMG;
  console.log(url)
  characterImage.src = url;
  // characterImage.text = `An image of ${dataInfo.docs[0].name}`
  resultsDiv.appendChild(characterImage);

  let attributesList = document.createElement('ul');
  resultsDiv.appendChild(attributesList);

  const characterAttributes = ["race", "birth", "death"]

  let docs = dataInfo.docs[0];

  characterAttributes.map((item) => {
    let info = document.createElement('li');
    info.innerText = `${item}: ${docs[item]}`;
    attributesList.appendChild(info);
  })
  let wikiLink = document.createElement("a");
  wikiLink.href = dataInfo.docs[0].wikiUrl
  wikiLink.text = `${dataInfo.docs[0].name}`
  attributesList.appendChild(wikiLink);
}
}

// https://likeananchor.com/2013/12/16/lord-of-the-rings-mbti/