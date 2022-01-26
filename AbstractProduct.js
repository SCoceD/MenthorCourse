const AbstractProduct = function (ID, name, description, price, quantity, reviews, images, date, brand) {
    if (this.constructor === AbstractProduct) {
        return new Error("FYI: Instance of Abstract class cannot be instantiated");
    }
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.reviews = reviews;
    this.images = images;
    this.date = date;
    this.brand = brand;
};

AbstractProduct.prototype.getImage = function (index = 0) {
    return Array.isArray(this.images) && this.images.length > index ? this.images[index] : null;
}

AbstractProduct.prototype.getReviewByID = function (ID) {
    return this.reviews.find(item => item.ID === ID);
};

AbstractProduct.prototype.getID = function () {
    return this.ID;
};

AbstractProduct.prototype.addReview = function (newReview) {
    this.reviews.push(newReview);
};

AbstractProduct.prototype.deleteReview = function (ID) {
    const index = this.reviews.indexOf(ID);
    if (index !== -1) {
        this.reviews.splice(index, 1);
    }
};

AbstractProduct.prototype.getAverageRating = function () {
    let averageRating;
    this.reviews.forEach(item => {
        averageRating += item.rating
    })
    return averageRating / this.reviews.length;
};

AbstractProduct.prototype.getFullInformation = function() {
    let result;
    for (let key in this){
        result += key + '-' + this[key] + '/n';
    }
    return result;
};

AbstractProduct.prototype.getPriceForQuantity = function(quantity) {
  return this.price * quantity;
};

module.exports = AbstractProduct;