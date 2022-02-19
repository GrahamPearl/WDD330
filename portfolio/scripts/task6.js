/* Lesson 6 */
// Original code reviewed from: https://www.codingnepalweb.com/todo-list-app-javascript/

// getting all required elements
const inputBox = document.querySelector('.inputTask input')
const todoList = document.querySelector('.todoList')
const btnAdd = document.querySelector('.inputItem button')
const btnReset = document.querySelector('.footer button')

inputBox.onkeyup = ()=>{
  let userInput = inputBox.value;
  if(userInput.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}


btnAdd.onclick = () => {
  let userInput = inputBox.value
  let localstorageInfo = localStorage.getItem('New Todo')
  if (localstorageInfo == null) {
    listArray = []
  } else {
    listArray = JSON.parse(localstorageInfo)
  }
  listArray.push(userInput)
  localStorage.setItem('New Todo', JSON.stringify(listArray))
  showTasks()
  btnAdd.classList.remove('active')
}

function showTasks () {
  let localStorageData = localStorage.getItem('New Todo')
  if (localStorageData == null) {
    listArray = []
  } else {
    listArray = JSON.parse(localStorageData)
  }
  const pendingTasksList = document.querySelector('.pendingTasks')
  pendingTasksList.textContent = listArray.length
  if (listArray.length > 0) {
    btnReset.classList.add('active')
  } else {
    btnReset.classList.remove('active')
  }
  let newPendingTask = ''
  listArray.forEach((element, index) => {
    newPendingTask += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
  })
  todoList.innerHTML = newPendingTask
  inputBox.value = ''
}

function deleteTask(index){
  let localStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(localStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks(); 
  
  btnReset.onclick = ()=>{
  listArray = []; 
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
}
showTasks();