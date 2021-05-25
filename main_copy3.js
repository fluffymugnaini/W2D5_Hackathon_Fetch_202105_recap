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
  {
    MB: "ENTP",
    name: "Gandalf",
    ID: "5cd99d4bde30eff6ebccfea0",
    IMG: "https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg",
    blurb:
      "As an ENTP, extroverted intuition (Ne) is Gandalf's primary function. He is curious, likes to collect data and use it to discover patterns, can see both sides of an issue, and uses his inventiveness to work with people as well as try to change social systems. ENTP's 'brainstorm aloud' and may not always seem to have a point, which Gandalf will do for page after page in the book. Auxiliary introverted thinking (Ti) gives him a respect for logic and reason. ENTPs are typically non-conformist and have many friends (enjoys Bilbo's party, knows people all over Middle Earth).",
    sound: "./soundfiles/late.mp3",
  },
  {
    MB: "ESFJ",
    name: "Bilbo Baggins",
    ID: "5cd99d4bde30eff6ebccfc38",
    IMG: "https://static.wikia.nocookie.net/lotr/images/b/b6/The_Hobbit_wallpaper_48.jpg",
    blurb:
      "Providers are the most sociable of all Guardians and they are friendly, outgoing, [and] neighbourly to the point that they become restless when isolated from people. They are careful to remember birthdays. Starting to sound like a hobbit?  An ESFJ's primary function is Extroverted Feeling (Fe). This makes them quick to express their opinions and judgements, though they like to do this in a way that maintains peaceful social functions. Note how Bilbo responds to the arrival of all the dwarves - he is not shy about letting them know what he thinks about their unexpected arrival, yet he still plays the perfect host. Like other types with Introverted Sensing (Si) as an auxiliary function, ESFJs can become set in their ways and comfortable with routine (which is what makes him appear introverted when he is upset about being disturbed by company).",
    sound: "./soundfiles/night2remember.wav",
  },
  {
    MB: "ESTJ",
    name: "Boromir",
    ID: "5cd99d4bde30eff6ebccfc57",
    IMG: "https://static.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg",
    blurb:
      "Extroverted thinking (Te) is an ESTJ's dominant function. This makes ESTJs quick to express their ideas, usually in the form of judgements and measurable goals. Take, for example, Boromir's eagerness to speak out at the Counsel of Elrond and his insistence that his plan for using the ring was the right one. An ESTJ's auxiliary function is Introverted Sensing (Si). Supporting Te, this can make ESTJ's appear stubborn because they prefer life to be predictable. They like tradition rather than change - 'Gondor has no king. Gondor needs no king.'",
    sound: "./soundfiles/today.mp3",
  },
  {
    MB: "ISTJ",
    name: "Aragorn",
    ID: "5cd99d4bde30eff6ebccfbe6",
    IMG: "https://static.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg",
    blurb:
      "Introverted Sensing (Si) is an ISTJ's first function. Like ESTJs, this makes them interested in preserving old ways of doing things and resistant to change. For Aragorn, you can see this in his conflict about whether to take his rightful place as king or leave things the way they are. As an auxiliary function, extroverted thinking (Te) manifests itself as a tendency for ISTJs to think out loud and share their ideas and plans. They like order and control, and this helps make Aragorn an efficient and effective leader.",
    sound: "./soundfiles/fear.mp3",
  },
  {
    MB: "ISFJ",
    name: "Samwise Gamgee",
    ID: "5cd99d4bde30eff6ebccfd0d",
    IMG: "https://static.wikia.nocookie.net/lotr/images/2/20/Sam.jpg",
    blurb:
      "Not many fictional characters are as easy to type as Samwise Gamgee. He is the perfect ISFJ. Like the ISTJ, an ISFJ's primary function is Introverted Sensing (Si) and they tend to resist change and be comfortable with traditional ways of doing things. They tend to settle down and be comfortable with routine (Sam never considered leaving The Shire until Frodo went on his quest). With Extroverted Feeling (Fe) as an auxiliary function, ISFJs are very people-oriented and attuned to the needs of others, especially their close friends. They have a strong sense of responsibility and loyalty, and readily serve others - 'Come on, Mr. Frodo. I can't carry it for you.. but I can carry you!'",
    sound: "./soundfiles/carryyou.mp3",
  },
  {
    MB: "ESTP",
    name: "Gimli",
    ID: "5cd99d4bde30eff6ebccfd23",
    IMG: "https://static.wikia.nocookie.net/lotr/images/e/ec/Gimli_-_FOTR.png",
    blurb:
      "Gimli might not seem an obvious choice for the ESTP character, since they are often charming, life-of-the-party types who enjoy stylish dressing and living well. But translate all that into a dwarf, and Gimli probably thinks he fits the description. Extroverted Sensing (Se) is an ESTP's primary function. This tends to make them seek out thrills, take risks, and flirt with danger ('Certainty of death, small chance of succes.. What are we waiting for?'). They also love food, drink, and merry making - which you can see in Gimli as he celebrates after the Battle of Helm's Deep. Introverted thinking (Ti) is his auxiliary function, and he can become serious and intense when called upon to make decisions or deal with feelings.",
    sound: "./soundfiles/distances.mp3",
  },
  {
    MB: "ISTP",
    name: "Eowyn",
    ID: "5cdbdecb6dc0baeae48cfa59",
    IMG: "https://static.wikia.nocookie.net/lotr/images/3/30/Eowyn.jpg",
    blurb:
      "There are about three times as many ISTP men as women. Perhaps this is one reason Eowyn felt so out of place. An ISTP has the same functions as an ESTP, but reversed so introverted thinking (Ti) is first and extroverted sensing (Se) is second. They are 'crafters' because they have an impressive ability to master the use of tools. For Eowyn, the tools she chooses to focus on are weapons, and she is an accomplished fighter. ISTPs love action, crave excitement, and feel frustrated if they cannot act impulsively. They prefer to show their feelings through actions rather than words (Eowyn making soup for Aragorn and wanting to fight at his side).",
    sound: "./soundfiles/givenhope.wav",
  },
  {
    MB: "ESFP",
    name: "Pippin",
    ID: "5cd99d4bde30eff6ebccfe2e",
    IMG: "https://static.wikia.nocookie.net/lotr/images/0/0a/Pippinprintscreen.jpg",
    blurb:
      "Pippin can be pictured on a table and singing 'The only brew for the brave and true comes from the green dragon!' Performers/ESFPs are talkative, engaging, like to be around people, and become the center of attention wherever they go. Like the ESTP, they enjoy good food and drink and will rush into things without stopping to weigh the consequences (asking 'Where are we going?' after joining the Fellowship). Introverted feeling (Fi) is his auxiliary function, and that adds a seriousness to Pippin's character which is not readily visible (because usually introverted). It shows up during the siege of Minas Tirith.",
    sound: "./soundfiles/encourage.mp3",
  },
  {
    MB: "ISFP",
    name: "Arwen",
    ID: "5cd99d4bde30eff6ebccfc07",
    IMG: "https://static.wikia.nocookie.net/lotr/images/d/dd/100_beautiful_arwen.jpg",
    blurb:
      "Though they share functions with ESFPs (introverted feeling (Fi) and extroverted sensing (Se) ), ISFPs tend to look very different. They are people-oriented, caring deeply for others and having a heightened sensitivity to suffering. This can be seen in Arwen's deep attachment to Aragorn, her willingness to risk the Ringwraiths to save Frodo's life, and starting to waste away because of 'the evil that now spreads from Mordor.' She's not as playful as typical SP types are usually described, which is in part due to her being an elf and that introverted feeling (Fi) (which seems emotionally mature and serious) is her dominant function.",
    sound: "./soundfiles/claim.mp3",
  },
  {
    MB: "ENFJ",
    name: "Faramir",
    ID: "5cd99d4bde30eff6ebccfcef",
    IMG: "https://static.wikia.nocookie.net/lotr/images/d/d7/Faramir_in_Two_Towers.png",
    blurb:
      "Extroverted Feeling (Fe) as a primary function means that ENFJs like Faramir have a sense of self is largely tied-up in their relationships with others. Growing up with Denethor constantly belittling him would have been devastating for little ENFJ Faramir, and would contribute to making him less sure of himself than a typical ENFJ. However, you can still see ENFJ traits of good leadership and an intuitive understanding of people when you look at the loyalty Faramir's men have for him and his encounter with Frodo and Sam. His introverted intuition (Ni) helps explain why Faramir went with his gut feeling and let Frodo and Sam go.",
    sound: "./soundfiles/honor.mp3",
  },
  {
    MB: "INFJ",
    name: "Galadriel",
    ID: "5cd99d4bde30eff6ebccfd06",
    IMG: "https://static.wikia.nocookie.net/lotr/images/c/cb/Galadriel.jpg",
    blurb:
      "Galadriel seems like a fairly standard INFJ character - otherworldly, introverted, wise, cares about others. INFJs have such a strong intuition that even some human INFJs report visions much akin to Galadriel's and the feeling that they could almost be telepathic. As an elf in a fantasy world, Galadriel really is telepathic and can glimpse the future. She can also see right through people to discern their motives, as shown by her reaction to Boromir (or more tellingly, his reaction to her). They appear serious on the outside and are usually content to passively observe until they feel moved to speak.",
    sound: "./soundfiles/task.mp3",
  },
  {
    MB: "ENFP",
    name: "Merry",
    ID: "5cd99d4bde30eff6ebccfc7c",
    IMG: "https://static.wikia.nocookie.net/lotr/images/d/d8/Merry1.jpg",
    blurb:
      "With extroverted intuition (Ne) instead of sensing as his dominant function, Merry is more serious and given to reflection than Pippin. Unlike most hobbits, Merry is open-minded about the outside world and restless. He joins Frodo's quest not just for the change of pace but because he recognizes the importance of destroying the ring. His commitment to fighting with the Rohirim and supporting Eowyn is typical of the ENFP championing causes they believe in.",
    sound: "./soundfiles/normal.mp3",
  },
  {
    MB: "INFP",
    name: "Frodo",
    ID: "5cd99d4bde30eff6ebccfc15",
    IMG: "https://static.wikia.nocookie.net/lotr/images/5/54/Untitledjk.png",
    blurb:
      "Introverted feeling (Fi) is an INFP's dominant function, and like ISFPs their emotions run deep. They are loyal to their friends and enjoy people, though at the same time can become loners who like to spend time in the outdoors. Sharing extroverted intuition (Ne) (as their auxiliary function) with ENFPs, INFPs are also interested in championing causes. In the INFP's case, they seek to heal conflicts and bring the world into a state of goodness.",
    sound: "./soundfiles/road.mp3",
  },
  {
    MB: "ENTJ",
    name: "Eomer",
    ID: "5cdbdecb6dc0baeae48cfa5a",
    IMG: "https://static.wikia.nocookie.net/lotr/images/b/b9/Eomer_-_Close_up.PNG",
    blurb:
      "ENTJs are natural leaders, and often find themselves in command even without seeking it. When leadership skills are encouraged, as with Eomer being trained to fight and lead, they become skilled commanders. Extroverted thinking (Te) as a primary function means ENTJs like order and rationality and planning is one of their strengths. They will respect authority to a point, but disobey orders if they feel the situation calls for it (Eomer standing up to Wormtongue). Introverted Intuition (Ni) adds a reliable gut instinct. Others might see them as hurried, wanting people to 'cut to the chase,' and abrupt when making judgments (see the scene where Eomer meets and rapidly interrogates Aragorn, Gimli, and Legolas).",
    sound: "./soundfiles/cut.mp3",
  },
  {
    MB: "INTJ",
    name: "Elrond",
    ID: "5cd99d4bde30eff6ebccfcc8",
    IMG: "https://static.wikia.nocookie.net/lotr/images/9/9f/Elrond_of_Rivendell.jpg",
    blurb:
      "The primary function introverted intuition (Ni) gives Elrond a view of the big picture and a keen insight for how the world works. Unlike INFJs, though, they use extroverted thinking (Te) as an auxiliary function which makes them theorists who always have a plan or two (Plan A: send Arwen to the Undying lands. Plan B: reforge the sword and make Aragorn king). They often appear as aloof intellectuals and share a natural bent for leadership with ENTJS, but prefer to stay in the background until called upon to take charge for a short while (Counsel of Elrond).",
    sound: "./soundfiles/death.mp3",
  },
  {
    MB: "INTP",
    name: "Legolas",
    ID: "5cd99d4bde30eff6ebccfd81",
    IMG: "https://static.wikia.nocookie.net/lotr/images/3/33/Legolas_-_in_Two_Towers.PNG",
    blurb:
      "An INTP's primary function is introverted thiking (Ti), followed by extroverted intuition (Ne) as the auxiliary function. It is hard for them to listen to discussions without pointing out a speaker's error (Legolas correcting Boromir at the Counsel of Elrond), and they would rather talk about ideas than about daily events or people. They are highly disciplined, which can help them achieve proficiency with something like archery, and also makes them appear serious.",
    sound: "./soundfiles/wizard.mp3",
  },
];

