var idade = 66
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Voce não vota!`)
}
else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional!`)
}
else if (idade >= 18 && idade <= 65) {
    console.log(`Voto obrigatório!`)
    }
