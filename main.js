$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')

let n = 1
setInterval(() => {
  console.log(n)
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave').one('transitionend', (e) => {
    $(e.currentTarget).removeClass('leave').addClass('enter')
  })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
}, 2000)

function x(n) {
  if (n > 3) {
    n = n % 3
    if (n === 0) {
      n = 3
    }
  } //n始终为1、2、3
  return n
}






/*
setTimeout(() => {
  $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
}, 3000);

setTimeout(() => {
  $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
}, 6000);

setTimeout(() => {
  $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
}, 9000);

setTimeout(() => {
  $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
}, 12000);






























setTimeout(function(){
  $('.images>img:nth-child(1)').css({
    transform: 'translateX(-100%)'
  })

  $('.images>img:nth-child(2)').css({
    transform: 'translateX(-100%)'
  })

  $('.images>img:nth-child(1)').one('transitionend', function(e){
    $(e.currentTarget).addClass('right').css({transform: 'none'})
  })

},2000)

setTimeout(function(){
  $('.images>img:nth-child(2)').css({
    transform: 'translateX(-200%)'
  })
  
  $('.images>img:nth-child(3)').css({
    transform: 'translateX(-100%)'
  })

  $('.images>img:nth-child(2)').one('transitionend', function(e){
    $(e.currentTarget).addClass('right').css({transform: 'none'})
  })
},4000)

setTimeout(function(){
  $('.images>img:nth-child(3)').css({
    transform: 'translateX(-200%)'
  })
  
  $('.images>img:nth-child(1)').css({
    transform: 'translateX(-100%)'
  })

  $('.images>img:nth-child(3)').one('transitionend', function(e){
    $(e.currentTarget).addClass('right').css({transform: 'none'})
  })
},6000)

setTimeout(function(){
  $('.images>img:nth-child(1)').css({
    transform: 'translateX(-200%)'
  })

  $('.images>img:nth-child(2)').css({
    transform: 'translateX(-100%)'
  })

  $('.images>img:nth-child(1)').one('transitionend', function(e){
    $(e.currentTarget).addClass('right').css({transform: 'none'})
  })

},8000)
*/