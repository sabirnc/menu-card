const breakfast = document.getElementById("breakfast")
const lunch = document.getElementById("lunch")
const dinner = document.getElementById("dinner")
const idli = document.getElementById("breakfast-item-1")
const dosa = document.getElementById("breakfast-item-2")
const puttu = document.getElementById("breakfast-item-3")
const biriyani = document.getElementById("lunch-item-1")
const vadapav = document.getElementById("dinner-item-1")
const omlet = document.getElementById("dinner-item-2")
const all = document.getElementById("all")
const active = document.getElementById("active")



all.addEventListener("click", function(){
    active.style.marginLeft = "552px"
    puttu.classList.remove("cards")
    dosa.classList.remove("cards")
    idli.classList.remove("cards")
    vadapav.classList.remove("cards")
    biriyani.classList.remove("cards")
    omlet.classList.remove("cards")

})

breakfast.addEventListener("click", function(){
  active.style.marginLeft = "623px"  
  biriyani.classList.add("cards")
  omlet.classList.add("cards")
  vadapav.classList.add("cards")
  puttu.classList.remove("cards")
  dosa.classList.remove("cards")
  idli.classList.remove("cards")
})

lunch.addEventListener("click", function(){
  active.style.marginLeft = "710px"  
  biriyani.classList.remove("cards")
  idli.classList.add("cards")
  dosa.classList.add("cards")
  puttu.classList.add("cards")
  omlet.classList.add("cards")
  vadapav.classList.add("cards")
}) 

dinner.addEventListener("click", function(){
    active.style.marginLeft = "788px"
    vadapav.classList.remove("cards")
    omlet.classList.remove("cards")
    biriyani.classList.add("cards")
    idli.classList.add("cards")
    dosa.classList.add("cards")
    puttu.classList.add("cards")
    
})
