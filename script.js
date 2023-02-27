// фиксированное меню
window.onscroll = () => {
    const header = document.querySelector("#header");
    const y = window.scrollY;
    if (y >= 600){
        header.classList.add("ground");
    }
        else if(y < 600){
            header.classList.remove("ground");
        }
    }
