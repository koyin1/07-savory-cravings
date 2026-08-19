function sendMessage() {
    const input = document.getElementById("messageInput");
    const messages = document.getElementById("chatMessages");

    const message = input.value.trim();

    if (message !== "") {
        const newMessage = document.createElement("div");

        newMessage.classList.add("message", "user-message");

        newMessage.textContent = message;

        messages.appendChild(newMessage);

        input.value = "";

        messages.scrollTop = messages.scrollHeight;
    }
}