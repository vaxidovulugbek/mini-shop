let pizzas = [
  {
    id: 1,
    imageUrl: "https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
    name: "Pepperoni",
    price: 2.23,
  },
  {
    id: 2,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    name: "Cheesy",
    price: 5.99,
  },
  {
    id: 3,
    imageUrl: "https://dic.academic.ru/pictures/wiki/files/83/Supreme_pizza.jpg",
    name: "Margarita",
    price: 7.48,
  },
  {
    id: 4,
    imageUrl: "https://www.kxan.com/wp-content/uploads/sites/40/2021/02/GettyImages-1197848673.jpg?w=724",
    name: "Hawaiian",
    price: 9.32,
  },
];

let menuList = document.querySelector(".menu__list");
let cartList = document.querySelector(".cart__list");
let elSubTotal = document.querySelector("#subtotal");

let totalPrice = 0;

// left box added
for (let i = 0; i < pizzas.length; i++) {
  let li = document.createElement("li");
  li.className = "menu__item pizza";
  li.innerHTML = `
      <img class="pizza__img" src=${pizzas[i].imageUrl} alt="pizza" />
            <div class="pizza__name">
              <p class="pizza__p">${pizzas[i].name}</p>
              <span class="pizza__price">$${pizzas[i].price}</span>
              <button class="pizza__btn" onclick='addItem(${pizzas[i].id} )'>
                Add to Cart
              </button>
            </div>
  `;

  menuList.appendChild(li);
}

let newPizzasArr = [];
function addItem(id) {
  for (let i = 0; i < pizzas.length; i++) {
    if (id == pizzas[i].id) {
      newPizzasArr.push(pizzas[i]);
    }
  }
  funcs(newPizzasArr)
  // for (let i = 0; i < newPizzasArr.length; i++) {
  //   if (i == newPizzasArr.length - 1) {
  //     let li = document.createElement("li");
  //     li.className = "menu__item pizza cart__item";
  //     li.innerHTML = `
  //     <img class="pizza__img" src=${newPizzasArr[i].imageUrl} alt="pizza" />
  //           <div class="pizza__name">
  //             <p class="pizza__p">${newPizzasArr[i].name}</p>
  //             <span class="pizza__price">$${newPizzasArr[i].price}</span>
  //             <button class="pizza__btn remove"  onclick='removeItem(${i})'>
  //               -
  //             </button>
  //             <div class="btn-groiup">
  //             <button class="btn-num">0</button>
  //             <button class="btn-max">+</button>
  //             <button class="btn-min">-</button>
  //           </div>
  //           </div>
  //   `;
  //     totalPrice += newPizzasArr[i].price;
  //     elSubTotal.textContent = totalPrice.toFixed(2);
  //     cartList.appendChild(li);
  //   }
  // }
}
function funcs (gidadd) {
  // let arr5 = [
  //   {id:1},{id:2},{id:1},{id:1}
  // ]
  let b = []
  let count = gidadd.length
  for (let i = 0; i < count; i++) {
    let k = []
    let f = []
    for (let j = 0; j < gidadd.length; j++) {
      if (gidadd[0].id == gidadd[j].id) {
        k.push(gidadd[j])
      }
      else {
        f.push(gidadd[j])
      }
    }
    gidadd = f
    if (k != "")b.push(k)
  } 
  console.log(b);
}




function removeItem(index) {
  let newArrRemove = [];

  for (let i = 0; i < newPizzasArr.length; i++) {
    if (index != i) {
      newArrRemove.push(newPizzasArr[i]);
    }
  }

  newPizzasArr = newArrRemove;
  cartList.innerHTML = "";
  totalPrice = 0;

  for (let i = 0; i < newPizzasArr.length; i++) {
    let li = document.createElement("li");
    li.className = "menu__item pizza cart__item";
    li.innerHTML = `
      <img class="pizza__img" src=${newPizzasArr[i].imageUrl} alt="pizza" />
            <div class="pizza__name">
              <p class="pizza__p">${newPizzasArr[i].name}</p>
              <span class="pizza__price">$${newPizzasArr[i].price}</span>
              <button class="pizza__btn remove"  onclick='removeItem(${i})'>
                -
              </button>
              <div class="btn-groiup">
              <button class="btn-num">0</button>
              <button class="btn-max">+</button>
              <button class="btn-min">-</button>
            </div>
            </div>
    `;
    totalPrice += newPizzasArr[i].price;
    elSubTotal.textContent = totalPrice.toFixed(2);
    cartList.appendChild(li);

    // let elnum = document.querySelectorAll(".btn-num") 
    // elnum.textContent = "okki"
    // console.log(elnum);
    // let elpilus = document.querySelector(".btn-num")
    // elpilus.addEventListener("click", () => {
    //   console.log("hello");
    // })

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




