
function metodoUno(){

    let operadores = [3, 7, 11, 13, 37]

    let resultados = [
        document.getElementById("resultadoUno"),
        document.getElementById("resultadoDos"),
        document.getElementById("resultadoTres"),
        document.getElementById("resultadoCuatro"),
        document.getElementById("resultadoFinal")
    ]

    let entradas = [
        document.getElementById("metodoUnoIntrude"),
        document.getElementById("respuestaUno"),
        document.getElementById("respuestaDos"),
        document.getElementById("respuestaTres"),
        document.getElementById("respuestaFinal"),
        document.getElementById("congratulations"),
    ]
    console.log(resultados)
    for (let i = 0; i < operadores.length; i++) {
        entradas[i].value = (entradas[i].value * operadores[i])
        resultados[i].value = entradas[i].value
        entradas[i+1].value = entradas[i].value
    }
}