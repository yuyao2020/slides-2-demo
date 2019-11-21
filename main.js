let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0
makeFakeSlides()
$slides.css({
  transform: 'translateX(-666px)'
})
bindEvents()
$(next).on('click', function () {
  goToSlides(current + 1)
})
$(previours).on('click', function () {
  goToSlides(current - 1)
})
/*自动播放，有bug，但是我不知道怎么改。
let timer = setInterval(function(){
  goToSlides(current + 1)
},2000)
$('.container').on('mouseenter', function(){
  window.clearInterval(timer)
}).on('mouseleave', function(){
  timer = setInterval(function(){
    goToSlides(current + 1)
  },2000)
})
*/
function bindEvents() {
  $('#buttonWrapper').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let index = $button.index()
    goToSlides(index)
  })
}

function goToSlides(index) {
  if(index > $buttons.length - 1){
    index = 0
  }else if(index < 0) 
  {
    index = $buttons.length - 1
  }

  if (current === $buttons.length - 1 && index === 0) {
    //从最后一张到第一张
    $slides.css({
        transform: `translateX(${-($buttons.length + 1) * 666}px)`
      })
      .one('transitionend', function () {
        $slides.hide().offset()
        $slides.css({
          transform: `translateX(${-(index + 1) * 666}px)`
        }).show()
      })
  } else if (current === 0 && index === $buttons.length - 1) {
    //从第一张到最后一张
    $slides.css({
        transform: `translateX(0px)`
      })
      .one('transitionend', function () {
        $slides.hide().offset()
        $slides.css({
          transform: `translateX(${-(index + 1) * 666}px)`
        }).show()
      })
  } else {
    $slides.css({
      transform: `translateX(${- (index + 1) * 666}px)`
    })
  }
  current = index
}

function bindEvent() {
  $buttons.eq(0).on('click', function () {
    if (current == 2) {
      console.log('从最后一张到第一张')
      $slides.css({
          transform: 'translateX(-2664px)'
        })
        .one('transitionend', function () {
          $slides.hide()
            .offset()
          $slides.css({
              transform: 'translateX(-666px)'
            })
            .show()
        })
    } else {
      $slides.css({
        transform: 'translateX(-666px)'
      })
    }
    current = 0
  })
  $buttons.eq(1).on('click', function () {
    $slides.css({
      transform: 'translateX(-1332px)'
    })
    current = 1
  })
  $buttons.eq(2).on('click', function () {
    if (current == 0) {
      console.log('从第一张到最后一张')
      $slides.css({
          transform: 'translateX(0px)'
        })
        .one('transitionend', function () {
          $slides.hide()
            .offset()
          $slides.css({
              transform: 'translateX(-1998px)'
            })
            .show()
        })
    } else {
      $slides.css({
        transform: 'translateX(-1998px)'
      })
    }
    current = 2
  })
}


function makeFakeSlides() {
  let $firstCopy = $images.eq(0).clone(true)
  let $lastCopy = $images.eq($images.length - 1).clone(true)
  $slides.append($firstCopy)
  $slides.prepend($lastCopy)
}