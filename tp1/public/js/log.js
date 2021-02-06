
function logMessageFromList(messageList){
    messageList.forEach(elem => logMessage(elem.innerHTML));
}

function logMessage(message){
  console.log(message);
}
