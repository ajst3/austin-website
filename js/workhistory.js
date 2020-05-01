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

const showHon = () => {
  clearWorkHistory();
  x = document.getElementById('honeywelljob');
  x.style.display = 'block';
}

const showWorkInfo = () => {
  clearWorkHistory();
  x = document.getElementById('historyinfo');
  x.style.display = 'block';
}

const previous = document.getElementById('prevJob');
const next = document.getElementById('nextJob');
previous.onclick = showPrevJob;
next.onclick = showNextJob;
