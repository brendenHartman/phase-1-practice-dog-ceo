const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const ul = document.getElementById('dog-breeds');
const select = document.getElementById('breed-dropdown');
const where = document.getElementById('dog-image-container');
document.addEventListener('DOMContentLoaded', function(){
    loadImg();
    loadBreeds();
});
function loadImg(){
    fetch(imgUrl)
        .then((response) => response.json())
        .then(function(img){
            let array = img.message;
            array.forEach(element => {
                let newImg = document.createElement('img');
                newImg.src = element;
                where.appendChild(newImg);
                newImg.addEventListener('click',()=>{
                    where.removeChild(newImg);
                })
            });
        });
}
function loadBreeds(){
    fetch(breedUrl)
        .then((response) => response.json())
        .then(function(breeds){
            let array = breeds.message;
            console.log(array);
            for(let key in array){
                const newLi = document.createElement('li');
                newLi.innerText = key;
                ul.appendChild(newLi);
                newLi.addEventListener('click',function(){
                    console.log(this);
                    this.style.color = "red";
                });
            };  
        });
}
function filter(){
    fetch(breedUrl)
    .then((repsonse) => repsonse.json())
    .then(function(breeds){
        let vall = select.value;
        ul.replaceChildren();
        const array = breeds.message;
        for(let key in array){
            let keyW = key.toString();
            let letts = keyW.split('');
            if(letts[0] === vall){
                let newLi = document.createElement('li');
                newLi.innerText = key;
                ul.appendChild(newLi);
                newLi.addEventListener('click',function(){
                    console.log(this);
                    this.style.color = "red";
                });
            }
        }
    });
}
