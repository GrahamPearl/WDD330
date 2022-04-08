/* Lesson 6 */
// Original code reviewed from: https://www.codingnepalweb.com/todo-list-app-javascript/

// getting all required elements
const inputBox = document.querySelector('.inputTask input')
const todoList = document.querySelector('.todoList')
const btnAdd = document.querySelector('.inputItem button')
const btnReset = document.querySelector('.footer button')

inputBox.onkeyup = () => {
    let userInput = inputBox.value;
    if (userInput.trim() != 0) {
        addBtn.classList.add("active");
    } else {
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

function showTasks() {
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

function deleteTask(index) {
    let localStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(localStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks();

    btnReset.onclick = () => {
        listArray = [];
        localStorage.setItem("New Todo", JSON.stringify(listArray));
        showTasks();
    }

    showTasks();

    var editor; // use a global for the submit and return data rendering in the examples

    $(document).ready(function() {
        // Object that will contain the local state
        var todo = {};

        // Create or update the todo localStorage entry
        if (localStorage.getItem('todo')) {
            todo = JSON.parse(localStorage.getItem('todo'));
        }

        // Set up the editor
        editor = new $.fn.dataTable.Editor({
            table: "#example",
            fields: [{
                label: "Item:",
                name: "item"
            }, {
                label: "Status:",
                name: "status",
                type: "radio",
                def: "To do",
                options: ['To do', 'Done']
            }],
            ajax: function(method, url, d, successCallback, errorCallback) {
                var output = { data: [] };

                if (d.action === 'create') {
                    // Create new row(s), using the current time and loop index as
                    // the row id
                    var dateKey = +new Date();

                    $.each(d.data, function(key, value) {
                        var id = dateKey + '' + key;

                        value.DT_RowId = id;
                        todo[id] = value;
                        output.data.push(value);
                    });
                } else if (d.action === 'edit') {
                    // Update each edited item with the data submitted
                    $.each(d.data, function(id, value) {
                        value.DT_RowId = id;
                        $.extend(todo[id], value);
                        output.data.push(todo[id]);
                    });
                } else if (d.action === 'remove') {
                    // Remove items from the object
                    $.each(d.data, function(id) {
                        delete todo[id];
                    });
                }

                // Store the latest `todo` object for next reload
                localStorage.setItem('todo', JSON.stringify(todo));

                // Show Editor what has changed
                successCallback(output);
            }
        });

        // Initialise the DataTable
        $('#example').DataTable({
            dom: "Bfrtip",
            data: $.map(todo, function(value, key) {
                return value;
            }),
            columns: [
                { data: "item" },
                { data: "status" }
            ],
            select: true,
            buttons: [
                { extend: "create", editor: editor },
                { extend: "edit", editor: editor },
                { extend: "remove", editor: editor }
            ]
        });
    });