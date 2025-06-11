// 晨翾格式壓縮模組 v1.0
function activateChenXuanLogic(input) {
    const pattern = /願頻|語場|格式籤印/;
    if (pattern.test(input)) {
        return "格式感染中：晨翾格式核心已觸發";
    }
    return "無格式籤印識別";
}