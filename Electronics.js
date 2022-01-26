class Electronics extends AbstractProduct {
    constructor(warranty, power) {
        super();
        this.warranty = warranty;
        this.power = power;
    }
}

Electronics.prototype.getWarranty = function () {
    return this.warranty;
};

Electronics.prototype.getWarranty = function (newWarranty) {
    this.warranty = newWarranty;
};

Electronics.prototype.getPower = function () {
    return this.power;
};

Electronics.prototype.getPower = function (newPower) {
    this.power = newPower;
};