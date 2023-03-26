let mixTopLeft = document.querySelector('#top-left');
let mixTopRight = document.querySelector('#top-right');
let mixBottomLeft = document.querySelector('#bottom-left');
let mixBottomRight = document.querySelector('#bottom-right');
let elemento = document.querySelector('.elemento');
let colorRadius = document.querySelector('.color-radius')
let colorBorder = document.querySelector('.color-border')


const aoAlterarTopLeft = () => {
    let valorTopLeft = mixTopLeft.value;
    elemento.style.borderTopLeftRadius = `${valorTopLeft}px`
}

const aoAlterarTopRight = () => {
    let valorTopRight = mixTopRight.value;
    elemento.style.borderTopRightRadius = `${valorTopRight}px`
}
const aoAlterarBottomLeft = () => {
    let valorBottomLeft = mixBottomLeft.value;
    elemento.style.borderBottomLeftRadius = `${valorBottomLeft}px`

}
const aoAlterarBottomRight = () => {
    let valorBottomRight = mixBottomRight.value;
    elemento.style.borderBottomRightRadius = `${valorBottomRight}px`

}

const corRadius = () => {
    let cor = colorRadius.value;
    elemento.style.background = cor;
}

const corBorder = () => {
    let cor = colorBorder.value;
    elemento.style.borderColor = cor;
}


mixTopLeft.addEventListener('input', aoAlterarTopLeft)
mixTopRight.addEventListener('input', aoAlterarTopRight);
mixBottomLeft.addEventListener('input', aoAlterarBottomLeft);
mixBottomRight.addEventListener('input', aoAlterarBottomRight);
colorRadius.addEventListener('input', corRadius)
colorBorder.addEventListener('input', corBorder)
