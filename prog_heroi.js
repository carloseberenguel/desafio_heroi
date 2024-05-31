//Desafio Heroi

//Desenvolvido por Carlos E Berenguel

let NomeJogador = "Carlos"
let Pontos = 5500;
let Nivel ="";

if (Pontos < 1000){
    Nivel = "Ferro"
}else if (Pontos >= 1001 && Pontos <= 2000){
    Nivel = "Bronze"
}else if (Pontos >= 2001 && Pontos <= 5000){
    Nivel = "Prata"
}else if (Pontos >= 5001 && Pontos <= 7000){
    Nivel = "Ouro"
}else if (Pontos >= 7001 && Pontos <= 8000){
    Nivel = "Platina"
}else if (Pontos >= 8001 && Pontos <= 9000){
    Nivel = "Ascendente"
}else if (Pontos >= 9001 && Pontos <= 10000){
    Nivel = "Imortal"
}else if (Pontos >= 10001){
    Nivel = "Radiante"
}
console.log(`Jogador ${NomeJogador} está no nivel: ${Nivel}`)


