// var addItemId = 0;
// function addToCart() {
   // additamid += 1;
    // var selectedItem= document.getElementsByClassName('prod_img'); 
    // document.getElementsByClassName('prod_img').src='images/product_1.png'; 
    // console.log(selectedItem)
//     img.src= 'images/product_1.png';
// selectedItem.innerHTML='img';

// }

// let carts= document.getElementById('ad_cart');

// let products= [
// {
// name: 'Grey Tshirt',
// tag: 'greytshirt',
// price: 15,
// inCart: 0
// },
// ]

var addtocartbuttons = document.getElementsByClassName('add_to_Card')
for(var i=0;i<addtocartbuttons.length;i++)
{
    var button = addtocartbuttons[i]
    button.addEventListener('click', addToCartButtonClicked)
}

function addToCartButtonClicked(event)
{
    var button  = event.target
    var cartItem = button.parentElement.parentElement
    console.log('clicked')
    // var title = cartItem.getElementsByClassName('cart-name')[0].innerText
    // var img = cartItem.getElementsByClassName('cart-img')[0].src
    // var price = cartItem.getElementsByClassName('cart-price')[0].innerText
    // console.log(title,img,price)
    // addItemTOCart(title,img,price)
    // updateCartTotal()
}


// for (let i=0; i< carts.length; i++) {
//      carts[i].addEventListener('click', () => { //carts[i] = loopthrough all the cart btn
        // console.log('added to cart');
        // cartNumbers();
//     })
// }

// function cartNumbers() {
//      let productNumbers =  localstorage.getItem('cartNumbers');

// productNumbers= parseInt(productNumbers);
// localstorage.setItem('cartNumbers', 1);
// }


