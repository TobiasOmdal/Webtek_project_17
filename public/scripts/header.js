document.querySelector("header").innerHTML = /*html*/`

<div id="navBar">
<a href="index.html" id="homeLink">
    <img src="assets/logo.png" id="logo">
    <h1>SkiMentor</h1>
</a>
<div id="horizontalNav">
    <ul>
        <li>
            <a href="kurs.html" class="navBtn">Kurs</a>
        </li>
        <li>
            <a href="trenere.html" class="navBtn">Trenere</a>
        </li>
        <li>
            <a href="omoss.html" class="navBtn">Om oss</a>
        </li>
        <li class="downloadBtn">
            <a class="navBtn">Last ned</a>
        </li>
    </ul>
</div>
<svg id="menuBtn" height="22" viewBox="0 0 22 15" width="22">
    <g>
        <rect id="topHamburgerLine" height="5" rx="2.5" width="22" />
        <rect id="bottomHamburgerLine" height="5" rx="2.5" width="22" y="10" />
    </g>
</svg>
</div>
<nav style="top: -300px;" id="dropDown">
<ul>
    <li>
        <a href="kurs.html" class="navBtn">Kurs</a>
    </li>
    <li>
        <a href="trenere.html" class="navBtn">Trenere</a>
    </li>
    <li>
        <a href="om-oss.html" class="navBtn">Om oss</a>
    </li>
</ul>
<div class="downloadBtn">
    <a class="navBtn">Last ned</a>
</div>
</nav>

`;

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

// ikke lukk menyen når du klikker i menyen 
dropDown.onclick = (event) => {
    console.log("hello")
    event.stopPropagation();
};

// når du klikker utenfor menyen -> lukk
window.onclick = () => {
    if (dropDownIsOpen) {
        toggleDropDown();
    }
};

window.onscroll = () => {
    if (dropDownIsOpen) {
        toggleDropDown();
    }
};