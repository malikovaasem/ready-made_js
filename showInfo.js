export default class ShowInfo {
    constructor (trigger) {
        this.btns = document.querySelectorAll(trigger);
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const msgElem = btn.closest('.module__info-show').nextElementSibling;

                msgElem.classList.toggle('msg');
                msgElem.style.marginTop = '20px';
            });
        });
    }
}
