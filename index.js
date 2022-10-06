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

async function printAdvice() {
  adviceData = await getAdviceData();
  console.log(`Advice #${extractAdviceId(adviceData)}:`);
  console.log(`${extractAdvice(adviceData)}`);
}

printAdvice();
