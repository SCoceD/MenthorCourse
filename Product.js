const Product = function (ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) {
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
};

Product.prototype.getImage = function (index = 0) {
    return Array.isArray(this.images) && this.images.length > index ? this.images[index] : null;
}

Product.prototype.getReviewByID = function (ID) {
    return this.reviews.find(item => item.ID === ID);
};

Product.prototype.getID = function () {
    return this.ID;
};

Product.prototype.addSize = function (newSize) {
    this.sizes.push(newSize);
};

Product.prototype.deleteSize = function (sizeToDelete) {
    if (this.sizes.includes(sizeToDelete)) {
        sizes.splice(sizes.findIndex(sizeToDelete), 1);
    }
};

Product.prototype.addReview = function (newReview) {
    this.reviews.push(newReview);
};

Product.prototype.deleteReview = function (ID) {
    const index = reviews.indexOf(ID);
    if (index !== -1) {
        reviews.splice(index, 1);
    }
};

Product.prototype.getAverageRating = function () {
    let averageRating;
    this.reviews.forEach(item => {
        averageRating += item.rating
    })
    return averageRating / reviews.length;
};

module.exports = Product;