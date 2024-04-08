// fetch Api calling Template

// fetch('https://fakestoreapi.com/products?limit=5').then((data) => {
//     console.log(data)
//     return data.json();
//     }).then((completedata) => {
//     console.log(completedata[2].title);
//     document.getElementById('root').innerHTML=completedata[2].title

// }).catch((err) => {
//     console.log(err);
// })


// --------------------------------First API-------------------------------

fetch('https://fakestoreapi.com/products?limit=5').then((data) => {
    return data.json();
}).then((completedata) => {
    let data1 = "";
    completedata.map((values) => {
        data1 += ` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image}
            alt="notFound" class="images">
        <p>${values.description}</p>
        <p class="Category">${values.category}</p>
        <p class="price">${values.price} </p>
    </div>  `;
        document.getElementById("cards").innerHTML = data1;
    })
}).catch((err) => {
    console.log(err);
})
// -----------------------------Second API Call-------------------------------------------
fetch('https://fakestoreapi.com/products').then((data) => {

    return data.json();
}).then((completedata) => {

    let data2 = "";
    completedata.map((values) => {
        data2 += ` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image}
            alt="notFound" class="images">
        <p>${values.description}</p>
        <p class="Category">${values.category}</p>
        <p class="price">${values.price} </p>
    </div>  `;
        document.getElementById("cards").innerHTML = data2;

    })
}).catch((err) => {
    console.log(err);
})
// ------------------------------Third API---------------------------------------------

fetch('https://fakestoreapi.com/products/7').then((data) => {

    return data.json();
}).then((completedata) => {

    let data3 = "";
    completedata.map((values) => {
        data3 += ` <div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image}
            alt="notFound" class="images">
        <p>${values.description}</p>
        <p class="Category">${values.category}</p>
        <p class="price">${values.price} </p>
    </div>  `;
        document.getElementById("cards").innerHTML = data3;

    })
}).catch((err) => {
    console.log(err);
})


