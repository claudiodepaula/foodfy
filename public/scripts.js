const cards = document.querySelectorAll("div.card")
const hideButton = document.querySelectorAll(".show")
const contentTexts = document.querySelectorAll(".content_texts")

for (let card of cards){

    card.addEventListener("click", function(){
        const id = card.getAttribute("id")
        window.location.href = `/recipes/${id}`
    })
}



for (let h of hideButton){
    h.addEventListener("click", function(){
        const idButton = h.getAttribute("id");
        
        if(contentTexts[idButton].classList.contains("hide")){
            contentTexts[idButton].classList.remove("hide");
            h.innerHTML = "Esconder"
        } else {
            contentTexts[idButton].classList.add("hide");
            h.innerHTML = "Mostrar"
        }
    })
}


