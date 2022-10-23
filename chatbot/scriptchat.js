const botQuestions = ["Hey there! 👋",
    "Let's start our questionaire?",
    "To start off, what is your name?",
    "Uh! what a beautiful name!",
    "Several questions will appear for you, try to answer in the easiest way for the AI to understand. 🤖",
    "Be very honest with yourself about your feelings. Your answers will be sent to your therapist to get a better understanding of you. 👌",
    "May I know how old are you?",
    "How are you feeling today?",
    "Please, go a little bit deeper in your feelings.",
    "Thanks for sharing, we appreciate it. This information will be shared with your therapist."
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

function sendInputMsg() {
    let message = document.getElementById("inputMessage").value
    let div = document.createElement("div")
    if (message.length > 60) {
        div.style = "height: 100px"
    } else {
        div.style = "height: 50px"
    }

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
        messageOrder()
    }, randomIntFromInterval(300, 1500))
}

let index = 0
function messageOrder() {
    answerOutput(botQuestions[index])
    if (index == 0) {
        index++
        answerOutput(botQuestions[index])
    } else if (index == 4) {
        index++
        answerOutput(botQuestions[index])
    }
    index++

    if (index == 10) {
        let msgDiv = document.getElementById("inputMessage")
        msgDiv.remove()
        const sendButton = document.getElementById("buttonjkl")
        sendButton.remove()
        let gntButton = document.getElementById("generatePDF")
        gntButton.style.display = "block"
    }
}

function answerOutput(messageU) {
    let message = messageU
    let div = document.createElement("div")
    if (messageU.length > 60) {
        div.style = "height: 100px"
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


//let userAnswers = ['Hello', 'Yes!', 'Carlos Trevisan', 'Thanks!', 'Okay!', '18 years old', 'Good', 'I am confident about this project']

function generatePDF() {
    let innerHTML = "<div style=\"font-family: Arial, Helvetica, sans-serif;\"><h1>Patient Information</h1>" +
        "<h3>Name</h3>" + userAnswers[2] +
        "<h3>Age</h3>" + userAnswers[5] +
        "<h3>What is general feeling of the patient?</h3>" + userAnswers[6] +
        "<h3>What are the symptoms of the patient?</h3>" + userAnswers[7] + "</div>"

    var doc = new jsPDF('p', 'mm', 'letter')
    doc.fromHTML(innerHTML, 20, 20)
    doc.save('patient_feelings.pdf')
}
