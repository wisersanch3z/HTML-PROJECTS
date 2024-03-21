Algoritmo Password
	Definir CO como caracter
	Repetir
		Escribir " Ingrese su password"
		leer CO
		si CO<> "12345AB" Entonces
			Escribir " Acceso denegado"
		sino 
		    Escribir " Bienvenido"
		FinSi
	Hasta Que CO<> "12345AB"
	Mientras CO<> "12345AB" Hacer
		Escribir " Ingrese su password"
		Leer CO
		si CO<> "12345AB" Entonces
			Escribir " Acceso denegado "
		SiNo
			Escribir " Bienvenido"
		FinSi
	FinMientras
	
FinAlgoritmo