// creating main div and entrance button
let mainDiv = document.querySelector("#container");

let entranceButton = document.createElement("button");
entranceButton.id = "entrance-button";
entranceButton.className = "entrance-button";
entranceButton.innerText = "FRIEND, ENTER?";

mainDiv.appendChild(entranceButton);

let secretEntranceWord = document.createElement("h1");
secretEntranceWord.id = "password";
secretEntranceWord.innerText = "FRIEND";

mainDiv.appendChild(secretEntranceWord);

let clue = document.createElement("h1");
clue.id = "clue";
clue.innerText = "CLICK 'FRIEND' IN ELVISH AND ENTER THEN!";
clue.style.opacity = "0";

mainDiv.appendChild(clue);

function noEntry() {
  entranceButton.style.display = "none";
  secretEntranceWord.style.display = "none";
  clue.style.display = "none";
  let video = document.createElement("video");
  video.id = "video";
  video.src = "You_Shall_Not_Pass.mov";
  mainDiv.appendChild(video);
  playVid();
  setTimeout(homeScreen, 5500);
}

function enter() {
  mainDiv.removeChild(entranceButton);
  mainDiv.removeChild(secretEntranceWord);
  mainDiv.removeChild(clue);
  let enterVideo = document.createElement("video");
  enterVideo.id = "entrance-video";
  enterVideo.src = "Enter.mov";
  mainDiv.appendChild(enterVideo);
  playVid2();
  setTimeout(entranceVideo, 3500);
}

