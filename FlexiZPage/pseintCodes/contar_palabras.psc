Algoritmo contar_palabras
	definir cont Como Entero
	definir palabra, respuesta como cadena
	cont <- 0
	respuesta <- "S"
	mientras (Mayusculas(respuesta) = "S" ) Hacer
		escribir "ingresar palabra"
		leer palabra
		cont<-cont +1
		escribir " desea ingresar otra palabra?";
		Escribir " s ---> Si "
		Escribir " n ---> No "
		leer respuesta
		escribir " total de palabras:", cont
	FinMientras
FinAlgoritmo
