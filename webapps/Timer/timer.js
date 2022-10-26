let time = 0;
      let countdownActive = false;
      var timer;
      
      function startTimer() {
        if (countdownActive && time == 0) {
          countdownActive = false;
        }
        if (!countdownActive) {
            time = 0;
            if (loadHours() && loadMinutes() && loadSeconds()) {
            //alert(time);
            countdownActive = true;
            runTimer();
          }
        } else if (countdownActive) {
          alert('Timer running. Click Reset to reset timer');
        }
      }

      function runTimer() {
        var ele = document.getElementById('timer');

        (function () {
          var sec = 0;
          timer = setInterval(()=>{
            let hours = parseInt(time/3600);
            let minutes = parseInt((time - (hours*3600))/60);
            let seconds = parseInt(time - (hours*3600) - (minutes*60));
            
            let formattedHours = hours.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })
            let formattedMinutes = minutes.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })
            let formattedSeconds = seconds.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false
            })

            ele.innerHTML = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
            if (time > 0) {
              time--;
            } else {
              clearInterval(timer);
              alert('Timer complete');
            }
          }, 1000)
        })()
      }

      function pauseTimer() {
        clearInterval(timer);
      }

      function resumeTimer() {
        if (countdownActive) {
          runTimer();
        }
      }

      function loadHours() {
        let hours = parseInt(document.getElementById('hours').value);
        if (document.getElementById('hours').value.length == 0) {
          hours = 0;
        }
        if (isNaN(hours)) {
          alert("Invalid Input");
          return false;
        } else {
          // Add to time
          time += (hours * 3600);
          return true;
        }
      }

      function loadMinutes() {
        let minutes = parseInt(document.getElementById('minutes').value);
        if (document.getElementById('minutes').value.length == 0) {
          minutes = 0;
        }
        if (isNaN(minutes)) {
          alert("Invalid Input");
          return false;
        } else {
          // Add to time
          time += (minutes * 60);
          return true;
        }
      }

      function loadSeconds() {
        let seconds = parseInt(document.getElementById('seconds').value);
        if (document.getElementById('seconds').value.length == 0) {
          seconds = 0;
        }
        if (isNaN(seconds)) {
          alert("Invalid Input");
          return false;
        } else {
          // Add to time
          time += seconds;
          return true;
        }
      }