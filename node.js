
var itemList=document.querySelector('#items');
// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='gray';
console.log(itemList.parentElement.parentElement.parentElement);
// ChildElement
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='green';
//FirstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello';
//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Welcome';
//nextsibling
console.log(itemList.nextSibling);
//nextElementsibling
console.log(itemList.nextElementSibling);
//previoussibling
console.log(itemList.previousSibling);
//previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='yellow';

//createElement
var newDiv=document.createElement('div');
//Add class
newDiv.className='newDiv';
//Add id
newDiv.id='newDivid';
//Add attribute
newDiv.setAttribute('title','HelloDiv');
//create text node
var newDivText=document.createTextNode('HEllo');
//Add text to div
newDiv.appendChild(newDivText);

//Inserting to DOM
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);

//Adding HEllo before Item 1
var container1=document.createElement("txt");
container1.appendChild(newDivText);
var list=document.getElementById("items");
list.insertBefore(container1, list.children[0]);