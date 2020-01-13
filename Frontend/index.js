// Code your solution here
const URL = 'http://localhost:3000/shoes'


fetch(URL).then(r => r.json()).then(function(elements) { 
    elements.forEach(turnJSONtoHTML)
    
})

function turnJSONtoHTML(shoe) { 
    const shoeList = document.querySelector("#shoe-list")
//    console.log(shoe.name)
    const newLi = document.createElement('li')
    const shoeBttn = document.createElement('button')
    shoeBttn.innerText = "show"
    newLi.innerText = shoe.name
    shoeList.append(newLi,shoeBttn)
    shoeBttn.addEventListener('click', (event) => { 
        event.preventDefault()

    
    const image = document.querySelector('#shoe-image')
const shoeName = document.querySelector('#shoe-name')
const shoePrice = document.querySelector('#shoe-price')
const shoeDescrip = document.querySelector('#shoe-description')
const reviewsList = document.querySelector('#reviews-list')
    image.src = shoe.image
    shoeName.innerText = shoe.name 
    shoePrice.innerText = shoe.price
    shoeDescrip.innerText = shoe.description
//  const newReviews =  
 shoe.reviews.forEach(review) 
 reviewsList.innerText = review.content 
 
})
// debugger

}




    
        // shoe.reviews[0].content
    // var x = document.getElementById(`${shoe.id}`);
    //     if (x.style.display === "none") {
    //       x.style.display = "block";
    //     } else {
    //       x.style.display = "none";
    //     }


// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }




// const image = document.createElement('img')
// const nameLine = document.createElement('li')
// const companyLine = document.createElement('li')
// const priceLine = document.createElement('li')



