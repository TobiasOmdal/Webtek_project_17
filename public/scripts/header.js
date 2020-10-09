var dropDownIsOpen = false;


function animateHamburgerBtn(open) {
    const options = {
        duration: 200,
        fill: 'forwards',
        easing: 'ease-in-out'
    };
    if (open) {
        document.getElementById('topHamburgerLine').animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(45deg) translate(0px, -5px)' }
        ], options);
        document.getElementById('bottomHamburgerLine').animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-45deg) translate(-9px, -2px)' }
        ], options);
    } else {
        document.getElementById('topHamburgerLine').animate([
            { transform: 'rotate(45deg) translate(0px, -5px)' },
            { transform: 'rotate(0deg)' },
        ], options);
        document.getElementById('bottomHamburgerLine').animate([
            { transform: 'rotate(-45deg) translate(-9px, -2px)' },
            { transform: 'rotate(0deg)' },
        ], options);
    }
}

const dropDown = document.getElementById('dropDown');

document.getElementById('menuBtn').onclick = (event) => {
    toggleDropDown();
    event.stopPropagation();
};

function toggleDropDown() {
    if (dropDownIsOpen) {
        animateHamburgerBtn(false);
        dropDown.style.visibility = "hidden";
        dropDown.style.top = "-300px";
        dropDownIsOpen = false;
    } else {
        animateHamburgerBtn(true);
        dropDown.style.visibility = "visible";
        dropDown.style.top = "64px";
        dropDownIsOpen = true;
    }
}

// når du klikker utenfor menyen -> lukk
window.onclick = () => {
    if (dropDownIsOpen) {
        toggleDropDown();
    }
};

// ikke lukk menyen når du klikker i menyen 
dropDown.onclick = (event) => {
    event.stopPropagation();
};

window.onscroll = () => {
    if (dropDownIsOpen) {
        toggleDropDown();
    }
};