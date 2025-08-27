// const promis=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })
// promis.then(function(){
//     console.log('Promise consumed');
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log(`task is completed`);
//         resolve()
//     },1000)
// }).then(function(){
//     console.log(`Promise consumed`);
// })
// const promis=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"atree",gmail:"atree7@gmail.com"})
//     },1000)
// })
// promis.then(function(user){
//     console.log(user);
// })
// const promis=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"atree",gmail:"atree3@gmail.com"})
//         }
//         else{
//             reject(`ERROR: Code can't be executed`)
//         }
//     },1000)
// })
// promis
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);    
// })


// async

// const promis=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"atreeverma",password:"12345"})
//         }
//         else{
//             reject(`ERROR: Code can't be executed`)
//         }
//     },1000)
// })
// async function consume(){
//     try{
//         const response=await promis
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// consume()

// async function getusers(){
//     try {
//         const response=await fetch('https://api.github.com/users/atreeverma')
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getusers()

// fetch('https://api.github.com/users/atreeverma')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })