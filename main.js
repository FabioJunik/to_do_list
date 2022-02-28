const Allmodals = document.querySelectorAll('.container .modal')
const btnModalItem = document.querySelector('.item');
const btnModalCategory = document.querySelector('.category');
const optionAddItem = btnModalItem.querySelector('.add');
const optionView = btnModalItem.querySelector('.view');
const optionAddCategory = btnModalCategory.querySelector('.add');
const optionViewCategory = btnModalCategory.querySelector('.view');

btnModalItem.addEventListener('mouseover',()=>showOptions(btnModalItem));
btnModalItem.addEventListener('mouseout',()=>hiddeOptions(btnModalItem));
btnModalCategory.addEventListener('mouseover',()=>showOptions(btnModalCategory));
btnModalCategory.addEventListener('mouseout',()=>hiddeOptions(btnModalCategory));

optionAddItem.addEventListener('click',()=>{showModal('.addItem')});
optionView.addEventListener('click',()=>{showModal('.viewItem')});
optionAddCategory.addEventListener('click',()=>{showModal('.addCategory')});
optionViewCategory.addEventListener('click',()=>{showModal('.viewCategory')});


Allmodals.forEach(modal =>{
    modal.querySelector('.close').addEventListener('click',()=>hiddeModal(modal));


    console.log( modal.classList[1]);
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