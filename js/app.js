gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


//если мы не на устройстве с точем, то анимация выполняется, а на телефонах и планшетах анимация отключатся
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  //делаем плавное исчезание элемента при скролле
  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '850',
      scrub: true //когда листаем обратно элемент исчезает, если убрать - исчезать не будет
    }
  });

  //анимируем боковые картинки
  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

  itemsLeft.forEach(item => {
    gsap.fromTo(item, { x: -100, opacity: 0 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-800',
        end: '-100',
        scrub: true
      }
    })
  });

  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

  itemsRight.forEach(item => {
    gsap.fromTo(item, { x: 100, opacity: 0 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-800',
        end: '-100',
        scrub: true
      }
    })
  });


}




//атрибуты для элементов, которые добавляют разные эффекты
//data-speed="0.6" скорость движения блока относительно скролла страницы
//data-lag="0.5" добавляет лёгкое отпружинивание блоку при скролле