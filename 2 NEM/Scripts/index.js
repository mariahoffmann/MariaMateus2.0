const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Obrigado por sua compra!');
    });
});
