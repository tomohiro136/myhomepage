document.addEventListener("DOMContentLoaded", function () {
    const memoTextarea = document.getElementById("memo");
    const saveButton = document.getElementById("save");
    const memoList = document.getElementById("memoList");

    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    // ページが読み込まれたとき、ローカルストレージからメモを読み込み表示する
    const savedMemosJSON = localStorage.getItem('memoData');
    const savedMemos = savedMemosJSON ? JSON.parse(savedMemosJSON) : [];

    savedMemos.forEach(memoData => {
        const memoItem = document.createElement("div");
        memoItem.innerHTML = `<strong>${memoData.timestamp}:</strong> ${memoData.memoText}`;
        memoList.appendChild(memoItem);
    });

    saveButton.addEventListener("click", function () {
        const memoText = memoTextarea.value;
        if (memoText) {
            const memoItem = document.createElement("div");
            const timestamp = getCurrentDateTime();
            memoItem.innerHTML = `<strong>${timestamp}:</strong> ${memoText}`;
            memoList.insertBefore(memoItem, memoList.firstChild);
            memoTextarea.value = "";

            // メモをローカルストレージに保存する（オブジェクトを保存）
            savedMemos.unshift({ timestamp, memoText });
            localStorage.setItem('memoData', JSON.stringify(savedMemos));
        }
    });
});
