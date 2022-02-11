/* Lesson 6 */
// getting all required elements
const inputBox = document.querySelector(".inputItem input");
const btnAdd = document.querySelector(".inputItem button");
const todoList = document.querySelector(".todoList");
const btnReset = document.querySelector(".footer button");

btnAdd.onclick = ()=>{ 
    let userInput = inputBox.value; 
    let localstorageInfo = localStorage.getItem("New Todo"); 
    if(localstorageInfo == null){ 
      listArray = []; 
    }else{
      listArray = JSON.parse(localstorageInfo);  
    }
    listArray.push(userInput); 
    localStorage.setItem("New Todo", JSON.stringify(listArray)); 
    showTasks(); 
    btnAdd.classList.remove("active"); 
  }
  

  function showTasks(){
    let localStorageData = localStorage.getItem("New Todo");
    if(localStorageData == null){
      listArray = [];
    }else{
      listArray = JSON.parse(localStorageData); 
    }
    const pendingTasksNumb = document.querySelector(".pendingTasks");
    pendingTasksNumb.textContent = listArray.length; 
    if(listArray.length > 0){ 
      btnReset.classList.add("active"); 
    }else{
      btnReset.classList.remove("active"); 
    }
    let newLiTag = "";
    listArray.forEach((element, index) => {
      newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag; 
    inputBox.value = ""; 
  }
  