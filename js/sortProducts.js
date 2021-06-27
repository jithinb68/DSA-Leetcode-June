function sort(products) {
    products.sort(function(prodA, prodB) {
        const priceA = prodA.price
        const priceB = prodB.price
        if (priceA < priceB) return -1;
        if (priceA > priceB) return 1;
        if (priceA === priceB) {
            const ratingA = prodA.rating
            const ratingB = prodB.rating
            if (ratingA < ratingB) return 1;
            if (ratingA > ratingB) return -1;
        }
        return 0;
    });
    return products
}


const myArray = [
    { name: 'prod 1', price: 12, rating: 9.5 },
    { name: 'prod 2', price: 3, rating: 9.5 }, 
    { name: 'prod 3', price: 6, rating: 2 },  
    { name: 'prod 3', price: 6, rating: 7 }, 
]


sort(myArray)