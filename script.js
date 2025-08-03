const burgers = [
    { name: "Bacon Egg", price: 28.90, vegan: false, src: "./img/bacon-egg.png" },
    { name: "Mostruoso ", price: 25.90, vegan: false, src: './img/monstruoso.png' },
    { name: "Xbacon", price: 22.90, vegan: false, src: './img/xbacon.png' },
    { name: "Xsalada", price: 20.90, vegan: false, src: './img/xsalada.jpeg' },
    { name: "Xvegan", price: 20.90, vegan: true, src: './img/xvegan.png' },
    { name: "MonstruosoVegan", price: 20.90, vegan: true, src: './img/monstruoso-vegan.png' },
]

const burgerList = document.querySelector('ul');
const showAllButton = document.querySelector('.show-all');
const mapAllButton = document.querySelector('.map-all');
const sumAllButton = document.querySelector('.sum-all');
const filterAllButton = document.querySelector('.filter-all');
let myList = ''

function showAll(burgerArray) {
    burgerArray.forEach((burger) => {
        myList += `
        <li>
            <img src="${burger.src}" alt="${burger.name}">  
            <p>${burger.name}</p>
            <p>R$ ${burger.price.toFixed(2)}</p>
    `

    })
    burgerList.innerHTML = myList;
    myList = '';
}

function mapAll() {
    const mappedBurgers = burgers.map((product) => ({
        ...product,
        price: product.price * 0.9,

    }))
    showAll(mappedBurgers);

}
function sumAll() {
    const total = burgers.reduce((acc, burger) => acc + burger.price, 0);
    burgerList.innerHTML = `<li>Total: R$ ${total}</li>`;
    // Aplicando desconto de 10% no total
    const discountedTotal = total * 0.9;
    burgerList.innerHTML += `<li>Total com desconto: <br>
                            R$ ${discountedTotal.toFixed(2)}</li>`;
}
function filterAll() {
    const veganBurgers = burgers.filter((burger) => burger.vegan);
    showAll(veganBurgers);
}

showAllButton.addEventListener('click', () => showAll(burgers));
mapAllButton.addEventListener('click', mapAll);
sumAllButton.addEventListener('click', sumAll);
sumAllButton.addEventListener('click', () => sumAll(burgers));
filterAllButton.addEventListener('click', filterAll); 