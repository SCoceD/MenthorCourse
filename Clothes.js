class Clothes extends AbstractProduct {
    constructor(sizes, activeSize, material, color) {
        super();
        this.sizes = sizes;
        this.activeSize = activeSize;
        this.material = material;
        this.color = color;
    }
}

Clothes.prototype.addSize = function (newSize) {
    this.sizes.push(newSize);
};

Clothes.prototype.deleteSize = function (sizeToDelete) {
    if (this.sizes.includes(sizeToDelete)) {
        this.sizes.splice(this.sizes.findIndex(sizeToDelete), 1);
    }
};

Clothes.prototype.getActiveSize = function () {
    return this.activeSize;
};

Clothes.prototype.setActiveSize = function (newActiveSize) {
    this.activeSize = newActiveSize;
};

Clothes.prototype.getMaterial = function () {
    return this.material;
};

Clothes.prototype.setMaterial = function (newMaterial) {
    this.material = newMaterial;
};

Clothes.prototype.getColor = function () {
    return this.color;
};

Clothes.prototype.setColor = function (newColor) {
    this.color = newColor;
};