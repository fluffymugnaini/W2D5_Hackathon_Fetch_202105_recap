//entrance button
let entranceButton = document.createElement("button");
entranceButton.id = "entrance-button";
entranceButton.innerText = "YOU SHALL PASS";

let mainDiv = document.querySelector("#container");
mainDiv.appendChild(entranceButton);

function enter() {
  entranceButton.style.display = 'none';
  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
}

entranceButton.addEventListener("click", enter);

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

getCharacter();
getQuote();
