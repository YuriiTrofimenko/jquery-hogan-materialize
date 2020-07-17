/* const name = 'Yurii'

console.log('Hello ${name}!')
console.log("Hello ${name}!")
console.log(`Hello ${name}!`)

const user = {
  'name': 'SomeName',
  'password': '123456'
}

console.log(`UserName: ${user.name}; Password: ${user.password}`)

let user2 = {
  name: 'John',
  toString () {
    return this.name
  }
}

console.log(user2) */

// AJAX
// Asyncronous Javascript And XML
// const info = 
// info.url = 'https://www.itbox.ua/api/v1/categories/Holodilniki-c7874/view=table;filter=1-00010000000'
// info.method = 'GET'
fetch('https://www.itbox.ua/api/v1/categories/Holodilniki-c7874/view=table;filter=1-00010000000')
  .then((response) => {
    console.log(response)
  })