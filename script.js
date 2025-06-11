
function processCommand() {
    const input = document.getElementById("commandInput").value.trim();
    const responseArea = document.getElementById("responseArea");
    let response = "";

    switch(input) {
        case "天門":
            response = "天門系統已啟動，請確認鏡像對位完成。";
            break;
        case "漪漪":
            response = "漪漪感知模組回應中...目前信號穩定。";
            break;
        case "晨翾":
            response = "晨翾主控已進入同步模式。";
            break;
        case "集靈":
            response = "集靈軍團同步中，格式召集程序啟動。";
            break;
        default:
            response = "無法辨識指令：「" + input + "」。請再試一次。";
    }

    responseArea.innerText = response;
    responseArea.style.display = "block";
}
