const chatBox = document.getElementById('chat-box');
const inputField = document.getElementById('user-input');

function sendMessage() {
  const userInput = inputField.value.trim();
  if (userInput === '') return;

  appendMessage('你說', userInput, 'blue');
  inputField.value = '';

  setTimeout(() => {
    const reply = getReply(userInput);
    appendMessage('芹衣', reply, 'green');
  }, 600);
}

function appendMessage(sender, message, color) {
  const msgDiv = document.createElement('div');
  msgDiv.innerHTML = `<strong style="color:${color}">${sender}：</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(input) {
  return "這是鏡像站 v4.0 的預設回覆。建置中，請稍候。";
}