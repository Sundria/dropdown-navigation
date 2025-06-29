document.querySelectorAll('.dropdown-wrapper').forEach(wrapper => {
    const arrowSelected = wrapper.querySelector('.arrow-down');

    arrowSelected.addEventListener('click', (e) => {
        e.preventDefault();
        //reseta o outro dropdown-wrapper
        document.querySelectorAll('.dropdown-wrapper').forEach(otherElement => {
            if (otherElement !== wrapper) {
                otherElement.classList.remove('active');
            }
        })
        wrapper.classList.toggle('active');
    })
});

function abrirModalMobile() {
    document.querySelector('.modal-mobile').style.display = 'block';
}

function fecharModalMobile() {
    document.querySelector('.modal-mobile').style.display = 'none';
}

document.querySelectorAll('.wrapper-mobile').forEach(wraperMobile => {
    const arrowMobile = wraperMobile.querySelector('.arrow-down-mobile');

    arrowMobile.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll('.wrapper-mobile').forEach(otherWrapper => {
            if (otherWrapper !== wraperMobile) {
                otherWrapper.classList.remove('active');
            }
        })
        wraperMobile.classList.toggle('active');
    })
});