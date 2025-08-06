// const arr=[1,2,3,4]
// for (const i of arr) {
//     console.log(i);
// }

// Maps

// const map=new Map()
// map.set('IN',"India")
// console.log(map);

// for (const key of map) {
//     console.log(key);
    
// }
// for (const [key,value] of map) {
//     console.log(key, ':-' ,value);
// }


//Objects
// const obj={
//     game:"dgsg",           /// objects are not iterateable using for of
//     ggg:"sdgv",              //maps are not iterteable using for in
// }
// for (const [key,value] of obj) {
//     console.log(key+':-'+ value);
// }

// const myobject={
//     cpp:"c++",
//     js:'javascript',
//     rb:'ruby'
// }
// for (const key in myobject) {
//     console.log(key +':-'+myobject[key]);
// }
// const arr=[1,2,3,4,5]
// for (const key in arr) {
//     console.log(key+':-'+arr[key]);
    
// }

// const map=new Map()
// map.set('IN',"India")
// for (const key in map) {  //maps are not iterteable using for in
//     console.log(key);
    
// }


//For each
// const coding=['cpp','ruby','swift','javascript','java']
// coding.forEach( function(item){
//         console.log(item);
// })
// coding.forEach((item)=>{
//     console.log(item);
    
// })
// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr) => {
//     console.log(item+' '+index+' '+arr);
    
// });