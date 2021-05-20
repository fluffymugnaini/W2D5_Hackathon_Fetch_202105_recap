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
  { MB: "ENTP", name: "Gandalf", ID: "5cd99d4bde30eff6ebccfea0", IMG: "https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg", blurb: "As an ENTP, extroverted intuition (Ne) is Gandalf's primary function. He is curious, likes to collect data and use it to discover patterns, can see both sides of an issue, and uses his inventiveness to work with people as well as try to change social systems. ENTP's 'brainstorm aloud' and 'may not always seem to ‘have a point,’' which Gandalf will do for page after page in the book. Auxiliary introverted thinking (Ti) gives him a respect for logic and reason. ENTPs are typically non-conformist and have many friends (enjoys Bilbo’s party, knows people all over Middle Earth)." },
  { MB: "ESFJ", name: "Bilbo Baggins", ID: "5cd99d4bde30eff6ebccfc38", IMG: "https://static.wikia.nocookie.net/lotr/images/b/b6/The_Hobbit_wallpaper_48.jpg", blurb: "Providers are the most sociable of all Guardians and they are friendly, outgoing, [and] neighbourly to the point that they become restless when isolated from people. They are careful to remember birthdays. Starting to sound like a hobbit?  An ESFJ’s primary function is Extroverted Feeling (Fe). This makes them quick to express their opinions and judgements, though they like to do this in a way that maintains peaceful social functions. Note how Bilbo responds to the arrival of all the dwarves — he is not shy about letting them know what he thinks about their unexpected arrival, yet he still plays the perfect host. Like other types with Introverted Sensing (Si) as an auxiliary function, ESFJs can become set in their ways and comfortable with routine (which is what makes him appear introverted when he is upset about being disturbed by company)." },
  { MB: "ESTJ", name: "Boromir", ID: "5cd99d4bde30eff6ebccfc57", IMG: "https://static.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg", blurb: "Extroverted thinking (Te) is an ESTJ’s dominant function. This makes ESTJs quick to express their ideas, usually in the form of judgements and measurable goals. Take, for example, Boromir’s eagerness to speak out at the Counsel of Elrond and his insistence that his plan for using the ring was the right one. An ESTJ’s auxiliary function is Introverted Sensing (Si). Supporting Te, this can make ESTJ’s appear stubborn because they prefer life to be predictable. They like tradition rather than change — 'Gondor has no king. Gondor needs no king.'" },
  { MB: "ISTJ", name: "Aragorn", ID: "5cd99d4bde30eff6ebccfbe6", IMG: "https://static.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg", blurb: "Most characters seem to have fairly consistent personalities between the books and the films. Aragorn may be an exception. It’s been a while since I read Lord of the Rings, but I think if I was typing Aragorn from the books he might be an extravert. I’ve also seen the film version typed as an INTJ, an ISFx, and an ISxP.  Introverted Sensing (Si) is an ISTJ’s first function. Like ESTJs, this makes them interested in preserving old ways of doing things and resistant to change. For Aragorn, you can see this in his conflict about whether to take his rightful place as king or leave things the way they are. As an auxiliary function,Extroverted thinking (Te) manifests itself as a tendency for ISTJs to think out loud and share their ideas and plans. They like order and control, and this helps make Aragorn an efficient and effective leader." },
  { MB: "ISFJ", name: "Samwise Gamgee", ID: "5cd99d4bde30eff6ebccfd0d", IMG: "https://static.wikia.nocookie.net/lotr/images/2/20/Sam.jpg", blurb: "Not many fictional characters are as easy to type as Samwise Gamgee. He is the perfect ISFJ. Like the ISTJ, an ISFJ’s primary function is Introverted Sensing (Si) and they tend to resist change and be comfortable with traditional ways of doing things. They tend to settle down and be comfortable with routine (Sam never considered leaving The Shire until Frodo went on his quest). With Extroverted Feeling (Fe) as an auxiliary function, ISFJs are very people-oriented and attuned to the needs of others, especially their close friends. They have a strong sense of responsibility and loyalty, and readily serve others — 'Come on, Mr. Frodo. I can’t carry it for you… but I can carry you!'" },
  { MB: "ESTP", name: "Gimli", ID: "5cd99d4bde30eff6ebccfd23", IMG: "https://static.wikia.nocookie.net/lotr/images/e/ec/Gimli_-_FOTR.png", blurb: "Gimli might not seem an obvious choice for the ESTP character, since they are often charming, life-of-the-party types who enjoy stylish dressing and living well. But translate all that into a dwarf, and I’d say Gimli probably thinks he fits the description. Extroverted Sensing (Se) is an ESTP’s primary function. This tends to make them seek out thrills, take risks, and flirt with danger ('Certainty of death, small chance of success… What are we waiting for?'). They also love food, drink, and merry making — which you can see in Gimli as he celebrates after the Battle of Helm’s Deep. Introverted Thinking (Ti) is his auxiliary function, and he can become serious and intense when called upon to make decisions or deal with feelings." },
  { MB: "ISTP", name: "Eowyn", ID: "5cdbdecb6dc0baeae48cfa59", IMG: "https://static.wikia.nocookie.net/lotr/images/3/30/Eowyn.jpg", blurb: "There are about three times as many ISTP men as women. Perhaps this is one reason Eowyn felt so out of place. An ISTP has the same functions as an ESTP, but reversed so introverted thinking (Ti) is first and extroverted sensing (Se) is second. They are “crafters” because they have an impressive ability to master the use of tools. For Eowyn, the tools she chooses to focus on are weapons, and she is an accomplished fighter. ISTPs love action, crave excitement, and feel frustrated if they can’t act impulsively. They prefer to show their feelings through actions rather than words (Eowyn making soup for Aragorn and wanting to fight at his side)." },
  { MB: "ESFP", name: "Pippin", ID: "5cd99d4bde30eff6ebccfe2e", IMG: "https://static.wikia.nocookie.net/lotr/images/0/0a/Pippinprintscreen.jpg", blurb: "Pippincan be pictured on a table and singing “The only brew for the brave and true comes from the green dragon!” Performers/ESFPs are talkative, engaging, like to be around people, and become the center of attention wherever they go. Like the ESTP, they enjoy good food and drink and will rush into things without stopping to weigh the consequences (asking 'Where are we going?' after joining the Fellowship). Introverted Feeling (Fi) is his auxiliary function, and that adds a seriousness to Pippin’s character which is not readily visible (because usually introverted). It shows up during the siege of Minas Tirith." },
  { MB: "ISFP", name: "Arwen", ID: "5cd99d4bde30eff6ebccfc07", IMG: "https://static.wikia.nocookie.net/lotr/images/d/dd/100_beautiful_arwen.jpg", blurb: "Though they share functions with ESFPs (Introverted Feeling (Fi) and Extroverted Sensing (Se) ), ISFPs tend to look very different. They are people-oriented, caring deeply for others and having a heightened sensitivity to suffering. This can be seen in Arwen’s deep attachment to Aragorn, her willingness to risk the Ringwraiths to save Frodo’s life, and starting to waste away because of 'the evil that now spreads from Mordor.' She’s not as playful as typical SP types are usually described, which is in part due to her being an elf and that Introverted Feeling (Fi) (which seems emotionally mature and serious) is her dominant function." },
  { MB: "ENFJ", name: "Faramir", ID: "5cd99d4bde30eff6ebccfcef", IMG: "https://static.wikia.nocookie.net/lotr/images/d/d7/Faramir_in_Two_Towers.png", blurb: "Extroverted Feeling (Fe) as a primary function means that an ENFJ’s like Faramir have a sense of self is largely tied-up in their relationships with others. Growing up with Denethor constantly belittling him would have been devastating for little ENFJ Faramir, and would contribute to making him less sure of himself than a typical ENFJ. However, you can still see ENFJ traits of good leadership and an intuitive understanding of people when you look at the loyalty Faramir’s men have for him and his encounter with Frodo and Sam. His Introverted Intuition (Ni) helps explain why Faramir went with his gut feeling and let Frodo and Sam go." },
  { MB: "INFJ", name: "Galadriel", ID: "5cd99d4bde30eff6ebccfd06", IMG: "https://static.wikia.nocookie.net/lotr/images/c/cb/Galadriel.jpg", blurb: "Galadriel seems like a fairly standard INFJ character — otherworldly, introverted, wise, cares about others. INFJs have such a strong intuition that even some human INFJs report visions much akin to Galadriel’s and the feeling that they could almost be telepathic. As an elf in a fantasy world, Galadriel really is telepathic and can glimpse the future. She can also see right through people to discern their motives, as shown by her reaction to Boromir (or more tellingly, his reaction to her). They appear serious on the outside and are usually content to passively observe until they feel moved to speak." },
  { MB: "ENFP", name: "Merry", ID: "5cd99d4bde30eff6ebccfc7c", IMG: "https://static.wikia.nocookie.net/lotr/images/d/d8/Merry1.jpg", blurb: "With Extroverted Intuition (Ne) instead of sensing as his dominant function, Merry is more serious and given to reflection than Pippin. Unlike most hobbits, Merry is open-minded about the outside world and restless. He joins Frodo’s quest not just for the change of pace but because he recognizes the importance of destroying the ring. His commitment to fighting with the Rohirim and supporting Eowyn is typical of the ENFP championing causes they believe in." },
  { MB: "INFP", name: "Frodo", ID: "5cd99d4bde30eff6ebccfc15", IMG: "https://static.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png", blurb: "In spite of the memes going around showing Frodo as an INFJ, he is generally considered an INFP by people who are more serious about their typology hobby. Introverted Feeling (Fi) is an INFP’s dominant function, and like ISFPs their emotions run deep. They are loyal to their friends and enjoy people, though at the same time can become loners who like to spend time in the outdoors. Sharing extroverted Intuition (Ne) (as their auxiliary function) with ENFPs, INFPs are also interested in championing causes. In the INFP’s case, they seek to heal conflicts and bring the world into a state of goodness." },
  { MB: "ENTJ", name: "Eomer", ID: "5cdbdecb6dc0baeae48cfa5a", IMG: "https://static.wikia.nocookie.net/lotr/images/b/b9/Eomer_-_Close_up.PNG", blurb: "ENTJs are natural leaders, and often find themselves in command even without seeking it. When leadership skills are encouraged, as with Eomer being trained to fight and lead, they become skilled commanders. Extroverted thinking (Te) as a primary function means ENTJs like order and rationality and planning is one of their strengths. They will respect authority to a point, but disobey orders if they feel the situation calls for it (Eomer standing up to Wormtongue). Introverted Intuition (Ni) adds a reliable gut instinct. Others might see them as hurried, wanting people to 'cut to the chase,' and abrupt when making judgments (see the scene where Eomer meets and rapidly interrogates Aragorn, Gimli, and Legolas)." },
  { MB: "INTJ", name: "Elrond", ID: "5cd99d4bde30eff6ebccfcc8", IMG: "https://static.wikia.nocookie.net/lotr/images/9/9f/Elrond_of_Rivendell.jpg", blurb: "The primary function introverted intuition (Ni) gives Elrond a view of the big picture and a keen insight for how the world works. Unlike INFJs, though, they use extroverted thinking (Te) as an auxiliary function which makes them theorists who always have a plan or two (Plan A: send Arwen to the Undying lands. Plan B: reforge the sword and make Aragorn king). They often appear as aloof intellectuals and share a natural bent for leadership with ENTJS, but prefer to stay in the background until called upon to take charge for a short while (Counsel of Elrond)." },
  { MB: "INTP", name: "Legolas", ID: "5cd99d4bde30eff6ebccfd81", IMG: "https://static.wikia.nocookie.net/lotr/images/3/33/Legolas_-_in_Two_Towers.PNG", blurb: "An INTP’s primary function is introverted thiking (Ti), followed by extroverted intuition (Ne) as the auxiliary function. It is hard for them to listen to discussions without pointing out a speaker’s error (Legolas correcting Boromir at the Counsel of Elrond), and they would rather talk about ideas than about daily events or people. They are highly disciplined, which can help them achieve proficiency with something like archery, and also makes them appear serious." }
];

