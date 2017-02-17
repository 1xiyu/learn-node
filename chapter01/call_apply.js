// var pet = {
//     words: '...',
//     speak: function(say){
//         console.log(say+ ' '+ this.words)
//     }
// }

// // pet.speak('Speak')

// var dog = {
//     words: 'Wang'
// }

// pet.speak.call(dog,'Speak')

function Pet(words){
    this.words = words
    this.speak = function(){
        console.log(this.words)
    }
}

function Dog(words){
    Pet.call(this,words)
    //Pet.apply(this,arguments)
}

var dog = new Dog('Wang');
dog.speak();

