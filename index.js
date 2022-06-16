// print utility
const print = (value) => {console.info(value)}

// TODO: Check global context
const showGlobalContext = function(){
    print(this)
}
// showGlobalContext()


// TODO: Identify context of an attribute in an object
const student = {
    name: "Jane Doe",
    age: 25,
    isTall: false,
    scores: [99, 87, 90, 75, 88],
    speak: function(words) {
        print(`As I was saying, ${words}`)
        // get context of the function
        print(this)
    }
}
// call speak function in object
// student.speak("Hello World")


//TODO: Context in classes
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
        print(this)
    }

    speak (words){
        print(`${this.name}, age: ${this.age}, says ${words}`)
    }

}
// create person instance
// const person = new Person("John Doe", 50)
// TODO: Access context inside class from function
// person.speak("Howdie")

// TODO: ACCESSING OBJECT PARAMETERS IN FUNCTIONS USING this
function displayMedia(mediaType){
    print(`Details of: ${mediaType}`)
    print(this)
}
// using call 
// displayMedia.call( {game:"Pinball", year:1992}, "game")


// using apply
// displayMedia.apply( {video:"How to fly", year:2022}, ["video"] )


// permanently lock with bind
// const media = displayMedia.bind( {audio:"Mbwe Mbwe", year:2022})
// media("music")


