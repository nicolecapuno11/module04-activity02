function conditional(){
    let value1 = prompt("Please enter value A: ")
    let value2 = prompt("Please enter Value B: ")

    if (value1 > value2){
        alert("Value A is Higher than Value B")
    }
    else if(value1 < value2){
        alert("Value B is Higher than Value A")
    }
    else{
        alert("Value A and Value B is equal")
    }
}