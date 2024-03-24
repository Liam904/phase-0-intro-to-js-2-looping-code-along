// Code your solutions in this file
function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  countDown(10);


  function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    console.log()
    }
    return messages;
  }
  
let messages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(messages);