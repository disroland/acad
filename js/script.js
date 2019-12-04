let list = document.querySelector('.ba-breadcrumps');
let newListItem = document.createElement('li');
newListItem.className = 'ba-breadcrumps__item';
// newListItem.classList.add('li');
newListItem.innerHTML = '<a href="#" class="li ba-breadcramps__link">company</a>';
list.appendChild(newListItem);


let benef = document.querySelectorAll('.ba-row:first-of-type h2.ba-benefit__title');
for (let i=0;i<3;i++){
benef[i].style.color='red'
}