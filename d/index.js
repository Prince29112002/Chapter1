const Product = [
    
       { name: 'Thar', price: 100},
        {name: 'Scorpio', price: 40},
        {name: 'Fortuner', price: 90},
        {name: 'Neno', price: 30},

    
]
    const Product1 = Product.filter(Product => Product.price>50);
    console.log(Product1);
