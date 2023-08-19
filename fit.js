alert('welcome to my page')



anime({
  targets: '.autoplay-true',
  translateX: 250,
  autoplay: true,
  easing: 'easeInOutSine'
});

anime({
  targets: '.autoplay-false',
  translateX: 250,
  autoplay: false,
  easing: 'easeInOutSine'
});