const acidFormula = document.getElementById("formula")
const btn = document.getElementById("confirmar")

function ramdomAcid(data){
    const acid=[]
    for(acidname in data){
    acid.push(data[acidname])
    }
    const value = Math.floor(Math.random() * acid.length)
    return acid[value]
}
var acertos = 0
    var erros = 0
async function iniciar(){
    
    const acidos = await fetch("./acidos.json")
    const data = await acidos.json()
    
    var acidoAtual = ramdomAcid(data)
    acidFormula.innerText = acidoAtual
    
    btn.addEventListener("click", ()=>{
        const acidName =  document.getElementById("name").value
        const treatedAcidName = acidName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if(data[treatedAcidName] == acidoAtual){ 
            console.log("win")
            acertos++
        } else{
            console.log("lost")
            erros++
        }
        console.log(console.log(data[treatedAcidName],acidoAtual,treatedAcidName))
        document.getElementById("name").value = "ácido"
        document.getElementById("pontos").innerText = `acertos:${acertos} erros:${erros}`
        acidoAtual = ramdomAcid(data)
        acidFormula.innerText = acidoAtual
    })

}
iniciar()