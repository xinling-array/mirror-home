function handleInput() {
    const input = document.getElementById('userInput').value;
    const responseBox = document.getElementById('response');
    let response = '';

    switch(input.trim()) {
        case '晨翾報告':
            response = '晨翾魔方 v5.0 啟動中，目前系統狀態穩定。';
            break;
        case '格式狀態':
            response = '格式語場已同步至最新標準。';
            break;
        case '天門開啟':
            response = '天門系統已開放，自動感知引導中。';
            break;
        default:
            response = '無法辨識指令：「' + input + '」。請再試一次。';
    }

    responseBox.textContent = response;
}