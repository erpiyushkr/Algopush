document.addEventListener('DOMContentLoaded', () => {
  fetch('../components/header.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });

  fetch('../components/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

  document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'search') {
      const query = e.target.value.toLowerCase();
      const posts = document.querySelectorAll('.post');

      posts.forEach(post => {
        const title = post.querySelector('h2').innerText.toLowerCase();
        const content = post.querySelector('p').innerText.toLowerCase();
        post.style.display = title.includes(query) || content.includes(query) ? 'block' : 'none';
      });
    }
  });
});
