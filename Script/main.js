
function metodoUno(){

    let operadores = [3, 7, 11, 13, 37]

    let resultados = [
        document.getElementById("resultadoUno"),
        document.getElementById("resultadoDos"),
        document.getElementById("resultadoTres"),
        document.getElementById("resultadoCuatro"),
        document.getElementById("resultadoFinal")
    ]

    let metodo1 = document.getElementById("metodoUnoIntrude")
    metodo1 = parseInt(metodo1.value)
    let entradas = [
        document.getElementById("respuestaUno"),
        document.getElementById("respuestaDos"),
        document.getElementById("respuestaTres"),
        document.getElementById("respuestaFinal"),
        document.getElementById("congratulations"),
    ]
    console.log(resultados)
    for (let i = 0; i < operadores.length; i++) {
        console.log(metodo1)
        metodo1 = (metodo1 * operadores[i])
        resultados[i].value = metodo1
        entradas[i].value = metodo1
    }
}