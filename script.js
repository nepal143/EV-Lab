window.addEventListener("scroll" , ()=>{
    let height  = window.innerHeight ;
    let scroll_height  = window.scrollY ;
    console.log(scroll_height)
    if(scroll_height >= 100){
        let opacity = document.getElementsByClassName("zero-opacity");
        for(var i = 0 ;i < opacity.length ;i++) {
            opacity[i].classList.add("one-opacity");
            opacity[i].classList.remove("zero-opacity");
        };
    }
    else{
        let opacity = document.getElementsByClassName("one-opacity");
        for(var i = 0 ;i < opacity.length ;i++) {
            opacity[i].classList.add("zero-opacity");
            opacity[i].classList.remove("one-opacity");
        };
        
    }
})
let main_card_number = 1


const show_cards = ()=>{
    let cards = document.getElementsByClassName("card");
    for(var i = 0 ; i < cards.length ; i++){
        cards[i].style.display = "none" ;
    }
    for(var i = main_card_number-1  ; i < main_card_number+2 ; i++){
        cards[i].style.display = "flex" ;
    }
    cards[main_card_number].classList.add("card-active");
}

show_cards();