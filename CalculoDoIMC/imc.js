function calcularIMC() {
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);

  if (isNaN(altura) || isNaN(peso)) {
      alert("Preencha os campos com valores numéricos válidos!");
      return;
  }

  const imc = peso / (altura / 100) ** 2;
  const resultado = document.getElementById('resultado');

  if (imc < 18.5) {
      resultado.textContent = `Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
      resultado.textContent = `Seu IMC é ${imc.toFixed(2)}. Você está no peso ideal.`;
  } else {
      resultado.textContent = `Seu IMC é ${imc.toFixed(2)}. Você está acima do peso.`;
  }
}
