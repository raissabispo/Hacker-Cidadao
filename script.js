let currentDate = new Date(); // Data atual
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const daysInMonth = (month, year) => new Date(year, month, 0).getDate(); // Função para pegar o número de dias no mês
const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay(); // Função para pegar o dia da semana do primeiro dia do mês

// Função para renderizar o calendário
function renderCalendar() {
  const monthYear = document.getElementById("monthYear");
  const calendarBody = document.querySelector("#calendarTable tbody");
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Limpar o corpo da tabela antes de adicionar novas células
  calendarBody.innerHTML = "";

  const totalDays = daysInMonth(month + 1, year); // Total de dias do mês
  const firstDay = firstDayOfMonth(month, year); // Dia da semana do primeiro dia do mês

  // Criar as células do calendário
  let row = document.createElement("tr");
  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  // Preencher as células com os dias do mês
  for (let day = 1; day <= totalDays; day++) {
    if (row.children.length === 7) {
      calendarBody.appendChild(row);
      row = document.createElement("tr");
    }

    const cell = document.createElement("td");
    cell.textContent = day;
    
    // Marcar o dia de hoje com uma classe
    if (
      day === currentDate.getDate() &&
      month === currentDate.getMonth() &&
      year === currentDate.getFullYear()
    ) {
      cell.classList.add("today");
    }

    row.appendChild(cell);
  }

  // Adicionar a última linha do mês
  if (row.children.length > 0) {
    calendarBody.appendChild(row);
  }
}

// Navegar para o mês anterior
document.getElementById("prevMonth").addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

// Navegar para o próximo mês
document.getElementById("nextMonth").addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Inicializar o calendário
renderCalendar();