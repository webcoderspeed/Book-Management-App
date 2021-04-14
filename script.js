const form = document.querySelector('form');
const bookName = document.getElementById('bookName');
const price = document.getElementById('price');
const bookNumber = document.getElementById('bookNumber');
const bookInfo = document.querySelector('.bookInfo');


// Add books
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const id = Math.random();

  const bookData = `
   <div class="row" id=${id}>
      <div>${bookName.value}</div>
      <div>$${price.value}</div>
      <div>${bookNumber.value}</div>
      <div class="message">Click to delete</div>
    </div>
  `
  localStorage.setItem(`${id}`, bookData);  
  bookInfo.innerHTML += bookData;
  form.reset();
})

// renderBooks
  for (let index=0;index<localStorage.length;index++){
  bookInfo.innerHTML +=  localStorage.getItem(localStorage.key(index))
  }

// Remove book
bookInfo.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem(e.target.parentNode.id);
  e.target.parentNode.remove()
})