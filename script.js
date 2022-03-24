//Suma
function Suma(){
    var a = 0;
    var b = 0;
    var suma = 0;

    a = parseInt(prompt("Por favor ingresar el primer valor 1"));
    b = parseInt(prompt("Por favor ingresar el segundo valor 2"));

    suma = a + b;

    alert("El resultado de la suma es: "+ suma);
}

//Operaciones Basicas
function OperacionesBasicas(){
    var a = 0;
    var b = 0;

    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    a = parseInt(prompt("Por favor ingresar el primer valor 1"));
    b = parseInt(prompt("Por favor ingresar el segundo valor 2"));
    
    suma = a + b;
    resta = a-b;
    multiplicacion = a*b;
    division = a/b;

    alert("El resultado de la suma es: "+ suma);
    alert("El resultado de la resta es: "+ resta);
    alert("El resultado de la miltuiplicacion es: "+ multiplicacion);
    alert("El resultado de la division es: "+ division);
}

//Metros a pulgadas
function metrosapulgadas(){
    var M = 0;
    var P = 0;

    M = parseInt(prompt("Por favor ingresar el valor en metros que desea convertir a pulgadas "));

    P = M * 39.97;

    alert("El valor en pulgadas es de: "+ P);
}

//El area de un triangulo
function Areadeltriangulo(){
    var B = 0;
    var H = 0;
    var A = 0;

    B = parseInt(prompt("Por favor ingrese el valor de la Base: "));
    H = parseInt(prompt("Por favor ingrese el valor de la Altura: "));

    A = B*H/2;

    alert("El Area del triangulo es: "+A);
}

//Año de nacimiento del usuario
function Añodenacimiento(){
    var AA = 0;
    var Edad = 0;
    var AN = 0;

    AA = parseInt(prompt("Por favor ingrese el año actual: "));
    Edad = parseInt(prompt("Por favor ingrese la edad del usuario: "));

    AN = AA-Edad;

    alert("El Año de nacimiento del usuario es: "+AN);
}

//Inversion
function Inversion(){
    var C = 0;
    var Año = 0;
    var G = 0;
    var IA = 0;

    C = parseInt(prompt("Por favor ingrese el capital invertido: "));
    Año = parseInt(prompt("Por favor ingrese el numero de años a calcular: "));

    IA = 0.017*12/100;
    G  = (C*IA)*12;
    G  = G+C

    alert("Interes recibido: "+G);
}


//
