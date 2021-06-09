const messages = [
  "José",
  "Ana",
  "Cartucho",
  "Peperina",
  "Ramiro",
  "Romero",
  "Carmelo",
  "Cipriano"
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
}

module.exports = { randomMsg }