//entrance button

// alert("Speak Friend and Enter")


let entranceButton = document.createElement("button");

entranceButton.id = "entrance-button";
entranceButton.className = "entrance-button";
entranceButton.innerText = "Enter, Friend?";

let mainDiv = document.querySelector("#container");
mainDiv.appendChild(entranceButton);


function enter() {
  let randomEnter = Math.floor(Math.random() * 11);
  console.log(randomEnter)
  if (randomEnter % 2 === 0) {
    mainDiv.removeChild(entranceButton);
    createPageTwo();
  } else {
    entranceButton.style.display = "none";
    let video = document.createElement("video");
    video.id = "video";
    video.src = "You_Shall_Not_Pass.mov";
    mainDiv.appendChild(video);
    playVid();
    setTimeout(homeScreen, 5500);
  }
  //play();
}

function play() {
  var audio = new Audio("gollum_precious1.wav");
  audio.play();
}

let notPassVideo = document.querySelector("video");
function playVid() {
  let notPassVideo = document.querySelector("#video");
  notPassVideo.play()
}
function homeScreen(){
  entranceButton.style.display = "unset";
  let removeVideo = document.querySelector("#video");
  mainDiv.removeChild(removeVideo)
}

var audio = new Audio("gollum_precious1.wav");
document.querySelector(".entrance-button").addEventListener('mouseover', function () { audio.play(); });

