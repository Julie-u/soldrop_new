let products = [
    {
        GameTitle: 'Red Dead Redemption 2',
        GameGenre: 'Open Wolrd, RPG, Adventure',
        GamePrice: 39.99,
        oldPrice: 69.99,
        GameRating: 4.5,
        GameDescription: 'After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.',
        GameImage: 'Red-dead-1.jpeg',
    },
    {
        GameTitle: 'God Of War 4',
        GameGenre: 'Open Wolrd, Adventure',
        GamePrice: 59.99,
        oldPrice: 89.99,
        GameRating: 4.5,
        GameDescription: 'Living as a man outside the shadow of the gods, Kratos must adapt to unfamiliar lands, unexpected threats and a second chance at being a father.',
        GameImage: 'gowa.jpeg',
    },
    {
        GameTitle: 'The Witcher 3',
        GameGenre: 'Open Wolrd, RPG, Adventure',
        GamePrice: 39.99,
        oldPrice: 79.99,
        GameRating: 5,
        GameDescription: 'Become a professional monster slayer and embark on an adventure of epic proportions!',
        GameImage: 'thewitcher.jpeg',
    },
    {
        GameTitle: 'Valhalla',
        GameGenre: 'Open Wolrd, RPG, Adventure',
        GamePrice: 39.99,
        oldPrice: 79.99,
        GameRating: 4.5,
        GameDescription: 'Become Eivor, a legendary Viking raider on a quest for glory. Explore Englands Dark Ages as you raid your enemies, grow your settlement, and build your political power.',
        GameImage: 'valhalla.jpeg',
    },
    {
        GameTitle: 'GTA 5',
        GameGenre: 'Multi Gaming, Action, Open World',
        GamePrice: 14.99,
        oldPrice: 59.99,
        GameRating: 4,
        GameDescription: 'Los Santos: a sprawling sun-soaked metropolis full of self-help gurus, starlets and fading celebrities, once the envy of the Western world, now struggling to stay afloat in an era of economic uncertainty and cheap reality TV.',
        GameImage: 'gta5.jpeg',
    },
    {
        GameTitle: 'The Last Of Us',
        GameGenre: 'Action, Horror',
        GamePrice: 39.99,
        oldPrice: 89.99,
        GameRating: 5,
        GameDescription: 'Joel, a violent survivor, is hired to smuggle a 14 year-old girl, Ellie, out of an oppressive military quarantine zone, but what starts as a small job soon transforms into a brutal journey across the U.S.',
        GameImage: 'tlou.png',
    },
    {
        GameTitle: 'Village Resident Evil',
        GameGenre: 'Horror, Multi Gaming',
        GamePrice: 39.99,
        oldPrice: 69.99,
        GameRating: 4.5,
        GameDescription: 'Experience survival horror like never before in the eighth major installment in the storied Resident Evil franchise - Resident Evil Village.',
        GameImage: 'village.jpeg',
    },
];

console.table(products);

let productTable = document.querySelector('.grid-container');

products.forEach((product) => {
    let oneProduct = document.createElement(`article`);
    oneProduct.classList.add(`product`);
    oneProduct.innerHTML = `
    <header>
        <div class="game-picture">
            <a href="product.html"><img src="img/${product.GameImage}" alt="${product.GameTitle}"></a>
        </div>
        <h3>${product.GameTitle}</h3>
        <h4>${product.GameGenre}</h4>
        <data value="39"><ins>$${product.GamePrice}</ins> <del>$${product.oldPrice}</del></data>
        <h5>${product.GameDescription}</h5>
    </header>
    <footer>
        <class="add-cart"><span class="fas fa-shopping-cart"></span>
        <class="add-fav"><span class="far fa-heart"></span>
    </footer>
`
productTable.appendChild(oneProduct);

});

products.forEach((game) => { 
    console.log(`${game.GameTitle} ${game.GameGenre}: ${game.GamePrice} ${game.GameRating} ${game.GameDescription}`);
});