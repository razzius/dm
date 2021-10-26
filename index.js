const version = '0.1.0'
const messages = [{'from': '+13195943124', 'text': 'hi world'},{'from': '+13195943124', 'text':'Hello Library'}]
console.log(`dm. version ${version}\n`)
console.log('Unread messages\n')
for (let message of messages) {
  console.log(`From: ${message.from}`)
  console.log(`Message: ${message.text}\n`)
}
