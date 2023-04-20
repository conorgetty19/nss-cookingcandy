//buy milk chocolate
//function w/no parameters
//returns an object w/an additional (1) property
object = {}
const buyChocolate = () => {
    object.type = "Milk chocolate"

    return object
}

//add mint flavoring
//function w/1 parameter
//returns an object w/an additional (2) property 
const addFlavoring = (object) => {
    object.flavor = "Mint"

    return object
}

//combine choco and mint
//function w/1 para and an if/else statement
//returns an object w/ another property (3) w/value of true or false
const makeBarkMixture = (object) => {
    if (object.flavor === "Mint") {
        object.mixed = true
    }
    else {
        object.mixed = false
    }

    return object
}

//bake
//function w/1 para and if/else
//returns obj w/another prop (4) w/value of true or false
const bakeCandy = (object) => {
    if (object.mixed === true) {
        object.baked = true
    }
    else {
        object.baked = false
    }

    return object
}

//break into 6 bars
//function w/1 para and if statement
//returns an array w/either 6 strings or empty
const breakBark = (object) => {
    if (object.baked === true) {
        const candyBars = ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
        
        return candyBars
    }
}

//final test
buyChocolate()
addFlavoring(object)
makeBarkMixture(object)
bakeCandy(object)

console.log(breakBark(object))