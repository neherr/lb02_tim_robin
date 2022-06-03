// Show input error message

/**
 * Beschreibung
 * @param id: Identifikation des eingegebenen Datenelement
 * @param message: Fehlermeldung
 * @returns {string}
 */
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} successfully validated!`;
}

// Check email is valid
function checkEmail(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email ist nicht korrekt')
        }
    }
    return result;
}

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} muss ausgefüllt sein`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} muss mindestens ${min} Zeichen lang sein`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} muss kürzer sein als ${max} Zeichen`)
        }
    }
    return result;
}
//check Anrede input
function checkAnrede(id, input){
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //wenn Anrede nicht m/f ist
    if (input == "Herr") {
    } else if (input == "Frau") {
    }else {
        //ist nicht valide
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} muss Herr oder Frau sein`)
        }
    }
    return result;
}

function checkGrund(id, input){
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //wenn Grund nicht problem/vorschlag/sonstiges ist
    if (input == "problem") {
    } else if (input == "vorschlag") {
    } else if (input == "sonstiges"){
    } else {
        //ist nicht valide
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} muss Problem, Vorschlag oder Sonstiges sein`)
        }
    }
    return result;
}

module.exports = {
    checkEmail,
    checkAnrede,
    checkGrund,
    checkLength,
    checkRequired
}
