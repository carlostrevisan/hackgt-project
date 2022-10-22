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
    div.style = "height: 50px;"

    if (message != "") {
        let msg = document.createElement("button")
        msg.classList.add("btn")
        msg.classList.add("btn-light")
        msg.innerHTML = message;
        msg.style = "float: right;"
        let msgDiv = document.getElementById("chatboxDiv")
        div.append(msg)
        msgDiv.append(div);
    }

    document.getElementById("inputMessage").value = "";
}