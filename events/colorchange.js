const randomcolor=function(){
    let color='#'
    const hex='0123456789ABCDEF'
    for(let i=0;i<6;i++)
    {
      color+=hex[Math.floor(Math.random()*16)]
    }
return color
}
let st
document.querySelector('#start').addEventListener('click',function(){
    st=setInterval(changecolor,1000)
    function changecolor(){
      document.body.style.backgroundColor=randomcolor()
    }
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(st)
    st=null
})