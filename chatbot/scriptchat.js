const sendButton = document.getElementById("sendMessage")

sendButton.addEventListener("click", function () {
    let message = document.getElementById("inputMessage").value

    if (message != "") {
        let msg = document.createElement("button")
        msg.classList.add("btn")
        msg.classList.add("btn-light")
        msg.innerHTML = message;
        let msgDiv = document.getElementById("chatboxDiv")

        msgDiv.append(msg);
    }
})