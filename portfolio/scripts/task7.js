/* Lesson 7 */
const textButton = document.getElementById('numberFact');
const numberInput = document.getElementById('numberInput');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com';

textButton.addEventListener('click', () => {
    const number = numberInput.value;
    fetch(textURL + '/' + String(number) + '/math')
        .then(response => {
            outputDiv.innerHTML = 'Waiting for response...';
            if (response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then(response => response.text())
        .then(text => outputDiv.innerText = text)
        .catch(error => console.log('There was an error:', error))
}, false);

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

// Used to simulate the adding of a task to a database for a To Do List.

function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url, {
        method: 'POST',
        header: headers,
        body: data
    })

    fetch(request)
        .then(response => response.json())
        .then(task => console.log(`Task saved with an id of ${task.id}`))
        .catch(error => console.log('There was an error:', error))

}