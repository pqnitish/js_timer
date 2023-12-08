let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let isTimer = false;

function start() {
  isTimer = true;
  main();
}
function stop() {
  isTimer = false;
}
function reset() {
  isTimer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

function main() {
  if (isTimer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    let hrStr = hr;
    let minStr = min;
    let secStr = sec;
    let countStr = count;
    if (hr < 10) {
      hrStr = "0" + hrStr;
    }
    if (min < 10) {
      minStr = "0" + minStr;
    }
    if (sec < 10) {
      secStr = "0" + secStr;
    }
    if (count < 10) {
      countStr = "0" + countStr;
    }
    let hrCount = document.getElementById("hr");
    hrCount.innerHTML = hrStr;
    let minCount = document.getElementById("min");
    minCount.innerHTML = minStr;
    let secCount = document.getElementById("sec");
    secCount.innerHTML = secStr;
    let countSpan = document.getElementById("count");
    countSpan.innerHTML = countStr;
    setTimeout("main()", 10);
  }
}
