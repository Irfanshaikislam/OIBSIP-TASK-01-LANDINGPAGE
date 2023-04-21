let celsuisInput=document.querySelector('#celsuis > input')
let farenheitInput=document.querySelector('#farenheit > input')
let btn=document.querySelector('.button button')
function roundNumber(number)
{
    return Math.round(number*100)/100
}
celsuisInput.addEventListener('input',function()
{
 let cTemp=parseFloat(celsuisInput.value)
 let fTemp=(cTemp*(9/5))+32
 farenheitInput.value=roundNumber(fTemp)
})
farenheitInput.addEventListener('input',function()
{
 let fTemp=parseFloat(farenheitInput.value)
 let cTemp=(fTemp-32)*(5/9)
 celsuisInput.value=roundNumber(cTemp)
})
btn.addEventListener('click',()=>{
    celsuisInput.value =  ""
    farenheitInput.value =  ""
})