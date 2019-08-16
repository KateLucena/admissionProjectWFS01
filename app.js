function valida_form(){
    var email = formvalid.email.value;

    if (email == ""){
        alert("Por favor, insira o seu e-mail!");
        formvalid.email.focus();
    } else{
        return alert("O e-mail" + " " + formvalid.email.value + " " + "foi enviado com sucesso!");
    }
}