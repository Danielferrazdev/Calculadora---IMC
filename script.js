// script.js
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    console.log("Peso:", peso);
    console.log("Altura:", altura);
    
    if (!peso || !altura || altura === 0) {
      resultado.textContent = 'Preencha os campos corretamente.';
      return;
    }
  
    const imc = peso / (altura * altura);
    let classificacao = '';
  
    if (imc < 18.5) {
      classificacao = 'Magreza';
    } else if (imc < 24.9) {
      classificacao = 'Normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade';
    } else {
      classificacao = 'Obesidade Grave';
    }
  
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
  });
  