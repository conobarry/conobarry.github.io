/*
* This script validates the contact form.
*/

/*
* The main function called from the page. Returns true if all fields are valid.
*/
function validateContactForm() {
    return (validateNameField() && validateEmailField() && validateMessageField());
}

/*
* Validates the name field and returns true if valid. If reporting is true it'll
* display a message if the field is not valid.
*/
function validateNameField(reporting = true) {
    var nameField = $("#name");
    if (!hasText(nameField)) {
        console.log("name error");
        setError(nameField, true);
        if (reporting) {
            displayError("You need to tell me your name!");
        }
        return false;
    } else {
        setError(nameField, false);
        displayError("");
        return true;
    }
}

/*
* Validates the email field and returns true if valid. If reporting is true it'll
* display a message if the field is not valid.
*/
function validateEmailField(reporting = true) {
    var emailField = $("#email");
    if ((!hasText(emailField)) || (!validEmail(emailField.val()))) {
        console.log("email error");
        setError(emailField, true);
        if (reporting) {
            displayError("That doesn't look like a valid email!");
        }
        return false;
    } else {
        setError(emailField, false);
        displayError("");
        return true;
    }
}

/*
* Validates the message field and returns true if valid. If reporting is true it'll
* display a message if the field is not valid.
*/
function validateMessageField(reporting = true) {
    var messageField = $("#message");
    if (!hasText(messageField)) {
        console.log("message error");
        setError(messageField, true);
        if (reporting) {
            displayError("What, cat got your tongue?");
        }
        return false;
    } else {
        setError(messageField, false);
        displayError("");
        return true;
    }
}

function hasText(element) {
    return $(element).val() != "";
}

function validEmail(val) {
    var emailRegex = new RegExp("^[\\w\\-\\.]+@[^\\W_]+\\.[^\\W_]+($|\\.[^\\W_]+)$");
    return emailRegex.test(val);
}

function setError(element, valid) {
    if (valid) {
        $(element).addClass("error");
    } else {
        $(element).removeClass("error");
    }
}

function displayError(text) {
    $("#error-message").text(text);
}

$(function () { // Only runs when the page is loaded.

    var nameField = $("#name");
    var emailField = $("#email");
    var messageField = $("#message");

    nameField.on("input propertychange paste", function () {
        if (validateNameField(true)) {
            setError(nameField, false);
        }
    });
    
    emailField.on("input propertychange paste", function () {
        if (validateEmailField(true)) {
            setError(emailField, false);
        }
    });
    
    messageField.on("input propertychange paste", function () {
        if (validateMessageField(true)) {
            setError(messageField, false);
        }
    });
});
