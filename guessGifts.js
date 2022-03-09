
function guessGifts(wishlist, presents){
    let gifts = [];

    for(let i = 0; i < presents.length; i++){
        let size = presents[i].size;
        let clatters = presents[i].clatters;
        let weight = presents[i].weight;
        for(let j = 0; j < wishlist.length; j++){
            if(wishlist[j].size === size && wishlist[j].clatters === clatters && wishlist[j].weight === weight){
                gifts.push(wishlist[j].name);
            }
        }
    }
    return gifts;
}

var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents));