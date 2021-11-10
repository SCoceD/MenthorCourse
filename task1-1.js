let temp = new Product("1", "fen", "2000w", 100.1, "braun", ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 'L', 10, new Date('2021-11-07 17:29:00'), [new reviews('1', 'SomeAuthor', new Date('2021-11-07 17:37:00'), 'qwerty', /*{ 'service': 1, 'price': 2, 'value': 3, 'quality':*/ 4), new reviews('2', 'SomeAuthor2', new Date('2021-11-07 18:35:00'), 'qwerty1', /*{ 'service': 4, 'price': 3, 'value': 2, 'quality':*/ 1)], ['a', 's', 'd', 'f']);

console.log(temp.getReviewByID(2));
console.log(temp.getImage('a'));
console.log(temp.sizes);
console.log(temp.addSize('A'));
console.log(temp.sizes);
console.log(temp.deleteSize('A'));
console.log(temp.sizes);
console.log(temp.addReviews(new reviews('3', 'SomeAuthor3', new Date('2021-11-07 20:03:00'), 'qwerty2', {
    'service': 2,
    'price': 3,
    'value': 4,
    'quality': 5
})));
console.log('fcgvhbjnmk')
console.log(temp.getReviewByID(3));
console.log(temp.deleteReviews(3));
console.log(temp.getReviewByID(3));
console.log(temp.getAverageRating());


function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;

    this.getReviewByID = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID == ID) {
                return reviews[i];
            }
        }
        return 'No such element';
    }

    this.getImage = function (parametr) {
        if (parametr == undefined) {
            return this.images[0];
        } else {
            this.images.forEach(element => {
                if (element.hasOwnProperty(parametr)) {
                    return element;
                }
            });
        }
        console.log
    }

    this.addSize = function (newSize) {
        this.sizes.push(newSize);
    }

    this.deleteSize = function (toDelete) {
        for (let i = 0; i < this.sizes.length; i++) {
            if (this.sizes[i] == toDelete) {
                this.sizes.splice(i, 1);
            }
        }
    }

    this.addReviews = function (newReview) {
        reviews.push(newReview);
    }

    this.deleteReviews = function (ID) {
        for (let i = 0; i < reviews.length; i++) {
            if (this.reviews[i].ID == ID) {
                this.reviews.splice(i, 1);
            }
        }
        return 'deleting done';
    }

    this.getAverageRating = function () {
        let tempAverageRating = 0;
        this.reviews.forEach(element => {
            tempAverageRating += element.rating;
        });
        return tempAverageRating;

        // let tempSumOfReitings = [];
        // this.reviews.forEach(element => {
        //     console.log(element)
        //     tempSumOfReitings.push(element.reting);
        // });
        // let s = tempSumOfReitings.reduce((a, b) => a + b) / tempSumOfReitings.length;
        // return s;

        // let tempSumOfReitings = 0;
        // for (let element in this.reviews) {
        //     console.log(element.rating);
        //     for (let element1 in element.rating) {
        //         console.log(element.rating[element1]);
        //         tempSumOfReitings += element.rating[element1];
        //     }
        // }
        // tempSumOfReitings += 1;
        // console.log(tempSumOfReitings)
        // return tempSumOfReitings / (this.reviews.length * 4);
    }
}

function reviews(ID, author, date, comment, rating) {
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating = rating;
}

function Search(products, search) {
    // this.products = products;
    // this.search = search;
    let result = [];

    products.forEach(element => {
        if (element.name.indexOf(search)) {
            result.push(element);
        } else if (element.description.indexOf(search)) {
            result.push(element);

        }
    });
    return result;
}

function Sort(products, sortRule) {
    switch (sortRule) {
        case ID:
            return products[0] - products[0];
        case name:
            return products[1] - products[1];
        case price:
            return products[3] - products[3]
        default:
            return 'No such case';
    }
}