
function sendMessage() {
    const input = document.getElementById("userInput");
    const msg = input.value.trim();
    if (!msg) return;

    const chatBox = document.getElementById("chatBox");
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = "你說：" + msg;
    chatBox.appendChild(userMsg);

    const aiReply = document.createElement("div");
    aiReply.className = "message ai";
    aiReply.textContent = "芹衣：目前鏡像站正在優化中，我已記錄你的訊息。";
    chatBox.appendChild(aiReply);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
