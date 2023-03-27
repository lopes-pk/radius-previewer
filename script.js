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
    'borderTopL': `0px`,
    'borderTopR': `0px`,
    'borderBottomL': `0px`,
    'borderBottomR': `0px`
}

const aoAlterar = (input, propsBorder, borderSide) => {
    //altera o radius 
    let valorDoMix = input.value;
    elemento.style[propsBorder] = `${valorDoMix}px`;
    

    //atualiza as propiedades
    valoresBorda[borderSide] = elemento.style[propsBorder];
    propiedadesElemento.innerHTML = `border-radius: ${valoresBorda.borderTopL}, ${valoresBorda.borderTopR}, ${valoresBorda.borderBottomL}, ${valoresBorda.borderBottomR}`
}


mixTopLeft.addEventListener('input', () => aoAlterar(mixTopLeft,'borderTopLeftRadius','borderTopL'))
mixTopRight.addEventListener('input', () => aoAlterar(mixTopRight,'borderTopRightRadius', 'borderTopR'));
mixBottomLeft.addEventListener('input', () => aoAlterar(mixBottomLeft,'borderBottomLeftRadius','borderBottomL'));
mixBottomRight.addEventListener('input',() => aoAlterar(mixBottomRight,'borderBottomRightRadius', 'borderBottomR'));

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

btnCopiar.addEventListener('click', function(){
  navigator.clipboard.writeText(propiedadesElemento.innerHTML)

})

