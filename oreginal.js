
let menuList = document.querySelector(".menu__list");
let cartList = document.querySelector(".cart__list");
let elSubTotal = document.querySelector("#subtotal");
let eltax = document.querySelector("#tax")
let eltotal = document.querySelector("#total")

let array =
 [
  {
    id: 1,
    img: "https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
    name: "Pepperoni",
    price: 2.23,
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    name: "Cheesy",
    price: 5.99,
  },
  {
    id: 3,
    img: "https://dic.academic.ru/pictures/wiki/files/83/Supreme_pizza.jpg",
    name: "Margarita",
    price: 7.48,
  },
  {
    id: 4,
    img: "https://www.kxan.com/wp-content/uploads/sites/40/2021/02/GettyImages-1197848673.jpg?w=724",
    name: "Hawaian",
    price: 9.32,
  },
];

let totalPrice = 0;
let summari = 0
// left box added
for (let i = 0; i < array.length; i++) {
  let li = document.createElement("li");
  li.className = "menu__item pizza";
  li.innerHTML = `
      <img class="pizza__img" src=${array[i].img} alt="pizza" />
            <div class="pizza__name">
              <p class="pizza__p">${array[i].name}</p>
              <span class="pizza__price">$${array[i].price}</span>
              <button class="pizza__btn" onclick='addItem(${array[i].id} )'>
                Add to Cart
              </button>
            </div>
  `;

  menuList.appendChild(li);
}

let newPizzasArr = [];
function addItem(id) {
  for (let i = 0; i < array.length; i++) {
    if (id == array[i].id) {
      newPizzasArr.push(array[i]);
    }
  }
  for (let i = 0; i < newPizzasArr.length; i++) {
    if (i == newPizzasArr.length - 1) {
      let li = document.createElement("li");
      li.className = "menu__item pizza cart__item";
      li.innerHTML = `
      <img class="pizza__img" src=${newPizzasArr[i].img} alt="pizza" />
            <div class="pizza__name">
              <p class="pizza__p">${newPizzasArr[i].name}</p>
              <span class="pizza__price">$${newPizzasArr[i].price}</span>
              <button class="pizza__btn remove"  onclick='removeItem(${i})'>
                -
              </button>
              <div class="btn-groiup">
              <button class="btn-num" id="btnnum">0</button>
              <button class="btn-max">+</button>
              <button class="btn-min">-</button>
            </div>
            </div>
    `;

      totalPrice += newPizzasArr[i].price;
      elSubTotal.textContent = totalPrice.toFixed(2);
      eltax.textContent = ((totalPrice.toFixed(2) * 10) / 100).toFixed(2)
      eltotal.textContent =(eval(elSubTotal.textContent) + eval(eltax.textContent)).toFixed(2)
      cartList.appendChild(li);
      li.classList.add("animat")

      // BU YERDAN BTN GA  + - QILIB KETAYAPMIZ
      
      let elbtnnum = document.querySelector("#btnnum")
      console.log(elbtnnum);
      summari ++
      elbtnnum.innerHTML = summari

    }
  }
}

function removeItem(index) {
  let newArrRemove = [];
  // let sums = 0
  for (let i = 0; i < newPizzasArr.length; i++) {
    // elbtnnum.textContent = "ok"
    if (index != i) {
      newArrRemove.push(newPizzasArr[i]);
    }
  }

  newPizzasArr = newArrRemove;

  cartList.innerHTML = "";
  totalPrice = 0;

  elSubTotal.textContent = 0;
  eltax.textContent = 0
  eltotal.textContent = elSubTotal.textContent

  
  for (let i = 0; i < newPizzasArr.length; i++) {
    let li = document.createElement("li");
    li.className = "menu__item pizza cart__item";
    li.innerHTML = `
      <img class="pizza__img" src=${newPizzasArr[i].img} alt="pizza" />
            <div class="pizza__name">
              <p class="pizza__p">${newPizzasArr[i].name}</p>
              <span class="pizza__price">$${newPizzasArr[i].price}</span>
              <button class="pizza__btn remove"  onclick='removeItem(${i})'>
                -
              </button>
              <div class="btn-groiup">
              <button class="btn-num" id="btnnum">0</button>
              <button class="btn-max">+</button>
              <button class="btn-min">-</button>
            </div>
            </div>
    `;
    totalPrice += newPizzasArr[i].price;
    elSubTotal.textContent = totalPrice.toFixed(2);
    eltax.textContent = ((totalPrice.toFixed(2) * 10) / 100).toFixed(2)
    eltotal.textContent = elSubTotal.textContent

    
    cartList.appendChild(li);
  }
}

// let elnum = document.querySelectorAll(".btn-num") 
// elnum.innerHTML = "okki"
// console.log(elnum);


// let arr5 = [
//   {id:1},{id:2},{id:1},{id:1}
// ]
// let b = []
// let count = arr5.length
// for (let i = 0; i < count; i++) {
//   let k = []
//   let f = []
//   for (let j = 0; j < arr5.length; j++) {
//     if (arr5[0].id == arr5[j].id) {
//       k.push(arr5[j])
//     }
//     else {
//       f.push(arr5[j])
//     }
//   }
//   arr5 = f
//   if (k != "")b.push(k)
// } 
// console.log(b);



  //  let elbtnnum = document.querySelectorAll(".btn-num")
  //           for (let s = 0; s < elclearr.length; s++) {
  //             elbtnnum[s].innerHTML = "okki"
  //           }







