const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('mochaMonkeyTheme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'mochaMonkeyTheme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });
}
