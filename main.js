// const promise = new Promise((resolve, reject) => {
//     throw new Error('Some error...')
//     setTimeout(() => {
//         if(true){
//             resolve('Promise successful')
//         }else{
//             reject()
//         }
//     }, 1000)
// })

// promise.then(data => console.log(data)).catch(err => console.log(err))

// fetch(API).then(data => data.json()).then(data2 => console.log(data2)).catch(err => console.log(err))

// async function foo() {
//     const data = await fetch(API).then(resp => resp.json()).then(resp2 => resp2.slice(0, 10))
//     console.log(data)
// }
// foo()


// Dont worked
// let fresp = fetch(API).then(data => data.json().slice(0,)).then((data2) => data2.slice(0, 10))
// console.log(fresp)


// let dat = fetch(API).then(data => data.text()).then(data => )

let API = 'https://jsonplaceholder.typicode.com/comments'


async function getResponse() {
    let response = await fetch(API)
    console.log(response.status)
}
getResponse()



























