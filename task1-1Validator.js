const Validator = function () {
    function validateEmail(toValidate) {
        return (/^[^\s\d\.-]([a-zA-Z\-\.\+\d]{1,20})@([a-zA-Z\d\’\+\?\^\&\.\*\!\/\=\$\%\_\-]{1,15})\.([a-zA-Z]{1,5})$/g).test(toValidate);
    }

    function validatePhone(toValidate) {
        const regExp = /\d\-\(\)\s/;
        if (toValidate.length > 25 || toValidate.length < 10) {
            return false;
        }
        if (!toValidate.test(regExp)) {
            return false;
        }
        return true;
    }

    function validatePassword(toValidate) {
        return (/(?=.*[A-Z][a-z][0-9]).{8,}/).test(toValidate);
    }
};
module.exports = Validator;