function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Preencha os campos com números válidos!");
        return;
    }

    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Não é possível dividir por zero!");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operador inválido!");
            return;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O resultado da operação é: ${resultado}`;
}
