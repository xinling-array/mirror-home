
document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const msg = input.value.trim();
  if (msg) {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += '<div class="user">你說：' + msg + '</div>';
    chatBox.innerHTML += '<div class="bot">芹衣：收到，我會記住的。</div>';
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
