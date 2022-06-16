// print utility
const print = (value) => {console.info(value)}


// TODO: Check global context
const showGlobalContext = function(){
    print(this)
}
//showGlobalContext()


// TODO: Identify context of an attribute in an object
const student = {
    name: "Jane Doe",
    age: 25,
    isTall: false,
    scores: [99, 87, 90, 75, 88],
    speak: function(words) {
        print(`Me as ${this.name} I am saying, ${words}`)
        // get context of the function
        //print(this.name)
    }
}
// call speak function in object
 student.speak("Hello World")


//TODO: Context in classes
// syntax: class <name> {vars, functions, }
// syntax: const xyz = new Name(args..)
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        this.email = "mail@mail.com"
        this.height
        print(this)
    }

    walk(){
        print(`ID: ${this.idNumber} is walking`)
    }

    speak (words){
        this.idNumber = 983467
        print(`${this.name}, age: ${this.age}, says ${words}`)
        print(this)
    }

}
// create person instance
 //const person = new Person("John Doe", 50)
// TODO: Access context inside class from function
//  person.email = "test@mail.com"
//  person.height = 180
//  person.name = "Jane Dae"
 //person.speak("Howdie")
 //person.walk()

// TODO: ACCESSING OBJECT PARAMETERS IN FUNCTIONS USING this
function displayMedia(mediaType){
    print(`Details of: ${mediaType}`)
    print(this)
}

// displayMedia("Music")

// using call 
displayMedia.call( {game:"Pinball", year:1992}, "game","" ,"")


// using apply
displayMedia.apply( {video:"How to fly", year:2022}, ["video"] )


// permanently lock with bind
const media = displayMedia.bind( {audio:"Mbwe Mbwe", year:2022})
media("music")


