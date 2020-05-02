// Creates core elements

const createSidebar = () => {
  var sideDiv = document.createElement('div');
  sideDiv.classList.add('sidebar');
  var sList = document.createElement('ul');
  sList.classList.add('sidebar_list');
  var numButtons = 5;
  var x;
  for(x = 0; x < numButtons; ++x) {
    let lele = document.createElement('li');
    let newButton = document.createElement('button');
    switch (x) {
      case 0:
        newButton.id = "home";
        newButton.textContent = "Home";
        newButton.onclick = showHome;
        break;
      case 1:
        newButton.id = "about";
        newButton.textContent = "About";
        newButton.onclick = showAbout;
        break;
      case 2:
        newButton.id = "education";
        newButton.textContent = "Education";
        newButton.onclick = showEducation;
        break;
      case 3:
        newButton.id = "work";
        newButton.textContent = "Work History";
        newButton.onclick = showWork;
        break;
      case 4:
        newButton.id = "projects";
        newButton.textContent = "Projects";
        newButton.onclick = showProjects;
      default:
    }
    lele.appendChild(newButton);
    sList.appendChild(lele);
  }
  var lele = document.createElement('li');
  var link = document.createElement('a');
  link.href = "resume.pdf";
  link.target = "_blank";
  link.textContent = "Resume";
  lele.appendChild(link);
  sList.appendChild(lele);

  sideDiv.appendChild(sList);
  document.body.appendChild(sideDiv);
}

createSidebar();
