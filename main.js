
const token = "c47rg1zHgNfX4-dBEcDv"
async function getCharacter () {
    let response = await fetch ("https://the-one-api.dev/v2/character", {    
    headers: {
        'Accept': 'application/json',    
        'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json();
    console.log(data.docs[0].name);
}

getCharacter();


