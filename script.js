function calcularValorTotal() {
        var diaria = parseFloat(document.getElementById("diaria").value);
        var cafe = parseFloat(document.getElementById("cafe").value);
    
        var valorDiaria = diaria * 280;
        var valorCafe = cafe * 15;
        var valorTotal = valorDiaria + valorCafe;
    
        document.getElementById("resultado").innerText = "Total a pagar: R$" + valorTotal.toFixed(2);
    }