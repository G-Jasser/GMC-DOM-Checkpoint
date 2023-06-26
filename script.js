function calculateTotal(){
    var total = document.getElementById('finalPrice')
    var prices = document.getElementsByClassName('price')
    var quantities = document.getElementsByClassName('Quant')
    totalCal = 0
    for(var i = 0; i<prices.length; i++){    
      totalCal+= parseFloat(parseFloat(prices[i].textContent) * parseInt(quantities[i].value))  
    }
    total.value = totalCal
}

var pluss = document.getElementsByClassName('plus-btn')
for(const iterator of pluss){
  iterator.addEventListener('click', function(){
    iterator.previousElementSibling.value++
    calculateTotal()
  })
}
var minuss = document.getElementsByClassName('minus-btn')
for(const iterator of minuss){
  iterator.addEventListener('click', function(){
    const quantity = iterator.nextElementSibling
    if(quantity.value > 1){
      quantity.value--
      calculateTotal()
    }
  })
}

var deleters = document.getElementsByClassName('delete')
for(const deleterItem of deleters){
  deleterItem.addEventListener('click', function(){
    const item = deleterItem.parentElement
    item.remove()
    calculateTotal()
  })
}

var likies = document.getElementsByClassName('like')
  for (const like of likies) {
    like.addEventListener('click', function(){
      if(like.style.color == "red")
        like.style.color = "black"
      else
        like.style.color = "red"

    })
  }