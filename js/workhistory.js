let jobs = ["none", "honeywelljob"];
let job_counter = 0;

const clearWorkHistory = () => {
  // for each div clear
  var z;
  for(z of jobs)
  {
    console.log(z);
    if(z == "none")
    {
      x = document.getElementById('historyinfo');
      x.style.display = 'none';
    }
    else {
      x = document.getElementById(z);
      x.style.display = 'none';
    }
  }
}

const showPrevJob = () => {
  if(job_counter != 0) {
    switch (jobs[--job_counter]) {
      case "none":
        showWorkInfo();
        break;
      case "honeywelljob":
        showHon();
        break;
      default:
    }
  }
}
const showNextJob = () => {
  console.log("showing next job")
  if(job_counter != jobs.length-1) {
    switch (jobs[++job_counter]) {
      case "none":
        showWorkInfo();
        break;
      case "honeywelljob":
        showHon();
        break;
      default:
    }
  }
  else {
    job_counter = 0;
    showWorkInfo();
  }
}

// creates the tools used table
const createToolTable = () => {
  // appends the table to the honeywelljob div
  var honeywelljob = document.getElementById('honeywelljob');
  var alreadyThere = document.getElementById('jobSkillTable')
  if(alreadyThere != null)
    return;
  // Create heading
  var heading = document.createElement('h3');
  heading.textContent = "Skills";
  honeywelljob.appendChild(heading);
  var table = document.createElement('table');
  table.id = "jobSkillTable";
  table.classList.add("skills_table");
  var headers = ["Languages Used", "Tools Used", "Libraries Used"];
  var languagesUsed = ["Python", "Java", "Javascript"];
  var toolsUsed = ["Perforce", "BitBucket", "ReviewBoard", "Jira"];
  var librariesUsed = ["sqlalchemy", "Selenium", "Appium"];

  var numRows = Math.max(languagesUsed.length,
                         toolsUsed.length,
                         librariesUsed.length) + 1;
  var numCols = headers.length;
  var x;
  for(x = 0; x < numRows; ++x) {
    var newRow = document.createElement('tr');
    var y;
    for(y = 0; y < numCols; ++y) {
      if(x == 0) {
        let newCol = document.createElement('th');
        newCol.textContent = headers[y];
        newRow.appendChild(newCol);
      }
      else {
        let newCol = document.createElement('td');
        var newText;
        switch (y) {
          case 0:
            newText = languagesUsed[x-1];
            break;
          case 1:
            newText = toolsUsed[x-1];
            break;
          case 2:
            newText = librariesUsed[x-1];
            break;
          default:
        }
        newCol.textContent = newText;
        newRow.appendChild(newCol);
      }
    }
    table.appendChild(newRow);
  }


  honeywelljob.appendChild(table);
}

const showHon = () => {
  clearWorkHistory();
  x = document.getElementById('honeywelljob');
  x.style.display = 'block';
  createToolTable();
}

const showWorkInfo = () => {
  clearWorkHistory();
  x = document.getElementById('historyinfo');
  x.style.display = 'block';
}

const createWorkButtons = () => {
  var buttonDiv = document.createElement('div');
  var center = document.createElement('center');
  var prevButton = document.createElement('button');
  prevButton.classList.add('work_button');
  prevButton.id = 'prevJob';
  prevButton.textContent = "Previous";
  prevButton.onclick = showPrevJob;
  var nextButton = document.createElement('button');
  nextButton.classList.add('work_button');
  nextButton.id = 'nextJob';
  nextButton.textContent = "Next";
  nextButton.onclick = showNextJob;
  center.appendChild(prevButton);
  center.appendChild(nextButton);
  buttonDiv.appendChild(center);
  var histdiv = document.getElementById('workhistory');
  histdiv.appendChild(buttonDiv);
}

createWorkButtons();
const previous = document.getElementById('prevJob');
const next = document.getElementById('nextJob');
previous.onclick = showPrevJob;
next.onclick = showNextJob;
