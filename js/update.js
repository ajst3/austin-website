// Script that updates the page
toClear = ["aboutme", "workhistory"];
const clearMainBody = () => {
  // for each div clear
  var z;
  for(z of toClear) {
    console.log(z)
    x = document.getElementById(z);
    x.style.display = 'none';
  }
}
const showAbout = () => {
  clearMainBody();
  x = document.getElementById('aboutme');
  x.style.display = 'block';
}
const showWork = () => {
  clearMainBody();
  x = document.getElementById('workhistory');
  x.style.display = 'block';
}

link = document.querySelector('button.about');
link.onclick = showAbout;
link = document.querySelector('button.work');
link.onclick = showWork;
