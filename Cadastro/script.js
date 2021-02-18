const $ = document.querySelector.bind(document);
const cep = document.getElementById("cep");
const nome = document.getElementById("nome")
cep.addEventListener("focusout", () => {
    let dadosAPI;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://viacep.com.br/ws/${cep.value}/json`, false);
    xhr.addEventListener("load", () => {
        if(xhr.status == 200) {
            dadosAPI = JSON.parse(xhr.responseText);     
            console.log(dadosAPI);
            for(const elemento in dadosAPI) {
                if($(`#${elemento}`)) {
                    $(`#${elemento}`).value = dadosAPI[elemento];
                }
            }
        }
        if(dadosAPI.erro == true) {
            alert("Coloque um CEP válido")
        }
    }) 
    xhr.send();
})

const email = document.getElementById("email")
const cadastrar = document.getElementById("botao-enviar");
const main = document.getElementById("main-container");
const senha = document.getElementById("senha")
const confirmeSenha = document.getElementById("senhac")
const re = /\S+@\S+\.\S+/;
cadastrar.addEventListener("click", () => {
        if(senha.value == confirmeSenha.value) {
            if(re.test(email.value) && email.value != "") {
                let confirmacao = document.createElement("h3");
                confirmacao.innerText = `Um e-mail de confirmação foi enviado para "${email.value}".`
                confirmacao.classList.add("confirmacao")
                confirmacao.style.color = "white";
                main.innerHTML = ""
                main.appendChild(confirmacao);
            } else {
                alert("E-mail inválido")
            }
        } else {
        alert("Senhas devem ser iguais")
    }  
})