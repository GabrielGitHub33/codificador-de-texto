const caixaSecreta = document.getElementById ("caixaSecreta");
const botaoCriptografar = document.getElementById ("botaoCriptografar");
const botaoDescriptografar = document.getElementById ("botaoDescriptografar");
const botaoCopiar = document.getElementById ("botaoCopiar");
const mensagemFinal = document.getElementById ("mensagemFinal");
const alexandre = document.getElementById ("alexandre");
const mensagemCorreta = document.getElementById ("mensagemCorreta"); 
const apresentacaoDireitaAjustar = document.getElementById ("apresentacaoDireitaAjustar");

let replace = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const remplace = (novoValor) => {
    mensagemFinal.innerHTML = novoValor;
    alexandre.style.display = "none";
    caixaSecreta.value="";
    mensagemCorreta.style.display = "none";
    botaoCopiar.style.display = "block";
    apresentacaoDireitaAjustar.classList.add ("ajustar");
    mensagemFinal.classList.add("ajustar");
}

botaoCriptografar.addEventListener("click", () => {
    const texto = caixaSecreta.value.toLowerCase()
    function criptografar(newText) {
        for (let i = 0; i < replace.length; i++){
            if (newText.includes(replace[i][0])){
                newText = newText.replaceAll(replace[i][0], replace[i][1]);
            };
        };
        return newText
    }
    remplace(criptografar(texto));
});

botaoDescriptografar.addEventListener("click", () => {
    const texto = caixaSecreta.value.toLowerCase();
    function descriptografar(newText) {
        for (let i = 0; i < replace.length; i++){
            if (newText.includes(replace[i][1])) {
                newText = newText.replaceAll(replace[i][1], replace[i][0]);
            };
        };
        return newText
    }
    remplace(descriptografar(texto)) 
})

botaoCopiar.addEventListener("click", () => {
    let texto = mensagemFinal.textContent || mensagemFinal.innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Mensagem copiada com sucesso!");
    }).catch(err => {
        console.error("Erro ao copiar a mensagem: ", err);
    });

    mensagemFinal.innerHTML = "";
    alexandre.style.display = "block";
    mensagemCorreta.style.display = "block";
    mensagemFinal.style.display = "block";
    botaoCopiar.style.display = "none";
    apresentacaoDireitaAjustar.classList.remove ("ajustar");
    mensagemFinal.classList.remove("ajustar");
    
});