
let check_password = (password) => {
    let list = []
    if (password.length < 8){
        list.push(" debe tener al menos 8 caracteres")
    }
    let number = /\d/.test(password)
    if(!number){
        list.push(" debe tener al menos 1 número")
    
    }
    let contains_letter = /[a-zA-z]/.test(password)
    if(!contains_letter){
        list.push("debe tener una letra")

    }
    let special_character = /[!@#$%^&*()+=_\-{}\[\]:;"'?><,.|/\\~`]/.test(password)
    if (!special_character){
        list.push(" debe tener al menos un carácter especial")

    }
    if (list.length <1){
        alert("La contraseña es segura")
        return false
    
    }    
    else{
        list.unshift("La contraseña no es segura")
        alert(list)
        return true
    }
    }

let flag = true   
while(flag){   
    let password = prompt("Por favor, introduzca su contraseña")
    flag =  check_password(password)
    if(!flag)break;
} 

alert("Éxito")