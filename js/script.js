function appendValue(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').textContent);
        document.getElementById('display').textContent = result;
    } catch (e) {
        document.getElementById('display').textContent = 'Error';
    }
}
