const planItems = [
  "6:00 – Pobudka i zimny prysznic",
  "6:30 – Trening siłowy + rower",
  "8:00 – Śniadanie mistrza",
  "9:00 – Praca strategiczna nad imperium",
  "13:00 – Networking i lunch z inspirującymi ludźmi",
  "16:00 – Rozwój AI startupu",
  "19:00 – Czas dla rodziny / relaks / gitara",
  "21:00 – Planowanie kolejnego dnia zwycięstwa"
];

const goals = [
  "Zamknąć 2 ważne zadania strategiczne",
  "Rozpisać roadmapę produktu AI",
  "Skontaktować się z potencjalnym inwestorem",
  "Uczyć się gry na gitarze przez 30 minut",
  "Medytować 10 minut wieczorem"
];

function startDay() {
  document.getElementById('welcomePage').classList.add('hidden');
  document.getElementById('planPage').classList.remove('hidden');

  const planList = document.getElementById('planList');
  const goalsList = document.getElementById('goalsList');

  planList.innerHTML = "";
  goalsList.innerHTML = "";

  planItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    planList.appendChild(li);
  });

  goals.forEach(goal => {
    const li = document.createElement('li');
    li.textContent = goal;
    goalsList.appendChild(li);
  });
}

function speakPlan() {
  const fullText = "Twój plan dnia to: " + planItems.join(". ") + ". Twoje cele to: " + goals.join(". ");
  const utterance = new SpeechSynthesisUtterance(fullText);
  utterance.lang = 'pl-PL';
  utterance.rate = 0.95;
  speechSynthesis.speak(utterance);
}
