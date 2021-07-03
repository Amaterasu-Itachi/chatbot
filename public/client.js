const socket = io();

let fullName;

let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message_area')

do{
    fullName = prompt('Please enter your fullName:')
}while(!fullName)

textarea.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        sendMessage(e.target.value)
    }
})

function sendMessage(message){
    let msg ={
        user:fullName,
        message:message.trim()
    }
    appendMessage(msg,'outgoing')
    textarea.value = ''
    socket.emit('message',msg)
}

function appendMessage(msg,type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className,'message')
    let markup = `
    <h4>${msg.user}</h4>
    <p> you typed "${msg.message}"</p>
    `
    mainDiv.innerHTML = markup

    messageArea.appendChild(mainDiv)
}




