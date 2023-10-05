const book = {
    name: "RAMAYANA",
    author: "VALMIKI",

    summary: function () {
        console.log(`The name of book is ${this.name}`),
        console.log(`The author name is ${this.author}`)
    }

};

book.summary();
