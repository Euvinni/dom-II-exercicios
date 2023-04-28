const container = document.getElementById(`container`)

//Função que adiciona o item
const adicionaItem = (event) => {
const novoItem = document.createElement(`article`)
novoItem.innerHTML = `Sou um texto`
novoItem.classList.add(`item`)

//Adicionando o mesmo evento ao item criado
novoItem.setAttribute(`onclick`, `removeItem(event)`)

//Posicionando o item criado no final 
container.insertAdjacentElement(`beforeend`, novoItem) 
}

//Função que remove os itens 
const removeItem = (event) => {
event.target.remove()
} 