var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === piedra && cpu === tijera){
            console.log("El usuario GANÓ con " + piedra)
        }else if(user === papel && cpu === piedra){
                    console.log("El usuario GANÓ con papel ")
        }else if(user === tijera && cpu === papel){
            console.log("El usuario GANÓ con " + tijera)
        }else{
            console.log("La CPU GANÓ!!")
        }
            
    }else if(user === cpu){
        console.log("Empate")
    }
};