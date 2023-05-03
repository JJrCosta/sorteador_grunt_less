document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let userInput = document.getElementById('numero-maximo').value;
        userInput = parseInt(userInput);
        
        let numeroSorteado = userInput * Math.random() + 1;
        
        Math.floor(numeroSorteado)

        document.getElementById('resultado-valor').innerText = Math.floor(numeroSorteado);
    })
    
})
