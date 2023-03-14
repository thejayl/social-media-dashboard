const themeBtn = document.querySelector('.btn-theme');

localStorage.theme &&
  document.documentElement.setAttribute('data-theme', localStorage.theme);

themeBtn.addEventListener('click', () => {
  const theme =
    document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});
