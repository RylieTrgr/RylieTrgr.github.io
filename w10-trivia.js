let triviaBtn = document.querySelector("#js-new-quote").addEventListener('click', newPunchline);

let punchlineBtn = document.querySelector('#js-tweet').addEventListener('click', newPunchline);

let current = {
    setup: "",
    punchline: "",

}

//function newTrivia() {

    //console.log ("Success")}

const endpoint = "https://official-joke-api.appspot.com/random_ten"

async function newPunchline() {
    //console.log ("Success")

    try {

        const response = await fetch(endpoint);

        if (!response.ok) {

            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displaySetup(json['setup']);
        current.setup = json["setup"];
        current.punchline = json["punchline"];
        console.log(current.setup);
        console.log(current.punchline);
    } catch (err) {
        console.log(err)
        alert('failed lmao');

    }
}

function displaySetup(setup) {
    const setupText = document.querySelector
    ('#js-quote-text');
    const punchlineText = document.querySelector("#js-answer-text");
    {"#js-answer-text"};
    setupText.textContent = setup;
    punchlineText.textContent = "";
}

function newPunchline() {
//console.log("Success == answer"); 
    const punchlineText = document.querySelector("#js-answer-text");
    {"#js-answer-text"};
    punchlineText.textContent = current.punchline;

}

newPunchline();