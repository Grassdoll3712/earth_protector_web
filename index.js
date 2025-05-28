function submit() {
    let score = 0;

    for (let i = 1; i <= 10; i++) {
        const answer = document.querySelector('input[name="q' + i + '"]:checked');
        if (!answer) {
            return false;
        }
        if (answer && answer.value === "O") {
            score += 1;
        }
    }
    window.location.href = "./result.html?score=" + score;
}