const subButton = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const items = document.querySelector('.items');

subButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;


    if (nameValue === '') {
        nameInput.style.border = '2px solid red'; 
        nameInput.placeholder = 'Por favor insira seu nome';

        setTimeout(() => {
            nameInput.style.border = '1px solid #ccc';
        }, 3000);
    }
    if (emailValue === '') {
        emailInput.style.border = '2px solid red';
        emailInput.placeholder = 'Por favor insira seu email';
       
        setTimeout(() => {
            emailInput.style.border = '1px solid #ccc';
        }, 3000);

    }else{
        nameInput.value = '';
        emailInput.value = '';
        nameInput.placeholder = '';
        emailInput.placeholder = '';

        const li = document.createElement('li');
        li.classList = "item";
        li.innerHTML = `Nome: ${nameValue} <br> Email: ${emailValue}`;
        items.appendChild(li);

        nameInput.style.border = '2px solid green';
        emailInput.style.border = '2px solid green';

        setTimeout(() => {
            nameInput.style.border = '1px solid #ccc';
            emailInput.style.border = '1px solid #ccc';
        }, 3000);
       
    }


const inName = document.querySelector('#name');
});
