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