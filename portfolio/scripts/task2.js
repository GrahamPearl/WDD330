/* Lesson 2 */
var opcode = '+'

function solve(num1, num2) {
    let answer = 0

    if (opcode == '+') answer = num1 + num2
    if (opcode == '-') answer = num1 - num2
    if (opcode == 'x') answer = num1 * num2
    if (opcode == '/') answer = num1 / num2
    return answer
}

function setOpcode(code) {
    opcode = code
}

function reqTwo() {
    let data1 = parseInt(document.getElementById("req@1").value)
    let data2 = parseInt(document.getElementById("req@2").value)
    document.getElementById("answerN").innerHTML = "Answer is: " + solve(data1, data2)
}












function sumTo() {
    //alert("Reading Value...")

    try {
        let valueN = document.getElementById("valueN").value

        if (isNaN(parseInt(valueN)))
            valueN = 1
        else valueN = parseInt(valueN)

        let sumOf = 0
        for (let i = 1; i <= valueN; i++)
            sumOf += i

        document.getElementById("answerN").innerText = "Answer: No Error, stores " + sumOf

    } catch (err) {
        document.getElementById("answerN").innerText = "Answer: Error Occurred"
    }


}