entranceButton.addEventListener("click", enter);
entranceButton.addEventListener('mouseenter', playAudio);



// resultsDiv.style.display = 'none';

//title
//form input dropdown and submit button
//ul where character will be displayed

function createPageTwo() {
  let title = document.createElement("h1");
  title.id = "title";
  title.innerText = "Lord of the Personality Types";
  mainDiv.appendChild(title);

  let tagline = document.createElement("h2");
  tagline.id = "tag-line";
  tagline.innerText =
    "Enter your Myers Briggs Personality Type, and find out which LOTR character you are.";
  mainDiv.appendChild(tagline);

  let inputForm = document.createElement("form");
  inputForm.id = "input-form"
  mainDiv.appendChild(inputForm);

  let inputOne = document.createElement("select");
  inputOne.id = "input-one"
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
  inputTwo.id = "input-two"
  inputForm.appendChild(inputTwo);

  let sixteenPLink = document.createElement("a");
  sixteenPLink.id = "personality-link";
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
    let characterObject = mbLotrMapping.filter((element) => { if (element.MB === result) { console.log(element.MB); return (`this is the one we're looking for ${element.ID}`); } })
    characterInformation(characterObject);
  }

}

// take the result, use the objects within an array to display

function characterInformation(characterObject) {
  let characterID = characterObject[0].ID;
  const token = config.MY_KEY;

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

  function clearInput() {
    let tagLineRemove = document.querySelector("#tag-line");
    mainDiv.removeChild(tagLineRemove);
    let inputFormRemove = document.querySelector("#input-form");
    mainDiv.removeChild(inputFormRemove);
    let explParaRemove = document.querySelector("#expl-para");
    mainDiv.removeChild(explParaRemove)


  }


  function postResults(data, dataInfo) {
    let resultsDiv = document.createElement("div");
    resultsDiv.id = "results-container";
    mainDiv.appendChild(resultsDiv);
    clearInput();
    console.log(data);
    console.log(dataInfo);

    // console.log(data.docs[random].dialog);
    // let resultsContainer = document.querySelector("#results-container");

    resultsDiv.style.display = 'inline-block';
    let characterName = document.createElement('h1');
    characterName.innerText = dataInfo.docs[0].name;
    resultsDiv.appendChild(characterName);

    let characterImage = document.createElement("img");
    let id = dataInfo.docs[0]._id;
    console.log(id);
    characterImage.id = "character-image";
    urlObject = mbLotrMapping.find((element) => { if (element.ID === id) { return element.IMG } });
    console.log(urlObject)
    url = urlObject.IMG;
    console.log(url)
    characterImage.src = url;
    // characterImage.text = `An image of ${dataInfo.docs[0].name}`
    resultsDiv.appendChild(characterImage);

    let attributesList = document.createElement('ul');
    attributesList.id = "attributes-list";
    resultsDiv.appendChild(attributesList);

    const characterAttributes = ["race", "birth", "death"]

    let docs = dataInfo.docs[0];

    characterAttributes.map((item) => {
      let info = document.createElement('li');
      info.innerText = `${item}: ${docs[item]}`;
      info.id = "list-element";
      attributesList.appendChild(info);
    })
    let wikiLink = document.createElement("a");
    wikiLink.href = dataInfo.docs[0].wikiUrl
    wikiLink.text = `More info on ${dataInfo.docs[0].name}`
    attributesList.appendChild(wikiLink);

    let blurbPara = document.createElement("p");
    let blurbContent = mbLotrMapping.find(element => element.ID === id);
    blurbPara.id = "blurb";
    blurbPara.innerText = blurbContent.blurb
    resultsDiv.appendChild(blurbPara);

    let random = Math.floor(Math.random() * data.docs.length);
    let characterQuote = data.docs[random].dialog;

    let quote = document.createElement('p');
    quote.innerText = `"${characterQuote}"`;
    quote.id = "quote";
    resultsDiv.appendChild(quote);





    let resetButton = document.createElement("button");
    resetButton.id = "reset-button";
    resetButton.innerText = "make another selection"
    resultsDiv.appendChild(resetButton)
    resetButton.addEventListener('click', reset);

    function reset() {
      mainDiv.removeChild(resultsDiv);
      mainDiv.removeChild(title);
      createPageTwo();
    }


  }
}


// https://likeananchor.com/2013/12/16/lord-of-the-rings-mbti/