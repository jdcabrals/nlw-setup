const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
var i = 0

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){

    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists){
        alert("Dia já incluso ❌")
        return
    }

    alert("Dia adicionado com sucesso! ✔")
    nlwSetup.addDay(today)
    AddDay()
    
}

function save(){
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

function AddDay(){
    var h2 = document.getElementById("day")
    h2.innerHTML = i+1
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()