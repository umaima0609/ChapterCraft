import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase , ref , set, push , onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


const appSettings = {
  databaseURL: "https://bookslibrary1-27601-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(appSettings);
const db = getDatabase(app)
const addBook = ref(db, "Books")

// Refrences
const titleInp = document.getElementById("titleInp")
const priceInp = document.getElementById("priceInp")
const imageInp = document.getElementById("imageInp")
const readInp = document.getElementById('readInp')
const authorInp = document.getElementById("authorInp")
const addBookbtn = document.getElementById("addBookBtn")
const cardRow = document.getElementById('cardRow')

// functions
addBookbtn.addEventListener("click", function(){
  
    let title = titleInp.value;
    let price = priceInp.value;
    let image = imageInp.value
    let url   = readInp.value
    let author = authorInp.value
    
    if(title && price && image && url && author){
      const newItemRef = push(addBook)
        const newItemKey = newItemRef.key

        set(ref(db , `Books/${newItemKey}`), {
            title : title,
            price: price,
            image: image,
            url: url,
            author: author
        });
        // to empty fields
        const exampleModal = document.getElementById("exampleModal")
        const input = exampleModal.getElementsByTagName('input')
        for(let i = 0 ; i < input.length; i++){
          input[i].value = ""
        }
        
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Enter All Fields!",
        });

      }
    })
    
    onValue(addBook, function (snapshot) {
      cardRow.innerHTML = ""
      if (snapshot.exists()) {
      
      const data = Object.entries(snapshot.val());
  
      for (let i = 0; i < data.length; i++) {
        bookCards(data[i]);
      }
    } else {
      shoppingList.innerHTML = `<li>No items to show...</li>`;
    }
  });

  // console.log("🚀 ~ cardRow:", cardRow)
  function bookCards(item) {
    let itemId = item[0];
    let itemData = item[1];
    cardRow.innerHTML += `<div class="col-12 col-sm-6 col-md-4 border border-0">
    <div class="card p-2 m-3 w-75 mx-auto border border-0 shadow-lg" >
        <img src="${itemData.image}" class="card-img-top imgHeight" alt="...">
        <div class="card-body text-center">
            <h5 class="card-title fs-3 ">Title: ${itemData.title}</h5>
            <h5 class="card-title fs-3 ">Author: ${itemData.author}</h5>
            <h5 class="card-title fs-4 ">Cost: ${itemData.price}</h5>
            <a href="${itemData.url}" class=" fs-6 ">Read Book</a>
        </div>
    </div>

</div>`
  
}
  


