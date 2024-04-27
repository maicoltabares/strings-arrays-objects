let check_email = email => {
    let symbol = /[@.]/.test(email)

    if (!symbol) {
        alert("el correo no cumple con las condiciones")
    }
    else {
        let split_email = email.split("@")
        if (split_email[1].includes(".")) {
            let split_domain = split_email[1].split(".")
            if (split_domain[0] === "") {
                alert("El correo electrónico no llega a las condiciones")
            } else {
                alert("el correo electrónico llega a las condiciones")
            }

        }



    }

}



let email = prompt("Por favor, introduzca su dirección de correo electrónico:")
check_email(email);

