numbers = document.querySelectorAll('.numbers.no')
var screen = document.getElementById("screen")

numbers.forEach((num,i) => {
    
    numbers[i].addEventListener('click',()=>{
        if('num' in localStorage){
            console.log(localStorage.getItem('num'))
            screen.innerHTML = screen.innerHTML + numbers[i].innerHTML 
            first = localStorage.setItem('num', screen.innerHTML)
            console.log(localStorage.getItem('num'))
        }
        else{
            console.log('lon')
            screen.innerHTML = numbers[i].innerHTML 
            first = localStorage.setItem('num', document.getElementById('screen').innerHTML)
        }
})
});

division = document.getElementById('division')
division.addEventListener('click', divide)

multi = document.getElementById('multi')
multi.addEventListener('click', multiblication)

add = document.getElementById('add')
add.addEventListener('click', adding)

minas = document.getElementById('minas')
minas.addEventListener('click', minus)

function divide(){
    screen.innerHTML = '/'
    if(!('num1' in localStorage)){
    localStorage.setItem('num1', localStorage.getItem('num'));
    screen.innerHTML = '/'
    localStorage.removeItem('num')
    console.log('num1 is not defined')
    }
    else{
        globalThis.opreation = '/'
        screen.innerHTML = ''
        
    }
}


function multiblication(){
    screen.innerHTML = '*'
    if(!('num1' in localStorage)){
    localStorage.setItem('num1', localStorage.getItem('num'));
    screen.innerHTML = '*'
    localStorage.removeItem('num')
    console.log('num1 is not defined')
    }
    else{
        globalThis.opreation = '*'
        screen.innerHTML = ''
        
    }
}


function adding(){
    screen.innerHTML = '+'
    if(!('num1' in localStorage)){
    localStorage.setItem('num1', localStorage.getItem('num'));
    screen.innerHTML = '/'
    localStorage.removeItem('num')
    console.log('num1 is not defined')
    }
    else{
        globalThis.opreation = '+'
        screen.innerHTML = ''
        
    }
}

function minus(){
    screen.innerHTML = '-'
    if(!('num1' in localStorage)){
    localStorage.setItem('num1', localStorage.getItem('num'));
    screen.innerHTML = '-'
    localStorage.removeItem('num')
    console.log('num1 is not defined')
    }
    else{
        globalThis.opreation = '-'
        screen.innerHTML = ''
        
    }
}
equal = document.getElementById('equal')
equal.addEventListener('click', answer)

function answer(){
    if('num' in localStorage && 'num1' in localStorage){
        if(window.opreation == '/'){
            console.log('in dividing')
            results = Number(localStorage.getItem('num1')) / Number(localStorage.getItem('num'))
            localStorage.setItem('results', results)
            screen.innerHTML = localStorage.getItem('results')
            localStorage.clear()
            window.opreation = 'none'
        }
        else if(window.opreation == '*'){
            console.log('in multi ')
            results = Number(localStorage.getItem('num1')) * Number(localStorage.getItem('num'))
            localStorage.setItem('results', results)
            screen.innerHTML = localStorage.getItem('results')
            localStorage.clear()
            window.opreation = 'none'
        }
        else if(window.opreation == '+'){
            console.log('in adding')
            results = Number(localStorage.getItem('num1')) + Number(localStorage.getItem('num'))
            localStorage.setItem('results', results)
            screen.innerHTML = localStorage.getItem('results')
            localStorage.clear()
            window.opreation = 'none'
        }
        else if(window.opreation == '-'){
            console.log('in minus')
            results = Number(localStorage.getItem('num1')) - Number(localStorage.getItem('num'))
            localStorage.setItem('results', results)
            screen.innerHTML = localStorage.getItem('results')
            localStorage.clear()
            window.opreation = 'none'
        }
    }
    else{
        localStorage.clear()
        screen.innerHTML = 'all clear'
    }
}
