// var pet = {
//     words: '...',
//     speak: function(){
//         console.log(this.words)
//         console.log(this === pet)
//     }
// }

// pet.speak()

// function pet(words){
//     this.words = words;

//     console.log(this.words)
//     console.log(this === global)
// }

// pet('...')

function Pet(words){
    this.words = words
    this.speak = function(){
        console.log(this)
        console.log(this.words)
    }
}

var cat = new Pet('Miao')

cat.speak()


// this指向函数的拥有者，即上下文context

// 定义上下文，运行时上下文，改变上下文