function playVid() {
  let notPassVideo = document.querySelector("#video");
  notPassVideo.play();
}

function playVid2() {
  let enterVideo = document.querySelector("#entrance-video");
  enterVideo.play();
}

function homeScreen() {
  entranceButton.style.display = "unset";
  clue.style.display = "unset";
  secretEntranceWord.style.display = "unset";

  secretEntranceWord.style.transform = "scale(1.5)";
  secretEntranceWord.style.opacity = "1";
  secretEntranceWord.style.color = "#B0C2D7";
  secretEntranceWord.style.borderBottom = "solid";
  clue.style.opacity = "1";

  let removeVideo = document.querySelector("#video");
  mainDiv.removeChild(removeVideo);
}

var audio = new Audio("./soundfiles/mellon.wav");
document.querySelector("#password").addEventListener("click", function () {
  audio.play();
});
document.querySelector("#password").addEventListener("mouseover", function () {
  audio.play();
});

entranceButton.addEventListener("click", noEntry);
secretEntranceWord.addEventListener("click", enter);

function entranceVideo(){
let body = document.querySelector("#body");
  body.style.backgroundImage = "url('https://studybreaks.com/wp-content/uploads/2018/04/The-Lord-of-the-Rings.jpg')"
  let enterVideoRemove = document.querySelector("#entrance-video");
  mainDiv.removeChild(enterVideoRemove);
  initialMusicOn();
}

