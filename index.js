console.log('before fetch')

fetch('http://localhost:3000/results')
.then(res => console.log(res))
console.log('after fetch')


// console.log('one');
// console.log('two');
// function foo(){
//     console.log('three');
// }
// document.querySelector('button').addEventListener('click', foo);

// console.log('two') //1
// setTimeout(() => console.log('one'), 3000) //3
// console.log('three') //2

