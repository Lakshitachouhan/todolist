let form = document.querySelector("form");
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let del = document.querySelector(".deleteall");

let savetodo = (e) => {
  e.preventDefault();
  let newli = document.createElement("li");
  newli.className = "newli";
  newli.innerText = input.value;
  ul.appendChild(newli);
  console.log(input.value);
  let del = document.createElement("button");
  newli.appendChild(del);
  del.className = "delete";
  del.textContent = "x";

  form.reset();
};

// del.addEventListener("click", function (e) {
//   // console.log(e.target.previousElementSibling);
//   if (e.target.className.includes("deleteall")) {
//     e.target.previousElementSibling.remove()
//   }
// });

let remove = (e) => {
  if (e.target.className.includes("delete")) {
    e.target.parentElement.remove();
  }
};

let deleteall = (e)=>{
if(e.target.className.includes("deleteall")){
  let ul = document.querySelector("ul");
  ul.innerHTML = "";
}
// console.log(e);
}
 del.addEventListener("click",deleteall)



form.addEventListener("submit", savetodo);
ul.addEventListener("click", remove);
