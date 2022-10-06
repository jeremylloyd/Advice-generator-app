let panelHeader = document.querySelector(".panel-advice__header");
let panelAdvice = document.querySelector(".panel-advice__advice");
updatePanelAdvice();

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

async function updatePanelAdvice() {
  data = await getAdviceData();
  panelHeader.innerHTML = `Advice #${extractAdviceId(data)}`;
  panelAdvice.innerHTML = `"${extractAdvice(data)}"`;
}

document
  .querySelector(".panel__refresh")
  .addEventListener("click", updatePanelAdvice);
