let money = parseInt(prompt("Informe qual o valor em dinheiro:"))

let gameQuantity = money / 100

console.log(gameQuantity)

gameQuantity = Math.floor(gameQuantity)

document.getElementById("result").innerHTML = gameQuantity

if (money < 100) {
    document.getElementById("result").innerHTML = "you can't buy games"
}
else if (money >= 100 && money <=199) {
    document.getElementById("result").innerHTML = gameQuantity + " game"
}
else {
    document.getElementById("result").innerHTML = gameQuantity + " games"
}