
const token = 
async function getCharacter () {
    let response = await fetch ("https://the-one-api.dev/v2/character/1")
    let data = await response.json()
    console.log(data);
}

getCharacter();



