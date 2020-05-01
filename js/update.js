// Script that updates the page
let toClear = ["aboutme", "workhistory", "home",
               "projects", "education"];

const clearMainBody = () => {
  // for each div clear
  var z;
  for(z of toClear) {
    console.log(z);
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
const showHome = () => {
  clearMainBody();
  x = document.getElementById('home');
  x.style.display = 'block';
}
const showProjects = () => {
  clearMainBody();
  x = document.getElementById('projects');
  x.style.display = 'block';
}
const showEducation = () => {
  clearMainBody();
  x = document.getElementById('education');
  x.style.display = 'block';
}

link = document.querySelector('button.home');
link.onclick = showHome;
link = document.querySelector('button.about');
link.onclick = showAbout;
link = document.querySelector('button.education');
link.onclick = showEducation;
link = document.querySelector('button.work');
link.onclick = showWork;
link = document.querySelector('button.projects');
link.onclick = showProjects;