function initialMusicOn(){
  function playFanfare() {
    let mainAudio = document.createElement("audio");
    mainAudio.id = "fanfare";
    mainAudio.src = "./soundfiles/Initial.mp3";
    // audio.controls = true;
    audio.volume = 0.1;
    mainDiv.appendChild(mainAudio);
    mainAudio.play();
  }
  playFanfare();
  createPageTwo();


}

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
  inputForm.id = "input-form";
  mainDiv.appendChild(inputForm);

  let inputOne = document.createElement("select");
  inputOne.id = "input-one";
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
  inputTwo.id = "input-two";
  inputForm.appendChild(inputTwo);

  let sixteenPLink = document.createElement("a");
  sixteenPLink.id = "personality-link";
  sixteenPLink.href = "https://www.16personalities.com/";
  sixteenPLink.target = "_blank";
  sixteenPLink.text = "click here";

  let explPara = document.createElement("p");
  explPara.id = "expl-para";
  explPara.innerText = `if you don't know your Myers Briggs type,  `;
  mainDiv.appendChild(explPara);

  explPara.appendChild(sixteenPLink);

  function getResult(event) {
    event.preventDefault();
    let result = inputOne.value;
    console.log(result);
    let characterObject = mbLotrMapping.filter((element) => {
      if (element.MB === result) {
        console.log(element.MB);
        return `this is the one we're looking for ${element.ID}`;
      }
    });
    characterInformation(characterObject);
  }

  inputTwo.addEventListener("click", getResult);
}

