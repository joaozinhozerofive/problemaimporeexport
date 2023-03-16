 export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .tittle span'),
    buttonClose: document.querySelector('.modal button.close'),
    
    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}
Modal.buttonClose.onclick = () => {
    //modalWrapper.classList.remove('open')//
    Modal.close()
}