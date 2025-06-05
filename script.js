function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  if (input.value.trim() !== "") {
    const userMessage = document.createElement("div");
    userMessage.className = "message";
    userMessage.textContent = "你說：" + input.value;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = "芹衣：這是鏡像站 v4.3 的預設回覆。建置中，請稍候。";
    chatBox.appendChild(botMessage);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
