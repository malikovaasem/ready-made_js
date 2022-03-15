//Modal window

    const modalOpen = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');
    
    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        //clearInterval(modalTimerId);
    }
    
    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalOpen.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click' , (e) =>{
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown' , (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    //const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
