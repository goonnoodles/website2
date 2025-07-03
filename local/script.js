
document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const query = document.getElementById('searchBar').value;
    if (query.startsWith('http://') || query.startsWith('https://')) {
      window.location.href = query;
    } else {
      const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
      window.location.href = url;
    }
  }
}
