console.log("JS 파일 연결 완료!");

const button = document.getElementById("submitButton");

button.addEventListener("click", runQuiz);

function runQuiz() {

    console.log("제출되었습니다!");

    let ageAns = document.getElementById("ageInput").value;
    let sportsAns = daocument.getElementById("sportsInput").value;
    let readersname = document.getElementById("nameInput").value;

    let isAge = ageAns == 23;
    let isSports = sportsAns == "야구";

    console.log("1번 정답:", ageAns);
    console.log("2번 정답:", sportsAns);
    console.log("제출자:", readersname);

    runLoop();

    let result = checkAns(isAge, isSports);

    if (result) {
        let message = greet(readersname);
        console.log(message);
        document.querySelector("h1").textContent = message;
        errorMsg.textContent = "";
        document.querySelector(".top").scrollIntoView({
            behavior: "smooth"
        });
    }
    else {
        errorMsg.textContent = "오답입니다. 다시 풀어주세요.";
    }
}

function checkAns(isAge, isSports) {
    if (isAge && isSports) {
        console.log("정답입니다!");
    } else {
        console.log("오답입니다. 다시 풀어주세요.");
    }

    return isAge && isSports;
}

function runLoop() {
    console.log("정답 확인까지")

    for (let i = 3; i >= 1; i--) {
        console.log(i + '초');
    }
}

function greet(readersname) {
    return readersname + "님 1년 동안 잘 부탁드립니다!";
}