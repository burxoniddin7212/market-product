let producs=document.querySelector(".product");
let butAdd=document.querySelector(".addproduct");
let listresalt=document.querySelector(".list");
//var arry=[];

butAdd.addEventListener("click", function(e){
  e.preventDefault();
 let m=producs.value.trim();
 let newLi=document.createElement("li");
 listresalt.appendChild(newLi);
 newLi.textContent=m;
 arry.push(m);
 producs.value="";
}
)
//console.log(arry);