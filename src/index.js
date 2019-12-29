const {getCurrentmmddhh} = require('./utils')

const { sendMail } = require('./library_send_email');

console.log("je vais envoyer 1 email")
sendMail(`bac plein ${getCurrentmmddhh()}`)

// const myVariable = {
//     bob: 123,
//     george: 'une phrase'
// }

// // const { bob } = myVariable;

// console.log(bob);
