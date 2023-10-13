class Libro{
// se colococa cuales son los atributos de las clases//
    
    constructor (titulo, autor, genero, leido = false){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido = false;
    }
}
marcarComoLeido() {
    this.leido = true;
}

marcarComoNoLeido() 
    this.leido = falso;



informacion() {
    console.log( titulo: ${this.titulo}, autor: ${this.autor}, genero: ${this.genero},leido: ${this.leido ? "Si" : "No"})
}
    


const libros1 = new ("cujo","stiphenking","terror");
const libros2 = new ("1984","george orwell","ficcion politica")

libros1.informacion()


// segundo ejercicio//


class FiguaGeometrica{

    constructor(){
    this.tipo = "FiguraGeometrica";
     }
    }
     obtenerArea(){
        return "El area no estadefinida para esta figura";
     }

     obtenerPerimetro(){
        return "El perimetro no esta definido para esta figura";
     }
      

     class Circulo extends FiguaGeometrica {
        constructor(radio) {
            super();
            this.tipo ="circulo";
            this.radio = radio;
        }   
     }
    
    opteneArea(){
        return  Math.PI * this.radio ** 2;
    
    }

    optenerPerimetro(){
        return 2 * Math.PI * this.radio;

    }


 class Cuadrado extends FiguaGeometrica{
    constructor (lado){
    super();
    this.tipo= "cuadrado"
    this.lado = lado;
    }

    obtenerArea() {
        return this.lado ** 2;       
    }

    obtenerPerimetro (){
        return 4 * this.lado;
    }
}

    class Rectangulo extends FiguaGeometrica{
        constructor (ancho, alto){
            super();
            this.tipo = "Rectangulo"
            this.ancho = ancho;
            this.alto = alto;
        }

        obtenerArea(){
            return this.ancho + this.alto;
        }

        obtenerPerimetro(){
            return 2 *(this.ancho + this.alto);
        }
    }
    const circulo = new Circulo(5);
    const cuadrado = new Cuadrado(4);
    const rectangulo = new Rectangulo(6, 8);

    console.log(`Área del ${circulo.tipo}: ${circulo.obtenerArea()}`);
    console.log(`Perímetro del ${circulo.tipo}: ${circulo.obtenerPerimetro()}`);
    console.log(`Área del ${cuadrado.tipo}: ${cuadrado.obtenerArea()}`);
    console.log(`Perímetro del ${cuadrado.tipo}: ${cuadrado.obtenerPerimetro()}`);
    console.log(`Área del ${rectangulo.tipo}: ${rectangulo.obtenerArea()}`);
    console.log(`Perímetro del ${rectangulo.tipo}: ${rectangulo.obtenerPerimetro()}`);