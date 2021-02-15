function logMessageWithDate(message){
	let today = new Date();
	console.log(today.toLocaleString() + ' : ' + message );
}

function displayMessageFromArray(array){
	array.forEach(element => logMessageConsole(element));
}

function logMessageConsole(message){
  console.log(getMessageFormatted(message));
}

function getMessageFormatted(message){
  let messageFormatted = "Message : " + message;

  return messageFormatted;
}
