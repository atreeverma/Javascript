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

// const myobject=[
//     {
//         language:'C++',
//         filename:'cpp',
//     },
//     {
//         language:'javascript',
//         filename:'js',
//     },
//     {
//         language:'ruby',
//         filename:'rb',
//     }
// ]
// myobject.forEach((item)=>{
//     console.log(item.filename);
// })

// const coding=['cpp','ruby','swift','javascript','java']
// const value=coding.forEach((item)=>{
//     return item
// })
// console.log(value);  // for.Each does not return any value


//filter//to return values we use filter//to filter out based on conditions
// const nums=[1,2,3,4,5,6,7,8,9]
// //const values=nums.filter((item)=>(item>4))
// const values=nums.filter((item)=>{
//     return item>4
// })
// console.log(values);
// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];
// let values=books.filter((bk)=>(bk.genre==='History'))
// //console.log(values);
// values=books.filter((bk)=> {return bk.publish>=2000})
// console.log(values);

//map to alter values in existing element
// let nums=[1,2,3,4,5,6,7,8,9]
// // nums=nums.map((item)=> item+10)
// // console.log(nums);

// const mynums=nums
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=> num>40)
// console.log(mynums);


//Accumulator
// const arr=[1,2,3]
// const values=arr.reduce(function (acc,curr){
//         return acc+curr
// },0)
//const values=arr.reduce((acc,curr)=> acc+curr,0)
//console.log(values);

// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);
