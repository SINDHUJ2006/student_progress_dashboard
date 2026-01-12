let chart;

document.getElementById('scoreForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const scores = [
    parseInt(document.getElementById('math').value),
    parseInt(document.getElementById('science').value),
    parseInt(document.getElementById('english').value),
    parseInt(document.getElementById('history').value)
  ];

  const average = scores.reduce((sum, val) => sum + val, 0) / scores.length;
  document.getElementById('averageScore').textContent = `${average.toFixed(1)} / 100`;

  const ctx = document.getElementById('progressChart').getContext('2d');

  if (chart) chart.destroy(); // Clear previous chart

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Math', 'Science', 'English', 'History'],
      datasets: [{
        label: 'Student Scores',
        data: scores,
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 10 }
        }
      }
    }
  });
});