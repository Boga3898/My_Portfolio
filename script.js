
function data(){

let  title = document.getElementById('title');
let author = document.getElementById('author');
let price = document.getElementById('price');
let submit = document.getElementById('submit');
let items = document.getElementById('items');

submit.addEventListener('click',function(){
    var para = document.createElement('p');
    para.innerText = title.value;
    para.innerText = author.value;
    para.innerText = price.value;

    items.appendChild(para);

    // para.addEventListener('cilck',function(){
    //     para.style.textDecoration = "line-through";
    // })

    // para.addEventListener('dbcilck',function(){
    //     items.removeChild (para);
    // })



})

}

