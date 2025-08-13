let count = 0; // Initialize count to 0

function increaseCount() {
  count++; // Incrementa o count em 1
  displayCount(); // Exibe o count
  checkCountValue(); // Verifica o valor do count e exibe mensagens
}

function resetCount() {
  count = 0;
  displayCount(); // Exibe o count
  checkCountValue;
  alert("Seus seguidores foram resetados!"); // Mensagem de reset
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count; // Exibir a contagem no HTML
}

function checkCountValue() {
  if (count === 10) {
    alert("Seu post no Instagram ganhou 10 seguidores! Parabéns!");
  } else if (count === 20) {
    alert("Seu post no Instagram ganhou 20 seguidores! Continue assim!");
  } else if (count === 0) {
    alert("Seu post no Instagram ganhou 20 seguidores! Continue assim!");
  }
}
