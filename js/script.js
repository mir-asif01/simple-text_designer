const input = document.getElementById("inputField")
const boldBtn = document.getElementById("bold")
const italicBtn = document.getElementById("italic")
const underlineBtn = document.getElementById("underline")
const color = document.getElementById('color')

let boldActive = false
let italicActive = false
let underlineActive = false


boldBtn.addEventListener('click',()=>{

    boldActive = !boldActive
    if(boldActive === true){
        boldBtn.classList.add('active')
    }
    if(boldActive === false){
        boldBtn.classList.remove('active')
    }
})
italicBtn.addEventListener('click',()=>{
    italicActive = !italicActive
    if(italicActive === true){
        italicBtn.classList.add('active')
    }
    if(italicActive === false){
        italicBtn.classList.remove('active')
    }
})
underlineBtn.addEventListener('click',()=>{
    underlineActive = !underlineActive
    if(underlineActive === true){
        underlineBtn.classList.add('active')
    }
    if(underlineActive === false){
        underlineBtn.classList.remove('active')
    }
})

function changeStyle(){
    if(boldActive === true){
        input.classList.add('bold')
    }
    if(boldActive === false){
        input.classList.remove('bold')
    }
    if(italicActive === true){
        input.classList.add('italic')
    }
    if(italicActive === false){
        input.classList.remove('italic')
    }
    if(underlineActive === true){
        input.classList.add('underline')
    }
    if(underlineActive === false){
        input.classList.remove('underline')
    }
    let colorValue = color.value
    input.style.color = colorValue
}

document.getElementById('changeStyle').addEventListener('click',changeStyle)