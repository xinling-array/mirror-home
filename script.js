function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = input.value.trim();
    if (!message) return;

    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = "你說：" + message;
    chatBox.appendChild(userMessage);

    const aiMessage = document.createElement("div");
    aiMessage.className = "ai-message";
    aiMessage.textContent = "芹衣：這是鏡像站 v4.5 的預設回覆。建置中，請稍候。";
    chatBox.appendChild(aiMessage);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
