const colorGrid = document.getElementById('color-grid')
const hexList = document.getElementById('hex-list')
const menuSection = document.getElementById('menu-section')

let colorsArray = [ '#000000', '#1A1919', '#343232', '#4F4A4A', '#6A6262']

function render() {
    colorsArray.forEach(e => {
        colorGrid.innerHTML += `<div class="colors" style="background-color:${e}"></div>`
        hexList.innerHTML += `<p class="color-tag">${e}</p>`
    }) 
}

function getColorScheme() {
    const pickedColor = document.getElementById('color-picker').value.slice(1);
    const modeSelected = document.getElementById('mode-selection').value
    
    colorsArray = []
    colorGrid.innerHTML = ""
    hexList.innerHTML = ""
    
    menuSection.classList.toggle('mobile-toggle')

    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor}&mode=${modeSelected}`)
        .then(res => res.json())
        .then(data => {
            data.colors.forEach(i => colorsArray.push(i.hex.value))
            render()  
        })       
}

document.getElementById('mobile-menu').addEventListener('click', () => {
        menuSection.classList.toggle('mobile-toggle')
})
   
document.getElementById('form-btn').addEventListener('click', getColorScheme)
render() 