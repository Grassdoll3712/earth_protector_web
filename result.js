const params = new URLSearchParams(window.location.search);
const score = params.get('score');

document.addEventListener('DOMContentLoaded', () => {
    let content = `<h2>당신의 지구지킴이 점수는 ${score}점입니다!</h2><br />`;
    if (score == 0) content += "<h1>작은 노력이 큰 결과를 만듭니다.</h1>";
    else if (score <= 4) content += "<h1>지구의 수명이 얼마 남지 않았습니다.</h1>";
    else if (score <= 7) content += "<h1>지구를 위해 조금만 더 노력하세요.</h1>";
    else if (score <= 10) content += "<h1>당신은 진정한 지구 지킴이 입니다.</h1>";
    content += '<div style="text-align: center;"><button onclick="window.location.href=\'./index.html\'">돌아가기</button></div>'
    document.body.innerHTML = content;
});