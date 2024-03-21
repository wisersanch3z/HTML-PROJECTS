Algoritmo Sueldo_Minimo
	Escribir "Digita el salario minimo"
	leer salario
	Escribir "digite las horas trabajadas"
	leer horas
	Escribir "digite el monto de horas"
	leer monto
	sueldo<- salario+horas+monto
	sueldo<- salario
	Escribir " El sueldo es de:", salario
	ifp<- salario * 0.03
	isss<- salario * 0.0725
	salariofinal<- salario-ifp-isss
	Escribir " El salario con ifp y isss descontados es: ", salariofinal
	Escribir " Eres un buen trabajador"
	
	
	

	
	
FinAlgoritmo
