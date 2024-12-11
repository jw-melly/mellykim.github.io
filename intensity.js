// 초기 게이지 상태
let gaugeValue = 0;

// 버튼 및 게이지 바 요소 선택
const gaugeBar = document.getElementById("gauge-bar");
const gaugeButton = document.getElementById("gauge-button");

// 버튼 클릭 이벤트 리스너
gaugeButton.addEventListener("click", () => {
    if (gaugeValue < 100) {
        gaugeValue += 10;  // 게이지 증가 (10%씩)
        gaugeBar.style.width = gaugeValue + "%";

        if (gaugeValue >= 100) {
            gaugeButton.innerText = "Full!";
            gaugeButton.disabled = true;
            gaugeButton.style.background = "#999";
        }
    }
});
