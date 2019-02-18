const high = document.querySelectorAll('.high');
const low = document.querySelectorAll('.low');

if (high) {
  high.forEach(e => {
    e.addEventListener('click', () => {
      console.log(e.value);
    });
  });
}

if (low) {
  low.forEach(e => {
    e.addEventListener('click', () => {
      console.log(e.value);
    });
  });
}