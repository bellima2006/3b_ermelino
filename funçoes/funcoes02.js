
// funçoes nomeadas
function Logar (usuario, senha) {
    alert ("logado com funçoes nomeada")
    alert("ola"+"usuario")
}


Logar("amanda","1,2,3")

// funçoes anónimas 

const conectar =function (usuario, senha) {
    alert ("logado com funçoes anonima")
    alert("ola"+"usuario")
}
conectar("Joilson","13sds")


//arrow function ou funçoes flecha

const colorir =() =>{
   alert("funçao flecha em açao!")

}
colorir()// execuçao e arrow