const requestURL =" https://nemo3003.github.io/wdd230/chamber/js/data.json";
//name, address, phone, website, imageurl

fetch(requestURL)
    .then(function (response) {
        return response.json();

    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const companies = jsonObject['companies'];
        for (let i = 0; i < companies.length; i++) {
            let card = document.createElement('section');
            let title = document.createElement('h2');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let image = document.createElement('img');

            title.textContent = companies[i].name;
            address.textContent = companies[i].address;
            phone.textContent = companies[i].phone;
            website.textContent	= companies[i].website

            card.appendChild(title);
            card.appendChild(image);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            

            image.setAttribute('src', companies[i].imageurl);
            title.setAttribute('class', 'title-dir');
            image.setAttribute('class', 'img-dir');
            card.setAttribute('id', 'item');
            


            document.getElementById('cards').appendChild(card);

            
        };
    });



let list_btn = document.getElementById("sList")
let grid_btn = document.getElementById('sGrid')
list_btn.addEventListener('click', ()=>{
    document.getElementById('cards').setAttribute('class', 'list-cards');
    document.getElementById('item').setAttribute('class', 'item-list');
    document.getElementById('cards').removeAttribute('class', 'grid-cards');
    document.getElementById('item').removeAttribute('class', 'item-grid');
    document.getElementById('cards').setAttribute('class', 'list-cards');
    document.getElementById('item').setAttribute('class', 'item-list');
})
grid_btn.addEventListener('click', ()=>{
    document.getElementById('cards').setAttribute('class', 'grid-cards');
    document.getElementById('item').setAttribute('class', 'item-grid');
    document.getElementById('cards').setAttribute('class', 'list-cards');
    document.getElementById('item').setAttribute('class', 'item-list');
    document.getElementById('cards').removeAttribute('class', 'grid-cards');
    document.getElementById('item').removeAttribute('class', 'item-grid');
})
//Jquery code to
//$(".listView").on('click', function() {
 //   listView();
 //   setView('list');
//  });
  
//  $(".gridView").on('click', function() {
 //    gridView();
  //   setView('grid');
 // });
  
  //function setView(view) {
   // localStorage.setItem('view', view);
  //}
  
  //function getView(view) {
   // return localStorage.getItem('view');
  //}
    //Nemo's