function characterInformation(characterObject) {
  let characterID = characterObject[0].ID;
  const token = config.MY_KEY;

  async function getCharacterQuoteAndInfo() {
    let response = await fetch(
      `https://the-one-api.dev/v2/character/${characterID}/quote`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
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

  getCharacterQuoteAndInfo(characterObject);

  function clearInput() {
    
    let tagLineRemove = document.querySelector("#tag-line");
    mainDiv.removeChild(tagLineRemove);
    let inputFormRemove = document.querySelector("#input-form");
    mainDiv.removeChild(inputFormRemove);
    let explParaRemove = document.querySelector("#expl-para");
    mainDiv.removeChild(explParaRemove);
  }

  function postResults(data, dataInfo) {
    
    let audioStop = document.querySelector("#fanfare");
    audioStop.src = "";

  const characterAttributes = ["race", "birth", "death"];

    let resultsDiv = document.createElement("div");
    resultsDiv.id = "results-container";
    mainDiv.appendChild(resultsDiv);
    clearInput();

    let id = dataInfo.docs[0]._id;
    urlObject = mbLotrMapping.find((element) => {
      if (element.ID === id) {
        return element.IMG;
      }
    });
    console.log(urlObject);

    resultsDiv.style.display = "inline-block";
    let characterName = document.createElement("h1");
    let mbCode = urlObject.MB;
    characterName.innerText = `${dataInfo.docs[0].name} (${mbCode})`;
    resultsDiv.appendChild(characterName);

    let characterImage = document.createElement("img");
    characterImage.id = "character-image";
    url = urlObject.IMG;
    characterImage.src = url;
    resultsDiv.appendChild(characterImage);

    let attributesList = document.createElement("ul");
    attributesList.id = "attributes-list";
    resultsDiv.appendChild(attributesList);

    let docs = dataInfo.docs[0];
    let death = docs.death;
    let newDeath = death.replaceAll(",", "");
    docs.death = newDeath;

    let birth = docs.birth;
    let newBirth = birth.replaceAll(",", "");
    docs.birth = newBirth;

    characterAttributes.map((item) => {
      let info = document.createElement("li");
      info.innerText = `${item}: ${docs[item]}`;
      info.id = "list-element";
      attributesList.appendChild(info);
    });

    let wikiLink = document.createElement("a");
    wikiLink.href = dataInfo.docs[0].wikiUrl;
    wikiLink.text = `More info on ${dataInfo.docs[0].name}`;
    attributesList.appendChild(wikiLink);

    let blurbPara = document.createElement("p");
    let blurbContent = mbLotrMapping.find((element) => element.ID === id);
    blurbPara.id = "blurb";
    blurbPara.innerText = blurbContent.blurb;
    resultsDiv.appendChild(blurbPara);

    let soundByte = document.createElement("audio");
    let soundLink = mbLotrMapping.find((element) => element.ID === id);
    soundByte.id = "sound";
    soundByte.src = soundLink.sound;
    resultsDiv.appendChild(soundByte);
    soundByte.play();

    let random = Math.floor(Math.random() * data.docs.length);
    let characterQuote = data.docs[random].dialog;

    let quote = document.createElement("p");
    quote.innerText = `"${characterQuote}"`;
    quote.id = "quote";
    resultsDiv.appendChild(quote);

    let resetButton = document.createElement("button");
    resetButton.id = "reset-button";
    resetButton.innerText = "make another selection";
    resultsDiv.appendChild(resetButton);
    resetButton.addEventListener("click", reset);

    let footerDiv = document.createElement("div");
    mainDiv.appendChild(footerDiv);

    function reset() {
      mainDiv.removeChild(resultsDiv);
      mainDiv.removeChild(title);
      mainDiv.removeChild(footerDiv);
      createPageTwo();
      let audioRestart = document.querySelector("#fanfare");
      audioRestart.src = "./soundfiles/Initial.mp3";
      audioRestart.play();
    }

    function play() {
      let audio = document.createElement("audio");
      audio.id = "soundtrack";
      audio.src = "./soundfiles/Many_Meetings.mp3";
      audio.controls = true;
      audio.volume = 0.3;
      footerDiv.appendChild(audio);
      audio.play();
    }
    play();

    let footer = document.createElement("footer");
    footer.id = "footer";
    footer.innerText =
      "Alright nerds, thanks for enjoying this site. Made by Rob and Stella";
    footerDiv.appendChild(footer);
  }
}

// https://likeananchor.com/2013/12/16/lord-of-the-rings-mbti/

// https://www.mediacollege.com/downloads/sound-effects/movie/lordoftherings/fellowship/
