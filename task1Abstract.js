class AbstractProduct {
    constructor() {
        if (this.constructor == Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getReviewByID = function (ID) {
        for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID == ID) {
                return reviews[i];
            }
        }
        return 'No such element';
    }


}