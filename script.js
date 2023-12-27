const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const historyTab = document.getElementById('history-tab');

let history = [];

function appendToDisplay(value) {
  display.value += value;
}

function clearLastEntry() {
  display.value = display.value.slice(0, -1);
}

function clearAllEntries() {
  display.value = '';
}

function calculateResult() {
  const expression = display.value;
  try {
    const result = eval(expression);
    display.value = result;
    history.push(`${expression} = ${result}`);
    updateHistoryList();
  } catch (error) {
    display.value = 'Error';
  }
}

function updateHistoryList() {
  historyList.innerHTML = '';
  history.forEach((entry) => {
    const listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
  });
}

function toggleHistory() {
  historyTab.classList.toggle('active');
}
