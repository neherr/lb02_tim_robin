// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("name", userObj.name);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("nachname", userObj.nachname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("anrede", userObj.anrede);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("grund", userObj.grund);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("nachricht", userObj.nachricht);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("name",userObj.name, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("nachname",userObj.nachname, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("nachricht",userObj.nachricht, 5, 500);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
