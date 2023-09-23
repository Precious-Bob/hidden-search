'use strict';
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!search.contains(e.target) && input.value.trim() === '') {
    search.classList.remove('active');
  }
});

// "If the input bar is empty, clicking outside the search field will close it
