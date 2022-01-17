function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value) ;
    if (isNaN(resultado))
        resultado = "Complete los campos."
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}` ;

}

function restar(){
    const formulario = document.getElementById("formulario");
    let restaA = formulario["restaA"];
    let restaB = formulario["restaB"];
    let resultadoResta = parseInt(restaA.value) - parseInt(restaB.value) ;
    if (isNaN(resultadoResta))
        resultadoResta = "No ingresaste números"
    document.getElementById("resultadoResta").innerHTML = `Resultado: ${resultadoResta}` ;

}

