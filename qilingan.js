let LeftList = document.getElementById('leftcard');
let RightList = document.getElementById('rightlist');
let elSubTotal = document.querySelector("#subtotal");
let eltax = document.querySelector("#tax")
let eltotal = document.querySelector("#total")
let foodList = [
  {
    id: 1,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png',
    name: 'Pepperoni',
    price: 2.23
  },
  {
    id: 2,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg',
    name: 'Chessy',
    price: 5.99
  },
  {
    id: 3,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg',
    name: 'Margarits',
    price: 7.48
  },
  {
    id: 4,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg',
    name: 'Hawaiian',
    price: 9.32
  }
]



for (let i of foodList) {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let button = document.createElement("button");
  
  button.className = "pitsa__btn"
  p1.className = "pitsa__name"
  p2.className = "pitsa__cost"
  div.className = "pitsa__info"
  img.className = "pitsa__img"
  li.className = "pitsa__list"

  img.src =  i.imgUrl
  p1.textContent = i.name
  p2.textContent = i.price
  button.id = i.id
  button.textContent = "Add to card"

  button.onclick = (even)=>{
      even.preventDefault()
      totalPrice += i.price.price;
      elSubTotal.textContent = totalPrice.toFixed(2);
      eltax.textContent = ((totalPrice.toFixed(2) * 10) / 100).toFixed(2)
      eltotal.textContent =(eval(elSubTotal.textContent) + eval(eltax.textContent)).toFixed(2)


      // sub.textContent += i.price.toFixed(2)
      // tax.textContent = ((+i.price*10)/100).toFixed(2)
      rightCard(button.id)
  }
  div.append(p1, p2, button)
  li.append(img , div)
  LeftList.append(li)
}

let arr = []
function rightCard( id ){
  if(arr.includes(id))return
  arr.push(id)
  let count = 1
  let li = document.createElement("li");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let button_plus = document.createElement("button");
  let button_minus = document.createElement("button");
  
  button_plus.className = "pitsa__btn"
  button_minus.className = "pitsa__btn"
  p1.className = "pitsa__name"
  p2.className = "pitsa__cost"
  p3.className = "count"
  div.className = "pitsa__info"
  img.className = "pitsa__img"
  li.className = "pitsa__list"

  p3.textContent = count
  img.src =  foodList[id-1].imgUrl
  p1.textContent = foodList[id-1].name
  p2.textContent = foodList[id-1].price
  button_minus.id = foodList[id-1].id
  button_plus.textContent = "+"
  button_minus.textContent = "-"

  button_plus.onclick = (even)=>{
      even.preventDefault()
      console.log("+");
      subtotal = (parseFloat(sub.textContent)+ parseFloat(li.childNodes[1].childNodes[2].textContent)).toFixed(2);
      sub.textContent = subtotal
     tax.textContent = (parseFloat(tax.textContent) + parseFloat(li.childNodes[1].childNodes[2].textContent/10)).toFixed(2);
     
     p3.textContent = +p3.textContent+1
    }
    button_minus.onclick = (even)=>{
      even.preventDefault()
      console.log("-");
      sub.textContent = (parseFloat(sub.textContent)- parseFloat(li.childNodes[1].childNodes[2].textContent)).toFixed(2);
      tax.textContent = (parseFloat(tax.textContent)-parseFloat(li.childNodes[1].childNodes[2].textContent/10)).toFixed(2);

      if (+p3.textContent==1){
        li.remove()
        let index = arr.findIndex((id)=>button_minus.id)
        arr.splice(index,1)
        console.log(arr);
        return
      }
      p3.textContent = +p3.textContent -1 
  }
  div.append(p3 , p1, p2, button_minus, button_plus)
  li.append(img , div)
  RightList.append(li)
}




















