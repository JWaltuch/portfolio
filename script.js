const links = document.getElementsByTagName('li');

for (let link of [...links]) {
  link.addEventListener('click', function(e) {
    for (let link of [...links]) {
      link.classList.remove('selected');
    }
    e.target.classList.add('selected');
  });
}
