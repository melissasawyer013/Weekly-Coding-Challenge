// When the "login" button is clicked, the visitor enters a username. If the user leaves the password prompt empty, an alert will be called that says "Canceled" If the user leaves the prompt empty, an alert with the message "Cancelled" will be called. If the user enters in a username other than "admin", an alert will be called that says "I don't know you." If the user enters "admin", they will be prompted for a password. If the password they enter is "TheMaster", an alert will be called that says "Welcome!" If the user enters a different password, an alert will be called that says "Wrong password". If the user does not enter text, an alert will be called that says "Canceled". 


function checkCredentials () {
    let usernameAnswer = prompt("Enter your username.");

    if (usernameAnswer === "admin") {
        let passwordAnswer = prompt("Enter your password.");
        passwordAnswer;

        if (passwordAnswer === "TheMaster") {
            alert("Welcome!");
        } else if (passwordAnswer === "") {
            return alert("Canceled");
        } else {
            return alert("Wrong password.");
        }

    } else if (usernameAnswer === "") {
        return alert("Canceled")
    } else {
        return alert("I don't know you.");
    }
}
