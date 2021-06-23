var botonCalcular = document.getElementById("calcular")
//var resumen = document.getElementById("lista-productos")
botonCalcular.addEventListener("click", boletos)

function boletos(){
    // declaro la variable para acumular el total
    var total = 0


    //escucho cuantos boletos quieren de cada clase
    var b_por_viernes = (parseInt(document.getElementById('pase_dia').value) * 30)
    var b_todo_dia = (parseInt(document.getElementById('pase_completo').value) * 50)
    var b_dos_dias = (parseInt(document.getElementById('pase_dosdias').value) * 45)

    //tomo en la variable donde lo muestro por pantalla
    var totViernes = document.getElementById("b_dia")
    var totDia = document.getElementById("b_completo")
    var totDosdias = document.getElementById("b_dosdias")

    // si es diferente a cero que lo muestre por pantalla
    // Funcion donde a: es el calculo; b: donde se muestra y c: los tipos 
    function totales(a,b,c){
        if (a>0){
            b.textContent = ('Total de boleto '+ c+ ': $' + a)
             total = total + a
        }
    }

    totales(b_por_viernes,totViernes, 'Viernes')
    totales(b_todo_dia,totDia, 'todos los dias')
    totales(b_dos_dias,totDosdias, 'por dos dias') 
    
    var sTotal = document.getElementById('suma-total')
    sTotal.textContent = ('$ ' + total)  
}
