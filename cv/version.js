let version = '87f8a7e';

let description = "Version: ";
let today = new Date().toISOString().slice(0, 10);

window.addEventListener('load', () => {
    document.getElementById('generatedDate').innerHTML = description.concat(today, '-', version);
})

