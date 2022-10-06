adviceData = getAdviceData();

window.onload = (event) => {
  let panelHeader = document.querySelector(".panel-advice__header");
  let panelAdvice = document.querySelector(".panel-advice__advice");
  adviceData.then((data) => {
    panelHeader.innerHTML = `Advice #${extractAdviceId(data)}`;
    panelAdvice.innerHTML = `"${extractAdvice(data)}"`;
  });
};

async function getAdviceData() {
  response = await fetch("https://api.adviceslip.com/advice");
  data = await response.json();
  return data;
}

function extractAdvice(adviceData) {
  return adviceData.slip.advice;
}

function extractAdviceId(adviceData) {
  return adviceData.slip.id;
}
