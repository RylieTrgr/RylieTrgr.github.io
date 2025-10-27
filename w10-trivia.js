let setupBtn = document.querySelector("#js-new-quote").addEventListener('click', newSetup);

let punchlineBtn = document.querySelector('#js-tweet').addEventListener('click', newPunchline);

let typeBtn = document.querySelector('#js-type').addEventListener('click', newType);

let current = {
    setup: "",
    punchline: "",
    type: "",

}

//function newTrivia() {

    //console.log ("Success")}

const endpoint = "https://official-joke-api.appspot.com/random_joke"

async function newSetup() {
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
        current.type = json['type'];
        console.log(current.setup);
        console.log(current.punchline);
        console.log(current.type);
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
    const typeText = document.querySelector("#js-type-text");
    {"#js-type-text"};
    setupText.textContent = setup;
    typeText.textContent = "";
}

function newPunchline() {
//console.log("Success == answer"); 
    const punchlineText = document.querySelector("#js-answer-text");
    {"#js-answer-text"};
    punchlineText.textContent = current.punchline;

}


newPunchline();

function newType() {
//console.log("Success == type"); 
    const typeText = document.querySelector("#js-type-text");
    {"#js-type-text"};
    typeText.textContent = current.type;
}

newType();