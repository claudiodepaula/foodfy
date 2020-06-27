const modal_overlay = document.querySelector(".modal_overlay")
const cards = document.querySelectorAll("div.card")


for (let card of cards){
    card.addEventListener("click", function(){
        modal_overlay.classList.add("active")
        let insertCard = card.querySelector("img").getAttribute("src")
        let insertTitle = card.querySelector(".card_title p").innerHTML
        let insertPostedBy = card.querySelector(".card_posted_by").innerHTML
        modal_overlay.querySelector(".modal img").src=insertCard
        modal_overlay.querySelector("#modal_title").innerHTML=insertTitle
        modal_overlay.querySelector("#modal_postedby").innerHTML=insertPostedBy

        
    })
}



modal_overlay.querySelector("#close_modal").addEventListener("click", function(){
    modal_overlay.classList.remove("active");
    insertCard=""
})
