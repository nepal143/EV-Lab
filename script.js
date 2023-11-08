window.addEventListener("scroll", () => {
    let height = window.innerHeight;
    let scroll_height = window.scrollY;
    if (scroll_height >= 100) {
        let opacity = document.getElementsByClassName("zero-opacity");
        for (var i = 0; i < opacity.length; i++) {
            opacity[i].classList.add("one-opacity");
            opacity[i].classList.remove("zero-opacity");
        };
    } else {
        let opacity = document.getElementsByClassName("one-opacity");
        for (var i = 0; i < opacity.length; i++) {
            opacity[i].classList.add("zero-opacity");
            opacity[i].classList.remove("one-opacity");
        };
    }
});

let main_card_number = 1

let cards = document.getElementsByClassName("card");

const show_cards = () => {
    for (var i = 0; i < cards.length; i++) {
        if (i != main_card_number - 1 && i != main_card_number + 1 && i != main_card_number)
            cards[i].style.display = "none";
    }
    cards[main_card_number].classList.add("card-active");
}

const card_decrement = () => {
    if (main_card_number + 1 <= cards.length) {
        cards[main_card_number].classList.remove("card-active");
        cards[main_card_number + 1].classList.add("card-active");
        
        if (main_card_number + 2 <= cards.length - 1) {
            cards[main_card_number + 2].style.display = "flex";
        }
        if (main_card_number - 1 >= 0) {
            cards[main_card_number - 1].style.display = "none";
        }
        main_card_number++;
    }
}

const card_increment = () => {
    if (main_card_number - 1 >= 0) {
        cards[main_card_number].classList.remove("card-active");
        cards[main_card_number - 1].classList.add("card-active");
        if (main_card_number - 2 >= 0) {
            cards[main_card_number - 2].style.display = "flex";
        }
        if (main_card_number + 1 < cards.length) {
            cards[main_card_number + 1].style.display = "none";
        }
        main_card_number--;
    }
}

show_cards();
