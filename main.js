const Allmodals = document.querySelectorAll('.container .modal')
const btnModalItem = document.querySelector('.item');
const btnModalCategory = document.querySelector('.category');
const optionAddItem = btnModalItem.querySelector('.add');
const optionView = btnModalItem.querySelector('.view');
const optionAddCategory = btnModalCategory.querySelector('.add');
const optionViewCategory = btnModalCategory.querySelector('.view');
const ICategory = document.querySelector('.addItem .ICategory');
const Iteminput = document.querySelector('.addItem input');
const btnAddItem = document.querySelector('.addItem button');

btnModalItem.addEventListener('mouseover',()=>showOptions(btnModalItem));
btnModalItem.addEventListener('mouseout',()=>hiddeOptions(btnModalItem));
btnModalCategory.addEventListener('mouseover',()=>showOptions(btnModalCategory));
btnModalCategory.addEventListener('mouseout',()=>hiddeOptions(btnModalCategory));

viewItem();
viewCategory();
ItemViewCategory();
categoryViewItem();

optionAddItem.addEventListener('click',()=>{
    showModal('.addItem');
    
});

optionView.addEventListener('click',()=>{
    showModal('.viewItem')
});
optionAddCategory.addEventListener('click',()=>{
    showModal('.addCategory')
});
optionViewCategory.addEventListener('click',()=>{
    showModal('.viewCategory')
    viewCategory();

});

document.querySelector('.addCategory button').addEventListener('click',addCategory);
document.querySelector('.addItem button').addEventListener('click',addItem);

Allmodals.forEach(modal =>{
    modal.querySelector('.close').addEventListener('click',()=>hiddeModal(modal));
});

function showModal(modal){
    document.querySelector('.cover').style.display = 'block';
    document.querySelector(modal).style.top= '50px';
}

function hiddeModal(modal){
    document.querySelector('.cover').style.display = 'none';
    modal.style.top= '-900px';
}

function showOptions(modal){
    modal.querySelector('.options').style.display = 'block';
}

function hiddeOptions(modal){
    modal.querySelector('.options').style.display = 'none';
}

// -------------------------------------------

function viewItem (){
    const category = getCategory();

    category.todos.forEach(item =>{
        const p = document.createElement('p');

        p.innerHTML =`${item} <span> <input type="checkbox" value="${item}"> <img src="images/delete.png"></span>`;

        document.querySelector('.allItens').appendChild(p);
        console.log(item)
    })
}

function addItem(){

    const category = getCategory();
    const input = document.querySelector('.addItem input');
    const allCheckBox = document.querySelectorAll('.addItem input[type="checkbox"]')

    allCheckBox.forEach(checkbox => {

        if(checkbox.checked)
        {
            category[checkbox.value].push(input.value)
            console.log(category[checkbox.value]);   
        }
        
    });

    category.todos.push(input.value)

    localStorage.setItem('category',JSON.stringify(category));
    input.value= '';
}

function viewCategory (){
    const category = getCategory();


    for(let categ in category)
    {
        if(categ === 'todos' || !category[categ].length) continue

        const div = document.createElement('div');
        const h2 = document.createElement('h2');

        h2.innerHTML = categ;
        div.appendChild(h2);
    
        category[categ].forEach(item=>{
            const p = document.createElement('p');
            p.innerHTML= `${item}<span><input type="checkbox" value="${item}"><img src="images/delete.png"></span>`;
            div.appendChild(p);
        })
    
        document.querySelector('.allCategory').appendChild(div);
    }
}

function addCategory(){
    const category = getCategory();

    if(!category) return

    const input = document.querySelector('.addCategory input');

    category[input.value] = [];

    const allCheckBox = document.querySelectorAll('.addCategory input[type="checkbox"]')

    allCheckBox.forEach(checkbox => {
        if(checkbox.checked)
            category[input.value].push(checkbox.value)
        
    });

    localStorage.setItem('category',JSON.stringify(category));

}

function ItemViewCategory(){
    
    const category = getCategory();
    
    console.log(category)
    if(!category) return

    for(let categ in category)
    {
        const p = document.createElement('p');
        p.innerHTML = `${categ} <input type="checkbox" value="${categ}">`;
        ICategory.appendChild(p);
    }
}

function categoryViewItem(){
    
    const category = getCategory();
    
    if(!category) return

    category.todos.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = `${item}<input type="checkbox" value="${item}"> `;
        document.querySelector('.addCategory .CItem').appendChild(p);

        console.log()
    }); 

}

function getCategory(){
    const firstCategory = {todos:['primeira tarefa']}
    const category = JSON.parse(localStorage.getItem('category'));

    if(!category)
    {
        localStorage.setItem('category',JSON.stringify(firstCategory));
        return null;
    }

    return category;
}