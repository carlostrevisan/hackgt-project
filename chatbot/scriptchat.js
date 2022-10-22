const botQuestions = ["Hey there! 👋",
    "Let's start our questionaire!",
    "To start off, what is your name?",
    "Uh! what a beautiful name!",
    "Several questions will appear for you, try to answer in the easiest way for the AI to understand. 🤖",
    "Be very honest with yourself about your feelings. Your answers will be sent to your therapist to get a better understanding of you. 👌"
];

let userAnswers = [];

const sendButton = document.getElementById("sendMessage")

sendButton.addEventListener("click", function () {
    sendInputMsg()
})

document.getElementById("inputMessage").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("sendMessage").click();
    }
});

let index = 0
function sendInputMsg() {
    let message = document.getElementById("inputMessage").value
    let div = document.createElement("div")
    div.style = "height: 60px;"

    if (message != "") {
        let msg = document.createElement("button")
        msg.classList.add("btn")
        msg.classList.add("btn-secondary")
        msg.innerHTML = message;
        msg.style = "float: right;"
        let msgDiv = document.getElementById("chatboxDiv")
        div.append(msg)
        msgDiv.append(div);
    }

    userAnswers.push(message);

    console.log(userAnswers)

    document.getElementById("inputMessage").value = "";

    setTimeout(function () {
        messageOrder(index)
        index++
    }, randomIntFromInterval(300, 1500))
}

function messageOrder(index) {
    let messageU = botQuestions[index]
    answerOutput(messageU)
}

function answerOutput(messageU) {
    let message = messageU
    let div = document.createElement("div")
    if (messageU.length > 60) {
        div.style = "height: 100px"
        console.log("hello", messageU)
    }
    else div.style = "height: 50px;"
    let msg = document.createElement("button")
    msg.classList.add("btn")
    msg.classList.add("btn-primary")
    msg.innerHTML = message;
    msg.style = "float: left;"
    let msgDiv = document.getElementById("chatboxDiv")
    div.append(msg)
    msgDiv.append(div);
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generatePDFBnt = document.getElementById("generatePDF")
generatePDFBnt.addEventListener("click", function () {
    generatePDF()
})

function generatePDF() {
    alert("no pdf 4 u")
}
