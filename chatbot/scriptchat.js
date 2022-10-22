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

    document.getElementById("inputMessage").value = "";



    setTimeout(function () { answerOutput() }, randomIntFromInterval(300, 1500))
}


function answerOutput() {
    let message = messages[counter]
    let div = document.createElement("div")
    div.style = "height: 50px;"
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
