const cards = document.querySelectorAll("div.card")
const hide = document.querySelectorAll(".show")

for (let card of cards){

    card.addEventListener("click", function(){
        const id = card.getAttribute("id")
        window.location.href = `/recipes/${id}`
    })
}


for (let h of hide){
    h.addEventListener("click", function(){
        let buttonId = h.getAttribute("id")

        switch (buttonId){
        case "hide_ingredients":
            if(document.querySelector("#ingredients_list").classList.contains("hide")){
                document.querySelector("#ingredients_list").classList.remove("hide")
                document.querySelector("#hide_ingredients").innerHTML = "Esconder"}
            else{
                document.querySelector("#ingredients_list").classList.add("hide")
                document.querySelector("#hide_ingredients").innerHTML = "Mostrar"
            }
            break;

        case "hide_preparation":
            if(document.querySelector("#preparation_list").classList.contains("hide")){
                document.querySelector("#preparation_list").classList.remove("hide")
                document.querySelector("#hide_preparation").innerHTML = "Esconder"}
            else{
                document.querySelector("#preparation_list").classList.add("hide")
                document.querySelector("#hide_preparation").innerHTML = "Mostrar"
            }
            break

        case "hide_information":
            if(document.querySelector("#information_text").classList.contains("hide")){
                document.querySelector("#information_text").classList.remove("hide")
                document.querySelector("#hide_information").innerHTML = "Esconder"}
            else{
                document.querySelector("#information_text").classList.add("hide")
                document.querySelector("#hide_information").innerHTML = "Mostrar"
            }
            break

        }
    })
}
