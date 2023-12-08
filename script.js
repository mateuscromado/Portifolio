

var carrossel = document.getElementById("carr")
var add = document.getElementById("mais")
var rem = document.getElementById("menos")
var margem = 0

rem.addEventListener("click",()=>{
    margem -= 300

    if(margem < -900){
        margem = -900
    }

   
    
    carrossel.style.marginLeft= margem+"px"

})

add.addEventListener("click",()=>{

    margem += 600
   if(margem > 0){
        margem = 0
    }
    carrossel.style.marginLeft= margem+"px"

    

})


//=================================================
var nomeInput  = document.getElementById("name").value
var emailInput  = document.getElementById("email").value
var descricaoInput  = document.getElementById("description").value



function capturar(){
nome = nomeInput
email = emailInput
descricao = descricaoInput

console.log(nome)
}

