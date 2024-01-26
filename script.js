
    let cardElements = document.getElementsByClassName("historyCard");
    




function DisplayCard(num){
    switch (num){
        case 1 :
            cardElements[0].style.display = "block";
            cardElements[1].style.display = "none";
            cardElements[2].style.display = "none";
            break
        
        case 2 :
            cardElements[0].style.display = "none";
            cardElements[1].style.display = "block";
            cardElements[2].style.display = "none";
            break;

        case 3 :
            cardElements[0].style.display = "none";
            cardElements[1].style.display = "none";
            cardElements[2].style.display = "block";
            break;
        }
}   
function defaultCard(){
    cardElements[0].style.display = "block";
    cardElements[1].style.display = "none";
    cardElements[2].style.display = "none";
}