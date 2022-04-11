/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#ffffff',
    lineColor: '#ffffff',
    density: 11000,
    particleRadius: 7,
    curvedLines: false
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
