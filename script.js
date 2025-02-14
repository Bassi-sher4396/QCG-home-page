const image = document.querySelector('.img')
const body = document.body
const div = document.querySelector('.imgDiv')
const nav = document.querySelector('.navbar')
const newImg = document.createElement('img')
const section = document.querySelector('.nn')
const r =document.querySelectorAll('.r')
const left = document.querySelector('.left')
const right = document.querySelector('.right')
   newImg.src='https://i.pinimg.com/736x/c7/a8/b7/c7a8b7a573df5294a33496e0ac207427.jpg'
   newImg.style.height='80px'
   newImg.style.width='100px'
   newImg.style.borderRadius='70px'
image.addEventListener('click',function(){
     body.style.backgroundColor=' white'
   section.style.backgroundColor='white'
   nav.style.backgroundColor='rgb(171, 61, 147)'
   nav.style.color='white'
   body.style.color='black'
   left.style.color='white'
right.style.color='white'
   image.remove()
  
   div.appendChild(newImg)
})

newImg.addEventListener('click',function(){
     body.style.backgroundColor=' rgb(5, 5, 42)'
    section.style.backgroundColor=' rgba(30, 30, 103, 0.759)'
    body.style.color='white'
    nav.style.backgroundColor='black'
    nav.style.color='white'
    newImg.remove()
    div.appendChild(image)
})