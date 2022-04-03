

const cput = (array)=>{
    array.forEach(temple => {
        
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const h4_2 = document.createElement('h4');
        const p = document.createElement('p');
        const p_2 = document.createElement('p');
        const p_3 = document.createElement('p');
        const p_4 = document.createElement('p');
        const p_5 = document.createElement('p');
        const p_6 = document.createElement('p');
        const liking = document.createElement('p');
        const disliking = document.createElement('p');
        const img = document.createElement('img');
        const voting = document.createElement('div');
        const like = document.createElement('button');
        const dislike = document.createElement('button')
        h3.innerHTML = temple.templeName;
        h4.innerHTML = temple.location;        
        h4_2.innerHTML = `Dedicated: ${temple.dedicated}`
        p.innerHTML = `Address: ${temple.address}`;
        p_2.innerHTML = `Phone: ${temple.phone}`;
        p_3.innerHTML = `Email: ${temple.email}`
        p_4.innerHTML = `Services: ${temple.services}`;
        p_5.innerHTML = `Closures: ${temple.closures}`;   
        p_6.innerHTML = `Schedule: ${temple.schedule}`;
        liking.innerHTML = `Likes:`;
        disliking.innerHTML = `Dislikes:`;
        
        console.log(temple.letter);
        liking.setAttribute('id', `countsLike${temple.letter}`);
        disliking.setAttribute('id', `countsDislike${temple.letter}`);
        like.textContent = 'Like';
        dislike.textContent = 'Dislike';
        like.setAttribute('type', 'like');
        like.setAttribute('class', `like ${temple.templeName}`);
        dislike.setAttribute('type', 'dislike');
        dislike.setAttribute('class', `dislike ${temple.templeName}`);
        like.addEventListener('click', `${Like}${temple.letter}`);
        dislike.addEventListener('click', Dislike);
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.setAttribute('class', 'temple-image');

        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(h4_2);
        article.appendChild(p);
        article.appendChild(p_2);
        article.appendChild(p_3);
        article.appendChild(p_4);
        article.appendChild(p_5);
        article.appendChild(p_6);
        article.appendChild(img);
        article.appendChild(liking);
        article.appendChild(disliking);
        
        voting.appendChild(like);
        voting.appendChild(dislike);
        article.appendChild(voting);

        document.querySelector('#temple').appendChild(article);
    }, this);
 }

const url = 'https://nemo3003.github.io/wdd230/temple/data/temples.json';
fetch(url)

.then(response => response.json())

.then(temples_list =>{
    temples = temples_list;
    cput(temples);
})

let like = 0;
let dislike = 0;

const LikeA = () =>{
 
        let checkLike = localStorage.getItem('Bountiful');
        if (checkLike === null || checkLike == ''){
            localStorage.setItem('Bountiful', 'like')
        }else if (checkLike == 'like'){
            localStorage.setItem('Bountiful', '')
        }else {
            localStorage.setItem('Bountiful', 'like')
        }
        document.getElementById('countsLikeA').classList.toggle("open");
    }


const Dislike = () => {
    if(document.getElementById(`countsDislikeA`)){
        document.getElementById(`countsDislikeA`).innerHTML = `Dislikes: ${dislike++}`;
        clearInterval(dislike);
    };
    if(document.getElementById(`countsDislikeB`)){
        document.getElementById(`countsDislikeB`).innerHTML = `Dislikes: ${dislike+-2}`;
        clearInterval(dislike);
    };
    if(document.getElementById(`countsDislikeC`)){
        document.getElementById(`countsDislikeC`).innerHTML = `Dislikes: ${dislike+-2}`;
        clearInterval(dislike);
    };
    if(document.getElementById(`countsDislikeD`)){
        document.getElementById(`countsDislikeD`).innerHTML = `Dislikes: ${dislike+-2}`;
        clearInterval(dislike);
    }
}
