// Accces the Elemenet 
// const a =  document.getElementById("main");
// console.log(a);

// const s = a.tagName;
// // console.log(s);

// console.log(a.id);

// console.log(a.element);

// const l = document.getElementsByTagName("h1");

// console.log(l[1]);

// console.dir(l.inner);

// : 1>. Access the element 
// a>. documenet.getElementbyID();
// b>. document.getElementbyClassName();
// c>. document.querySelector();

const para = document.querySelector('p');

console.log(para);

console.dir(para);

console.log(para.innerText);
console.dir(para.innerHTML);
console.dir(para.textContent);

//2 Manupulating the content 
// 1>. innerText
// 2>. innerHTML
// 3>. innerContent
para.innerText = "Peter parkar";
para.innerHTML = "PeterParker <b>is a good</b>";

//3 Style
// Syntax:
// Selecting the content.style.cssproperty = value;

//4 ClassList 
// With the help of this property to play an class
// a>.selectElement.calsslist.add()
// b>.selectElement.calsslist.remove()
// c>.selectElement.calsslist.contains()
// d>.selectElement.classList.toggle()

//5 Navigation:
// parentElement
// children 
// previousElement / nextElement 

//6. Creating Element 
// There is a two  step 
// a> .create Element 
// b>. append Element 





