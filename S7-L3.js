// 1. Funzione fetch()
const getBook = function() {
    fetch('https://striveschool-api.herokuapp.com/books') 
    .then((response)=>{
        if(response.ok) {
            console.log('Stai facendo qualcosa di buono nella vita', response)
            return response.json()
        }
        else {
            throw new Error('Brava, hai sbagliato')
        }
        
    })
    // Estraggo 
    .then((arrayofBooks)=>{
        console.log('Ho estratto il body', arrayofBooks)
        const booksList = document.getElementById('book-card');
        arrayofBooks.forEach(book => {
            // DOM
        const newBook = document.createElement('div'); 
        newBook.classList.add('col'); 
        newBook.innerHTML = `
            <div class="card">
                <img src="${book.img}" class="card-img-top img-fluid" alt="">
                <div class="card-body border border-2 border-dark">
                    <h5 class="card-title">${book.title}</h5> <!-- Assicurati di inserire il titolo -->
                    <p class="card-text">Prezzo: ${book.price}</p>
                    <input class="btn btn-success" type="button" onclick="shopBook()" value="Shop">
                    <input class="btn btn-primary scarta-btn" type="button" value="Scarta">
                </div>
            </div>
        `;
        booksList.appendChild(newBook);

            // Pulsante 'Scarta'
            const scartaButton = newBook.querySelector('.scarta-btn');
            scartaButton.addEventListener('click', () => {
                newBook.remove(); 
            });

            localStorage.setItem('books', JSON.stringify(arrayofBooks))
            localStorage.removeItem('books', arrayofBooks)
        })
    })

    .catch((err)=>{
        console.log('Sei una chiavica', err)
    })
}
getBook()

// Cart
/* const shopBook = function() {
    const cartForBooks = document.getElementById('cart')
    const bookTitle = document.getElementsByClassName('card-title')[0].innerText
    shopBook.innerText = bookTitle
    const eachBook = shopBook.innerText
    cart.push(eachBook)
    console.log(cart)
    console.log('ok')

    cartForBooks.appendChild()
}
*/



