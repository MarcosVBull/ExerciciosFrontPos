function calculateArea() {
  const radius = parseFloat(document.getElementById('radius').value);
  if (!isNaN(radius)) {
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById('result').innerText = `Área do círculo: ${area.toFixed(2)}`;
  } else {
    document.getElementById('result').innerText = 'Por favor, insira um número válido para o raio.';
  }
}