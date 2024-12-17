// Cronômetro
function atualizarCronometro() {
  const inicio = new Date('2023-12-17');
  const agora = new Date();
  const diferenca = agora - inicio;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarCronometro, 1000);

// Mensagens
function mostrarMensagem(mensagem) {
  alert(mensagem);
}