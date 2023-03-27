let mixTopLeft = document.querySelector('#top-left');
let mixTopRight = document.querySelector('#top-right');
let mixBottomLeft = document.querySelector('#bottom-left');
let mixBottomRight = document.querySelector('#bottom-right');
let elemento = document.querySelector('.elemento');
let colorRadius = document.querySelector('.color-radius')
let colorBorder = document.querySelector('.color-border')
let propiedadesElemento = document.querySelector('.propiedades');
let btnCopiar =  document.querySelector('#btn-copiar');

const valoresBorda = {
    'borderTopL': 0,
    'borderTopR': 0,
    'borderBottomL': 0,
    'borderBottomR': 0
}

propiedadesElemento.innerHTML = `border-radius: ${valoresBorda.borderTopL}px,${valoresBorda.borderTopR}px,${valoresBorda.borderBottomL}px,${valoresBorda.borderBottomR}px`

const aoAlterarTopLeft = () => {
    let valorTopLeft = mixTopLeft.value;
    elemento.style.borderTopLeftRadius = `${valorTopLeft}px`;
    valoresBorda.borderTopL = elemento.style.borderTopLeftRadius;

    propiedadesElemento.innerHTML = `border-radius: ${valoresBorda.borderTopL},${valoresBorda.borderTopR},${valoresBorda.borderBottomL},${valoresBorda.borderBottomR}`
}

const aoAlterarTopRight = () => {
    let valorTopRight = mixTopRight.value;
    elemento.style.borderTopRightRadius = `${valorTopRight}px`
    valoresBorda.borderTopR = elemento.style.borderTopRightRadius;

    propiedadesElemento.innerHTML = `border-radius: ${valoresBorda.borderTopL},${valoresBorda.borderTopR},${valoresBorda.borderBottomL},${valoresBorda.borderBottomR}`
}

const aoAlterarBottomLeft = () => {
    let valorBottomLeft = mixBottomLeft.value;
    elemento.style.borderBottomLeftRadius = `${valorBottomLeft}px`

    valoresBorda.borderBottomL = elemento.style.borderBottomLeftRadius;

    propiedadesElemento.innerHTML = `border-radius: ${valoresBorda.borderTopL},${valoresBorda.borderTopR},${valoresBorda.borderBottomL},${valoresBorda.borderBottomR}`

}
const aoAlterarBottomRight = () => {
    let valorBottomRight = mixBottomRight.value;
    elemento.style.borderBottomRightRadius = `${valorBottomRight}px`

    valoresBorda.borderBottomR = elemento.style.borderBottomRightRadius;

    propiedadesElemento.innerHTML = `border-radius: ${valoresBorda.borderTopL},${valoresBorda.borderTopR},${valoresBorda.borderBottomL},${valoresBorda.borderBottomR}`
}

mixTopLeft.addEventListener('input', aoAlterarTopLeft)
mixTopRight.addEventListener('input', aoAlterarTopRight);
mixBottomLeft.addEventListener('input', aoAlterarBottomLeft);
mixBottomRight.addEventListener('input', aoAlterarBottomRight);

const corRadius = () => {
    let cor = colorRadius.value;
    elemento.style.background = cor;
}

const corBorder = () => {
    let cor = colorBorder.value;
    elemento.style.borderColor = cor;
}


colorRadius.addEventListener('input', corRadius)
colorBorder.addEventListener('input', corBorder)

btnCopiar.addEventListener('click', copiar)

function copiar () {
   propiedadesElemento.select()
   propiedadesElemento.execCommand("copy")
} 
