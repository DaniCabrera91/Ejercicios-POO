// Ejercicio POO 1:

// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), 
// que muestra por pantalla las propiedades de la persona.

class Person {
    constructor( name, age, genre) {
    this.name = name
    this.age = age
    this.genre = genre
    }
    obtDetails = () => {
        console.log(`Datos personales: ${this.name}, ${this.age}, ${this.genre}`)
        }
        
}    
const newPerson = new Person('Laura', 23, 'Female')
newPerson.obtDetails()


// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), 
// que muestre por pantalla el resultado.
class Student extends Person {
constructor(name, age, genre, course, group) {
    super(name, age, genre)
    this.course = course
    this.group = group
    }
    register = () => {
        console.log(`Datos de estudiante: ${this.name}, ${this.age}, ${this.genre}, ${this.course}, ${this.group}`) 
    }
}
const newStudent = new Student('Juanjo', 25, 'male', 'Tercero','A')
newStudent.register()


// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), 
// que muestre por pantalla el resultado.
class Teacher extends Person {
    constructor(name, age, genre, asignatura, level) {
    super(name, age, genre)
    this.asignatura = asignatura
    this.level = level
    }
    assign = () => {
        console.log(`Datos de profesor: ${this.name}, ${this.age}, ${this.genre}, ${this.asignatura}, ${this.level}`) 
    }
}
const newTeacher = new Teacher('Rosa', 54, 'Female', 'Inglés', 'Advance')
newTeacher.assign()


// -----------------------------------------------------------------------------------------------------------------------------------
// Extras:

// Ejercicio POO 2 - kata Mayas y aztecas
// kata mayas y aztecas

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
    constructor( life, power) {
    this.life = life
    this.power = power
    }
    attack() {
        return this.power;
      }
    
    defend(damage) {
        let vidaRestante = this.life -= damage;
        return vidaRestante;
    }
}

// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.

class Maya extends Warrior {
    constructor(life, power){
    super( life, power)
    }
    drinkColacao = () => {
        return this.power += 10
      }
}

// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.

class Aztec extends Warrior {
    constructor(life, power){
    super( life, power)
    }
    drinkNesquik = () => {
        return this.life += 10    
    }
}

let newMaya = new Maya(80,40);
console.log(`Estadisticas iniciales del guerrero Maya: Vida = ${newMaya.life} Poder = ${newMaya.power}`);
let newAztec = new Aztec(60,30);
console.log(`Estadisticas iniciales del guerrero Azteca: Vida = ${newAztec.life} Poder = ${newAztec.power}`);


// Realiza la siguiente cadena de intercambio de golpes:

// Azteca bebe nesquik
newAztec.drinkNesquik();
console.log(`El guerrero Azteca da un trago a su Nesquik fresquito y mejora su vida a ${newAztec.life}`)

// Maya bebe Cola Cao
newMaya.drinkColacao();
console.log(`Gracias a los grumitos de su colacao, el gerrero Maya aumenta su poder a ${newMaya.power}`)


// Maya ataca a azteca. Azteca defiende.
console.log( `El guerrero Maya ataca al guerrero Azteca que trata de defenderse y su vida queda en: ${newAztec.defend(newMaya.attack())}`);

// Azteca ataca a maya. Maya defiende.
console.log( `El guerrero Azteca contraataca pero el guerrero Maya consigue defenderse quedando su vida queda en:${newMaya.defend(newAztec.attack())}`)
