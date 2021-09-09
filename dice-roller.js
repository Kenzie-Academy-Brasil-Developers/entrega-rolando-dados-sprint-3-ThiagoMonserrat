const botao = document.querySelector("#rodar");
const resultados = document.getElementById("resultados");
function aleatorio(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function girar(){
    resultados.innerHTML = "";
    let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 1000; i++){
        let dado1=aleatorio(1, 6);
        let dado2=aleatorio(1, 6);
        let soma = dado1+dado2;
        num[soma] = num[soma]+1;
    }
    for (let t=2; t<num.length; t++){
        let posicao = t;
        const numeros = document.createElement("div");
        const vezes = document.createElement("div");
        numeros.innerText = num[posicao]+" vezes";
        vezes.innerText = "O dado parou no numero "+t+": ";
        numeros.style.width=`${num[t]}px`;
        numeros.style.backgroundColor="#040fa3";
        resultados.appendChild(vezes);
        resultados.appendChild(numeros);
    }
    return resultados;
}
botao.addEventListener('click', girar);
