//alert("Task Manager App");
//console.log("Task Manager");
let input=document.getElementById("new-items");
let add=document.getElementById("btn");
let tasks=document.getElementById("tasks");
add.addEventListener("click",()=>{
    let open=document.querySelector("div[id=tasks]");
    open.innerHTML+=`<div draggable="true" ondragstart="dragStarted(event)" ondragend="dragEnded(event)"  class="content"><p>${input.value}</p>
    <button type="button" class="describebtn">Description</button>
    <button type="button" onclick="deleteTask(event)" class="deletebtn">Delete</button>
    </br></br></div>`;
});


function deleteTask(e) {
	console.log(e.target.parentElement);
		e.target.parentElement.parentElement.removeChild(e.target.parentElement);
}

let des=document.getElementsByClassName("describebtn");
// des.addEventListener("click",()=>{
// });
let del=document.getElementsByClassName("deletebtn");
/*
tasks.addEventListener("click", (e)=>{
    if(e.target.classList.contains("deletebtn")){
        e.target.parentElement.parentElement.remove();
    }
 });
 */
let el=document.getElementsByClassName("content");
let dest=document.getElementsByClassName("destination");
let targetEl=null;

let draggedEl = null;

function dragStarted(e) {
    e.target.style.opacity="0.4";
    e.target.style.border="dotted";
	draggedEl = e.target;
}

function dragEnded(e) {
    e.target.style.opacity="1";
	e.target.style.border = "1px solid black";
	draggedEl = null;
}


// to use on drop
function allowDrop(e) {
	e.preventDefault();
}

function dragEntered(e) {
	e.preventDefault();
}

function dragLeft(e) {
	e.preventDefault();
	
}

function drop(e) {
	draggedEl.parentElement.removeChild(draggedEl);
	e.target.appendChild(draggedEl);

}

// let input=document.getElementsByClassName("new-items").innerHTML;
// let add_items=document.getElementById("addbtn");
// add_items.addEventListener("click",(e)=>{
//     let addedValue=document.querySelector("div[id=added-values]");
//     addedValue.innerHTML+=`<p>${input}</p>
//     <button id="describe" type="button>Description</button>
//     <button id="delete" type="button">Delete</button>`;
// });